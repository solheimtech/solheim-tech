import ContactForm from "@/app/components/ContactForm";

export const metadata = {
  title: "Contact Us | Solheim Technologies",
  description: "Get in touch with Solheim Technologies.",
  openGraph: {
    title: "Contact Us | Solheim Technologies",
    description: "Get in touch with Solheim Technologies.",
    url: 'https://solheimtech.com/contact',
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

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
