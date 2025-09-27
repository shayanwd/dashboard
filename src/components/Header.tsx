import React, { useState } from 'react';


import DateRangePicker from './DateRangePicker';
import CampaignDropdown from './CampaignDropdown.tsx';
import FilterButton from './FilterButton.jsx';
import HeaderComponent from './HeaderComponent.tsx';

interface HeaderProps {
  className?: string;
  onMenuToggle?: (isOpen: boolean) => void;
  isMenuOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ className = '', onMenuToggle, isMenuOpen = false }) => {
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const [campaign, setCampaign] = useState('');
  const [campaign2, setCampaign2] = useState('');
  const campaignOptions = [
    'Kampagne Name',
    'Kampagne Name 2',
    'Kampagne Name 3',
    'Kampagne Name 4',
    'Kampagne Name 5',
  ];

  const campaignOptions2 = [
    'Kampagne Name 1',
    'Kampagne Name 2',
    'Kampagne Name 3',
    'Kampagne Name 4',
    'Kampagne Name 5',
    'Kampagne Name 6',
    'Kampagne Name 7',
    'Kampagne Name 8',
    'Kampagne Name 9',
    'Kampagne Name 10',
  ];

  const toggleMenu = () => {
    onMenuToggle?.(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-5 py-5 border-b border-[#151515] w-full gap-4">
      <button
        onClick={toggleMenu}
        className="toglebtn flex flex-col  justify-center items-center w-8 h-8 p-1 rounded-md  transition-colors duration-200 lg:hidden"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

    </header>
  );
};

