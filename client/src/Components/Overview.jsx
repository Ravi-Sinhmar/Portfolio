import React from 'react';
import { FaTrophy, FaCode, FaEnvelope } from 'react-icons/fa';



const iconMap = {
  achievements: FaTrophy,
  projects: FaCode,
  hire: FaEnvelope,
};

function Overview({ type, title, description, stats }) {
  const Icon = iconMap[type];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Icon className="text-xl text-indigo-600 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        {stats && (
          <div className="grid grid-cols-3 gap-2">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-100 p-2 rounded-md text-center">
                <div className="text-sm font-bold text-indigo-600">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Overview;
