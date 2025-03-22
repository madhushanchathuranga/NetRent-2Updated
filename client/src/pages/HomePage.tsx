import React, { useState } from 'react'
import HeroSection from '../components/home/HeroSection'
import InfoCard from '../components/home/InfoCard'
import { buildingIcon } from '../assets/icons'
import { image1, image2 } from '../assets/images'

const HomePage = () => {
    const [search, setSearch] = useState({
        search1: '',
        search2: '',
        search3: '',
        search4: '',
        search5: '',
        search6: '',
        search7: '',
    })
    const infoCards = [
        {
            icon: buildingIcon,
            title: "Residential Property Sales",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
            videoSrc: image1,
            onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => { setSearch({ ...search, search1: e.target.value }) },
            searchButtonText: "Find Agent",
            searchPlaceholder: "Enter Your Suburb",
            searchValue: search.search1,
            onSearchClick: () => { console.log('Search 1') }
        },
        {
            icon: buildingIcon,
            title: "Residential Property Management",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
            videoSrc: image2,
            onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => { setSearch({ ...search, search2: e.target.value }) },
            searchButtonText: "Find Agent",
            searchPlaceholder: "Enter Your Suburb",
            searchValue: search.search2,
            onSearchClick: () => { console.log('Search 2') }
        },
        {
            icon: buildingIcon,
            title: "Commercial Property Sales",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
            videoSrc: image2,
            onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => { setSearch({ ...search, search3: e.target.value }) },
            searchButtonText: "Find Agent",
            searchPlaceholder: "Enter Your Suburb",
            searchValue: search.search3,
            onSearchClick: () => { console.log('Search 3') }
        },
        {
            icon: buildingIcon,
            title: "Commercial Property Management",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
            videoSrc: image2,
            onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => { setSearch({ ...search, search4: e.target.value }) },
            searchButtonText: "Find Agent",
            searchPlaceholder: "Commercial Property Management",
            searchValue: search.search4,
            onSearchClick: () => { console.log('Search 4') }
        },
        {
            icon: buildingIcon,
            title: "Buyers Agent",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
            videoSrc: image2,
            onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => { setSearch({ ...search, search5: e.target.value }) },
            searchButtonText: "Find Agent",
            searchPlaceholder: "Enter Your Suburb",
            searchValue: search.search5,
            onSearchClick: () => { console.log('Search 5') }
        },
        {
            icon: buildingIcon,
            title: "Rooming",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
            videoSrc: image2,
            onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => { setSearch({ ...search, search6: e.target.value }) },
            searchButtonText: "Find Agent",
            searchPlaceholder: "Enter Your Suburb",
            searchValue: search.search6,
            onSearchClick: () => { console.log('Search 6') }
        },
        {
            icon: buildingIcon,
            title: "Business Sales",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
            videoSrc: image2,
            onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => { setSearch({ ...search, search7: e.target.value }) },
            searchButtonText: "Find Agent",
            searchPlaceholder: "Enter Your Suburb",
            searchValue: search.search7,
            onSearchClick: () => { console.log('Search 7') }
        }
    ]
    return (
        <div className='w-full flex flex-col px-5 py-4 sm:px-7 md:px-20 sm:py-6'>
            <HeroSection />
            <div className='w-full flex flex-col gap-12 md:gap-[143px] py-7 items-center'>
            {
                infoCards.map((card, index) => (
                    <InfoCard
                        key={index}
                        direction={index % 2 === 0 ? 'LeftToRight' : 'RightToLeft'}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        videoSrc={card.videoSrc}
                        onSearchChange={card.onSearchChange}
                        searchButtonText={card.searchButtonText}
                        searchPlaceholder={card.searchPlaceholder}
                        searchValue={card.searchValue}
                        onSearchClick={card.onSearchClick} 
                    />
                ))
            }
            </div>
    </div>
    )
}

export default HomePage