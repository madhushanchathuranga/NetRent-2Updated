import { filterIcon3 } from "../../assets/icons";
import { serviceCard1Img, serviceCard2Img } from "../../assets/images";
import JoinAgentCard from "./JoinAgentCard";
import Pagination from "./Pagination";


const AgentServices = () => {
    const services = [
        serviceCard2Img,
        serviceCard1Img,
    ]
    return (
        <div className="w-full h-full grid md:grid-cols-[365px_1fr] gap-4">
            <div className="w-full h-full  flex flex-col items-center  gap-4">
                <div className="w-full h-[538px]  flex flex-col max-w-[365px] bg-white  rounded-[20px] py-10 px-5 border-[#F2F2F2] border-[1px]">
                    <div className="w-full flex flex-row justify-between items-center">
                        <h2 className="text-[min(3vw,20px)] text-black font-bold  w-full ">
                            Services
                        </h2>
                        <div className="w-full max-w-[140px] h-[27px] rounded-l-full rounded-r-full flex items-center p-4 gap-3 border-[#D9D9D9] border-[1px] bg-[#f2f2f2]">
                            <img src={filterIcon3} alt="filter icon" className="w-[14px] h-[14px]" />
                            <p className="text-[min(3vw,10px)] text-[#2d2d2d] font-medium">
                                Plumber
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-full flex-grow flex-col items-center justify-center pt-4 gap-2">
                        <h2 className="text-[min(3vw,16px)] text-black font-medium w-full ">
                            Plumber
                        </h2>

                        <div className="w-full flex flex-col gap-3 pt-1">
                            {
                                services.map((service, index) => (
                                    <div key={index} className="w-full flex flex-row items-center justify-center h-[180px]">
                                        <img src={service} alt="service card" className="w-full h-[180px]" />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <Pagination totalPages={10} onPageChange={() => { }} />
                </div>
            </div>

            <div className="flex flex-wrap w-full h-full gap-4 justify-center md:justify-normal">
                <JoinAgentCard />
                <JoinAgentCard />
                <JoinAgentCard />
                <JoinAgentCard />
                <JoinAgentCard />
            </div>
        </div>
    )
}

export default AgentServices