import { useState } from 'react'
import { arrowLeftWhiteIcon, filterIcon, homeIcon, searchGrayIcon } from '../assets/icons';
import ResidentialDatInfo from '../components/residential/ResidentialDatInfo';
import { pr1Img, pr2Img, pr3Img, r2Img, r3Img, r4Img, r5Img, r6Img, testUser2, } from '../assets/images';
import ResidentialViewSideCard from '../components/residential/ResidentialViewSideCard';

const ResidentialView = () => {
    // const { title, id } = useParams();
    // console.log(title, id)
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        console.log(search)
    }

    const sidePropertyData = [
        {
            name: "Emma Olivia",
            rating: 4.2,
            reviewCount: 15,
            profileImage: testUser2,
            price: 499000,
            verified: true,
            location: "200/42 Queen Street, Brisbane",
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            propertyImages: [pr2Img, r2Img, r3Img, r4Img, r5Img, r6Img]
        },
        {
            name: "Emma Olivia",
            rating: 4.2,
            reviewCount: 15,
            profileImage: testUser2,
            price: 499000,
            verified: true,
            location: "200/42 Queen Street, Brisbane",
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            propertyImages: [pr1Img, r2Img, r3Img, r4Img, r5Img, r6Img]
        },
        {
            name: "Emma Olivia",
            rating: 4.2,
            reviewCount: 15,
            profileImage: testUser2,
            price: 499000,
            verified: true,
            location: "200/42 Queen Street, Brisbane",
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "758m²",
            propertyImages: [pr3Img, r2Img, r3Img, r4Img, r5Img, r6Img]
        },
        
    ]
    return (
        <div className='w-full flex flex-col px-5 py-4 sm:px-7 md:px-20 sm:py-6 gap-10'>
            <section id='search' className='flex flex-col md:flex-row items-center gap-4 justify-start sm:h-[100px] w-full relative'>
                <a 
                    href='/residential'
                className='flex flex-row gap-2 items-center cursor-pointer'>
                    <img src={arrowLeftWhiteIcon} alt='Commercial icon' className='w-[9px] h-[15px] invert' />
                    <p className='text-[#2D2D2D] text-[15px] font-bold'>
                        Back to results
                    </p>
                </a>
                <div className='w-full flex flex-col items-center justify-end max-w-[814px] h-full relative'>
                    <div className='w-full flex flex-col sm:flex-row p-4 gap-4 items-cente border-[0.8px] border-black/20  bg-[#d9d9d9]/20 items-center rounded-[20px]'>
                        <div
                            className={` w-[210px] h-[64px] bg-gradient-to-l rounded-l-full rounded-r-full gap-2 group cursor-pointer to-[#247ED6] from-[#8CC5F6] hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-row items-center justify-center`}>
                            <div className='size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center'>
                                <img src={homeIcon} alt='building icon' className='size-[20px]' />
                            </div>
                            <h2 className='text-white text-[min(5vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5'>
                                Residential
                            </h2>
                        </div>

                        <div className='w-full flex flex-col sm:flex-row gap-3 '>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSearch();
                                }}
                                className='w-full flex flex-col sm:flex-row gap-3'>
                                <div className='w-full h-[36px] bg-white border-black/20 border-[1px] rounded-l-full rounded-r-full shadow-sm p-[7px] flex flex-row gap-2'>
                                    <div className='size-[20px] rounded-full'>
                                        <img src={searchGrayIcon} alt='Icon' className='size-[20px]' />
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e) => setSearch(e.target.value)}
                                        value={search}
                                        placeholder='Search suburb, postcode or state'
                                        className='w-[calc(100%-28px)] bg-transparent outline-none text-[14px]' />
                                </div>

                                <button
                                    type='submit'
                                    className='h-[36px] bg-white text-[#757575] text-[14px] cursor-pointer rounded-l-full rounded-r-full border-black/20 border-[1px] w-full sm:w-[107px] shadow-sm flex items-center justify-center'>
                                    Search
                                </button>
                            </form>

                            <div className='h-[36px] bg-white flex-row gap-1.5 cursor-pointer text-[#757575] text-[14px] rounded-l-full rounded-r-full border-black/20 border-[1px] w-full sm:w-[107px] shadow-sm flex items-center justify-center'>
                                <img src={filterIcon} alt='Icon' className='size-[14px]' />
                                Filter
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section id='result' className='w-full h-full flex flex-col py-4 relative'>
                <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-10 w-full h-full">
                    <main className="col-span-2 w-full xl:min-w-[750px] xl:max-w-[1000px] flex flex-col h-full gap-8">
                        <ResidentialDatInfo />
                    </main>

                    <aside className="self-start gap-4 sticky top-[4px] w-full sm:h-fit col-span-1 flex flex-col items-center lg:items-start">
                        
                        <h2 className='text-black text-[16px] font-medium'>
                        Residential
                        </h2>

                        {
                            sidePropertyData.map((data, index) => (
                                <ResidentialViewSideCard key={index} data={data} />
                            ))
                        }
                    </aside>
                </div>
            </section>
        </div>
    )
}

export default ResidentialView