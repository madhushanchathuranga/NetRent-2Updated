import { filterIcon3, markerGrayIcon, urgentIcon, verfiedbatchIcon } from "../../assets/icons";
import { market1Img, market2Img } from "../../assets/images";
import JoinAgentCard from "./JoinAgentCard";
import Pagination from "./Pagination";


const AgentMarketPlace = () => {

    const data = [
        {
            title: "Furniture Coffee Table with 4 Chair",
            price: 40500,
            location: "Cannon Hill, Furniture",
            delivery: true,
            urgent: true,
            verified: true,
            image: market1Img
        },
        {
            title: "Furniture Coffee Table with 4 Chair",
            price: 40500,
            location: "Cannon Hill, Furniture",
            delivery: true,
            urgent: true,
            verified: true,
            image: market2Img
        },
        {
            title: "Furniture Coffee Table with 4 Chair",
            price: 40500,
            location: "Cannon Hill, Furniture",
            delivery: true,
            urgent: true,
            verified: true,
            image: market1Img
        },
    ]
    return (
        <div className="w-full h-full grid md:grid-cols-[365px_1fr] gap-4">
            <div className="w-full h-full  flex flex-col items-center  gap-4">
                <div className="w-full h-[538px]  flex flex-col max-w-[365px] bg-white  rounded-[20px] py-10 px-5 border-[#F2F2F2] border-[1px]">
                    <div className="w-full flex flex-row justify-between items-center">
                        <h2 className="text-[min(3vw,20px)] text-black font-bold  w-full ">
                            Market Place
                        </h2>
                        <div className="w-full max-w-[140px] h-[27px] rounded-l-full rounded-r-full flex items-center p-4 gap-3 border-[#D9D9D9] border-[1px] bg-[#f2f2f2]">
                            <img src={filterIcon3} alt="filter icon" className="w-[14px] h-[14px]" />
                            <p className="text-[min(3vw,10px)] text-[#2d2d2d] font-medium">
                                Furnitures
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-full flex-grow flex-col items-center justify-center pt-4 gap-2">
                        <h2 className="text-[min(3vw,16px)] text-black font-medium w-full ">
                            Furnitures
                        </h2>

                        <div className="w-full flex flex-col gap-3 pt-1 ">
                            {
                                data.map((item, index) => (
                                    <div key={index} className="w-full h-[118px] gap-2 bg-white border-[#f2f2f2] border-[1px] rounded-[10px] p-2 flex flex-row">
                                        <div className="size-[108px] rounded-[14px] overflow-hidden flex items-center justify-center">
                                            <img src={item.image} alt="market place" className="w-[100px] h-[100px]" />
                                        </div>
                                        <div className="w-[calc(100%-100px)] h-full flex flex-col justify-between">
                                            <div className="w-full flex flex-col gap-1">
                                                <p className="text-[min(3vw,12px)] text-black font-medium">
                                                    {item.title.length > 35 ? item.title.slice(0, 35) + "..." : item.title}
                                                </p>
                                                <div className="flex flex-row gap-1 items-center">
                                                    <img src={markerGrayIcon} alt="marker" className="w-[12px] h-[12px]" />
                                                    <p className="text-[min(3vw,12px)] text-[#2d2d2d] font-medium">
                                                        {item.location.length > 30 ? item.location.slice(0, 30) + "..." : item.location}
                                                    </p>
                                                </div>
                                                <div className="w-full flex flex-row flex-wrap gap-2">
                                                    {
                                                        item.urgent && (
                                                            <div className="bg-white border-[#F2F2F2] border-[1px] w-[67px] h-[19px] rounded-l-full rounded-r-full flex items-center justify-center p-1 gap-2">
                                                                <img src={urgentIcon} alt="urgent icon" className="w-[10px] h-[12px]" />
                                                                <p className="text-[min(3vw,10px)] text-[#757575] font-medium">
                                                                    Urgent
                                                                </p>
                                                            </div>
                                                        )
                                                    }

                                                    {
                                                        item.verified && (
                                                            <div className="bg-white border-[#F2F2F2] border-[1px] w-[110px] h-[19px] rounded-l-full rounded-r-full flex items-center justify-center p-1 gap-2">
                                                                <img src={verfiedbatchIcon} alt="verified icon" className="w-[12px] h-[12px]" />
                                                                <p className="text-[min(3vw,10px)] text-[#757575] font-medium">
                                                                    Verified member
                                                                </p>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>

                                            <div className="flex flex-row gap-3">
                                                <p className="text-[min(3vw,12px)] text-[#3AA61D] font-bold">
                                                    $ {item.price > 1000 ? item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : item.price}
                                                </p>

                                                {
                                                    item.delivery &&
                                                    <div className="bg-white border-[#F2F2F2] border-[1px] w-[60px] h-[19px] rounded-l-full rounded-r-full flex items-center justify-center p-1 gap-2">
                                                        <p className="text-[min(3vw,10px)] text-[#757575] font-medium">
                                                            Delivery
                                                        </p>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <Pagination totalPages={10} onPageChange={() => { }} />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap w-full h-full gap-4 justify-center md:justify-normal">
                <JoinAgentCard />
                <JoinAgentCard />
                <JoinAgentCard />
                <JoinAgentCard />
                <JoinAgentCard />
                <JoinAgentCard />
                <JoinAgentCard />
            </div>
        </div>
    )
}

export default AgentMarketPlace