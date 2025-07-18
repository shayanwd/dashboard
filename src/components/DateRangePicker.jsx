import React, { useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function DateRangePicker({ value, onChange, className = '', placeholder = 'Select date range', minYear = 2020, maxYear = 2030 }) {
    const [showPicker, setShowPicker] = useState(false);
    const [internalRange, setInternalRange] = useState(value || { from: undefined, to: undefined });
    const ref = useRef();

    // Close picker on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowPicker(false);
            }
        }
        if (showPicker) {
            window.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('mousedown', handleClickOutside);
        }
        return () => window.removeEventListener('mousedown', handleClickOutside);
    }, [showPicker]);

    // Format date as '1 April 2025'
    const formatDate = (date) =>
        date ? date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '';

    const displayValue =
        internalRange.from && internalRange.to
            ? `${formatDate(internalRange.from)} - ${formatDate(internalRange.to)}`
            : placeholder;

    const handleSelect = (range) => {
        setInternalRange(range);
        if (onChange) onChange(range);
    };

    const handleDone = () => {
        setShowPicker(false);
        if (onChange) onChange(internalRange);
    };

    const handleClear = () => {
        setInternalRange({ from: undefined, to: undefined });
        setShowPicker(false);
        if (onChange) onChange({ from: undefined, to: undefined });
    };

    return (
        <div className={`relative ${className}`} ref={ref}>
            <button
                type="button"
                className="flex items-center min-w-[240px] bg-[#FFFFFF17] border border-[#FFFFFF0F] p-[10px] leading-[100%] h-[36px] rounded-[10px] gap-[30px] justify-between"
                onClick={() => setShowPicker((v) => !v)}
            >
                <span className='text-[14px] text-[white] font-[400]'>{displayValue}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 2.66669H3.33333C2.59695 2.66669 2 3.26364 2 4.00002V13.3334C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3334V4.00002C14 3.26364 13.403 2.66669 12.6667 2.66669Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.667 1.33331V3.99998" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.33301 1.33331V3.99998" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 6.66669H14" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </button>
            {showPicker && (
                <div className="absolute z-50 mt-2 left-0 bg-[#0000001A] border border-[#FFFFFF0F] p-[10px] rounded-[10px] backdrop-blur-[27px]">
                    <DayPicker
                        mode="range"
                        selected={internalRange}
                        onSelect={handleSelect}
                        numberOfMonths={2}
                        fromYear={minYear}
                        toYear={maxYear}
                        classNames={{
                            months: 'flex gap-4',
                            month: 'bg-[#0000001A] border border-[#FFFFFF0F] p-[10px] rounded-[10px]',
                            caption: 'text-text',
                            day: 'rounded-full hover:bg-[#FFFFFF17] hover:text-white',
                            day_selected: 'bg-[#FFFFFF17] text-white',
                            day_range_middle: '!bg-[#FFFFFF17]',
                            day_today: 'border border-[#FFFFFF17]',
                        }}
                        styles={{
                            months: { background: 'transparent' },
                            caption: { color: 'inherit' },
                            day: { color: 'inherit' },
                        }}
                    />
                    <div className="flex justify-end mt-2">
                        <button
                            className="bg-[#FFFFFF17] border border-[#ffffff0e] p-[10px] rounded-[10px] mr-2"
                            onClick={handleDone}
                        >
                            Done
                        </button>
                        <button
                            className="bg-[#30313B] border border-[#ffffff0e] p-[10px] rounded-[10px]"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
} 