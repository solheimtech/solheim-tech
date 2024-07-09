"use client";

import React, { useState, useEffect } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { GoXCircle } from "react-icons/go";
import dotenv from 'dotenv';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const requiredFields = form.querySelectorAll("[required]") as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
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
        message,
        'g-recaptcha-response': recaptchaToken
      };

      console.log('Form Data from page.tsx:', formData);
      try {
        const response = await fetch('/api/submit-contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cookie': document.cookie // Include cookies in the request
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('Solheim Technologies has received!');
          setIsSuccess(true);
        } else if (response.status === 404) {
          setStatus('Form submission endpoint not found (404).');
          setIsSuccess(false);
        } else {
          const errorData = await response.json();
          console.error('Error response:', errorData);
          setStatus('Failed to submit the form.');
          setIsSuccess(false);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('Failed to submit the form.');
        setIsSuccess(false);
      }
    } else {
      console.error('reCAPTCHA not loaded');
      setStatus('Failed to load reCAPTCHA.');
      setIsSuccess(false);
      return;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 text-white pt-[8rem] lg:pt-[0rem]">
      <h1 className="text-center text-[2.5rem] sm:text-[5rem] font-bold mt-8 mb-[6rem]">Contact Us</h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-start">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 mt-16 md:mt-[8rem]">
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">Feel free to reach out to us through any of the following methods:</p>
          <ul className="space-y-2">
            <li>
              <strong>Address:</strong> <a href="https://www.google.com/maps/search/?api=1&query=1819+E+Southern+Ave+Ste+D-10+Mesa+AZ+85204" className="text-white hover:underline">1819 E. Southern Ave. Ste D-10, Mesa, AZ 85204</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+14808645117" className="text-white hover:underline">(480) 864-5117</a>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:support@solheimtech.com" className="text-white hover:underline">support@solheimtech.com</a>
            </li>
            <li>
              <strong>Business Hours:</strong> Mon - Fri, 8:00 AM - 5:00 PM
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-10 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-black">Get in Touch</h2>
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
                <label htmlFor="email" className="block text-sm font-medium text-black">Email Address <span className="text-red-500">*</span></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required onBlur={handleBlur} />
                <p className="text-red-500 text-sm mt-1"></p>
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="phone" className="block text-sm font-medium text-black">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required onBlur={handleBlur} />
                <p className="text-red-500 text-sm mt-1"></p>
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="company" className="block text-sm font-medium text-black">Company Name</label>
              <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} id="company" name="company" className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" onBlur={handleBlur} />
              <p className="text-red-500 text-sm mt-1 hidden"></p>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black">Message <span className="text-red-500">*</span></label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} name="message" rows={4} className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required onBlur={handleBlur}></textarea>
              <p className="text-red-500 text-sm mt-1"></p>
            </div>
            
            <div>
              <button type="submit" className="w-full inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-black bg-white border-black border hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                Send Message
              </button>
            </div>
            {status && status !== '' && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded shadow-lg text-black">
                  <div className="flex items-center">
                    {isSuccess ? (
                      <CiCircleCheck className="w-6 h-6 text-green-500" />
                    ) : (
                      <GoXCircle className="w-6 h-6 text-red-500" />
                    )}
                    <p className="ml-2">{status}</p>
                  </div>
                  <button
                    onClick={() => setStatus('')}
                    className="mt-4 px-4 py-2 text-black bg-white border-black border hover:bg-black hover:text-white rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;