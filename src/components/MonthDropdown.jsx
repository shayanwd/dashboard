import React, { useEffect, useMemo, useRef, useState } from 'react';
import calIco from '/src/assets/cal.svg';
import ddIco from '/src/assets/dd.svg';

const DEFAULT_MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthDropdown = ({
    value,
    defaultValue = 'April',
    onChange,
    months = DEFAULT_MONTHS,
    className = '',
    dropdownClassName = '',
    buttonClassName = '',
    optionClassName = '',
    closeOnSelect = true,
    disabled = false,
}) => {
    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const selectedMonth = value != null ? value : internalValue;
    const selectedIndex = useMemo(
        () => Math.max(0, months.findIndex((m) => m === selectedMonth)),
        [months, selectedMonth]
    );
    const [activeIndex, setActiveIndex] = useState(() => (selectedIndex >= 0 ? selectedIndex : 0));
    const rootRef = useRef(null);
    const listRef = useRef(null);
    const buttonRef = useRef(null);
    const idRef = useRef(String(Math.random()).slice(2));
    const listboxId = `month-listbox-${idRef.current}`;

    useEffect(() => {
        if (!open) return;
        const onDocClick = (e) => {
            if (rootRef.current && !rootRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
        if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' });
    }, [open, activeIndex]);

    const toggle = () => { if (!disabled) setOpen((o) => !o); };
    const close = () => setOpen(false);

    const selectByIndex = (idx) => {
        const month = months[idx];
        if (!month) return;
        if (value == null) setInternalValue(month);
        onChange?.(month, idx);
        if (closeOnSelect) close();
    };

    const onButtonKeyDown = (e) => {
        if (disabled) return;
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (!open) setOpen(true);
                setActiveIndex((i) => Math.min(months.length - 1, (i ?? 0) + 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (!open) setOpen(true);
                setActiveIndex((i) => Math.max(0, (i ?? 0) - 1));
                break;
            case 'Home':
                e.preventDefault();
                if (!open) setOpen(true);
                setActiveIndex(0);
                break;
            case 'End':
                e.preventDefault();
                if (!open) setOpen(true);
                setActiveIndex(months.length - 1);
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                if (!open) {
                    setOpen(true);
                } else {
                    selectByIndex(activeIndex);
                }
                break;
            case 'Escape':
                if (open) {
                    e.preventDefault();
                    close();
                }
                break;
            default:
                break;
        }
    };

    const baseButtonClasses = "bg-[rgba(255,255,255,0.09)] border self-stretch flex items-center gap-2 text-xs lg:text-sm text-white font-normal whitespace-nowrap w-[100px] lg:w-[120px] my-auto p-2 lg:p-2.5 rounded-[10px] border-[#FFFFFF0F] border-solid cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200";
    const baseOptionClasses = "px-3 py-2 rounded-md cursor-pointer text-xs lg:text-sm transition-colors duration-200";

    return (
        <div className={`relative ${className}`} ref={rootRef}>
            <div
                ref={buttonRef}
                role="combobox"
                aria-controls={listboxId}
                aria-expanded={open}
                aria-haspopup="listbox"
                tabIndex={disabled ? -1 : 0}
                className={`${baseButtonClasses} ${buttonClassName} ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
                onClick={toggle}
                onKeyDown={onButtonKeyDown}
            >
                <img
                    src={calIco}
                    alt="Calendar"
                    className="aspect-[1] object-contain w-3 lg:w-4 self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch gap-2 flex-1 shrink basis-[0%] my-auto truncate">
                    {selectedMonth}
                </div>
                <img
                    src={ddIco}
                    alt="Dropdown"
                    className={`aspect-[1] object-contain w-3 lg:w-4 self-stretch shrink-0 my-auto transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
            </div>

            {open && (
                <div
                    className={`absolute top-full mt-2 left-0 z-50 bg-[#0000001A] backdrop-blur-[64px] border border-[#FFFFFF0F] rounded-lg shadow-lg w-[140px] max-h-48 overflow-y-auto ${dropdownClassName}`}
                >
                    <div ref={listRef} id={listboxId} role="listbox" className="p-2 space-y-1">
                        {months.map((month, index) => {
                            const isSelected = selectedMonth === month;
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={month}
                                    role="option"
                                    aria-selected={isSelected}
                                    data-index={index}
                                    className={`${baseOptionClasses} ${isSelected ? 'bg-[#FFFFFF17] text-white' : 'text-white hover:bg-[#FFFFFF0A]'
                                        } ${isActive ? 'ring-1 ring-white/30' : ''} ${optionClassName}`}
                                    onClick={() => selectByIndex(index)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    {month}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MonthDropdown;
