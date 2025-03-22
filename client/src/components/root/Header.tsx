import { cLogo, corelogicLogo, mainLogo } from '../../assets/logos';
import { agentIcon, communityIcon } from '../../assets/icons';
import { useEffect, useRef, useState } from 'react';
import CoreLogicModel from '../home/CoreLogicModel';
import { gsap } from 'gsap';

const Header = () => {
    const navList = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/aboutus' },
        { name: 'Residential', link: '/residential' },
        { name: 'Commercial', link: '/commercial' },
        { name: 'Business', link: '/business' },
    ];

    const linkRefs = useRef<Array<HTMLAnchorElement>>([]);
    const [openAgentModal, setOpenAgentModal] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    // GSAP animation for hover effects on navigation links
    useEffect(() => {
        linkRefs.current.forEach((link) => {
            const line = link.querySelector('span');
            if (line) {
                link.addEventListener('mouseenter', () => {
                    gsap.to(line, {
                        x: '180%',
                        duration: 2,
                        ease: 'power2.out',
                        background: 'orange',
                    });
                });

                link.addEventListener('mouseleave', () => {
                    gsap.to(line, {
                        x: '-120%',
                        duration: 2,
                        ease: 'power2.out',
                        background: 'blue',
                    });
                });
            }
        });

        return () => {
            linkRefs.current.forEach((link) => {
                const line = link.querySelector('span');
                if (line) {
                    link.removeEventListener('mouseenter', () => { });
                    link.removeEventListener('mouseleave', () => { });
                }
            });
        };
    }, []);

    // GSAP animation for sidebar
    useEffect(() => {
        if (sidebarRef.current) {
            if (isSidebarOpen) {
                gsap.to(sidebarRef.current, {
                    x: 0, // Slide in from the left
                    duration: 0.5,
                    ease: 'power2.out',
                });
            } else {
                gsap.to(sidebarRef.current, {
                    x: '-100%', // Slide out to the left
                    duration: 0.5,
                    ease: 'power2.out',
                });
            }
        }
    }, [isSidebarOpen]);

    return (
        <>
            <div className='w-full flex flex-row items-center justify-between px-5 py-4 sm:px-7 md:px-10 sm:py-6'>
                <div className='flex flex-row gap-4 sm:gap-7 items-center'>
                    <a href="/">
                        <img src={mainLogo} alt='logo' className='w-[72px] h-[80px]' />
                    </a>
                    <div className='hidden md:flex flex-row gap-4'>
                        {navList.map((nav, index) => (
                            <a
                                key={index}
                                href={nav.link}
                                ref={(el) => {
                                    if (el) linkRefs.current[index] = el;
                                }}
                                className="text-[16px] text-primary overflow-hidden relative"
                            >
                                {nav.name}
                                <span className="absolute bottom-0 left-0 h-[2px] w-[60%] bg-orange-500 transform -translate-x-[120%]"></span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hamburger Menu for Small Devices */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className='md:hidden p-2 focus:outline-none cursor-pointer'
                >
                    <div className='w-6 h-0.5 bg-black mb-1'></div>
                    <div className='w-6 h-0.5 bg-black mb-1'></div>
                    <div className='w-6 h-0.5 bg-black'></div>
                </button>

                <div className='hidden md:flex flex-col items-end lg:flex-row gap-2 md:gap-2 lg:gap-10'>
                    <button
                        onClick={() => setOpenAgentModal(true)}
                        className='bg-secondary/20 hover:bg-secondary/30 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-[220px] h-[40px] border-black/20 border-[1px] rounded-l-full rounded-r-full'
                    >
                        <img src={cLogo} alt='logo' className='size-[24px]' />
                        <img src={corelogicLogo} alt='logo' className='w-[69px] h-[13px]' />
                        <h2 className='text-primary text-[14px]'>Digital Reports</h2>
                    </button>
                    <div className='flex flex-col-reverse items-end lg:items-center lg:flex-row gap-2 lg:gap-5'>
                        <a
                            href='/agent'
                            className='bg-secondary/20 hover:bg-secondary/30 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-[130px] h-[40px] border-black/20 border-[1px] rounded-l-full rounded-r-full'
                        >
                            <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                <img src={agentIcon} alt='icon' className='size-[12px]' />
                            </div>
                            <h2 className='text-primary text-[14px]'>Join As Agent</h2>
                        </a>
                        <button className='bg-secondary/20 hover:bg-secondary/30 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-[146px] h-[40px] border-black/20 border-[1px] rounded-l-full rounded-r-full'>
                            <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                <img src={communityIcon} alt='icon' className='size-[12px]' />
                            </div>
                            <div className='flex flex-col items-start leading-3'>
                                <h2 className='text-primary text-[13px]'>Join Community</h2>
                                <p className='text-primary text-[9px] capitalize'>Ask a question?</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar for Small Devices */}
            <div
                ref={sidebarRef}
                className='fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform -translate-x-full z-[5000] md:hidden flex flex-col'
            >
                <div className='p-5'>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className=' focus:outline-none flex items-center justify-center size-[30px] mb-5 cursor-pointer'
                    >
                        <div className='w-6 h-0.5 bg-black rotate-45 absolute'></div>
                        <div className='w-6 h-0.5 bg-black -rotate-45 absolute'></div>
                    </button>

                    <div className='md:hidden flex flex-col gap-2 mb-5 '>
                        <button
                            onClick={() => setOpenAgentModal(true)}
                            className='bg-secondary/20 hover:bg-secondary/30 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-[220px] h-[40px] border-black/20 border-[1px] rounded-l-full rounded-r-full'
                        >
                            <img src={cLogo} alt='logo' className='size-[24px]' />
                            <img src={corelogicLogo} alt='logo' className='w-[69px] h-[13px]' />
                            <h2 className='text-primary text-[14px]'>Digital Reports</h2>
                        </button>
                        <div className='flex flex-col-reverse  gap-2'>
                            <a
                                href='/agent'
                                className='bg-secondary/20 hover:bg-secondary/30 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-full h-[40px] border-black/20 border-[1px] rounded-l-full rounded-r-full'
                            >
                                <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                    <img src={agentIcon} alt='icon' className='size-[12px]' />
                                </div>
                                <h2 className='text-primary text-[14px]'>Join As Agent</h2>
                            </a>
                            <button className='bg-secondary/20 hover:bg-secondary/30 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-full h-[40px] border-black/20 border-[1px] rounded-l-full rounded-r-full'>
                                <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                    <img src={communityIcon} alt='icon' className='size-[12px]' />
                                </div>
                                <div className='flex flex-col items-start leading-3'>
                                    <h2 className='text-primary text-[13px]'>Join Community</h2>
                                    <p className='text-primary text-[9px] capitalize'>Ask a question?</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    {navList.map((nav, index) => (
                        <a
                            key={index}
                            href={nav.link}
                            className='block py-2 text-[16px] text-primary'
                        >
                            {nav.name}
                        </a>
                    ))}
                </div>
            </div>

            <CoreLogicModel open={openAgentModal} onClose={() => setOpenAgentModal(false)} />
        </>
    );
};

export default Header;