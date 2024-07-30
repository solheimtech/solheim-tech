import Meetings from "../../components/Meetings";

export const metadata = {
  title: "Free Consultation | Solheim Technologies",
  description: "Schedule a free consultation with Solheim Technologies.",
  openGraph: {
    title: "Free Consultation | Solheim Technologies",
    description: "Schedule a free consultation with Solheim Technologies.",
    url: 'https://solheimtech.com/meeting/free-consultation',
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
  return <Meetings title="Free Consultation" dataSrc="https://meetings.hubspot.com/dsolheim/free-consultation?embed=true" cssId="free-consultation" />;
}
