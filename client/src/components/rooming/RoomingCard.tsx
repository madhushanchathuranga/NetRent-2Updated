import { bathIcon, bedIcon, garageIcon, homeIcon, markerBlackIcon, roomIcon } from "../../assets/icons";


interface RoomingCardProps {
    data: {
        id: number;
        title: string;
        location: string;
        category: string;
        provider: string;
        price: number;
        img: string;
        bedrooms: number;
        bathrooms: number;
        garageSpaces: number;
        rooms: number;
        image: string;
    }
}
const RoomingCard = ({ data }: RoomingCardProps) => {
    return (
        <a href={`/rooming/${data.id}/${data.title.replace(/ /g, '-').toLowerCase()}`}
        className="w-full h-[260px] max-w-[608px] bg-white rounded-[20px] border-[1px] border-[#F2F2F2] p-4 flex flex-row gap-4">
            <div className="size-[230px] rounded-[10px] overflow-hidden flex items-center justify-center">
                <img src={data.image} alt="Rooming" className="object-cover object-center w-full h-full" />
            </div>
            <div className="w-[calc(100%-230px)] flex flex-col justify-between p-3 rounded-[10px]  bg-[#D9D9D9]/20 h-full border-[#000000]/20 border-[1px]">
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <p className="text-[#2D2D2D] text-[16px] font-bold">
                                ${data.price > 1000 ? data.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : data.price}
                            </p>
                            <p className="text-[#2d2d2d] text-[min(5vw,12px)] font-bold">
                                {data.provider}
                            </p>
                        </div>

                        <div className="w-[122px] h-[24px] rounded-[5px] border-black/20 border-[1px] bg-[#D9D9D9]/20 flex flex-row gap-2 items-center justify-center">
                            <img src={homeIcon} alt="home icon" className="size-[10px] filter grayscale brightness-0" />
                            <p className="text-[12px] text-black font-bold">
                                {data.rooms} Room Left
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-[#CCCCCC]" />

                    <div className="w-full flex flex-col pt-2 gap-3">
                        <div className="flex flex-col agp-1">
                            <h2 className="text-[#2D2D2D] text-[min(3vw,14px)] xl:text-[min(3vw,12px)] font-bold">
                                {data.title}
                            </h2>

                            <div className='flex flex-row gap-1 items-center'>
                                <img src={markerBlackIcon} alt='marker icon' className='size-[9px]' />
                                <p className='text-[11px] text-[#2d2d2d]'>
                                    {data.location.length > 45 ? data.location.slice(0, 45) + '...' : data.location}
                                </p>
                            </div>
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

                            <div className='w-[48px] h-[25px] bg-white rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                                <img src={roomIcon} alt='Bed icon' className='size-[15px]' />
                                <p className='text-[13px] text-[#757575]'>
                                    {data.rooms}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row ice justify-center">
                    <button 
                    onClick={(e) =>{
                        e.stopPropagation()
                    }}
                    className="w-full h-[30px] bg-[#4BAE4F] rounded-l-full rounded-r-full text-white text-[12px] font-bold cursor-pointer">
                        Free to message
                    </button>
                </div>
            </div>
        </a>
    )
}

export default RoomingCard