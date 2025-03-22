import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { corelogicLogo } from '../../assets/logos';
import Search from '../root/Search';

interface CoreLogicModelModelProps {
    open: boolean;
    onClose: () => void;
}

const CoreLogicModel = ({ open, onClose }: CoreLogicModelModelProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [searchValue, setSearchValue] = useState('');
    const [search2, setSearch2] = useState('');

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        // Add event listener when the modal opens
        if (open) {
            document.addEventListener('mousedown', handleClick);
        } else {
            document.removeEventListener('mousedown', handleClick);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [open]);

    useEffect(() => {
        if (open && modalRef.current) {
            // Animate the modal to the top of the screen
            gsap.fromTo(modalRef.current, 
                { y: -100, opacity: 0 }, // Start from 100px above and fully transparent
                { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' } // Animate to top and fully visible
            );
        }
    }, [open]);

    if (!open) return null;

    return (
        <div
            className={`w-full flex flex-col h-screen md:h-screen bg-black/20 text-black fixed z-[5000] top-0 left-0 transition-all duration-500 ease-in-out items-center`}
        >
            <div className="w-full max-w-[1920px] flex flex-col ">
                <div className="w-full h-full md:h-auto bg-[#F6F5F7] relative flex flex-col  items-center rounded-b-[36px] min-h-[556px] shadow-md drop-shadow-md p-4 md:px-16 md:py-7" ref={modalRef}>
                    <div className='flex items-center justify-center absolute top-7 right-10'>
                        <div
                            onClick={onClose}
                            className='size-[54px] bg-[#B3B3B3]/20 border-[1px] cursor-pointer border-white rounded-full flex items-center justify-center'>
                            <div className='h-[2px]  rounded-l-full rounded-r-full w-[20px] bg-black rotate-45 absolute' />
                            <div className='h-[2px]  rounded-l-full rounded-r-full w-[20px] bg-black -rotate-45 absolute' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-1'>
                        <p className='text-primary text-[16px]'>
                            Powered by
                        </p>
                        <img src={corelogicLogo} alt='logo' className='w-[137px] h-[36px]' />
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <div className='flex flex-col items-center gap-3'>
                            <h2 className='text-primary text-[20px] sm:text-[28px] md:text-[32px] font-bold capitalize'>
                                What is your property worth?
                            </h2>
                            <p className='max-w-[690px]'>
                                Looking to buy or sell a property? Search the address below for a Digital Property Report that highlights the market value including recent sales, rental history, suburb report and more.
                            </p>
                        </div>
                        <div className='w-full max-w-[690px] py-7'>
                            <Search
                                onChange={(e) => { setSearchValue(e.target.value) }}
                                onClick={() => { }}
                                value={searchValue}
                                buttonText="Find Out"
                                placeholderText={"Start typing to fine your address"} />
                        </div>
                    </div>

                    <div className='w-full flex flex-col items-center pt-[40px] sm:pt-[80px]'>
                        <div className='flex flex-col items-center gap-3'>
                            <h2 className='text-primary text-[20px] sm:text-[28px] md:text-[32px] font-bold capitalize'>
                                Suburb Market Reports
                            </h2>
                            <p className='max-w-[690px]'>
                                Explore market trends, median property prices, property statistics and recent sales across suburbs in your local area.
                            </p>
                        </div>
                        <div className='w-full max-w-[690px] py-7'>
                            <Search
                                onChange={(e) => { setSearch2(e.target.value) }}
                                onClick={() => { }}
                                value={search2}
                                buttonText="Find Out"
                                placeholderText={"Search your suburb"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreLogicModel;