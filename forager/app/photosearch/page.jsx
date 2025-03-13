'use client';

import BackgroundScreen from "@/components/BackgroundScreen";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";

// dynamically import react-icons
const FaArrowLeft = dynamic(() => import('react-icons/fa').then((mod) => mod.FaArrowLeft), {
  ssr: false, // Disable server-side rendering for this icon
});

const FaBolt = dynamic(() => import('react-icons/fa').then((mod) => mod.FaBolt), {
  ssr: false, // Disable server-side rendering for this icon
});

export default function PhotoSearchPage() {
  return (
    <>
      <NavBar />
      <BackgroundScreen imageUrl="/images/mushroom_background.png">
        {/* iPhone Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-8 z-20">
          <Image
            src="/images/iPhone-status-bar.png"
            alt="iPhone status bar"
            layout="responsive" 
            width={414}
            height={32} 
            objectFit="contain" 
            priority
          />
        </div>

        {/* Top Icons Bar */}
        <div className="z-10 absolute top-0 left-0 right-0 bg-black bg-opacity-50 min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[132px] flex items-center justify-between px-6 py-4">
          <Link href="/dashboard" passHref>
            <div className="text-2xl cursor-pointer flex justify-center items-center p-3">
              <FaArrowLeft />
            </div>
          </Link>
          <div className="text-2xl cursor-pointer flex justify-center items-center p-3">
            <FaBolt className="text-white text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Camera Frame */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-64 h-64 border-2 border-white" />
        </div>

        {/* Bottom Buttons */}
        <div className="z-10 absolute inset-x-0 bottom-0 h-32 bg-black bg-opacity-50 flex items-center justify-around px-6">
          <div className="text-2xl cursor-pointer flex justify-center items-center p-3">
            <Image
              src="/icons/album.png"
              alt="Gallery"
              width={38}
              height={38}
              priority
            />
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center cursor-pointer">
            <div className="w-12 h-12 bg-white rounded-full cursor-pointer" />
          </div>
          <div className="text-2xl cursor-pointer flex justify-center items-center p-3">
            <Image
              src="/icons/flip.png"
              alt="Flip Camera"
              width={38}
              height={38}
              priority
            />
          </div>
        </div>
      </BackgroundScreen>
    </>
  );
}