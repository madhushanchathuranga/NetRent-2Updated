import { bathIcon, bedIcon, checkCircleGreenIcon, featureIcon, garageIcon, homeIcon, inquireIcon, markerBlackIcon, starIcon, verifiedIcon } from '../../assets/icons'
import { useEffect, useRef, useState } from 'react';
import { whiteLogo } from '../../assets/logos';
import toast from 'react-hot-toast';
import { gsap } from 'gsap';
interface InquiryData {
    data : {
        name: string;
        licenseNo: string;
        rating: number;
        reviewCount: number;
        profileImage: string;
        verified: boolean;
        title: string;
        location: string;
        category: string;
        description: string;
        bedrooms: number;
        bathrooms: number;
        garageSpaces: number;
        landSize: string;
        features: string[];
        propertyImages: string[];
    }
}
const InquireForm = ({ data }: InquiryData) => {
    const [inquireSuccessModal, setInquireSuccessModal] = useState(false);
    const [inquiryData, setInquiryData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        message: ''
    })

    const modalRef = useRef(null);

    useEffect(() => {
        if (inquireSuccessModal) {
            gsap.fromTo(modalRef.current, 
                { y: '100%', opacity: 0 }, 
                { y: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [inquireSuccessModal]);
    
    return (
        <>
            <div className='w-full flex flex-col rounded-[16px] bg-white overflow-hidden'>
                <div className='w-full flex flex-row justify-between items-center p-3 h-[60px] bg-gradient-to-l to-[#247ED6] from-[#8CC5F6]'>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={inquireIcon} alt='Inquire icon' className='w-[22px] h-[22px]' />
                        <h2 className='text-white text-[20px] font-bold'>
                            Inquire Now
                        </h2>
                    </div>

                    <div className=' px-2 w-fit min-w-[48px] h-[22px] rounded-l-full rounded-r-full bg-[#2d2d2d] text-white flex flex-row items-center justify-center gap-1'>
                        <img src={homeIcon} alt='Home icon' className='size-[11px]' />
                        <p className='text-[13px]'>
                            {data.category}
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-3 p-4'>
                    <div className='w-full h-full flex flex-col-reverse md:grid md:grid-cols-2 gap-7'>
                        <div className='flex flex-col w-full gap-2 '>
                            <div className='w-full flex flex-col items-center sm:items-start sm:flex-row gap-3 md:gap-2'>
                                <div className='size-[min(40vw,90px)] relative'>
                                    <div className='size-[min(40vw,90px)] overflow-hidden  rounded-full bg-gray-200 flex items-center justify-center'>
                                        <img src={data.profileImage} alt='home icon' className='size-full' />
                                    </div>
                                    {data.verified && <img src={verifiedIcon} alt='verified icon' className="absolute -top-0 -right-1 size-[26px] z-10 " />}
                                </div>
                                <div className='sm:w-[calc(100%-90px)] flex-col gap-2 items-center sm:items-start'>
                                    <h2 className='text-[#2d2d2d] text-[22px] '>
                                        {data.name.length > 12 ? data.name.slice(0, 11) + '...' : data.name}
                                    </h2>

                                    <div className='w-full max-w-[150px] flex flex-row items-center gap-2 border-[#DEDEDE] border-[1px] rounded-[7px] p-1'>
                                        <div className='flex flex-col items-center leading-5'>
                                            <p className='text-black text-[16px] font-bold'>
                                                {data.rating}
                                            </p>
                                            <div className='flex flex-row gap-[2px]'>
                                                {Array(3).fill(0).map((_, index) => (
                                                    <div key={index} className='size-[8px]'>
                                                        <img src={starIcon} alt='star icon' className='size-[8px]' />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center text-[11px]'>
                                            ({data.reviewCount} reviews)
                                        </div>
                                    </div>

                                    <div className='w-full flex pt-1'>
                                        <p className='text-[12px] text-[#2d2d2d]'>
                                            License No : {data.licenseNo}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className='w-[calc(100%-64px)] text-[min(5vw,20px)] text-[#2d2d2d] font-bold'>
                                {data.title.length > 60 ? data.title.slice(0, 60) + '...' : data.title}
                            </h2>

                            <div className='flex flex-row gap-1 items-center'>
                                <img src={markerBlackIcon} alt='marker icon' className='size-[12px]' />
                                <p className='text-[min(4vw,14px)] text-[#2d2d2d]'>
                                    {data.location.length > 45 ? data.location.slice(0, 45) + '...' : data.location}
                                </p>
                            </div>

                            <div className='w-full flex flex-row gap-2'>
                                <div className='w-[48px] h-[25px] bg-white rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                                    <img src={bedIcon} alt='Bed icon' className='size-[15px]' />
                                    <p className='text-[13px] text-[#757575]'>
                                        {data.bedrooms}
                                    </p>
                                </div>

                                <div className='w-[48px] h-[25px] bg-white rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                                    <img src={bathIcon} alt='Bed icon' className='size-[15px]' />
                                    <p className='text-[13px] text-[#757575]'>
                                        {data.bathrooms}
                                    </p>
                                </div>

                                <div className='w-[48px] h-[25px] bg-white rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                                    <img src={garageIcon} alt='Bed icon' className='size-[15px]' />
                                    <p className='text-[13px] text-[#757575]'>
                                        {data.garageSpaces}
                                    </p>
                                </div>

                                <div className='w-[78px] h-[25px] bg-white rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                                    <img src={featureIcon} alt='Bed icon' className='size-[15px]' />
                                    <p className='text-[13px] text-[#757575]'>
                                        {data.landSize}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full rounded-[14px] h-[229px]'>
                            <img src={data.propertyImages[0]} alt='Property' className='w-full h-full object-cover rounded-[14px]' />
                        </div>
                    </div>

                    <div className='w-full flex flex-row items-center justify-center py-2'>
                        <div className='w-full h-[1px] bg-black/10' />
                    </div>

                    <div className='w-full flex flex-col'>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            if (inquiryData.name === '' || inquiryData.phoneNumber === '' || inquiryData.message === '') {
                                toast.error('Please fill all the fields');
                                return;
                            }
                            setInquireSuccessModal(true);
                        }} className='w-full flex flex-col gap-6'>
                            <div className='w-full grid sm:grid-cols-2 gap-4 sm:gap-10'>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                                    value={inquiryData.name}
                                    className='w-full h-[40px] border-[1px] text-[14px] border-black/20 rounded-[10px] py-2 px-4 bg-[#d9d9d9]/20 placeholder:text-[#2d2d2d] focus:outline-none'
                                />

                                <input
                                    type="number"
                                    placeholder='Phone Number'
                                    onChange={(e) => setInquiryData({ ...inquiryData, phoneNumber: e.target.value })}
                                    value={inquiryData.phoneNumber}
                                    className='w-full h-[40px] border-[1px] text-[14px] border-black/20 rounded-[10px] py-2 px-4 bg-[#d9d9d9]/20 placeholder:text-[#2d2d2d] focus:outline-none'
                                />
                            </div>

                            <input
                                type="email"
                                placeholder='Email'
                                onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                                value={inquiryData.email}
                                className='sw-full m:w-[calc(50%-20px)] h-[40px] border-[1px] text-[14px] border-black/20 rounded-[10px] py-2 px-4 bg-[#d9d9d9]/20 placeholder:text-[#2d2d2d] focus:outline-none'
                            />

                            <textarea
                                placeholder='Message'
                                onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                                value={inquiryData.message}
                                className='w-full h-[194px] border-[1px] text-[14px] border-black/20 rounded-[10px] py-2 px-4 bg-[#d9d9d9]/20 placeholder:text-[#2d2d2d] focus:outline-none'
                            />

                            <button
                                type='submit'
                                className='w-full h-[40px] bg-[#4BAE4F] cursor-pointer shadow-md text-white text-[14px] rounded-[10px]'>
                                Inquire Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {inquireSuccessModal && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 sm:p-0 z-[5000]'>
                    <div ref={modalRef} className='bg-white h-[320px] rounded-[20px] p-6 flex flex-col gap-7 sm:max-w-[550px]'>
                        <div className='w-full h-full flex flex-col gap-6 flex-grow'>
                            <div className='flex flex-row gap-3 items-center'>
                                <img src={checkCircleGreenIcon} alt='Inquire icon' className='w-[52px] h-[52px]' />
                                <div className='flex flex-col leading-8'>
                                    <h2 className='text-[20px] text-[#2d2d2d] font-bold'>
                                        Thank you for your inquiry,
                                    </h2>
                                    <p className='text-[32px] text-[#2d2d2d] font-bold'>
                                        {inquiryData.name}!
                                    </p>
                                </div>
                            </div>
                            <p className='text-[16px] text-black'>
                                Your inquiry for <span className=''>{data.title}</span> has been sent to {data.name}.
                            </p>

                            <p className='text-[12px] text-[807D83]'>
                                If you don’t hear back within 48 hours, please contact them directly.
                            </p>
                        </div>
                        <div className='flex flex-col gap-3 pt-3'>
                            <button
                                onClick={() => setInquireSuccessModal(false)}
                                className='w-full h-[36px] bg-[#4BAE4F] text-white text-[14px] cursor-pointer rounded-full'>
                                ok
                            </button>
                            <div className='w-full flex flex-row items-center justify-center gap-2'>
                                <p className='text-[10px] text-[#2d2d2d]'>
                                    Powered by
                                </p>
                                <img src={whiteLogo} alt='Home icon' className='w-[47px] h-[19px]' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default InquireForm