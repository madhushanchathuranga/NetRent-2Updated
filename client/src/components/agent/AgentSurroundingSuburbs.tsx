import { useSearchParams } from "react-router-dom";
import AgentCard from "./AgentCard";
import JoinAgentCard from "./JoinAgentCard";
import { useState } from "react";


const AgentSurroundingSuburbs = () => {

    const surroundingSuburbs = [
        "Moningside",
        "Murarrie",
        "Carina",
        "Seven Hills",
        "Cannon Hill",
        "tingalpa",
        "Wynnum",
        "Hemmant",
        "Balmoral",
    ]

    const [searchParams] = useSearchParams()
    const [query] = useState(searchParams.get('query') || 'Cannon Hill')
    return (
        <div className="w-full h-full grid md:grid-cols-[365px_1fr] gap-4">
            <div className="w-full h-full  flex flex-col items-center  gap-4">
                <div className="w-full h-[538px]  flex flex-col max-w-[365px] bg-white  rounded-[20px] py-10 px-5 border-[#F2F2F2] border-[1px]">
                    <h2 className="text-[min(3vw,20px)] text-black font-bold text-center w-full ">
                        Surrounding Suburbs
                    </h2>

                    <div className="w-full h-full flex-grow flex-col items-center justify-center ">
                        <div className="w-full h-full flex flex-col items-center justify-center gap-7">
                            <h2 className="text-[min(3vw,16px)] text-black font-medium text-center w-full ">
                                Suburbs around
                                <span className="text-[#4BAE4F] font-medium capitalize"> {query}</span>
                            </h2>
                            <div className="w-full flex flex-wrap gap-3 justify-center">
                                {surroundingSuburbs.map((suburb, index) => (
                                    <div key={index} className="w-fit px-4 h-[28px] border-[#F2F2F2] border-[1px] capitalize bg-white rounded-l-full rounded-r-full  flex items-center justify-center">
                                        <p className={`${suburb.toLowerCase() === query.toLowerCase() ? 'text-[#4BAE4F] ' : 'text-black'} text-[min(3vw,12px)]  font-medium`}>
                                            {suburb}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap w-full h-full gap-4 justify-center md:justify-normal">
                <AgentCard />
                <AgentCard />
                <AgentCard />
                <AgentCard />
                <AgentCard />
                <AgentCard />
                <AgentCard />
                <JoinAgentCard />
            </div>
        </div>
    )
}

export default AgentSurroundingSuburbs