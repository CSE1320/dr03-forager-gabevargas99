'use client';

import Link from 'next/link';
import NavBar from '../../components/NavBar';
import MushroomCard from '../../components/MushroomCard';
import MushroomList from '../../components/MushroomList';

export default function MushroomPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="p-6 flex flex-col items-center">
        <MushroomCard />
        <MushroomList />
        <Link href="/comparison">
          <button className="mt-4 bg-blue-500 text-white p-2 rounded">Go to Mushroom Comparison Page</button>
        </Link>
      </main>
    </div>
  );
}