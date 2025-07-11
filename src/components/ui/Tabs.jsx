'use client';
import React from 'react';

export const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <div className="flex flex-wrap justify-around gap-2 mb-8 bg-white p-2 rounded-2xl shadow-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
            activeTab === tab.id
              ? "bg-gradient-to-r from-black to-red-800 cursor-pointer text-white shadow-lg"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <tab.icon size={18} />
          {tab.name}
        </button>
      ))}
    </div>
  );
};
