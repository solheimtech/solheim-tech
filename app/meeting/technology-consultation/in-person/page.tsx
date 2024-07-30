import Meetings from "../../../components/Meetings";

export const metadata = {
  title: "In Person Technology Consultation | Solheim Technologies",
  description: "Schedule an in-person technology consultation with Solheim Technologies.",
  openGraph: {
    title: "In Person Technology Consultation | Solheim Technologies",
    description: "Schedule an in-person technology consultation with Solheim Technologies.",
    url: 'https://solheimtech.com/meeting/technology-consultation/in-person',
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
  return <Meetings title="In Person Technology Consultation" dataSrc="https://meetings.hubspot.com/dsolheim/tech-consultation?embed=true" />;
}
