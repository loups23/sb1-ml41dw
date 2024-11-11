import React from 'react';
import { Bell, Crown } from 'lucide-react';

const Header = () => {
  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold">Chat AI</h2>
        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full">
          Pro
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:opacity-90 transition-opacity">
          <Crown className="h-5 w-5" />
          <span>Upgrade</span>
        </button>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="h-8 w-8 rounded-full border-2 border-white"
        />
      </div>
    </div>
  );
};

export default Header;