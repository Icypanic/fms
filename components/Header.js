import React from 'react';
import Link from 'next/link';

const tabs = ['Training', 'Cohorts', '999', 'MDT', 'Settings'];

export default function Header() {
  return (
    <header className="w-full bg-black text-white px-6 py-4 shadow-md flex items-center justify-between">
      <nav className="flex space-x-6">
        {tabs.map((tab) => (
          <Link key={tab} href={`/${tab.toLowerCase()}`} className="text-sm hover:text-accent font-medium">
            {tab}
          </Link>
        ))}
      </nav>
      <div className="text-sm text-gray-300">Player: Logan</div>
    </header>
  );
}