"use client";

import Image from 'next/image';
import React from 'react';

interface Partnership {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
  width: number;
  height: number;
  className?: string;
}

const partnerships: Partnership[] = [
  {
    id: 1,
    title: "Kinsta",
    link: "https://kinsta.com/",
    imageUrl: "https://solheimtech.com/wp-content/uploads/2024/02/kinsta-partner-vertical-black.png",
    width: 250,
    height: 200,
    className: "rounded-lg",
  },
  {
    id: 2,
    title: "SEMRush Agency Partner",
    link: "https://semrush.com/",
    imageUrl: "https://solheimtech.com/wp-content/uploads/2023/10/SEMRush-Agency-Partner.png",
    width: 200,
    height: 200,
  },
  {
    id: 3,
    title: "Malwarebytes",
    link: "https://malwarebytes.com/",
    imageUrl: "https://solheimtech.com/wp-content/uploads/2022/10/Solheim-Technologies-Malwarebytes-Partner.jpg",
    width: 200,
    height: 200,
    className: "rounded-lg",
  },
  {
    id: 4,
    title: "RemotePC",
    link: "https://app.remotepc.com/rpcnew/signup/pref/solheimtech",
    imageUrl: "https://solheimtech.com/wp-content/uploads/2022/10/Solheim-Technologies-RemotePC-Authorized-Partner.png",
    width: 200,
    height: 200,
  },
  {
    id: 5,
    title: "Hotjar",
    link: "https://hotjar.com/invite/?key=partnerprogram&utm_layout=LP&pscd=invite.hotjar.com&ps_partner_key=ZGF2aWRzb2xoZWltMjAxMg&ps_xid=PAaC5YeLNajTwr&gsxid=PAaC5YeLNajTwr&gspk=ZGF2aWRzb2xoZWltMjAxMg", 
    imageUrl: "https://solheimtech.com/wp-content/uploads/2022/10/Hotjar-Partner-Badge.png",
    width: 300,
    height: 200,
    className: "rounded-lg",
  },
  {
    id: 6,
    title: "Accessibe",
    link: "https://accessibe.com/",
    imageUrl: "https://solheimtech.com/wp-content/uploads/2022/10/Solheim-Technologies-Accessibe-Partner.jpg",
    width: 250,
    height: 100,
    className: "rounded-lg bg-white px-4",
  },
  {
    id: 7,
    title: "Brightlocal",
    link: "https://brightlocal.com/",
    imageUrl: "https://solheimtech.com/wp-content/uploads/2022/10/Solheim-Technologies-Brightlocal-Partner.png",
    width: 250,
    height: 200,
    className: "rounded-lg",
  },
  {
    id: 8,
    title: "AnyDesk",
    link: "https://anydesk.com",
    imageUrl: "https://solheimtech.com/wp-content/uploads/2022/10/Solheim-Technologies-AnyDesk-Partner.png",
    width: 250,
    height: 200,
    className: "rounded-lg bg-white h-[110px]",
  },
  // Add more partnerships as needed
];

const Partnerships: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <p className='text-white text-[2rem] font-bold text-center pb-[4rem]'>Our Partnerships</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {partnerships.map((partner) => (
          <div key={partner.id} className="flex items-center justify-center mb-[5rem]">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <Image src={partner.imageUrl} alt={partner.title} className={`object-contain ${partner.className || ''}`} width={partner.width} height={partner.height}/>
            </a>
          </div>
        ))}
      </div>
      <p className='text-white text-[.8rem] text-center pt-[1rem] font-thin'>Links on the Partnership page may lead to sites where Solheim Technologies might receive commissions</p>
    </div>
  );
};
export default Partnerships;
