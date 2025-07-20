import React, { useState, useRef, useEffect } from 'react';

interface CampaignDropdownProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    className?: string;
}

export default function CampaignDropdown({
    options = [],
    value = '',
    onChange,
    placeholder = 'Kampagne auswählen',
    searchPlaceholder = 'Search',
    className = '',
}: CampaignDropdownProps) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const ref = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        if (open) {
            window.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('mousedown', handleClickOutside);
        }
        return () => window.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const filteredOptions = options.filter(opt =>
        opt.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={`relative lg:min-w-[240px] min-w-[100%] ${className}`} ref={ref}>
            <button
                type="button"
                className={`btn-campaign flex items-center justify-between w-full bg-[#ffffff1c] border p-[10px] rounded-[10px] text-[14px] leading-[100%] h-[36px] text-white font-[400] focus:outline-none ${open ? 'border-[#7EBAFF]' : 'border-[#ffffff0e]'}`}
                onClick={() => setOpen(v => !v)}
            >
                <span>{value || placeholder}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            {open && (
                <div className="absolute left-0 mt-2 w-full bg-[#0000001A] border border-[#FFFFFF0F] rounded-[16px] shadow-lg z-50 p-2 backdrop-blur-[27px]">
                    <div className="flex items-center bg-[#E6F3FF24] border border-[#e6f3ff00] rounded-[10px] px-3 py-2 mb-2">
                        <input
                            type="text"
                            className="bg-transparent outline-none text-white placeholder:text-[#bdbdbd] flex-1"
                            placeholder={searchPlaceholder}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <svg width="18" height="18" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </div>
                    <div className="max-h-[220px] overflow-y-auto flex flex-col gap-1">
                        {filteredOptions.length === 0 && (
                            <div className="text-[#bdbdbd] px-3 py-2">No results</div>
                        )}
                        {filteredOptions.map(opt => (
                            <button
                                key={opt}
                                className={`w-full text-left px-3 py-2 rounded-[10px] text-white text-[16px] font-[400] hover:bg-[#E6F3FF24] transition ${value === opt ? 'bg-[#E6F3FF24]' : ''}`}
                                onClick={() => { onChange && onChange(opt); setOpen(false); setSearch(''); }}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
} 