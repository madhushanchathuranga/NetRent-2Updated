import { bathIcon, bedIcon, featureIcon } from '../../assets/icons';

interface CommercialPropertyCardProps {
    data: {
        id: number;
        title: string;
        bedrooms: number;
        bathrooms: number;
        garageSpaces: number;
        landSize: string;
        price: number;
        img: string;
    }
}
const CommercialPropertyCard = ({ data }: CommercialPropertyCardProps) => {
    return (
        <a 
        href={`/commercial/${data.id}/${data.title.replace(/ /g, '-').toLowerCase()}`}
        className='w-full max-w-[406px] h-fit max-h-[360px] sm:h-[300px] p-2 flex flex-col gap-2 bg-white border-black/20 rounded-[20px] border-[1px]'>
            <div className='w-full h-[170px] flex items-center justify-center rounded-[12px] overflow-hidden'>
                <img src={data.img} alt='Property' className='object-cover object-center w-full h-full' />
            </div>
            <div className='w-full flex flex-col p-2 h-[calc(100%-170px)]'>
                <div className='w-full flex-grow flex flex-col sm:flex-row gap-2 justify-between'>
                    <div className='w-full sm:w-2/3 flex flex-col'>
                        <h2 className='text-[#2D2D2D] text-[min(3vw,14px)] xl:text-[min(3vw,16px)] font-bold'>
                            {data.title.length > 90 ? data.title.slice(0, 90) + '...' : data.title}
                        </h2>
                    </div>
                    <div className='w-full sm:w-1/3 flex flex-col sm:items-end leading-6'>
                        <h2 className='text-[#4BAE4F] text-[min(5vw,20px)] font-bold'>
                            ${data.price > 1000 ? data.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : data.price}
                        </h2>
                        <p className='text-[min(3vw,10px)] text-[#2d2d2d]'>
                            GSM+ Outgoings
                        </p>
                    </div>
                </div>

                <div className='flex flex-row items-center z-10 gap-2 pt-2 sm:pt-3'>
                    <div className=' w-full flex flex-row gap-2'>
                        <div className='w-[48px] h-[25px] bg-[white/50] backdrop-blur-sm rounded-l-full rounded-r-full border-[1px] border-[#D4D4D4] items-center justify-center flex flex-row gap-2'>
                            <img src={bedIcon} alt='Bed icon' className='size-[15px] filter grayscale brightness-0' />
                            <p className='text-[13px] text-black'>
                                {data.bedrooms}
                            </p>
                        </div>

                        <div className='w-[48px] h-[25px] bg-[white/50] backdrop-blur-sm  rounded-l-full rounded-r-full border-[1px] border-[#D4D4D4] items-center justify-center flex flex-row gap-2'>
                            <img src={bathIcon} alt='Bed icon' className='size-[15px] filter grayscale brightness-0' />
                            <p className='text-[13px] text-black'>
                                {data.bathrooms}
                            </p>
                        </div>

                        {/* <div className='w-[48px] h-[25px] bg-[white/50] backdrop-blur-sm  rounded-l-full rounded-r-full border-[1px] border-[#D4D4D4] items-center justify-center flex flex-row gap-2'>
                            <img src={garageIcon} alt='Bed icon' className='size-[15px] filter grayscale brightness-0' />
                            <p className='text-[13px] text-black'>
                                {data.garageSpaces}
                            </p>
                        </div> */}

                        <div className='w-[78px] h-[25px] bg-[white/50] backdrop-blur-sm  rounded-l-full rounded-r-full border-[1px] border-[#D4D4D4] items-center justify-center flex flex-row gap-2'>
                            <img src={featureIcon} alt='Bed icon' className='size-[15px] filter grayscale brightness-0' />
                            <p className='text-[13px] text-black'>
                                {data.landSize}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CommercialPropertyCard