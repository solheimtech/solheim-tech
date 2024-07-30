import Membership from "../components/Membership";

export const metadata = {
  title: "Membership Plans | Solheim Technologies",
  description: "Explore our membership plans and choose the best one for your needs.",
  openGraph: {
    title: "Membership Plans | Solheim Technologies",
    description: "Explore our membership plans and choose the best one for your needs.",
    url: 'https://solheimtech.com/membership',
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

export default function MembershipPage() {
  return <Membership />;
}
