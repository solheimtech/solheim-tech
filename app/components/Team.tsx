"use client";

import React from "react";
import Card from "@/app/components/ui/team-card";

const OurTeam = () => {
    const users = [
      {
        name: "David Solheim",
        image: "https://solheimtech.com/wp-content/uploads/2022/11/David.jpg",
        role: "CEO, Digital Solutions Engineer",
        description: "David built his first computer when he was eight years old. He built his first website at fourteen. In 2012 he founded Solheim Technologies with the aim of helping small businesses get the websites they need to thrive in the digital age. Since then he has built numerous websites, provided website hosting services, and provided peace of mind for small business owners by managing their websites. Recently he wanted to promote Solheim Technologies services in the other areas of his expertise and provide computer and technology support to both small businesses and residential clients.",
        facebook: "https://www.facebook.com/davidtsolheim",
        twitter: "https://x.com/davidtsolheim",
        linkedin: "https://www.linkedin.com/in/dsolheim/"
      },
      {
        name: "Angela Solheim",
        image: "/assets/images/Angela_Solheim_2020.JPG",
        role: "CFO, Digital Solutions Engineer",
        description: "Angela has been a part of Solheim Technologies from the very beginning, building the company alongside David. Drawing on years of experience, she supports clients by managing website updates and addressing their digital needs with care and precision. In 2020, Angela expanded her responsibilities, stepping into the role of Chief Financial Officer. She now oversees the company’s financial operations, ensuring stability and growth while continuing to provide excellent support to clients. Angela’s combined expertise in financial management and client services plays a vital role in the success of Solheim Technologies.",
        facebook: "https://www.facebook.com/angela.solheim2012",
        twitter: "https://x.com/solheimtech",
        linkedin: "https://www.linkedin.com/in/angela-solheim-8aa692a5/"
      },
      {
        name: "Soren Reber",
        image: "https://solheimtech.com/wp-content/uploads/2022/11/Soren.jpg",
        role: "CTO, Digital Solutions Engineer",
        description: "Soren has always loved computers but didn't discover his love for working on them until high school where he took classes refurbishing donated computers. While not initially following up on that passion, he eventually got a degree where he learned more about computer support, network design and management, and even a little coding. As a technology specialist he is helping with clients computer and website needs.",
        facebook: "https://www.facebook.com/solheimtech",
        twitter: "https://x.com/SolheimTechDSE1",
        linkedin: "https://www.linkedin.com/in/soren-r-bb8r2d2/"
      },
    {
      name: "Emery Tate",
      image: "/assets/images/Emery_Tatex600.jpeg",
      role: "Digital Solutions Engineer",
      description: "Emery brings his passion for technology and problem-solving to the Solheim Technologies team. With a background in computer systems and technical customer service, he helps build software solutions that help clients thrive.",
      facebook: "https://www.facebook.com/solheimtech",
      twitter: "https://x.com/solheimtech", 
      linkedin: "https://www.linkedin.com/company/solheim-technologies/"
    }
    ];
  
    return (
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col items-center justify-start mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Meet the Team
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {users.map((user, index) => (
            <div 
              key={index} 
              className="w-full flex justify-center"
            >
              <Card 
                user={user}
                socialLinkProps={{ target: "_blank", rel: "noopener noreferrer" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurTeam;