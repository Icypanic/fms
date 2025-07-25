import React from 'react';

export default function UnitStatusCard({ unit, status }) {
  const statusColors = {
    "Available": "bg-green-600",
    "Responding": "bg-yellow-500",
    "On Scene": "bg-red-600",
    "Unavailable": "bg-gray-500"
  };

  return (
    <div className={`rounded-xl p-4 text-white shadow-md ${statusColors[status] || 'bg-gray-700'}`}>
      <h2 className="text-lg font-bold">{unit}</h2>
      <p className="text-sm">{status}</p>
    </div>
  );
}