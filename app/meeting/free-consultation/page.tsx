import Meetings from "../../components/Meetings";

export const metadata = {
  title: "Schedule Your Free Consultation | Solheim Technologies",
  description: "Schedule a free consultation with Solheim Technologies.",
  openGraph: {
    title: "Schedule Your Free Consultation | Solheim Technologies",
    description: "Schedule a free consultation with Solheim Technologies.",
    url: 'https://solheimtech.com/meeting/free-consultation',
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

export default function Meeting() {
  return (
    <div className="container mx-auto px-12 sm:px-12 lg:px-12 pt-16 sm:pt-16">
      <Meetings
        dataSrc="https://meetings.hubspot.com/dsolheim/free-consultation?embed=true"
        cssId="free-consultation"
        title="Schedule Your Free Consultation"
      />
    </div>
  );
}
