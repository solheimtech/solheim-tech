import Articles from "@/app/components/Articles";

export const metadata = {
  title: "Articles | Solheim Technologies",
  description: "Read the latest articles from Solheim Technologies.",
  openGraph: {
    title: "Articles | Solheim Technologies",
    description: "Read the latest articles from Solheim Technologies.",
    url: 'https://solheimtech.com/articles',
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

export default function ArticlesPage() {
  return (
    <>
      <Articles />
    </>
  );
}
