import { useState } from 'react'
import BusinessFeaturedCard from '../components/business/BusinessFeaturedCard'
import { bisImg1, bisImg2, bisImg3, bisImg4 } from '../assets/images'
import { maxPriceIcon, minPriceIcon, searchGrayIcon } from '../assets/icons'

const BusinessPage = () => {
    const businesslands = [
        {
            id: 1,
            featured: true,
            price: 200000,
            title: '35135 Electrical Maintenance Business - Profit and Clients',
            location: 'Cannon Hill VLC',
            description: 'Now is your chance to cash in with revenue at the $300k mark and profits over 50%! Priced aggressively due to the vendor needing a quick sale, this business is perfect for existing electricians wanting to go out on their own or add...',
            link: '/business/1',
            image: bisImg1
        },
        {
            id: 2,
            featured: true,
            price: 200000,
            title: '35135 Electrical Maintenance Business - Profit and Clients',
            location: 'Cannon Hill VLC',
            description: 'Now is your chance to cash in with revenue at the $300k mark and profits over 50%! Priced aggressively due to the vendor needing a quick sale, this business is perfect for existing electricians wanting to go out on their own or add...',
            link: '/business/1',
            image: bisImg2
        },
        {
            id: 3,
            featured: true,
            price: 200000,
            title: '35135 Electrical Maintenance Business - Profit and Clients',
            location: 'Cannon Hill VLC',
            description: 'Now is your chance to cash in with revenue at the $300k mark and profits over 50%! Priced aggressively due to the vendor needing a quick sale, this business is perfect for existing electricians wanting to go out on their own or add...',
            link: '/business/1',
            image: bisImg3
        },
        {
            id: 4,
            featured: true,
            price: 200000,
            title: '35135 Electrical Maintenance Business - Profit and Clients',
            location: 'Cannon Hill VLC',
            description: 'Now is your chance to cash in with revenue at the $300k mark and profits over 50%! Priced aggressively due to the vendor needing a quick sale, this business is perfect for existing electricians wanting to go out on their own or add...',
            link: '/business/1',
            image: bisImg4
        },
        {
            id: 5,
            featured: true,
            price: 200000,
            title: '35135 Electrical Maintenance Business - Profit and Clients',
            location: 'Cannon Hill VLC',
            description: 'Now is your chance to cash in with revenue at the $300k mark and profits over 50%! Priced aggressively due to the vendor needing a quick sale, this business is perfect for existing electricians wanting to go out on their own or add...',
            link: '/business/1',
            image: bisImg1
        },
        {
            id: 6,
            featured: true,
            price: 200000,
            title: '35135 Electrical Maintenance Business - Profit and Clients',
            location: 'Cannon Hill VLC',
            description: 'Now is your chance to cash in with revenue at the $300k mark and profits over 50%! Priced aggressively due to the vendor needing a quick sale, this business is perfect for existing electricians wanting to go out on their own or add...',
            link: '/business/1',
            image: bisImg2
        }
    ]

    const [searchResult, setSearchResult] = useState(businesslands)

    const [search, setSearch] = useState({
        search: '',
        location: '',
        minPrice: 0,
        maxPrice: 0,
    })

    const handleSearch = () => {
        if (search.search === '' && search.location === '' && search.minPrice === 0 && search.maxPrice === 0) {
            setSearchResult(businesslands)
            return
        }
        if (search.minPrice === 0 && search.maxPrice === 0) {
            const result = businesslands.filter((businessland) => {
                return businessland.title.toLowerCase().includes(search.search.toLowerCase()) &&
                    businessland.location.toLowerCase().includes(search.location.toLowerCase())
            })
            setSearchResult(result)
            return
        }
        const result = businesslands.filter((businessland) => {
            return businessland.title.toLowerCase().includes(search.search.toLowerCase()) &&
                businessland.location.toLowerCase().includes(search.location.toLowerCase()) &&
                businessland.price >= search.minPrice &&
                businessland.price <= search.maxPrice
        })
        setSearchResult(result)
    }
    return (
        <div className='w-full flex flex-col px-5 py-4 sm:px-7 md:px-20 sm:py-6'>
            <div className="flex flex-col items-center lg:grid  lg:grid-cols-3 gap-10 w-full h-full">
                <aside className="self-start gap-4 sm:px-5 lg:sticky w-full   top-[24px] col-span-1  flex flex-col items-center lg:items-start h-fit">
                    <div className='w-full max-w-[514px]'>
                        <h2 className="text-[#2D2D2D] text-[16px] font-bold capitalize text-center">
                            Current Criteria:
                        </h2>
                    </div>

                    <div className='w-full max-w-[514px] flex flex-col p-6 bg-white border-[1px] border-black/20 shadow-sm rounded-[16px]'>
                        <form
                            action={() => handleSearch()}
                            className='w-full flex flex-col gap-5'>
                            <div className='w-full h-[36px] border-black/20 border-[1px] rounded-l-full rounded-r-full shadow-sm p-2 flex flex-row gap-2'>
                                <div className='size-[20px] rounded-full '>
                                    <img src={searchGrayIcon} alt='Icon' className='size-[20px]' />
                                </div>
                                <input
                                    type="text"
                                    placeholder='Search Business'
                                    onChange={(e) => setSearch({ ...search, search: e.target.value })}
                                    value={search.search}
                                    className='w-[calc(100%-28px)] bg-transparent outline-none text-[14px]' />
                            </div>

                            <div className='w-full h-[36px] border-black/20 border-[1px] rounded-l-full rounded-r-full shadow-sm p-2 flex flex-row gap-2'>
                                <div className='size-[20px] rounded-full '>
                                    <img src={searchGrayIcon} alt='Icon' className='size-[20px]' />
                                </div>
                                <input
                                    type="text"
                                    onChange={(e) => setSearch({ ...search, location: e.target.value })}
                                    value={search.location}
                                    placeholder='Location'
                                    className='w-[calc(100%-28px)] bg-transparent outline-none text-[14px]' />
                            </div>

                            <div className='w-full flex flex-row gap-3'>
                                <div className='w-full h-[36px] border-black/20 border-[1px] rounded-l-full rounded-r-full shadow-sm p-2 flex flex-row gap-2'>
                                    <div className='size-[20px] rounded-full '>
                                        <img src={minPriceIcon} alt='Icon' className='size-[20px]' />
                                    </div>
                                    <input
                                        type="number"
                                        placeholder='Min Price'
                                        onChange={(e) => setSearch({ ...search, minPrice: parseInt(e.target.value) })}
                                        className='w-[calc(100%-28px)] bg-transparent outline-none text-[14px]' />
                                </div>

                                <div className='w-full h-[36px] border-black/20 border-[1px] rounded-l-full rounded-r-full shadow-sm p-2 flex flex-row gap-2'>
                                    <div className='size-[20px] rounded-full '>
                                        <img src={maxPriceIcon} alt='Icon' className='size-[20px]' />
                                    </div>
                                    <input
                                        type="number"
                                        placeholder='Max Price'
                                        onChange={(e) => setSearch({ ...search, maxPrice: parseInt(e.target.value) })}
                                        className='w-[calc(100%-28px)] bg-transparent outline-none text-[14px]' />
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='w-full h-[36px] bg-primary font-medium text-[14px] rounded-full flex items-center justify-center text-white cursor-pointer'>
                                Search
                            </button>
                        </form>
                    </div>

                    <div className='w-full max-w-[514px] text-[#757575] h-[400px] gap-4 text-[12px] flex flex-col p-6 bg-white border-[1px] border-black/20 shadow-sm rounded-[16px]'>
                        <p className=''>
                            Search Businesses For Sale to find your perfect business for sale in Australia.
                        </p>

                        <div className=''>
                            Browse our list of <a href="" className='underline'> Franchises for sale.</a>
                        </div>
                        <p className=''>
                            Looking to sell your business? <br />
                            Since 1987 we have thousands of business owners sell for a fraction of traditional fees. <br />
                            Business For Sale can help you - Sell My Business
                        </p>

                        <div className=''>
                            Need a Business Broker to help you sell a business? <br /> <a href="" className='underline'> Find A Business Broker</a> near you.
                        </div>
                    </div>
                </aside>
                <main className="col-span-2 w-full max-w-[514px]  h-full">
                    <div className='w-full col-span-2 pb-4 flex flex-col sm:flex-row items-center justify-between'>
                        <h2 className="text-[#2D2D2D] text-[14px] sm:text-[16px] font-bold text-center">
                            Business for Sale
                        </h2>
                        <p className="text-[#2D2D2D] text-[14px] sm:text-[16px] font-bold text-center">
                            165 Businesses for sale in Queensland
                        </p>
                    </div>
                    <div className='w-full h-full flex flex-col gap-[36px]'>
                        {
                            searchResult.map((businessland) => (
                                <BusinessFeaturedCard key={businessland.id} data={businessland} />
                            ))
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}

export default BusinessPage