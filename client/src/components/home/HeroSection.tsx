import { useState } from 'react'
import { callIcon, dollerIcon, googleIcon, starIcon } from '../../assets/icons'
import Search from '../root/Search'
import { whiteLogo } from '../../assets/logos'
import { homeVideo1 } from '../../assets/videos'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const [search, setSearch] = useState('')
    const services = [
        "Residential Property Sales",
        "Residential Property Management",
        "Commercial Property Sales",
        "Commercial Property management",
        "Buyers Agent",
        "Business  Sales",
        "Rooming",
    ]

    const navigate = useNavigate()

    const handleSearchAgent = () => {
        navigate(`/agent?query=${search}`)
    }
    return (
        <div className='w-full flex flex-col lg:flex-row gap-7 md:gap-10 font-robotopro '>
            <div className='flex flex-col w-full xl:max-w-1/2'>
                <div className='flex flex-row gap-4 items-end'>
                    <h2 className='text-[16px] md:text-[24px] xl:text-[30px] text-primary '>
                        Free Service for clients
                    </h2>
                    <div className=' py-2 px-4 w-[106px] h-[40px] md:pl-2 md:py-2 flex flex-row items-center gap-1 bg-white border-[#F0F0F0] border-[1px] rounded-l-full rounded-r-full'>
                        <div className='w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-[F3F3F3] flex items-center justify-center rounded-full'>
                            <img src={googleIcon} alt='icon' className='w-[12px] md:w-[20px] h-auto' />
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <img src={starIcon} alt='icon' className='w-[14px] md:w-[20px] h-auto' />
                            <p className='text-primary text-[18px] md:text-[20px]'>
                                4.5
                            </p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col py-2'>
                    <h1 className='text-primary text-[32px] md:text-[54px] font-bold'>
                        Find your local agent
                    </h1>
                    <div className='flex flex-col sm:flex-row gap-3 sm:items-center'>
                        <div className='bg-gradient-to-r to-[#ABDAFF] from-[#1E7AD4] w-[120px] pr-1  h-[48px] rounded-l-full rounded-r-full flex flex-row justify-center gap-2 p-2 items-center'>
                            <p className='text-white text-[24px] md:text-[32px] font-bold flex items-center justify-center'>
                                Sell
                            </p>
                            <div className='size-[34px] rounded-full border-[4px] border-white bg-transparent flex items-center justify-center'>
                                <img src={dollerIcon} alt='icon' className='w-[12px] h-auto' />
                            </div>
                        </div>
                        <div className='bg-gradient-to-r to-[#FFA426] from-[#FF8126] w-[132px] pr-1  h-[48px] rounded-l-full rounded-r-full flex flex-row justify-center gap-2 p-2 items-center'>
                            <p className='text-white text-[24px] md:text-[32px] font-bold flex items-center justify-center'>
                                Rent
                            </p>
                            <div className='size-[36px] rounded-full border-[4px] border-white bg-transparent flex items-center justify-center'>
                                <img src={dollerIcon} alt='icon' className='w-[12px] h-auto' />
                            </div>
                        </div>
                        <h1 className='text-primary text-[32px] md:text-[54px] font-bold'>
                            with ease!
                        </h1>
                    </div>
                </div>

                <div className='flex flex-col gap-4 pt-[51px]'>

                    <Search onChange={(e) => { setSearch(e.target.value) }} onClick={() => { handleSearchAgent() }} value={search} buttonText='Find Agent' placeholderText='Enter your postcode or suburb' />
                    <div className='w-full flex flex-row items-center justify-end gap-2'>
                        <p className='text-primary text-[11px] font-robotopro'>
                            Powerd by
                        </p>
                        <img src={whiteLogo} alt='logo' className='w-[56px] h-[24px]' />
                    </div>
                </div>

                <div className='flex flex-col gap-5 py-9'>
                    <h2 className='text-primary text-[28px] font-bold'>
                        Our Services - In Detail
                    </h2>
                    <div className='w-full flex flex-wrap gap-5'>
                        {
                            services.map((service, index) => (
                                <div key={index} className='bg-transparent text-primary border-primary border-[1px] py-3 px-10 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:bg-primary hover:text-white'>
                                    <p className='text-[16px]'>
                                        {service}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='w-full xl:w-1/2 flex flex-col gap-4  items-center'>
                <div className='flex items-center justify-center w-full lg:w-[490px] border-black border-[10px] rounded-[28px] overflow-hidden'>
                    <video className="object-fill scale-[165%] w-[100%] h-full" autoPlay loop muted>
                        <source src={homeVideo1} type="video/mp4" />
                    </video>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='flex flex-col gap-0 items-center'>
                        <p className='text-primary text-[12px]'>
                            Platform covers entire
                        </p>
                        <h2 className='text-primary text-[20px] font-bold'>
                            Queensland
                        </h2>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-2 bg-primary rounded-l-full rounded-r-full w-[110px] h-[36px]'>
                        <div className='flex items-center justify-center relative py-4'>
                            <div className='bg-white size-[18px] animate-ping rounded-full absolute z-0' />
                            <div className='flex items-center justify-center size-[22.5px] bg-white rounded-full'>
                                <img src={callIcon} alt='icon' className='size-[12px] relative z-10' />
                            </div>
                        </div>
                        <p className='text-white text-[18px] font-bold'>
                            123 456
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection