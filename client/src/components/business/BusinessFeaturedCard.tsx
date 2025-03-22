import { markerBlackIcon } from '../../assets/icons';

interface BusinessFeaturedCardProps {
    data: {
        id: number;
        featured: boolean;
        price: number;
        title: string;
        location: string;
        description: string;
        link: string;
        image: string;
    }
}
const BusinessFeaturedCard = ({ data }: BusinessFeaturedCardProps) => {
    return (
        <div className='w-full flex flex-col h-[420px] sm:h-[386px] rounded-[16px] bg-white border-black/20 border-[1px] shadow-sm py-4 gap-4'>
            <div className={`w-full flex flex-row gap-4 ${data.featured ? 'justify-between' : 'justify-end'} items-center`}>
                {data.featured && <div className='w-[100px] sm:w-[126px] h-[28px] bg-[#4BAE4F] overflow-hidden relative rounded-r-md flex items-center justify-center'>
                    <h3 className='text-white text-[12px] sm:text-[15px] font-bold'>
                        Featured
                    </h3>
                    <div className='size-[28px] absolute bg-white rotate-45 right-[-20px]' />
                </div>}
                <div className='flex flex-col-reverse  sm:flex-row gap-2 sm:gap-4 items-center pr-4'>
                    <p className='text-[#2D2D2D] text-[16px]'>
                        <span className=''>
                            $
                        </span>
                        {data.price > 1000
                            ? data.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                            : data.price}
                    </p>

                    <div className='w-[113px] h-[30px] text-[14px] rounded-l-full rounded-r-full border-[1px] border-black/20 flex items-center justify-center cursor-pointer'>
                        Contact
                    </div>
                </div>
            </div>
            <div className='w-full h-[320px] sm:h-[170px] flex items-center justify-center'>
                <img src={data.image} alt='Business' className='object-cover object-center w-full h-full' />
            </div>
            <div className='px-4 flex flex-col gap-2'>
                <h2 className='text-[#2D2D2D] text-[14px] sm:text-[16px] font-medium'>
                    {data.title}
                </h2>
                <div className='flex flex-row items-center gap-3'>
                    <div className='size-[24px] sm:size-[28px] bg-[#e4e4e4] flex items-center justify-center rounded-full'>
                        <img src={markerBlackIcon} alt='Location' className='size-[12px] sm:size-[14px]' />
                    </div>
                    <p className='text-[12px] sm:text-[14px] '>
                        {data.location}
                    </p>
                </div>
                <p className='text-[10px] sm:ltext-[12px] text-[#757575]'>
                    {data.description.length > 250 ? data.description.slice(0, 250) + '...' : data.description}
                </p>
            </div>
        </div>
    )
}

export default BusinessFeaturedCard