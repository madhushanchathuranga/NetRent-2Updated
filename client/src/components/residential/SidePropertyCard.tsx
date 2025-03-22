import { bathIcon, bedIcon, featureIcon,  starIcon } from '../../assets/icons';

interface SidePropertyCardProps {
    data: {
        name: string;
        rating: number;
        reviewCount: number;
        profileImage: string;
        price: number;
        verified: boolean;
        location: string;
        bedrooms: number;
        bathrooms: number;
        garageSpaces: number;
        landSize: string;
        propertyImages: string[];
    }
}
const SidePropertyCard = ({ data }: SidePropertyCardProps) => {
    return (
        <div className='w-full flex flex-col font-robotopro rounded-[15px] bg-white shadow-sm h-fit pb-4 sm:p-0  sm:h-[220px] border-[#DBDBDB] border-[1px] overflow-hidden'>
            <div className='w-full h-[120px] sm:h-[147px] flex items-center justify-center relative'>
                <img src={data.propertyImages[0]} alt='Property' className='object-cover object-center w-full h-full' />
                <div className='absolute bottom-2 left-3 w-full flex flex-row gap-2'>
                    <div className='w-[48px] h-[25px] bg-white/50 backdrop-blur-sm rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                        <img src={bedIcon} alt='Bed icon' className='size-[15px] filter grayscale brightness-0' />
                        <p className='text-[13px] text-black'>
                            {data.bedrooms}
                        </p>
                    </div>

                    <div className='w-[48px] h-[25px] bg-white/50 backdrop-blur-sm  rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                        <img src={bathIcon} alt='Bed icon' className='size-[15px] filter grayscale brightness-0' />
                        <p className='text-[13px] text-black'>
                            {data.bathrooms}
                        </p>
                    </div>

                    {/* <div className='w-[48px] h-[25px] bg-white/50 backdrop-blur-sm  rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                            <img src={garageIcon} alt='Bed icon' className='size-[15px] filter grayscale brightness-0' />
                            <p className='text-[13px] text-black'>
                                {data.garageSpaces}
                            </p>
                        </div> */}

                    <div className='w-[78px] h-[25px] bg-white/50 backdrop-blur-sm  rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                        <img src={featureIcon} alt='Bed icon' className='size-[15px] filter grayscale brightness-0' />
                        <p className='text-[13px] text-black'>
                            {data.landSize}
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full  sm:h-[73px] gap-2 bg-white px-4 pt-4 sm:p-4 flex flex-col sm:flex-row sm:items-end justify-between'>
                <div className='flex flex-col sm:pb-2 gap-1'>
                    <h2 className='text-[#2D2D2D] text-[16px] font-bold'>
                        ${data.price > 1000 ? data.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : data.price}
                    </h2>
                    <p className='text-[10px] text-[#2d2d2d]'>
                        {data.location}
                    </p>
                </div>

                <div className='flex flex-row items-center z-10 gap-2 sm:gap-0 sm:flex-col sm:justify-end sm:items-end sm:pb-2 '>
                    <div className='flex flex-row items-center sm:justify-end relative z-10'>
                        <div className='size-[56px] sm:size-[65px] rounded-full border-[2px] border-white bg-white'>
                            <img src={data.profileImage} alt='Profile' className='rounded-full' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-[12px] text-[#2d2d2d]'>
                            {data.name}
                        </h3>
                        <div className='flex flex-row gap-1 sm:justify-end'>
                            <div className='flex flex-row gap-1 items-center justify-end'>
                                <img src={starIcon} alt='Star' className='size-[9px]' />
                                <p className='text-[10px] text-[#2d2d2d]'>
                                    {data.rating}
                                </p>
                            </div>
                            <p className='text-[10px] text-[#2d2d2d]'>
                                ({data.reviewCount} reviews)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidePropertyCard