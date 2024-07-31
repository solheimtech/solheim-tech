"use client";

import React, { useState, useEffect } from 'react';
import StatusSubmission from '@/app/components/ui/status-submission';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const ProjectEstimate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [companyDomain, setCompanyDomain] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [question, setQuestion] = useState<string[]>([]);
  const [budget, setBudget] = useState<string[]>([]);
  const [budgetError, setBudgetError] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [servicesError, setServicesError] = useState('');

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('reCAPTCHA script loaded');
      };
      document.body.appendChild(script);
    };
  
    loadRecaptcha();
  }, []);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target;
    const errorElement = field.nextElementSibling as HTMLElement;
    if (field.hasAttribute('required') && !field.value.trim()) {
      if (errorElement && field.previousElementSibling) {
        const labelText = (field.previousElementSibling as HTMLElement).textContent?.replace('*', '').trim();
        errorElement.textContent = `${labelText} is required.`;
        field.classList.add('focus:ring-red-500');
        field.classList.add('focus:border-red-500');
      }
    } else {
      if (errorElement) {
        errorElement.textContent = "";
        field.classList.remove('focus:ring-red-500');
        field.classList.remove('focus:border-red-500');
      }
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setServices(prevServices => 
      prevServices.includes(value) 
      ? prevServices.filter(s => s !== value) 
      : [...prevServices, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const requiredFields = form.querySelectorAll("[required]") as NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    let allFieldsValid = true;

    requiredFields.forEach((field) => {
      const errorElement = field.nextElementSibling as HTMLElement;
      if (!field.value.trim()) {
        allFieldsValid = false;
        if (errorElement && field.previousElementSibling) {
          const labelText = (field.previousElementSibling as HTMLElement).textContent?.replace('*', '').trim();
          errorElement.textContent = `${labelText} is required.`;
          field.classList.add('focus:ring-red-500');
          field.classList.add('focus:border-red-500');
        }
      } else {
        if (errorElement) {
          errorElement.textContent = "";
          field.classList.remove('focus:ring-red-500');
          field.classList.remove('focus:border-red-500');
        }
      }
    });

    if (budget.length === 0) {
      setBudgetError('At least one budget option must be selected.');
      allFieldsValid = false;
    } else {
      setBudgetError('');
    }

    if (services.length === 0) {
      setServicesError('At least one service must be selected.');
      allFieldsValid = false;
    } else {
      setServicesError('');
    }

    if (!allFieldsValid) {
      return;
    }

    if (typeof window.grecaptcha !== 'undefined') {
      const recaptchaToken = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' });

      const formData = {
        firstName,
        lastName,
        email,
        phone,
        company,
        companyDomain,
        budget: budget.join(', '),
        question: question.join(', '),
        services: services.join(', '),
        message,
        'g-recaptcha-response': recaptchaToken
      };

      console.log('Form Data from page.tsx:', formData);
      try {
        const response = await fetch('/api/submit-project-estimate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cookie': document.cookie // Include cookies in the request
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else if (response.status === 404) {
          setIsSuccess(false);
        } else if (response.status === 429) {
          setIsRateLimited(true);
          setIsSuccess(false);
        } else {
          const errorData = await response.json();
          console.error('Error response:', errorData);
          setIsSuccess(false);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSuccess(false);
      }
      setIsFormVisible(false);
    } else {
      console.error('reCAPTCHA not loaded');
      setIsSuccess(false);
      return;
    }
  };

  const handleClose = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setCompanyDomain('');
    setMessage('');
    setBudget([]);
    setQuestion([]);
    setServices([]);
    setIsFormVisible(true);
  };

  return (
    <div className="container mx-auto px-4 pt-[8rem] lg:pt-[0rem] py-8 md:px-6 text-white">
      <h1 className="text-center text-[2.5rem] sm:text-[5rem] font-bold mt-8 mb-4">Project Estimate</h1>
      <div className="flex justify-center">
        {isFormVisible ? (
          <div className="w-full md:w-1/2 bg-white p-10 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">Get a quote today!</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="first-name" className="block text-sm font-medium text-black">First Name <span className="text-red-500">*</span></label>                
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="first-name" name="first-name" className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required onBlur={handleBlur} />
                  <p className="text-red-500 text-sm mt-1"></p>
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="last-name" className="block text-sm font-medium text-black">Last Name <span className="text-red-500">*</span></label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} id="last-name" name="last-name" className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required onBlur={handleBlur} />
                  <p className="text-red-500 text-sm mt-1"></p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="block text-sm font-medium text-black">Best Contact Email <span className="text-red-500">*</span></label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required onBlur={handleBlur} />
                  <p className="text-red-500 text-sm mt-1"></p>
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="phone" className="block text-sm font-medium text-black">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => {
                      const input = e.target.value.replace(/\D/g, '');
                      let formattedPhone = input;
                      if (input.length > 3 && input.length <= 6) {
                        formattedPhone = `${input.slice(0, 3)}-${input.slice(3)}`;
                      } else if (input.length > 6) {
                        formattedPhone = `${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6, 10)}`;
                      }
                      setPhone(formattedPhone);
                    }} 
                    id="phone" 
                    name="phone" 
                    className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" 
                    required 
                  />
                  <p className="text-red-500 text-sm mt-1"></p>
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="company" className="block text-sm font-medium text-black">Company Name  <span className="text-red-500">*</span></label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} id="company" name="company" className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required onBlur={handleBlur} />
                <p className="text-red-500 text-sm mt-1"></p>
              </div>
              <div className="w-full">
                <label htmlFor="company-domain" className="block text-sm font-medium text-black">Company Name Domain</label>
                <input type="text" value={companyDomain} onChange={(e) => setCompanyDomain(e.target.value)} id="company-domain" name="company-domain" className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" onBlur={handleBlur} />
                <p className="text-red-500 text-sm mt-1 hidden"></p>
              </div>
              <div className="w-full">
                <label htmlFor="referral-source" className="block text-sm font-medium text-black">Starting Budget <span className="text-red-500">*</span></label>
                <select id="budget-range" name="budget-range" onChange={(e) => setBudget([e.target.value])} className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" onBlur={handleBlur} required>
                  <option value="">Select a budget range</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-20000">$10,000 - $20,000</option>
                  <option value="20000-50000">$20,000 - $50,000</option>
                  <option value="50000-100000">$50,000 - $100,000</option>
                  <option value="100000+">$100,000+</option>
                </select>
                <p className="text-red-500 text-sm mt-1"></p>
              </div>
              <div className="w-full">
                <label htmlFor="referral-source" className="block text-sm font-medium text-black">How did you hear about us? <span className="text-red-500">*</span></label>
                <select id="referral-source" name="referral-source" onChange={(e) => setQuestion([e.target.value])} className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" onBlur={handleBlur} required >
                  <option value="">Select an option</option>
                  <option value="google">Google</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend">Friend/Family</option>
                  <option value="other">Other</option>
                </select>
                <p className="text-red-500 text-sm mt-1 hidden"></p>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-black">Requested Services <span className="text-red-500">*</span></label>
                <p className='text-xs text-black'>How can we help your company succeed?</p>
                <div className="mt-1">
                  <div className="flex items-center">
                    <input type="checkbox" id="service1" name="service" value="wordpress-website-design" className="text-black" onChange={handleCheckboxChange} />
                    <label htmlFor="service1" className="ml-2 block text-sm text-black">WordPress Website Design & Build</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="service2" name="service" value="wordpress-hosting" className="text-black" onChange={handleCheckboxChange} />
                    <label htmlFor="service2" className="ml-2 block text-sm text-black">WordPress Hosting</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="service3" name="service" value="wordpress-management" className="text-black" onChange={handleCheckboxChange} />
                    <label htmlFor="service3" className="ml-2 block text-sm text-black">WordPress Website Management</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="service4" name="service" value="local-seo-pro" className="text-black" onChange={handleCheckboxChange} />
                    <label htmlFor="service4" className="ml-2 block text-sm text-black">Local SEO Pro</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="service5" name="service" value="seo" className="text-black" onChange={handleCheckboxChange} />
                    <label htmlFor="service5" className="ml-2 block text-sm text-black">Search Engine Optimization (SEO)</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="service6" name="service" value="business-strategy" className="text-black" onChange={handleCheckboxChange} />
                    <label htmlFor="service6" className="ml-2 block text-sm text-black">Business Strategy</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="service7" name="service" value="social-management" className="text-black" onChange={handleCheckboxChange} />
                    <label htmlFor="service7" className="ml-2 block text-sm text-black">Social Media Management</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="service8" name="service" value="other" className="text-black" onChange={handleCheckboxChange} />
                    <label htmlFor="service8" className="ml-2 block text-sm text-black">Other</label>
                  </div>
                </div>
                <p className="text-red-500 text-sm mt-1">{servicesError}</p>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black">Project Details <span className="text-red-500">*</span></label>
                <p className='text-xs text-black'>Please describe your project in as much detail as possible.</p>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} name="message" rows={4} className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required onBlur={handleBlur}></textarea>
                <p className="text-red-500 text-sm mt-1"></p>
              </div>
              
              <div>
                <button type="submit" className="w-full inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-black bg-white border-black border hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        ) : (
          <StatusSubmission isSuccess={isSuccess} onClose={handleClose} isRateLimited={isRateLimited}/>
        )}
      </div>
    </div>
  );
};

export default ProjectEstimate;