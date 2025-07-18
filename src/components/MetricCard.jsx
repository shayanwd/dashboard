import React from 'react';

const MetricCard = ({ title, value, percentage, isPositive, icon, highlighted = false }) => {
    return (
        <div className={`bg-[rgba(255,255,255,0.09)] transition-all duration-300 ease-in-out border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 p-4 sm:p-5 rounded-[10px] border-solid hover:shadow-[0px_0px_15px_rgba(126,186,255,0.4)] hover:border-[rgba(126,186,255,1)] ${highlighted
            ? 'shadow-[0px_0px_15px_rgba(126,186,255,0.4)] border-[rgba(126,186,255,1)]'
            : 'border-[rgba(255,255,255,0.06)]'
            }`}>
            <div className="gap-2.5 text-[16px] sm:text-base text-[#A2A2A3] font-semibold uppercase leading-none">
                {title}
            </div>
            <div className="flex w-full items-center gap-4 sm:gap-[40px_100px] whitespace-nowrap justify-between mt-6 sm:mt-8">
                <div className="text-white text-2xl sm:text-4xl font-bold leading-none">
                    {value}
                </div>
                {percentage && (
                    <div className={`text-xs font-normal w-[50px] sm:w-[57px] ${isPositive ? 'text-[rgba(115,186,148,1)]' : 'text-[rgba(186,115,115,1)]'}`}>
                        <div className="relative w-full">
                            <div className="bg-[rgba(0,0,0,0.4)] blur-[4px] absolute z-0 flex min-h-[5px] w-[28px] sm:w-[31px] bottom-[-3px] h-[5px] rounded-[50%] right-[11px] sm:right-[13px]" />
                            <div className={`border z-2 relative flex w-full items-center justify-center p-1 rounded-md border-solid ${isPositive
                                ? 'bg-[rgba(38,56,48,1)] border-[rgba(47,66,58,1)]'
                                : 'bg-[rgba(56,38,38,1)] border-[rgba(66,47,47,1)]'
                                }`}>
                                <img
                                    src={icon}
                                    alt="Trend"
                                    className="aspect-[1] object-contain w-3 sm:w-[15px] shrink-0"
                                />
                                <div className="text-xs">
                                    {percentage}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MetricCard;
