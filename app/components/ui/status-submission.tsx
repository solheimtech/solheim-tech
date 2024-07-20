"use client";
import React, { useState } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { GoXCircle } from "react-icons/go";
import Image from 'next/image';

interface StatusSubmissionProps {
  isSuccess: boolean;
  onClose: () => void;
  isRateLimited?: boolean;
}

const successGifs = [
  "https://media.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif",
  "https://media.giphy.com/media/S9i8jJxTvAKVHVMvvW/giphy.gif",
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"
];

const failureGifs = [
  "https://media.giphy.com/media/hyyV7pnbE0FqLNBAzs/giphy.gif",
  "https://media.giphy.com/media/6gLyE15StAs3C/giphy.gif",
  "https://media.giphy.com/media/Ty9Sg8oHghPWg/giphy.gif"
];

const rateLimitGifs = [
  "https://media.giphy.com/media/3o7WIwkSmw32NgXvTG/giphy.gif",
  "https://media.giphy.com/media/R53a4hAFV6QH6/giphy.gif",
  "https://media.giphy.com/media/Q8NK9i8zCAPt8rDiJC/giphy.gif"
];

const getRandomGif = (gifs: string[]) => {
  return gifs[Math.floor(Math.random() * gifs.length)];
};

const StatusSubmission: React.FC<StatusSubmissionProps> = ({ isSuccess, onClose, isRateLimited }) => {
  const gifUrl = isRateLimited ? getRandomGif(rateLimitGifs) : isSuccess ? getRandomGif(successGifs) : getRandomGif(failureGifs);

  return (
    <div className="w-full md:w-1/2 bg-white p-10 rounded-lg">
      <div className="bg-white p-6 text-black">
        {isRateLimited ? (
          <>
            <Image src={gifUrl} alt="Rate Limit Gif" className="w-full h-auto mb-4" width={500} height={500} unoptimized={true} />
            <div className="flex items-center">
              <GoXCircle className="w-6 h-6 text-red-500" />
              <p className="ml-2">Too many requests. Please try again later.</p>
            </div>
          </>
        ) : isSuccess ? (
          <>
            <Image src={gifUrl} alt="Success Gif" className="w-full h-auto mb-4" width={500} height={500} unoptimized={true} />
            <div className="flex items-center">
              <CiCircleCheck className="w-6 h-6 text-green-500" />
              <p className="ml-2">Woohoo! The Solheim Tech team has received your request! Thank you so much!</p>
            </div>
          </>
        ) : (
          <>
            <Image src={gifUrl} alt="Failure Gif" className="w-full h-auto mb-4" width={500} height={500} unoptimized={true}/>
            <div className="flex items-center">
              <GoXCircle className="w-6 h-6 text-red-500" />
              <p className="ml-2">We&apos;re so sorry, but something went wrong with your submission. Please try again.</p>
            </div>
          </>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 text-black bg-white border-black border hover:bg-black hover:text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StatusSubmission;