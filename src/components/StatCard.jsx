import React from "react";

export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <span className="text-sm font-medium text-gray-500">{title}</span>
      <div className="mt-2 text-3xl font-bold text-gray-800">{value}</div>
    </div>
  );
}
