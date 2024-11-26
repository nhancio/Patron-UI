import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      url: 'https://instagram.com/patronai',
      color: 'hover:text-pink-600',
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/company/patronai',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      url: 'https://twitter.com/patronai',
      color: 'hover:text-sky-500',
    },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600 font-medium">Follow us for more updates</p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 transition-colors ${social.color}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}