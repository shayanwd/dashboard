import React, { useState, useRef, useEffect } from 'react';

const OPTIONS = [
    { label: 'Download CSV', value: 'download' },
    { label: 'Export as CSV', value: 'export' },
    { label: 'Download XLSX', value: 'xlsx' },
    { label: 'Export as PDF', value: 'pdf' },
];

export default function OptionsDropdownButton({
    className = '',
    onOptionClick = () => { },
    buttonLabel = '',
    icon = null,
}) {
    const [open, setOpen] = useState(false);
    const btnRef = useRef();
    const dropdownRef = useRef();

    // Close dropdown on outside click
    useEffect(() => {
        if (!open) return;
        function handleClick(e) {
            if (
                btnRef.current && btnRef.current.contains(e.target)
            ) return;
            if (
                dropdownRef.current && dropdownRef.current.contains(e.target)
            ) return;
            setOpen(false);
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [open]);

    return (
        <div className={`relative ${className}`}>
            <button
                ref={btnRef}
                className="border flex items-center justify-center w-9 h-9 rounded-[10px] cursor-pointer transition-all duration-200 border-[rgba(255,255,255,0.06)] border-none"
                onClick={() => setOpen((v) => !v)}
                aria-label="Options"
                type="button"
            >
                {icon ? icon : (
                    <svg className='h-full w-full' width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.789551" width="28" height="28" rx="7" fill="#E6F3FF" fillOpacity="0.14" />
                        <path d="M13.9999 15.4562C14.3681 15.4562 14.6666 15.1577 14.6666 14.7895C14.6666 14.4213 14.3681 14.1229 13.9999 14.1229C13.6317 14.1229 13.3333 14.4213 13.3333 14.7895C13.3333 15.1577 13.6317 15.4562 13.9999 15.4562Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.6667 15.4562C19.0349 15.4562 19.3333 15.1577 19.3333 14.7895C19.3333 14.4213 19.0349 14.1229 18.6667 14.1229C18.2985 14.1229 18 14.4213 18 14.7895C18 15.1577 18.2985 15.4562 18.6667 15.4562Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.33341 15.4562C9.7016 15.4562 10.0001 15.1577 10.0001 14.7895C10.0001 14.4213 9.7016 14.1229 9.33341 14.1229C8.96522 14.1229 8.66675 14.4213 8.66675 14.7895C8.66675 15.1577 8.96522 15.4562 9.33341 15.4562Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </button>
            {open && (
                <div
                    ref={dropdownRef}

                    className="absolute right-0 mt-2 w-56 bg-[#0000001A] border border-[#FFFFFF0F] rounded-[16px] shadow-lg z-50 p-2 backdrop-blur-[27px] min-w-[180px]   "
                >
                    <div className="flex flex-col gap-1">
                        {OPTIONS.map((opt) => (
                            <button
                                key={opt.value}
                                className="w-full text-left px-3 py-2 rounded-[10px] text-white text-[16px] font-[400] hover:bg-[#23242a] transition"
                                onClick={() => {
                                    setOpen(false);
                                    onOptionClick(opt.value);
                                }}
                                type="button"
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
} 