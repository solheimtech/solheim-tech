import Link from 'next/link';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-black bg-opacity-50 w-full">
      <h2 className="text-white text-[2rem] sm:text-[3rem] font-bold mb-6">{title}</h2>
      <p className="text-white text-md font-light mb-8 text-center max-w-2xl px-4">
        {description}
      </p>
      <Link href={buttonLink} className="px-6 py-3 rounded-lg text-black hover:border-2 bg-white border-2 border-white hover:bg-black hover:text-white hover:border-white transition duration-300">
        {buttonText}
      </Link>
    </div>
  );
};

export default CallToAction;
