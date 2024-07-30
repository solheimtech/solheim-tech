import ProjectEstimateForm from "@/app/components/ProjectEstimateForm";

export const metadata = {
  title: "Project Estimate | Solheim Technologies",
  description: "Get a project estimate from Solheim Technologies.",
  openGraph: {
    title: "Project Estimate | Solheim Technologies",
    description: "Get a project estimate from Solheim Technologies.",
    url: 'https://solheimtech.com/project-estimate',
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

const ContactPage = () => {

  return (
    <>
      <ProjectEstimateForm />
    </>
  );
};

export default ContactPage;