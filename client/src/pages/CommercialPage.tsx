import React from 'react'
import { cartIcon, dropdownIcon, leasedIcon, leaseIcon, soldIcon } from '../assets/icons'
import { c1Img, c2Img, c3Img } from '../assets/images'
import PropertySlider from '../components/commercial/PropertySlider'

const CommercialPage = () => {
    const [search, setSearch] = React.useState('')
    const [activeTab, setActiveTab] = React.useState(0)
    const [selectedFilter, setSelectedFilter] = React.useState('')
    const [viewFilter, setViewFilter] = React.useState(false)
    const filterRef = React.useRef<HTMLDivElement>(null)
    const filterType = [
        "wharehouse, factory & industrial",
        "shop & retail",
        "offices",
        "development sites",
    ]
    const handleSearch = () => {
        console.log(search)
    }

    React.useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                setViewFilter(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    const data = [
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c1Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c2Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c3Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c1Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c2Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c3Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c1Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c2Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c3Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c1Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c2Img
        },
        {
            id: 14567545,
            title: 'Tenancy 3, 320 Ruthven Street, Toowoomba City, QLD 4350',
            bedrooms: 3,
            bathrooms: 2,
            garageSpaces: 2,
            landSize: "350m²",
            price: 19500,
            img: c3Img
        },
    ]
    return (
        <div className='w-full flex flex-col px-5 py-4 text-[#2d2d2d] sm:px-7 gap-[50px] md:px-20 sm:py-6 relative'>
            <section id='search' className='flex flex-col items-center justify-center h-full w-full relative'>
                <div className='w-full flex flex-col gap-4 items-center justify-end max-w-[750px] h-full relative'>
                    <div className='w-full flex flex-row p-2 gap-2  top-0 bg-white shadow-sm max-w-[740px] rounded-[20px]'>
                        {/* Tabs */}
                        <div
                            onClick={() => setActiveTab(0)}
                            className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${activeTab === 0 ? 'to-[#FE8930] from-[#FFB05F]' : 'to-[#247ED6] from-[#8CC5F6]'} hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}>
                            <div className='size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center'>
                                <img src={cartIcon} alt='building icon' className='size-[20px]' />
                            </div>
                            <h2 className='text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5'>
                                Buy
                            </h2>
                        </div>

                        <div
                            onClick={() => setActiveTab(1)}
                            className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${activeTab === 1 ? 'to-[#FE8930] from-[#FFB05F]' : 'to-[#247ED6] from-[#8CC5F6]'} hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}>
                            <div className='size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center'>
                                <img src={leaseIcon} alt='building icon' className='size-[20px]' />
                            </div>
                            <h2 className='text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5'>
                                Lease
                            </h2>
                        </div>

                        <div
                            onClick={() => setActiveTab(2)}
                            className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${activeTab === 2 ? 'to-[#FE8930] from-[#FFB05F]' : 'to-[#247ED6] from-[#8CC5F6]'} hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}>
                            <div className='size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center'>
                                <img src={soldIcon} alt='building icon' className='size-[20px]' />
                            </div>
                            <h2 className='text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5'>
                                Sold
                            </h2>
                        </div>

                        <div
                            onClick={() => setActiveTab(2)}
                            className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${activeTab === 2 ? 'to-[#FE8930] from-[#FFB05F]' : 'to-[#247ED6] from-[#8CC5F6]'} hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}>
                            <div className='size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center'>
                                <img src={leasedIcon} alt='building icon' className='size-[20px]' />
                            </div>
                            <h2 className='text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5'>
                                Leased
                            </h2>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className='w-full p-4 rounded-[20px] flex flex-row items-center justify-center'>
                        <div className='w-full flex flex-col items-center sm:flex-row gap-3 '>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSearch();
                                }}
                                className='w-full flex flex-col items-center sm:flex-row gap-3'>
                                <div className='w-full max-w-[350px] bg-[#D9D9D9]/20 p-2 h-[56px] border-black/20 border-[1px] rounded-l-full rounded-r-full shadow-sm flex flex-row gap-2'>

                                    <input
                                        type="text"
                                        onChange={(e) => setSearch(e.target.value)}
                                        value={search}
                                        placeholder='Search suburb, postcode or state'
                                        className='w-[calc(100%-80px)] sm:w-[calc(100%-145px)] pl-3 bg-transparent outline-none text-[14px]' />

                                    <button
                                        type='submit'
                                        className='size-[20px] cursor-pointer rounded-full bg-primary w-[80px] sm:w-[145px] h-full flex items-center justify-center text-[14px] text-white'>
                                        Search
                                    </button>
                                </div>
                            </form>

                            <div
                                onClick={() => setViewFilter(!viewFilter)}
                                className='w-full max-w-[330px] bg-[#D9D9D9]/20 p-2 relative h-[56px] border-black/20 border-[1px] rounded-l-full rounded-r-full shadow-sm flex flex-row items-center gap-2'>
                                <div
                                    ref={filterRef}
                                    className='w-full flex flex-row gap-2 items-center'>
                                    <p className='text-[14px] text-[#757575] pl-4 w-[calc(100%-40px)] capitalize'>
                                        {selectedFilter || 'Property Type'}
                                    </p>
                                    <div className='size-[40px] bg-primary rounded-full flex items-center justify-center'>
                                        <img src={dropdownIcon} alt='building icon' className='w-[12px] h-[7px]' />
                                    </div>

                                    {
                                        viewFilter && (
                                            <div
                                                className='absolute top-[70px] left-0 w-full bg-white flex flex-col gap-3 border-black/20 border-[1px] shadow-lg rounded-[20px] p-3'>
                                                {
                                                    filterType.map((item, index) => (
                                                        <p
                                                            onClick={() => {
                                                                setSelectedFilter(item)
                                                                setViewFilter(false)
                                                            }}
                                                            key={index} className='text-[12px] text-[#757575] flex items-center justify-center h-[40px] border-black/20 border-[0.8px] bg-[#D9D9D9]/20 rounded-[10px] capitalize p-2 cursor-pointer hover:bg-[#D9D9D9]/20'>
                                                            {item}
                                                        </p>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='w-full flex flex-col gap-7'>
                <h2 className='text-[#2d2d2d] text-[18px] font-bold'>
                    Explore new properties
                </h2>

                <div className='w-full flex flex-row relative '>
                    <PropertySlider data={data} />
                </div>

                <div className='w-full flex flex-row relative '>
                    <PropertySlider data={data} />
                </div>
            </div>
        </div>
    )
}

export default CommercialPage