import { bulbIcon, chairIcon, keyIcon, missionIcon, saftyIcon } from "../assets/icons"
import { aboutHouse, aboutImg1, aboutImg2 } from "../assets/images"

const AboutPage = () => {
    const cardList = [
        {
            icon: chairIcon,
            title: "What’s going on behind the show!",
            content: 'At its base, Netrent Properties is a well-rounded real-estate agency platform that offers a full range of real estate services managed by a highly skilled and responsive team of professionals. We apply the full spectrum of our key competencies to bridge residential and commercial projects with the right customers. These projects can range from ground-up, acquired, or redeveloped projects looking for a single point destination to get the right elevation and support with property dealing.'
        },
        {
            icon: bulbIcon,
            title: "Built on the latest tech!",
            content: 'The system utilizes the finest marketplace technology, platform resources, and process machinery to assure quality and consistency of results at all levels. It puts across a finely curated list of property databases that is profusely drawn and precisely categorized to reveal the most relevant results, reducing the chance of erroneous matches and session fallouts to a close-to-nil possibility. The platform offers users to hit quick and accurate searches through advanced query filters, predictive triggers, and auto search suggestions, making it incredibly quick and effortless to get the best matches for search queries'
        },
        {
            icon: saftyIcon,
            title: "Safest deals happen at Netrent",
            content: 'Each service is vetted for authentic process application and credible listing practices powered by precise quality checks and multi-factor approvals to make it an authentic, reliable, and hassle-free service experience for its users. The system has a prompt support and assistance panel to help users with any query and set them through with a safe and smooth service experience on Netrent.'
        },
    ]
    return (
        <div className="w-full flex flex-col  text-[#2D2D2D] relative">
            <div className="md:hidden">
            <img src={aboutHouse} alt="About House" className="w-full md:w-[min(50vw,1100px)] xl:w-[min(90vw,1100px)] h-[min(50vw,518px)]" />
            </div>
            <div className="w-full flex flex-col relative px-5 py-4 sm:px-7 md:px-20 sm:py-[40px] overflow-hidden">
                <div className="w-full flex flex-col  gap-[50px] overflow-hidden">
                    <div className="flex flex-row gap-3 items-center relative z-50">
                        <h1 className=" text-[min(10vw,128px)]  font-bold">About</h1>
                        <div className="text-[min(5vw,49px)]  leading-[min(5vw,48px)]">
                            <p>NetRent</p>
                            <p>Properties</p>
                        </div>
                    </div>

                    <div className="w-full max-w-[600px] bg-[#DDDDDD] h-[1px] -mt-[40px] relative z-50" />

                    <div className="w-full md:max-w-[60%] lg:max-w-[521px] gap-[22px] flex flex-col relative z-50">
                        <h2 className="text-[#2D2D2D] text-[min(4vw,20px)]  font-bold capitalize">
                            Your one-stop property search destination in Australia
                        </h2>
                        <p className="text-[#757575] text-[min(4vw,16px)] ">
                            Netrent Properties is a pro-domain property search and agency services platform in Australia. It is designed to deliver a digital system connecting users to buy, sell, and rent properties interacting with the local prospects.
                        </p>
                        <p className="text-[#757575] text-[min(4vw,16px)] ">
                            Netrent services are primarily segregated across four major divisions – Property Management, Business Sales, Commercial Selling, and Residential Selling. The platform offers a unified single-window service interface with interactive features to make real-estate dealing a sure digital bet for Australian neighborhoods.
                        </p>
                    </div>
                    <div className="w-fit hidden md:flex flex-row md:absolute bottom-0 right-[-20px]">
                        <img src={aboutHouse} alt="About House" className="w-full md:w-[min(50vw,1100px)] xl:w-[min(90vw,1100px)] h-[min(50vw,518px)]" />
                        <div className="w-full hidden md:block bg-gradient-to-l to-[#f6f5f7] from-60% from-transparent h-[518px] absolute z-[10]" />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-[30px] items-center py-12 px-5  sm:px-7 md:px-20 sm:py-[40px] ">
                {
                    cardList.map((card, index) => (
                        <div key={index} className="w-full flex flex-col bg-[#F2F2F2] gap-4 border-[1px] border-[#D8D8D8] p-6 rounded-[26px] items-center md:max-w-[851px]">
                            <div className="w-full flex flex-row gap-5 items-center">
                                <div className="size-[min(10vw,44px)] bg-[#4BAE4F] flex items-center justify-center rounded-full">
                                    <img src={card.icon} alt="Icon" className="size-[18px] sm:size-[25px]" />
                                </div>
                                <h3 className="text-[#2D2D2D] text-[min(6vw,20px)] font-bold w-[calc(100%-44px)]">{card.title}</h3>
                            </div>
                            <p className="text-[#757575] text-[min(5vw,14px)] text-justify">{card.content}</p>
                        </div>
                    ))
                }
            </div>

            <div className="w-full flex flex-col gap-[10px] items-center py-12  sm:px-7 md:px-20 sm:py-[40px] ">
                <div className="w-full flex flex-col-reverse lg:flex-row gap-7  p-6 rounded-[26px] items-center md:max-w-[851px]">
                    <div className="flex items-center justify-center ">
                        <img src={aboutImg1} alt="Icon" className="h-[min(40vw,176px)] w-full md: max-w-[390px]" />
                    </div>
                    <div className="w-full lg:w-[calc(100%-390px)] flex flex-col items-center md:items-start gap-3 leading-5">
                        <img src={missionIcon} alt="Icon" className="size-[54px] " />
                        <h2 className="text-[#2D2D2D] text-[20px] font-bold capitalize">
                            The Underlying Mission
                        </h2>

                        <p className="text-[#757575] text-[14px]">
                            We are on the mission to build solutions that help people connect with the finest digital possibilities bringing together innovative service platform ideas and integrated tech to build people-empowering systems at the pace of trend.
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col-reverse lg:flex-row gap-7  p-6 rounded-[26px] items-center md:max-w-[851px]">
                    <div className="flex items-center justify-center ">
                        <img src={aboutImg2} alt="Icon" className="h-[min(40vw,216px)] w-full md: max-w-[390px]" />
                    </div>
                    <div className="w-full lg:w-[calc(100%-390px)] flex flex-col items-center md:items-start gap-3 leading-5">
                        <img src={keyIcon} alt="Icon" className="size-[54px] " />
                        <h2 className="text-[#2D2D2D] text-[20px] font-bold capitalize">
                            Our Key Values
                        </h2>

                        <p className="text-[#757575] text-[14px]">
                            We keep the motive of service and commitment towards quality at the core of everything we do. Building progressive digital communities on tech-led ideas is one of our strengths, and we keep dwelling on it to create leading business opportunities and higher customer value through disruptive service platforms like Netrent.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage