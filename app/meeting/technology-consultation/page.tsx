import Link from "next/link";

export const metadata = {
  title: "Technology Consultation | Solheim Technologies",
  description: "Schedule a technology consultation with Solheim Technologies.",
  openGraph: {
    title: "Technology Consultation | Solheim Technologies",
    description: "Schedule a technology consultation with Solheim Technologies.",
    url: 'https://solheimtech.com/meeting/technology-consultation',
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
    <div className="container mx-auto py-12 pt-16 md:pt-16 sm:pt-16">
      <h1 className="text-[2rem] sm:text-[3rem] pt-16 md:pt-16 sm:pt-16 md:text-[4rem] lg:text-[4rem] font-bold text-white text-center mb-6">Technology Consultation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center p-6 border border-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Remote Technology Consultation</h2>
          <Link href="/meeting/technology-consultation/remote" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black">Book Now</Link>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border border-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">In Person Technology Consultation</h2>
          <Link href="/meeting/technology-consultation/in-person" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black">Book Now</Link>
        </div>
      </div>
    </div>
  );
}
