import React from 'react';
import { Menu, MessageSquare, Image, Video, Music, Code, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: MessageSquare, label: 'Chat AI', color: 'text-blue-500' },
    { icon: Image, label: 'Image Generation', color: 'text-purple-500' },
    { icon: Video, label: 'Video Generation', color: 'text-pink-500' },
    { icon: Music, label: 'Music Generation', color: 'text-green-500' },
    { icon: Code, label: 'Code Assistant', color: 'text-orange-500' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Menu className="h-6 w-6 text-blue-400" />
        <h1 className="text-xl font-bold">AI Studio</h1>
      </div>
      
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <item.icon className={`h-5 w-5 ${item.color}`} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <Settings className="h-5 w-5 text-gray-400" />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <LogOut className="h-5 w-5 text-gray-400" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;