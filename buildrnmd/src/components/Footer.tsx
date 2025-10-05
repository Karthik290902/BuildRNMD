import React from 'react';
import BuildRNMD from '../../public/BuildRNMD.jpeg';
export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-35 h-35 bg-[#38B6FF] rounded-xl flex items-center justify-center">
                <img src={BuildRNMD.src} alt="BuildRNMD Logo" className="w-30 h-30 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">BuildRNMD</h3>
                <p className="text-xs text-gray-600">Bridging Students to Healthcare</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering the next generation of healthcare professionals through mentorship and resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/careers" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
                  Explore Careers
                </a>
              </li>
              <li>
                <a href="/toolkit" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
                  Application Toolkit
                </a>
              </li>
              <li>
                <a href="/mentor" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
                  Ask a Mentor
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
                  Study Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="/parents" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
                  Parents Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Newfoundland & Labrador</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:hello@buildrnmd.ca" className="hover:text-cyan-600 transition-colors duration-200">
                  hello@buildrnmd.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1">
            © 2025 BuildRNMD. Made with 
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            for future healthcare heroes.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};