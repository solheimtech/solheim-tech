import React from 'react';

export const metadata = {
  title: "Website Accessibility Statement | Solheim Technologies",
  description: "Read the website accessibility statement for Solheim Technologies.",
  openGraph: {
    title: "Website Accessibility Statement | Solheim Technologies",
    description: "Read the website accessibility statement for Solheim Technologies.",
    url: 'https://solheimtech.com/website-accessibility-statement',
    images: [
      {
        url: 'https://solheimtech.com/assets/images/ST-Icon.jpg',
        width: 600,
        height: 600,
        alt: 'Solheim Technologies Logo',
      },
    ],
  },
};

const WebsiteAccessibilityStatementPage = () => {
  return (
    <div className='text-white p-6 max-w-4xl mx-auto pt-[8rem] lg:pt-[2rem]'>
      <h1 className='text-3xl font-bold mb-4'>Website Accessibility Statement for Solheim Technologies</h1>
      
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Commitment to Accessibility</h2>
        <p className='mb-4'>
          Solheim Technologies is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
        </p>
      </section>
      
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Measures to Support Accessibility</h2>
        <p className='mb-4'>
          Solheim Technologies takes the following measures to ensure the accessibility of our website:
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>Include accessibility as part of our mission statement.</li>
          <li>Integrate accessibility into our procurement practices.</li>
          <li>Appoint an accessibility coordinator and/or ombudsman.</li>
          <li>Provide continual accessibility training for our staff.</li>
          <li>Conduct regular accessibility reviews of our website.</li>
        </ul>
      </section>
      
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Conformance Status</h2>
        <p className='mb-4'>
          We strive to adhere as closely as possible to the Web Content Accessibility Guidelines (WCAG) 2.1, level AA criteria. These guidelines not only help make web content more accessible to users with disabilities but also provide a better user experience for all.
        </p>
      </section>
      
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Feedback</h2>
        <p className='mb-4'>
          We welcome your feedback on the accessibility of the Solheim Technologies website. Please let us know if you encounter any accessibility barriers:
        </p>
        <p className='mb-4'>
          Email: <a href='mailto:accessibility@solheimtech.com' className='text-blue-500'>accessibility@solheimtech.com</a>
        </p>
      </section>
      
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Limitations and Alternatives</h2>
        <p className='mb-4'>
          Despite our best efforts to ensure the accessibility of our website, there may be some limitations. Below is a description of known limitations and potential solutions. Please contact us if you observe an issue not listed below:
        </p>
        <p className='mb-4'>
          <strong>Known limitations:</strong> We are aware that some areas on our website may not be fully accessible, such as older PDF files. We are actively working to achieve full compliance.
        </p>
        <p className='mb-4'>
          <strong>Alternative methods:</strong> If you are experiencing difficulty with any content on our website or require assistance with any part of our site, please contact us at <a href='mailto:accessibility@solheimtech.com' className='text-blue-500'>accessibility@solheimtech.com</a> and we will be happy to assist.
        </p>
      </section>
      
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Assessment Approach</h2>
        <p className='mb-4'>
          Solheim Technologies assessed the accessibility of our website by the following approaches:
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>Self-evaluation</li>
          <li>External evaluation</li>
        </ul>
      </section>
      
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Formal Complaints</h2>
        <p className='mb-4'>
          We aim to respond to accessibility feedback within 5 business days and to propose a solution within 10 business days. If you have not received a response from us within this timeframe or are unsatisfied with our response, you are entitled to escalate your complaint.
        </p>
        <p className='mb-4'>
          To file a formal complaint, please contact us at <a href='mailto:accessibility@solheimtech.com' className='text-blue-500'>accessibility@solheimtech.com</a>.
        </p>
      </section>
    </div>
  );
};

export default WebsiteAccessibilityStatementPage;
