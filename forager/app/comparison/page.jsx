'use client';

import NavBar from '../../components/NavBar';
import ComparisonTable from '../../components/ComparisonTable';

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="p-6 flex flex-col items-center">
        <ComparisonTable />
      </main>
    </div>
  );
}