
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

interface SidebarProps {
  className?: string;
  isMenuOpen?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '', isMenuOpen = false, onMenuToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: "../search.png", label: "Leads", path: "/" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ee644caaafd5ea1799ada8e3afc0ec73ae24bcb?placeholderIfAbsent=true", label: "Pre-Setting", path: "/pre-setting" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/deaec98764b663b8a774553f08c304d328680b85?placeholderIfAbsent=true", label: "Aktivität", path: "/aktivitaet" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f58e7a913a04dd4b54750b6eb3fbbb7a683f4ee?placeholderIfAbsent=true", label: "Setting", path: "/setting" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d771b4bad6dd3ebfbec9c4cd485a603cc02bfd6?placeholderIfAbsent=true", label: "Closing", path: "/closing" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb3dca346f05e54307c95563bca180a82f682809?placeholderIfAbsent=true", label: "Umsatz", path: "/umsatz" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onMenuToggle?.(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className={` side-holder block lg:relative fixed top-0 left-0 lg:bg-[transparent] bg-[#000000c8] lg:backdrop-blur-none backdrop-blur-[20px] z-20 lg:w-64 w-[90%] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} ${className}`}>
        <div className="text-sm sticky top-0  text-[rgba(139,139,139,1)] font-normal whitespace-nowrap leading-none pt-[29px] lg:pb-[0px] pb-[10px] lg:px-[30px] px-[10px]  h-[fit-content]">

          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d4596dfe606673994f99db4bdb6d8410552717?placeholderIfAbsent=true"
            alt="User Avatar"
            className="aspect-[2.28] object-contain w-[73px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[80px]"
          />
          <div className="w-full max-w-[170px] mt-[51px]">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`flex w-full items-center gap-2 mt-2 p-2.5 rounded-[10px] cursor-pointer transition-colors ${location.pathname === item.path
                  ? 'bg-[rgba(230,243,255,0.14)] text-white active'
                  : 'text-[rgba(139,139,139,1)] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="aspect-[1] object-contain w-4 shrink-0"
                />
                <div className="truncate">
                  {item.label}
                </div>
              </div>
            ))}
            <div className="lg:hidden block relative z-50">
              <HeaderComponent />
            </div>
          </div>
        </div>



      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 ">
          <nav className="fixed left-0 top-0 h-full w-[95%] bg-black border-r border-[rgba(21,21,21,1)] overflow-auto">
            <div className="text-sm text-[rgba(139,139,139,1)] font-normal leading-none p-5">
              <div className="flex justify-between items-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d4596dfe606673994f99db4bdb6d8410552717?placeholderIfAbsent=true"
                  alt="User Avatar"
                  className="aspect-[2.28] object-contain w-[60px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[80px]"
                />
                <button
                  onClick={() => onMenuToggle?.(false)}
                  className="text-white p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleNavigation(item.path)}
                    className={`flex w-full items-center gap-3 p-3 rounded-[10px] cursor-pointer transition-colors ${location.pathname === item.path
                      ? 'bg-[rgba(230,243,255,0.14)] text-white'
                      : 'text-[rgba(139,139,139,1)] hover:bg-[rgba(255,255,255,0.05)]'
                      }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="aspect-[1] object-contain w-5 shrink-0"
                    />
                    <div>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:hidden block relative z-50">
                <HeaderComponent />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
