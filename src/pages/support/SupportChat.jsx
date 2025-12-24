import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Paperclip, Smile } from 'lucide-react';

function SupportChat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const messages = [
    { id: 1, text: 'Hi! How can I help you today?', sender: 'support', time: '10:30 AM' },
    { id: 2, text: 'I need help with my order', sender: 'user', time: '10:31 AM' },
    { id: 3, text: 'Sure! Could you please share your order ID?', sender: 'support', time: '10:31 AM' }
  ];

  return (
    <div className="h-screen bg-rez-gray-50 dark:bg-dark-900 flex flex-col">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><ArrowLeft className="w-5 h-5" /></button>
          <div className="flex-1"><h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Support Chat</h1><p className="text-xs text-emerald-600 dark:text-emerald-400">Online</p></div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-emerald-500 text-white' : 'bg-white dark:bg-dark-800 text-rez-navy dark:text-white'}`}>
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-rez-gray-500'}`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700 p-4">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><Paperclip className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" /></button>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." className="flex-1 px-4 py-2 rounded-full bg-rez-gray-100 dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <button className="p-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><Smile className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" /></button>
          <button className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white"><Send className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
}

export default SupportChat;
