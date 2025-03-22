import { netrentLogo, nLogo } from '../../assets/logos'
import { callCircleIcon, emailIcon, locationCircleIcon } from '../../assets/icons'
import { agentCompared, agentsCovered, suburbsCovered } from '../../assets/images'

const Footer = () => {
    return (
        <div className='pt-[90px] px-4'>
            <div className='bg-primary rounded-t-[40px] px-10 py-7 flex flex-col gap-5'>
            <div className='flex flex-row gap-3 items-center'>
                <img src={nLogo} alt='logo' className='w-[52px] h-[48px]' />
                <img src={netrentLogo} alt='logo' className='w-[73px] h-[35px]' />
            </div>
            <hr className='h-[1px] w-full bg-[#FFFFFF] border-none' />

            <div className='w-full flex flex-col-reverse lg:flex-row gap-10'>
                <div className='w-full lg:w-1/2 flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white text-[24px] font-bold'>
                            NetRent
                        </h1>
                        <p className='text-white text-[14px]'>
                            The leading property marketplace in Australia connecting sellers, buyers, and services on a fast-track hyper-sourced local real estate network for prompt conversion action!
                        </p>
                    </div>

                    <div className='flex flex-col-reverse md:grid md:grid-cols-2 w-full gap-7'>
                        <div className='w-full flex flex-col gap-5'>
                            <div className='flex flex-row gap-2 w-full'>
                                <h3 className='text-white text-[16px] font-bold w-[25%]'>
                                    Contact Us
                                </h3>
                                <div className='w-[72%] flex flex-row items-center justify-center relative'>
                                    <div className='w-full h-[2px] bg-white' />
                                    <div className='size-[6px] bg-white rotate-45 absolute right-0' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='w-full flex flex-row gap-3'>
                                    <div className='size-[20px] rounded-full flex items-center justify-center '>
                                        <img src={locationCircleIcon} alt='icon' className='size-[20px]' />
                                    </div>
                                    <p className='text-white text-[14px]'>
                                        Unit 8/1151 Wynnum RD Cannon Hill, Qld 4170
                                    </p>
                                </div>

                                <div className='w-full flex flex-row gap-3'>
                                    <div className='size-[20px] rounded-full bg-white flex items-center justify-center'>
                                        <img src={emailIcon} alt='icon' className='w-[14px] h-[8px]' />
                                    </div>
                                    <p className='text-white text-[14px]'>
                                        admin@netrent.com.au
                                    </p>
                                </div>

                                <div className='w-full flex flex-row gap-3'>
                                    <div className='size-[20px] rounded-full flex items-center justify-center'>
                                        <img src={callCircleIcon} alt='icon' className='size-[20px]' />
                                    </div>
                                    <p className='text-white text-[14px]'>
                                        07 3113 3882
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-5'>
                            <div className='flex flex-row gap-2 w-full'>
                                <h3 className='text-white text-[16px] font-bold w-[32%]'>
                                    Useful Links
                                </h3>
                                <div className='w-[65%] flex flex-row items-center justify-center relative'>
                                    <div className='w-full h-[2px] bg-white' />
                                    <div className='size-[6px] bg-white rotate-45 absolute right-0' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <a href='aboutus' className='text-white text-[14px]'>
                                    About Us
                                </a>

                                <a href='residential' className='text-white text-[14px]'>
                                    Residential
                                </a>

                                <a href='commercial' className='text-white text-[14px]'>
                                    Commercial
                                </a>

                                <a href='business' className='text-white text-[14px]'>
                                    Business
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 flex flex-col items-center justify-center gap-10 p-7 lg:px-5'>
                    <div className='w-full flex flex-col sm:flex-row gap-6 justify-between items-center'>
                        <img
                            src={agentCompared}
                            alt='Agent Compared'
                            className='w-[162px] lg:w-[min(10vw,162px)] h-[44px] hover:scale-110 hover:filter hover:hue-rotate-7 transition-all duration-300 ease-in-out'
                        />
                        <img
                            src={suburbsCovered}
                            alt='Suburbs Covered'
                            className='w-[162px] lg:w-[min(10vw,162px)] h-[44px] hover:scale-110 hover:filter hover:hue-rotate-7 transition-all duration-300 ease-in-out'
                        />
                        <img
                            src={agentsCovered}
                            alt='Agents Covered'
                            className='w-[162px] lg:w-[min(10vw,162px)] h-[44px] hover:scale-110 hover:filter hover:hue-rotate-7 transition-all duration-300 ease-in-out'
                        />
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-white text-[14px]'>
                            Subscribe to our Newsletter:
                        </p>
                        <div className='w-full flex flex-col sm:flex-row gap-4'>
                            <div className='w-full sm:w-[calc(100%-140px)] rounded-l-full rounded-r-full border-white/50 border-[2px]'>
                                <input
                                    type='email'
                                    placeholder='youremail@gmail.com'
                                    className='w-full bg-transparent pl-4 text-white text-[14px] p-2 focus:outline-none placeholder:text-white/50'
                                />

                            </div>
                            <button className='w-full h-[36px] xl:h-auto sm:w-[130px] bg-white text-black font-bold cursor-pointer transition-all duration-300 ease-in-out rounded-l-full rounded-r-full'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer