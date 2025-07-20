import React, { useState, useRef, useEffect } from 'react';

interface MonthlyOverviewProps {
  className?: string;
}

export const MonthlyOverview: React.FC<MonthlyOverviewProps> = ({ className = '' }) => {
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(3); // April index
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Close calendar on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    }
    if (showCalendar) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar]);

  const handleMonthSelect = (month: string, index: number) => {
    setSelectedMonth(month);
    setSelectedMonthIndex(index);
    setShowCalendar(false);
  };

  return (
    <section className={`chipku-blur bg-[rgba(255,255,255,0.09)] border flex w-full flex-col overflow-hidden items-stretch justify-center mt-1 p-5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid max-md:max-w-full ${className}`}>
      <div className="flex w-full items-center gap-4 lg:gap-8 leading-none flex-wrap max-md:max-w-full">
        <h2 className="text-white text-sm lg:text-base font-semibold uppercase self-stretch flex-1 shrink basis-5 my-auto max-md:max-w-full">
          Monatliche Übersicht
        </h2>
        <div className="relative" ref={calendarRef}>
          <div
            className="bg-[rgba(255,255,255,0.09)] border self-stretch flex items-center gap-2 text-xs lg:text-sm text-white font-normal whitespace-nowrap w-[100px] lg:w-[120px] my-auto p-2 lg:p-2.5 rounded-[10px] border-[#FFFFFF0F] border-solid cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65127d4016735eb9ffbc8ec024ba3739ff168678?placeholderIfAbsent=true"
              alt="Calendar"
              className="aspect-[1] object-contain w-3 lg:w-4 self-stretch shrink-0 my-auto"
            />
            <div className="self-stretch gap-2 flex-1 shrink basis-[0%] my-auto truncate">
              {selectedMonth}
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ac093d29b2f622c5d05ad5c42ba377f9131daec?placeholderIfAbsent=true"
              alt="Dropdown"
              className={`aspect-[1] object-contain w-3 lg:w-4 self-stretch shrink-0 my-auto transition-transform duration-200 ${showCalendar ? 'rotate-180' : ''}`}
            />
          </div>

          {/* Calendar Dropdown */}
          {showCalendar && (
            <div className="absolute top-full mt-2 left-0 z-50 bg-[#0000001A] backdrop-blur-[64px] border border-[#FFFFFF0F] rounded-lg shadow-lg w-[140px] max-h-48 overflow-y-auto">
              <div className="p-2 space-y-1">
                {months.map((month, index) => (
                  <div
                    key={index}
                    className={`px-3 py-2 rounded-md cursor-pointer text-xs lg:text-sm transition-colors duration-200 ${selectedMonth === month
                      ? 'bg-[#FFFFFF17] text-white'
                      : 'text-white hover:bg-[#FFFFFF0A]'
                      }`}
                    onClick={() => handleMonthSelect(month, index)}
                  >
                    {month}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full mt-6 lg:mt-8 max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch justify-center rounded-md max-md:max-w-full">
          <div className="text-white text-2xl lg:text-4xl font-bold leading-none">
            256
          </div>
          <div className="text-[rgba(249,104,0,1)] text-sm lg:text-base font-normal">
            Leads ohne Termin
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch justify-center mt-3 lg:mt-5 rounded-md max-md:max-w-full">
          <div className="text-white text-2xl lg:text-4xl font-bold leading-none">
            16
          </div>
          <div className="text-[rgba(0,189,249,1)] text-sm lg:text-base font-normal">
            Leads zu Abschluss
          </div>
        </div>
      </div>
      <div className="flex w-full items-stretch gap-3 mt-6 lg:mt-8 max-md:max-w-full">
        <div className="lg:min-w-60 min-w-[100%] w-full flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="bg-[rgba(255,255,255,0.09)] flex min-h-3 lg:min-h-4 w-full flex-col overflow-hidden justify-between rounded-[10px] max-md:max-w-full">
            <div className="bg-[rgba(249,104,0,1)] flex min-h-3 lg:min-h-4 lg:w-[600px] w-full max-w-full flex-1 rounded-sm" />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)] flex min-h-3 lg:min-h-4 w-full flex-col overflow-hidden justify-between mt-[10px] lg:mt-[13px] rounded-[10px] max-md:max-w-full">
            <div className="bg-[rgba(0,189,249,1)] flex min-h-3 lg:min-h-4 w-[30px] flex-1 rounded-sm" />
          </div>
          <div className="flex w-full opacity-30 gap-4 lg:gap-9 text-xs lg:text-sm text-white font-normal whitespace-nowrap leading-none justify-between flex-wrap mt-[10px] lg:mt-[13px] max-md:max-w-full">
            <div>0</div>
            <div>25</div>
            <div>50</div>
            <div>75</div>
            <div>100</div>
            <div>125</div>
            <div>150</div>
            <div>175</div>
            <div>200</div>
            <div>225</div>
            <div>250</div>
            <div>275</div>
          </div>
        </div>
      </div>
    </section>
  );
};
