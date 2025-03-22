import { testUser } from '../../assets/images'
import { checkCircleGreenIcon, eyeIcon, fbIcon, inIcon, starIcon, tiktokIcon, verifiedIcon, ytIcon } from '../../assets/icons'
import { useState } from 'react'
import PropertyAppraisalModal from './PropertyAppraisalModal'

const AgentCard = () => {
    const [showPropertyAppraisalModal, setShowPropertyAppraisalModal] = useState(false)
    const data = {
        name: 'John Smith',
        phone: '1234567890',
        email: 'abc@1234.com',
        licenseNo: '4501234',
        image: testUser,
        verified: true,
        fbLink: 'https://www.facebook.com/',
        linkedInLink: 'https://www.linkedin.com/',
        youtubeLink: 'https://www.youtube.com/',
        tiktokLink: 'https://www.tiktok.com/',
        totalSold: 10,
        totalRented: 20,
        totalSelected: 50,
        views: 200,
        rating: 4.2,
    }
    return (
        <>
        <div className='w-full h-[538px] max-w-[258px]  bg-white rounded-[20px] flex flex-col px-5 py-3 gap-1 border-[#F2F2F2] border-[1px]'>
            <h2 className='text-[min(3vw,16px)] text-[#2d2d2d]'>
                Featured
            </h2>
            <div className='w-full flex flex-col h-full items-center gap-2'>
                <div className='size-[120px] rounded-full bg-gray-200 overflow-hidden flex items-center justify-center'>
                    <img src={data.image} alt='user' className='w-full h-full object-cover' />
                </div>

                <div className=' w-fit min-w-[156px] flex items-center h-[24px] border-[#f2f2f2] border-[1px] bg-white rounded-l-full rounded-r-full relative'>
                    <h2 className='text-[min(3vw,12px)] pl-[30px] text-[#2d2d2d] font-medium pr-2'>
                        License No: {data.licenseNo.length > 7 ? `${data.licenseNo.slice(0, 7)}...` : data.licenseNo}
                    </h2>
                    <img src={verifiedIcon} alt='verified' className='w-[30px] h-[30px] absolute -left-2' />
                </div>

                <div className='fllex flex-col gap-1 items-center'>
                    <h2 className='text-[min(3vw,24px)] text-[#2d2d2d] font-bold text-center'>
                        {data.name}
                    </h2>
                    <p className='text-[min(3vw,14px)] text-[#2d2d2d] font-medium text-center'>
                        {data.phone.slice(0, 3)}  {data.phone.slice(3, 6)} ****
                    </p>

                    <p className='text-[min(3vw,14px)] text-[#2d2d2d] font-medium text-center'>
                        {data.email}
                    </p>
                </div>

                <div className='w-full flex flex-row items-center justify-center gap-2'>
                    <a href={data.fbLink} target='_blank' rel='noreferrer'>
                        <img src={fbIcon} alt='facebook' className='w-[16px] h-[16px]' />
                    </a>
                    <a href={data.youtubeLink} target='_blank' rel='noreferrer' className='size-[16px] bg-black flex items-center justify-center rounded-full'>
                        <img src={ytIcon} alt='youtube' className='w-[9px] h-[6px]' />
                    </a>
                    <a href={data.linkedInLink} target='_blank' rel='noreferrer'>
                        <img src={inIcon} alt='linkedin' className='w-[16px] h-[16px]' />
                    </a>

                    <a href={data.tiktokLink} target='_blank' rel='noreferrer' className='size-[16px] bg-black flex items-center justify-center rounded-full'>
                        <img src={tiktokIcon} alt='tiktok' className='w-[9px] h-[10px]' />
                    </a>
                </div>

                <div className='w-full max-w-[176px] flex flex-row gap-7 justify-center items-center p-3 border-[1px] border-[#c0b8b8] rounded-[11px]'>
                    <div className='flex flex-col leading-5'>
                        <h2 className='text-[min(3vw,24px)] text-[#2d2d2d] font-bold'>
                            {
                                data.totalSold > 9 && data.totalSold <= 100
                                    ? `${Math.floor(data.totalSold / 10) * 10}+`
                                    : data.totalSold > 100 && data.totalSold <= 1000
                                        ? `${Math.floor(data.totalSold / 100) * 100}+`
                                        : data.totalSold > 1000
                                            ? `${Math.floor(data.totalSold / 1000) * 1000}+`
                                            : data.totalSold
                            }
                        </h2>
                        <div className='flex flex-row gap-1 items-center'>
                            <img src={checkCircleGreenIcon} alt='check' className='w-[12px] h-[12px]' />
                            <p className='text-[min(3vw,12px)] text-black font-medium'>
                                Sold
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col leading-5'>
                        <h2 className='text-[min(3vw,24px)] text-[#2d2d2d] font-bold'>
                            {
                                data.totalRented > 9 && data.totalRented <= 100
                                    ? `${Math.floor(data.totalRented / 10) * 10}+`
                                    : data.totalRented > 100 && data.totalRented <= 1000
                                        ? `${Math.floor(data.totalRented / 100) * 100}+`
                                        : data.totalRented > 1000
                                            ? `${Math.floor(data.totalRented / 1000) * 1000}+`
                                            : data.totalRented
                            }
                        </h2>
                        <div className='flex flex-row gap-1 items-center'>
                            <div className='flex flex-row items-center justify-center size-[12px] rounded-full bg-[#4BAE4F]'>
                                <img src={eyeIcon} alt='check' className='w-[8px] h-[8px]' />
                            </div>
                            <p className='text-[min(3vw,12px)] text-black font-medium'>
                                Rented
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full max-w-[232px] flex flex-row gap-4 justify-center items-center p-3 border-[1px] border-[#c0b8b8] rounded-[11px]'>
                    <div className='flex flex-col leading-5'>
                        <h2 className='text-[min(3vw,24px)] text-[#2d2d2d] font-bold'>
                            {
                                data.totalSelected > 9 && data.totalSelected <= 100
                                    ? `${Math.floor(data.totalSelected / 10) * 10}+`
                                    : data.totalSelected > 100 && data.totalSelected <= 1000
                                        ? `${Math.floor(data.totalSelected / 100) * 100}+`
                                        : data.totalSelected > 1000
                                            ? `${Math.floor(data.totalSelected / 1000) * 1000}+`
                                            : data.totalSelected
                            }
                        </h2>
                        <div className='flex flex-row gap-1 items-center'>
                            <img src={checkCircleGreenIcon} alt='check' className='w-[12px] h-[12px]' />
                            <p className='text-[min(3vw,12px)] text-black font-medium'>
                                Sold
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center leading-5'>
                        <p className='text-black text-[24px] font-bold'>
                            {data.rating}
                        </p>
                        <div className='flex flex-row gap-[2px]'>
                            {Array(3).fill(0).map((_, index) => (
                                <div key={index} className='size-[14px]'>
                                    <img src={starIcon} alt='star icon' className='w-[14px] h-[14px]' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col leading-5'>
                        <h2 className='text-[min(3vw,24px)] text-[#2d2d2d] font-bold'>
                            {
                                data.views > 9 && data.views <= 100
                                    ? `${Math.floor(data.views / 10) * 10}+`
                                    : data.views > 100 && data.views <= 1000
                                        ? `${Math.floor(data.views / 100) * 100}+`
                                        : data.views > 1000
                                            ? `${Math.floor(data.views / 1000) * 1000}+`
                                            : data.views
                            }
                        </h2>
                        <div className='flex flex-row gap-1 items-center'>
                            <div className='flex flex-row items-center justify-center size-[12px] rounded-full bg-[#4BAE4F]'>
                                <img src={eyeIcon} alt='check' className='w-[8px] h-[8px]' />
                            </div>
                            <p className='text-[min(3vw,12px)] text-black font-medium'>
                                Rented
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-[80px] h-[24px] cursor-pointer bg-white text-[10px] text-[#2d2d2d] border-[1px] border-[#C0B8B8] rounded-l-full rounded-r-full flex items-center justify-center'>
                    More Info
                </div>

                <button 
                onClick={() => setShowPropertyAppraisalModal(true)}
                className='w-full text-white text-[12px] font-bold cursor-pointer flex flex-row items-center justify-center bg-[#68BA6B] h-[32px] rounded-l-full rounded-r-full'>
                    Contact Now
                </button>
            </div>
        </div>
        <PropertyAppraisalModal show={showPropertyAppraisalModal} onClose={() => setShowPropertyAppraisalModal(false)} />
        </>
    )
}

export default AgentCard