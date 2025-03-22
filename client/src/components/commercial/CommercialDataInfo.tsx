import { useEffect, useRef, useState } from 'react';
import { c1Img, r1Img, r2Img, r3Img, r4Img, r5Img, r6Img, testUser } from '../../assets/images';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // Import ScrollToPlugin
import { arrowLeftWhiteIcon, arrowRightWhiteIcon, featureIcon2, homeIcon, markerBlackIcon } from '../../assets/icons';
import MapView from '../root/MapView';
import InquireForm from '../root/InquireForm';


// Register GSAP ScrollTo Plugin
gsap.registerPlugin(ScrollToPlugin);

const CommercialDataInfo = () => {
    const data = {
        name: "James Taylor",
        licenseNo: "4523456",
        rating: 4.1,
        reviewCount: 12,
        profileImage: testUser,
        verified: false,
        title: "Beautiful Suburban Home with Large Garden",
        location: "28/56 Ashgrove Avenue, Ashgrove",
        category: "House",
        description: "Beautifully crafted with timeless appeal, this dual-level property boasts exquisite interiors, fantastic entertainment options and a sought-after address. Ideally positioned close to Morningside Central Shopping Centre's conveniences and the Cannon Hill train station, this spectacular residence promises a truly enviable lifestyle.Greeting you with an attractive character facade and established front gardens, the home also showcases timber floors, lofty ceilings and a crisp white colour palette.On the property's ground level, a spacious open-plan living and dining area captures wonderful natural light. Flowing from a welcoming entry foyer illuminated by a grand void, this immaculate central space adjoins a brilliant kitchen displaying a breakfast bar, a walk-in pantry, Smartstone benchtops and ample cupboard storage. This sensational culinary space is also equipped with a stainless-steel dishwasher, rangehood and five-burner freestanding cooktop/oven.There is also a second living area or media room, plus a covered al fresco area leading to a fully-fenced grassed rear yard.Finishing the ground level is a powder room and a separate internal laundry, while a third living area and an attached balcony are upstairs. A versatile study nook is perfect for those who work or study from home.Undeniably luxurious, an ensuited master bedroom encompasses a walk-in robe. Three additional bedrooms featuring built-in robes are serviced by a well-appointed main bathroom, which has a separate bath, shower and toilet.Complete with a secure dual garage and plentiful storage, the residence also includes a gas hot water system, ducted air-conditioning, ceiling fans and carpeted bedroom floors.A stone's throw from the soon-to-be-reimagined Murarrie Recreation Ground and Bulimba's fashionable attractions, this exceptional home is near a slew of shops and dining options. Seven Hills Bushland Reserve's scenic walking tracks and the Hawthorne Ferry Terminal are minutes away.Falling within the Cannon Hill State School and Balmoral State High School catchment areas, this incredible property is also a short distance from Cannon Hill Anglican College, Saint Oliver Plunkett Primary School and Lourdes Hill College. Do not miss this exclusive opportunity - call to arrange an inspection today.DisclaimerThis property is being sold by auction or without a price and therefore a price guide cannot be provided. The website may have filtered the property into a price bracket for website functionality purposes.Disclaimer:We have in preparing this advertisement used our best endeavours to ensure the information contained is true and accurate, but accept no responsibility and disclaim all liability in respect to any errors, omissions, inaccuracies or misstatements contained. Prospective purchasers should make their own enquiries to verify the information contained in this advertisement.",
        bedrooms: 3,
        bathrooms: 2,
        garageSpaces: 1,
        landSize: "600m²",
        features: [
            "Large garden",
            "Patio",
            "Built-in wardrobes"
        ],
        location_lat: -27.470125,
        location_lon: 153.021072,
        aboutProperty: [
            "Living Areas 01",
        ],
        beadroomsAndBathrooms: [
            "Built-in wardrobes",
            "Ensuite",
        ],
        outdoorFeatures: [
            "Balcony",
        ],
        indoorFeatures: [
            "Dishwasher",
            "Floorboards",
        ],
        parking: [
            "Garage spaces 01",
        ],
        heatingAndCooling: [
            "Air conditioning",
            "Split-system air conditioning",
        ],
        propertyImages: [c1Img, r2Img, r3Img, r4Img, r5Img, r6Img, r1Img, r2Img, r3Img, r4Img, r5Img, r6Img]
    };


    const sliderRef = useRef<HTMLDivElement>(null); // Reference to the main image slider
    const thumbnailContainerRef = useRef<HTMLDivElement>(null); // Reference to the thumbnail container
    const [currentImage, setCurrentImage] = useState(0);
    const [showDescription, setShowDescription] = useState(false);
    const [showMapModal, setShowMapModal] = useState(false);
    const mapModalRef = useRef<HTMLDivElement>(null);


    // GSAP animation for sliding images
    useEffect(() => {
        if (sliderRef.current) {
            gsap.to(sliderRef.current, {
                x: -currentImage * 100 + '%', // Move slider based on currentImage
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    }, [currentImage]);

    // Scroll thumbnails to center the current image
    useEffect(() => {
        if (thumbnailContainerRef.current) {
            const thumbnailWidth = 157; // Width of each thumbnail
            const containerWidth = thumbnailContainerRef.current.offsetWidth; // Width of the thumbnail container
            const scrollPosition = currentImage * thumbnailWidth - containerWidth / 2 + thumbnailWidth / 2;

            gsap.to(thumbnailContainerRef.current, {
                scrollTo: {
                    x: scrollPosition,
                    autoKill: false, // Prevent GSAP from automatically killing the animation
                },
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    }, [currentImage]);

    // Handle previous image
    const handlePrev = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }
    };

    // Handle next image
    const handleNext = () => {
        if (currentImage < data.propertyImages.length - 1) {
            setCurrentImage(currentImage + 1);
        } else {
            setCurrentImage(0); // Loop back to the first image
        }
    };

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    useEffect(() => {
        // Close map modal when clicked outside
        const handleClickOutside = (e: MouseEvent) => {
            if (mapModalRef.current && !mapModalRef.current.contains(e.target as Node)) {
                setShowMapModal(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mapModalRef]);

    useEffect(() => {
        if (showMapModal) {
            gsap.fromTo(mapModalRef.current,
                { y: '100%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [showMapModal]);

    return (
        <>
            <div className='w-full flex flex-col p-3 gap-4 h-full bg-[#D9D9D9]/20 border-black/20 border-[0.8px] rounded-[20px]'>
                <div className='w-full flex flex-col gap-3'>
                    {/* Main Image Slider */}
                    <div className='w-full h-[447px] relative rounded-[13px] overflow-hidden flex items-center justify-center'>
                        <div ref={sliderRef} className='w-full h-full flex flex-row'>
                            {data.propertyImages.map((image, index) => (
                                <div key={index} className='w-full h-full flex-shrink-0'>
                                    <img src={image} alt='property' className='w-full h-full object-cover' />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Thumbnail Slider */}
                    <div className='flex flex-row gap-2 items-center h-[120px]'>
                        {/* Previous Button */}
                        <div
                            onClick={handlePrev}
                            className='w-[32px] h-[117px] cursor-pointer bg-white rounded-t-full rounded-b-full border-black/20 border-[0.8px] flex items-center justify-center'>
                            <img src={arrowLeftWhiteIcon} alt='property' className='w-[5px] h-[10px] invert' />
                        </div>

                        {/* Thumbnail Container */}
                        <div
                            ref={thumbnailContainerRef}
                            className='flex flex-row items-center gap-2 w-[calc(100%-80px)] overflow-x-auto hide-scrollbar'>
                            {data.propertyImages.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`${index === currentImage ? 'border-[2px] border-white' : 'border border-gray-300'} w-[157px] cursor-pointer rounded-[11px] overflow-hidden h-[117px] flex-shrink-0`}>
                                    <img src={image} alt='property' className='w-full h-full object-cover' />
                                </div>
                            ))}
                        </div>

                        {/* Next Button */}
                        <div
                            onClick={handleNext}
                            className='w-[32px] h-[117px] cursor-pointer bg-white rounded-t-full rounded-b-full border-black/20 border-[0.8px] flex items-center justify-center'>
                            <img src={arrowRightWhiteIcon} alt='property' className='w-[5px] h-[10px] invert' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-2'>
                    <div className='w-full flex flex-col sm:flex-row justify-between gap-4 '>
                        <h2 className='w-[calc(100%-64px)] text-[20px] text-[#2d2d2d] font-bold'>
                            {data.title.length > 60 ? data.title.slice(0, 60) + '...' : data.title}
                        </h2>

                        <div className=' px-2 w-fit min-w-[48px] h-[22px] rounded-l-full rounded-r-full bg-[#2d2d2d] text-white flex flex-row items-center justify-center gap-1'>
                            <img src={homeIcon} alt='Home icon' className='size-[11px]' />
                            <p className='text-[13px]'>
                                {data.category}
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                        <img src={markerBlackIcon} alt='marker icon' className='size-[13px]' />
                        <p className='text-[14px] text-[#2d2d2d]'>
                            {data.location.length > 45 ? data.location.slice(0, 45) + '...' : data.location}
                        </p>
                    </div>

                    <div className='w-full items-center text-[14px]'>
                        <p>
                            {showDescription
                                ? data.description
                                : data.description.slice(0, 176) + '...'}
                            {data.description.length > 176 && (
                                <span
                                    className='text-[#4BAE4F] text-[11px] cursor-pointer'
                                    onClick={toggleDescription}>
                                    {showDescription ? ' Read less' : ' Read more'}{' '}
                                    <span className={`text-[#4BAE4F]`}>{showDescription ? '▲' : '▼'}</span>
                                </span>
                            )}
                        </p>
                    </div>


                </div>

                <div
                    onClick={() => setShowMapModal(true)}
                    className='w-full h-[255px] relative'>
                    <MapView lat={data.location_lat} lon={data.location_lon} />
                </div>

                <div className='w-full flex flex-col gap-3'>
                    <h2 className='text-[20px] text-[#2d2d2d] font-bold'>
                        Property Features
                    </h2>
                    <div className='w-full grid sm:grid-cols-2'>
                        <div className='w-full flex flex-col gap-7'>
                            <div className='w-full flex flex-col gap-3'>
                                <h3 className='text-[14px] text-[#2d2d2d] font-medium'>
                                    About the property
                                </h3>
                                <div className='w-full flex flex-wrap gap-3'>
                                    {data.aboutProperty.map((feature, index) => (
                                        <div key={index} className='flex flex-row gap-2 py-1 px-3  bg-white rounded-l-full rounded-r-full items-center'>
                                            <img src={featureIcon2} alt='feature icon' className='w-[14px] h-[10px]' />
                                            <p className='text-[13px]'>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='w-full flex flex-col gap-3'>
                                <h3 className='text-[14px] text-[#2d2d2d] font-medium'>
                                    Bedrooms & Bathrooms
                                </h3>
                                <div className='w-full flex flex-wrap gap-3'>
                                    {data.beadroomsAndBathrooms.map((feature, index) => (
                                        <div key={index} className='flex flex-row gap-2 py-1 px-3  bg-white rounded-l-full rounded-r-full items-center'>
                                            <img src={featureIcon2} alt='feature icon' className='w-[14px] h-[10px]' />
                                            <p className='text-[13px]'>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='w-full flex flex-col gap-3'>
                                <h3 className='text-[14px] text-[#2d2d2d] font-medium'>
                                    Indoor Features
                                </h3>
                                <div className='w-full flex flex-wrap gap-3'>
                                    {data.indoorFeatures.map((feature, index) => (
                                        <div key={index} className='flex flex-row gap-2 py-1 px-3  bg-white rounded-l-full rounded-r-full items-center'>
                                            <img src={featureIcon2} alt='feature icon' className='w-[14px] h-[10px]' />
                                            <p className='text-[13px]'>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className='w-full flex flex-col gap-7'>
                            <div className='w-full flex flex-col gap-3'>
                                <h3 className='text-[14px] text-[#2d2d2d] font-medium'>
                                    Parking
                                </h3>
                                <div className='w-full flex flex-wrap gap-3'>
                                    {data.parking.map((feature, index) => (
                                        <div key={index} className='flex flex-row gap-2 py-1 px-3  bg-white rounded-l-full rounded-r-full items-center'>
                                            <img src={featureIcon2} alt='feature icon' className='w-[14px] h-[10px]' />
                                            <p className='text-[13px]'>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='w-full flex flex-col gap-3'>
                                <h3 className='text-[14px] text-[#2d2d2d] font-medium'>
                                    Heating & Cooling
                                </h3>
                                <div className='w-full flex flex-wrap gap-3'>
                                    {data.heatingAndCooling.map((feature, index) => (
                                        <div key={index} className='flex flex-row gap-2 py-1 px-3  bg-white rounded-l-full rounded-r-full items-center'>
                                            <img src={featureIcon2} alt='feature icon' className='w-[14px] h-[10px]' />
                                            <p className='text-[13px]'>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='w-full flex flex-col gap-3'>
                                <h3 className='text-[14px] text-[#2d2d2d] font-medium'>
                                    Outdoor Features
                                </h3>
                                <div className='w-full flex flex-wrap gap-3'>
                                    {data.outdoorFeatures.map((feature, index) => (
                                        <div key={index} className='flex flex-row gap-2 py-1 px-3  bg-white rounded-l-full rounded-r-full items-center'>
                                            <img src={featureIcon2} alt='feature icon' className='w-[14px] h-[10px]' />
                                            <p className='text-[13px]'>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='py-4 w-full h-full flex flex-col'>
                        <InquireForm data={data} />
                    </div>
                </div>
            </div>
            {
                showMapModal && (
                    <>
                        <div className='w-full h-screen flex flex-row items-center justify-center top-0 left-0 fixed z-[5000] bg-black/20'>
                            <div
                                ref={mapModalRef}
                                className='w-[70%] h-[70%] max-h-[1004px] rounded-[20px] overflow-hidden shadow-lg drop-shadow-md'>
                                <MapView lat={data.location_lat} lon={data.location_lon} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default CommercialDataInfo;