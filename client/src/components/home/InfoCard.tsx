
import React from 'react'
import Search from '../root/Search'

interface InfoCardProps {
    direction: 'LeftToRight' | 'RightToLeft'
    icon: string
    title: string
    description: string
    videoSrc: string
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    searchButtonText: string
    searchPlaceholder: string
    searchValue: string
    onSearchClick: () => void
}

const InfoCard = ({ direction, icon, title, description, videoSrc, onSearchChange, searchButtonText, searchPlaceholder, searchValue, onSearchClick }: InfoCardProps) => {
    return (
        <div className={`w-full flex ${direction === 'RightToLeft' ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row '} gap-[80px] lg:gap-[261px] lg:h-[292px]`}>
            <div className='w-full lg:w-1/2 flex flex-col gap-4 '>
                <div className='flex flex-col gap-7 flex-grow'>
                <div className='w-full flex flex-row gap-3'>
                    <div className='size-[64px] bg-primary rounded-full flex items-center justify-center'>
                        <img src={icon} alt='Icon' className='size-[28px]' />
                    </div>
                    <h2 className='text-primary text-[32px] font-bold w-[calc(100%-64px)]'>
                        {title}
                    </h2>
                </div>

                <div className='w-full flex text-justify text-[12px] sm:text-[14px] md:text-[16px] text-primary'>
                    <p>
                        {description}
                    </p>
                </div>
                </div>

                <div className='w-full max-w-[414px]'>
                <Search
                    onChange={(e) => { onSearchChange(e) }}
                    onClick={() => { onSearchClick() }}
                    value={searchValue}
                    buttonText={searchButtonText}
                    placeholderText={searchPlaceholder} />
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-row justify-center '>
                <div className='w-full h-auto rounded-[24px] overflow-hidden'>
                    <img src={videoSrc} alt='Video' className='object-cover w-[100%] h-full object-center' />
                    {/* <video className="object-cover w-[100%] h-full object-center" autoPlay loop muted>
                        <source src={videoSrc} type="video/mp4" />
                    </video> */}
                </div>
            </div>
        </div>
    )
}

export default InfoCard