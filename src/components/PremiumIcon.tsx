import React, { ReactNode } from 'react';

interface PremiumIconProps {
    children: ReactNode;
    size?: 'small' | 'standard';
    className?: string;
    withHover?: boolean;
}

export const PremiumIcon = ({
    children,
    size = 'standard',
    className = '',
    withHover = false
}: PremiumIconProps) => {
    const sizeClasses = size === 'small' ? 'w-12 h-12 rounded-[16px]' : 'w-16 h-16 rounded-[20px]';
    const shadowClasses = size === 'small' ? 'shadow-lg shadow-[#6B5FFF]/30' : 'shadow-2xl shadow-[#6B5FFF]/40';
    const hoverClasses = withHover
        ? 'hover:shadow-[#6B5FFF]/60 hover:scale-105 transition-all cursor-pointer'
        : 'transition-all duration-500';

    return (
        <div className={`${sizeClasses} bg-gradient-to-br from-[#6B5FFF] to-[#1D2CF3] flex items-center justify-center ${shadowClasses} ${hoverClasses} relative ${className}`}>
            {/* Inner glow effect */}
            <div className={`absolute inset-[2px] ${size === 'small' ? 'rounded-[14px]' : 'rounded-[18px]'} bg-gradient-to-br from-white/10 to-transparent pointer-events-none`} />

            {/* Icon */}
            <div className={`text-white relative z-10 flex items-center justify-center ${size === 'small' ? 'w-6 h-6' : 'w-8 h-8'}`}>
                {React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            // @ts-ignore
                            className: `w-full h-full text-white ${child.props.className || ''}`,
                            strokeWidth: size === 'small' ? 2 : 2.5
                        });
                    }
                    return child;
                })}
            </div>
        </div>
    );
};
