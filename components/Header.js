import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-black text-white flex items-center justify-between px-6 py-4 shadow-md">
      <div className="text-2xl font-bold">JYFMS Dashboard</div>
      <div className="text-sm text-gray-300">Player: Logan</div>
    </header>
  );
}