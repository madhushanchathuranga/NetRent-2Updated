import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { bellIcon, calendarGreenIcon, timeGreenIcon, verifiedIcon } from '../../assets/icons';
import { testUser } from '../../assets/images';
interface NotifyModalProps {
    show: boolean;
    onClose: () => void;
}
const NotifyModal = ({ show, onClose }: NotifyModalProps) => {
    const data = {
        name: 'John Smith',
        verified: true,
        date: '12/12/2021',
        time: '12:00 PM - 1:00 PM',
        profileImage: testUser
    }
    const modalRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef]);

    useEffect(() => {
        if (show) {
            gsap.fromTo(modalRef.current,
                { y: '100%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [show]);

    if (!show) return null;
    return (
        <div className='w-full flex items-center justify-center bg-black/20 h-screen fixed top-0 left-0 z-[4000]'>
            <div ref={modalRef} className='w-full max-w-[650px] h-full max-h-[527px] items-center justify-center rounded-[30px] drop-shadow-md bg-[#F2F2F2] flex flex-col p-7 gap-8 overflow-hidden'>

                <div className='w-full flex flex-col items-center gap-8'>
                    <h2 className='text-[min(3vw,16px)] text-black font-medium'>
                        Your booking has been successfully submitted
                    </h2>

                    <div className='flex flex-col gap-1 items-center'>
                        <div className='size-[min(40vw,120px)] relative'>
                            <div className='size-[min(40vw,120px)] overflow-hidden  rounded-full bg-gray-200 flex items-center justify-center'>
                                <img src={data.profileImage} alt='home icon' className='size-full' />
                            </div>
                            {data.verified && <img src={verifiedIcon} alt='verified icon' className="absolute -top-0 -left-1 size-[36px] z-10 " />}
                        </div>
                        <h3 className='text-[20px] text-[#2d2d2d] font-bold'>
                            {data.name}
                        </h3>
                    </div>

                    <div className='w-full flex flex-col items-center gap-4'>
                        <p className='text-[14px] text-[#2d2d2d]'>
                            Agent will contact with you soon
                        </p>

                        <div className='w-full max-w-[325px] flex flex-row justify-between items-center'>
                            <div className='w-[154px] h-[50px] rounded-[12px] bg-white border-[#F2F2F2] border-[0.8px] flex flex-row gap-2 p-2 items-center'>
                                <img src={calendarGreenIcon} alt='Calendar icon' className='size-[22px]' />
                                <div className='flex flex-col'>
                                    <p className='text-[12px] text-black font-medium'>
                                        Date
                                    </p>
                                    <p className='text-[10px] text-black font-medium'>
                                        {new Date(data.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
                                    </p>
                                </div>
                            </div>

                            <div className='w-[154px] h-[50px] rounded-[12px] bg-white border-[#F2F2F2] border-[0.8px] flex flex-row gap-2 p-2 items-center'>
                                <img src={timeGreenIcon} alt='time icon' className='size-[22px]' />
                                <div className='flex flex-col'>
                                    <p className='text-[12px] text-black font-medium'>
                                        Time
                                    </p>
                                    <p className='text-[10px] text-black font-medium'>
                                        {data.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className='w-full  max-w-[325px] flex h-[44px] gap-3 cursor-pointer text-white text-[14px] font-medium flex-row items-center justify-center rounded-l-full rounded-r-full bg-[#4BAE4F]'>
                        <div className='size-[24px] bg-[#D9D9D9]/50 rounded-full flex items-center justify-center'>
                            <img src={bellIcon} alt='Calendar icon' className='w-[9px] h-[11px]' />
                        </div>
                        <p>
                            Ok!, Notify me
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotifyModal