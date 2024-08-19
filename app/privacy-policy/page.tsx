import React from 'react';

export const metadata = {
  title: "Privacy Policy | Solheim Technologies",
  description: "Read the privacy policy of Solheim Technologies.",
  openGraph: {
    title: "Privacy Policy | Solheim Technologies",
    description: "Read the privacy policy of Solheim Technologies.",
    url: 'https://solheimtech.com/privacy-policy',
    images: [
      {
        url: 'https://solheim.tech/assets/images/MetaBanner.jpg',
        width: 600,
        height: 600,
        alt: 'Solheim Technologies Logo',
      },
    ],
  },
};

const PrivacyPolicyPage = () => {
  return (
    <div className='text-white p-6 max-w-4xl mx-auto pt-[8rem] lg:pt-[2rem]'>
      <h1 className='text-3xl font-bold mb-4'>Privacy Policy</h1>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION?</h2>
        <p className='mb-4'>
          When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address. When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system. With your permission, we may send you emails about our store, new products and other updates.
        </p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>SECTION 2 – CONSENT</h2>
        <p className='mb-4'>
          How do you get my consent? When you provide us with personal information to complete a transaction, download special content, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
        </p>
        <p className='mb-4'>
          How do I withdraw my consent? If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at <a href='mailto:support@solheimtech.com' className='text-blue-500'>support@solheimtech.com</a> or mailing us at: Solheim Technologies 733 E. Angeline Ave., San Tan Valley, AZ 85140.
        </p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>SECTION 3 – DISCLOSURE</h2>
        <p className='mb-4'>
          We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
        </p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>SECTION 4 – THIRD-PARTY SERVICES</h2>
        <p className='mb-4'>
          In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
        </p>
        <p className='mb-4'>
          In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
        </p>
        <p className='mb-4'>
          As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.
        </p>
        <p className='mb-4'>
          Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
        </p>
        <p className='mb-4'>
          <strong>Links:</strong> When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
        </p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>SECTION 5 – SECURITY</h2>
        <p className='mb-4'>
          To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed. If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.
        </p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>SECTION 6 – COOKIES</h2>
        <p className='mb-4'>
          We use cookies in order to monitor data about our potential customers. You can remove cookies manually from your computer, but it may change how the website behaves for you.
        </p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>SECTION 7 – AGE OF CONSENT</h2>
        <p className='mb-4'>
          By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
        </p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>SECTION 8 – CHANGES TO THIS PRIVACY POLICY</h2>
        <p className='mb-4'>
          We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
        </p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>QUESTIONS AND CONTACT INFORMATION</h2>
        <p className='mb-4'>
          If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <a href='mailto:support@solheimtech.com' className='text-blue-500'>support@solheimtech.com</a> or by mail at Solheim Technologies. Re: Privacy Compliance Officer 733 E. Angeline Ave., San Tan Valley, AZ 85140.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
