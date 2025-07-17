import React from 'react';

const FilterButton = React.forwardRef(function FilterButton({ className = '', onClick }, ref) {
    return (
        <div
            ref={ref}
            className={`bg-[rgba(255,255,255,0.09)] border flex items-center justify-between w-full sm:w-[200px] pl-2.5 pr-1 py-1 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid cursor-pointer ${className}`}
            onClick={onClick}
        >
            <div className="text-white text-sm font-normal leading-none">
                Filters
            </div>
            <div className="bg-[rgba(230,243,255,0.14)] flex items-center justify-center w-7 h-7 px-1.5 rounded-[7px]">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7afa7f224bb8f246cefb6d992cb23d64c11e39b5?placeholderIfAbsent=true"
                    alt="Filter"
                    className="aspect-[1] object-contain w-4"
                />
            </div>
        </div>
    );
});

export default FilterButton; 