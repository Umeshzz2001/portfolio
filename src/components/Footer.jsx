import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'href="https://github.com/Umeshzz2001"', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sandeepa-hiripitiya-82bba6305/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:umeshsandeepa1@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-800/50 border-t border-slate-700/50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
         
          <div className="flex items-center text-gray-300 text-sm">
            <span>© {currentYear} Sandeepa Hiripitiya. Made with</span>
            <span className="ml-1">React</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
