import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.role === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div className={`p-2 rounded-full ${
              message.role === 'assistant' ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              {message.role === 'assistant' ? (
                <Bot className="h-6 w-6 text-blue-500" />
              ) : (
                <User className="h-6 w-6 text-gray-500" />
              )}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              message.role === 'assistant' 
                ? 'bg-white shadow-sm' 
                : 'bg-blue-500 text-white'
            }`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;