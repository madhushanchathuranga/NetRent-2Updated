import React, { useEffect } from 'react'
import { agentIcon, commercialIcon, doorIcon, filterIcon2, homeIcon } from '../assets/icons';
import ImageSlider from '../components/agent/ImageSlider';
import { sl1Img, sl2Img, sl3Img, sl4Img } from '../assets/images';
import MapView from '../components/root/MapView';
import AgentSurroundingSuburbs from '../components/agent/AgentSurroundingSuburbs';
import AgentServices from '../components/agent/AgentServices';
import AgentMarketPlace from '../components/agent/AgentMarketPlace';
import AgentIntrest from '../components/agent/AgentIntrest';
import SignInModal from '../components/agent/SignInModal';
import { useSearchParams } from 'react-router-dom';


const AgentPage = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const [showLoginModal, setShowLoginModal] = React.useState(false);
    const sliderImages = [
        sl1Img,
        sl2Img,
        sl3Img,
        sl4Img
    ]

    
    const [searchParams] = useSearchParams()
    const [query] = React.useState(searchParams.get('query') || 'Cannon Hill')

    useEffect(() => {
        if(!searchParams.get('query') || searchParams.get('query') === '') {
            setShowLoginModal(true)
        }
    }, [])

    return (
        <>
        <div className='w-full h-full flex flex-col px-5 py-4 gap-10 sm:px-7 md:px-20 sm:py-6'>
            <section id='search' className='flex flex-col md:h-[300px] w-full relative'>
                <div className='w-full flex flex-col md:flex-row gap-3 '>
                    <div className='w-full md:w-2/3 flex flex-row h-[300px] overflow-hidden relative rounded-[20px]'>
                        <ImageSlider images={sliderImages} />
                        <div className='h-[40px] text-[20px] capitalize text-white w-full bg-white/20 backdrop-blur-sm absolute z-10 bottom-0 flex items-center p-3'>
                            {query}
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 h-[300px] flex items-center justify-center rounded-[20px] overflow-hidden'>
                        <MapView lat={-27.4688} lon={153.028} />
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-3 -mt-[50px] relative z-[1000]'>

                    <div className='w-full flex flex-col items-center justify-end max-w-[750px] h-full relative'>
                        <div className='w-full flex flex-row p-2 gap-2  bg-white  drop-shadow-lg max-w-[557px] rounded-[20px]'>
                            {/* Tabs */}
                            <div
                                onClick={() => setActiveTab(0)}
                                className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${activeTab === 0 ? 'to-[#FE8930] from-[#FFB05F]' : 'to-[#247ED6] from-[#8CC5F6]'} hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}>
                                <div className='size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center'>
                                    <img src={homeIcon} alt='building icon' className='size-[20px]' />
                                </div>
                                <h2 className='text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5'>
                                    Residential
                                </h2>
                            </div>

                            <div
                                onClick={() => setActiveTab(1)}
                                className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${activeTab === 1 ? 'to-[#FE8930] from-[#FFB05F]' : 'to-[#247ED6] from-[#8CC5F6]'} hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}>
                                <div className='size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center'>
                                    <img src={commercialIcon} alt='building icon' className='size-[20px]' />
                                </div>
                                <h2 className='text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5'>
                                    Commercial
                                </h2>
                            </div>

                            <a
                                href='/rooming'
                                className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${activeTab === 2 ? 'to-[#FE8930] from-[#FFB05F]' : 'to-[#247ED6] from-[#8CC5F6]'} hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}>
                                <div className='size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center'>
                                    <img src={doorIcon} alt='building icon' className='size-[20px]' />
                                </div>
                                <h2 className='text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5'>
                                    Rooming
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id='search' className='w-full flex flex-col gap-3 py-5'>
                <div className='w-full flex flex-row items-center justify-center relative z-20 gap-3'>
                    <h2 className='text-[min(3vw,34px)] text-black font-bold '>
                        We have
                    </h2>
                    <div className='bg-gradient-to-l p-2 to-[#247ED6] from-[#8CC5F6] min-w-[83px] h-[41px] rounded-l-full rounded-r-full items-center flex flex-row gap-3'>
                        <div className='size-[30px] rounded-full bg-white/20 border-[1px] border-white flex flex-row items-center justify-center'>
                            <img src={agentIcon} alt='agent icon' className='w-[15px] h-[16px]' />
                        </div>
                        <p className='text-white text-[min(3vw,32px)] font-bold'>
                            2
                        </p>
                    </div>
                    <h2 className='text-[min(3vw,34px)] text-black font-bold '>
                        agents listed
                    </h2>
                </div>
            </section>

            <section className='w-full h-full flex flex-col gap-4'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <h2 className='text-[min(3vw,30px)] text-black font-bold '>
                        Surrounding Suburbs
                    </h2>

                    <div className='w-full max-w-[285px] bg-white gap-3 cursor-pointer border-[#f2f2f2] border-[1px] p-2 rounded-l-full rounded-r-full flex flex-row items-center'>
                        <div className='size-[24px] border-[#f2f2f2] border-[1px] rounded-full flex items-center justify-center'>
                            <img src={filterIcon2} alt='search icon' className='w-[14px] h-[14px]' />
                        </div>
                        <p className='text-[min(3vw,12px)] text-[#2d2d2d] font-medium'>
                            Filter
                        </p>
                    </div>
                </div>

                <div className='w-full h-full flex flex-col '>
                    <AgentSurroundingSuburbs />
                </div>
            </section>

            <section className='w-full h-full flex flex-col gap-4'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <h2 className='text-[min(3vw,30px)] text-black font-bold '>
                        Services
                    </h2>
                </div>

                <div className='w-full flex flex-row overflow-x-auto'>
                    <AgentServices />
                </div>
            </section>

            <section className='w-full h-full flex flex-col gap-4'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <h2 className='text-[min(3vw,30px)] text-black font-bold '>
                        Market Place
                    </h2>
                </div>

                <div className='w-full flex flex-row overflow-x-auto'>
                    <AgentMarketPlace />
                </div>
            </section>

            <section className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <h2 className='text-[min(3vw,30px)] text-black font-bold '>
                        Expression of interest
                    </h2>
                </div>

                <div className='w-full flex flex-row overflow-x-auto'>
                    <AgentIntrest />
                </div>
            </section>
        </div>

        <SignInModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />

        </>
    )
}

export default AgentPage