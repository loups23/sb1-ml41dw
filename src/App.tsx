import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="h-[calc(100vh-64px)]">
          <ChatInterface />
        </main>
      </div>
    </div>
  );
}

export default App;