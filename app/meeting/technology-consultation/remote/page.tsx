import Meetings from "../../../components/Meetings";

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

export default function Meeting() {
  return <Meetings title="Remote Technology Consultation" dataSrc="https://meetings.hubspot.com/dsolheim/technology-consultation?embed=true" />;
}
