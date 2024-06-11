"use client";

import React, { useState } from "react";
import Card from "../../components/ui/team-card";

const OurTeam = () => {
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  const users = [
    {
      name: "David Solheim",
      image: "https://solheimtech.com/wp-content/uploads/2022/11/David.jpg",
      role: "Chief Executive Officer",
      description: "David built his first computer when he was eight years old. He built his first website at fourteen. In 2012 he founded Solheim Technologies with the aim of helping small businesses get the websites they need to thrive in the digital age. Since then he has built numerous websites, provided website hosting services, and provided peace of mind for small business owners by managing their websites. Recently he wanted to promote Solheim Technologies services in the other areas of his expertise and provide computer and technology support to both small businesses and residential clients.",
      facebook: "https://www.facebook.com/david.solheim.7",
      twitter: "https://twitter.com/david_solheim",
      linkedin: "https://www.linkedin.com/in/david-solheim-7b3b1b1b1/"
    },
    {
      name: "Angela Solheim",
      image: "https://solheimtech.com/wp-content/uploads/2022/11/Angela_Solheim-x-600.jpg",
      role: "Chief Financial Officer",
      description: "Angela has been a part of Solheim Technologies from the beginning when it was just her and David. Because of this she also has learned how to support clients technological needs. Over time as the company has grown, Angela has taken on a role that involves more and more financial responsibilities for the company.",
      facebook: "https://www.facebook.com/angela.solheim.7",
      twitter: "https://twitter.com/angela_solheim",
      linkedin: "https://www.linkedin.com/in/angela-solheim-7b3b1b1b1/"
    },
    {
      name: "Soren Reber",
      image: "https://solheimtech.com/wp-content/uploads/2022/11/Soren.jpg",
      role: "Head of Technology",
      description: "Soren has always loved computers but didn’t discover his love for working on them until high school where he took classes refurbishing donated computers. While not initially following up on that passion, he eventually got a degree where he learned more about computer support, network design and management, and even a little coding. As a technology specialist he is helping with clients computer and website needs.",
      facebook: "https://www.facebook.com/soren.reber.7",
      twitter: "https://twitter.com/soren_reber",
      linkedin: "https://www.linkedin.com/in/soren-reber-7b3b1b1b1/"
    },
    // Add more user objects here
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-start min-h-[4rem] pt-8 text-white pb-8">
        <h1 className="text-[2rem] font-bold">Meet the Team</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-8 overflow-x-auto p-4">
        {users.map((user, index) => (
          <div key={index} className="p-2">
            <Card user={user} expandedUser={expandedUser} onExpand={setExpandedUser} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;