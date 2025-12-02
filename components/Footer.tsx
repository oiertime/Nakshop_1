import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nakDarkGray text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="mb-10 md:mb-0">
          <div className="flex items-center gap-2 mb-6">
             <div className="w-4 h-4 bg-nakYellow rounded-full"></div>
             <h2 className="text-3xl font-black uppercase tracking-tighter">Nakshop</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Define your Core.<br/>
            Navigate. Align. Knack.<br/><br/>
            나의 길을 찾고, 삶을 정렬하여, 나만의 무기를 만드는 곳.
          </p>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-4 text-sm text-gray-400">
          <div className="flex gap-6 mb-4">
             <a href="#" className="hover:text-nakYellow transition-colors">Instagram</a>
             <a href="#" className="hover:text-nakYellow transition-colors">Contact</a>
             <a href="#" className="hover:text-nakYellow transition-colors">Privacy Policy</a>
          </div>
          <p>© {new Date().getFullYear()} Nakshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};