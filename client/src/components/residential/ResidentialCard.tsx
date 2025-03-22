import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { arrowLeftWhiteIcon, arrowRightWhiteIcon, bathIcon, bedIcon, featureIcon, garageIcon, homeIcon, markerBlackIcon, starIcon, verifiedIcon } from '../../assets/icons';
import { UrlGenerator } from '../../lib/UrlGenerator';

interface ResidentialCardProps {
    data: {
        name: string;
        licenseNo: string;
        rating: number;
        reviewCount: number;
        profileImage: string;
        verified: boolean;
        title: string;
        location: string;
        category: string;
        description: string;
        bedrooms: number;
        bathrooms: number;
        garageSpaces: number;
        landSize: string;
        features: string[]
        propertyImages: string[];
    }
}
const ResidentialCard = ({ data }: ResidentialCardProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [showImageViewer, setShowImageViewer] = useState(false);
    const [currentViewImage, setCurrentViewImage] = useState(0);
    const [currentViewMobileImage, setCurrentViewMobileImage] = useState(0);
    const sliderRef = useRef(null);
    const viewerSliderRef = useRef(null);
    const viewerSliderMobileRef = useRef(null);

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

    useEffect(() => {
        if (viewerSliderRef.current) {
            gsap.to(viewerSliderRef.current, {
                x: -currentViewImage * 100 + '%', // Move viewer slider based on currentViewImage
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    }, [currentViewImage]);

    useEffect(() => {
        if (viewerSliderMobileRef.current) {
            gsap.to(viewerSliderMobileRef.current, {
                x: -currentViewMobileImage * 100 + '%', // Move viewer slider based on currentViewImage
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    }, [currentViewMobileImage]);

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

    const handleViewerPrev = () => {
        if (currentViewImage > 0) {
            setCurrentViewImage(currentViewImage - 1);
        }
    };

    // Handle next image in viewer
    const handleViewerNext = () => {
        if (currentViewImage < data.propertyImages.length - 1) {
            setCurrentViewImage(currentViewImage + 1);
        } else {
            setCurrentViewImage(0); // Loop back to the first image
        }
    };

    const handleMViewerPrev = () => {
        if (currentViewMobileImage > 0) {
            setCurrentViewMobileImage(currentViewMobileImage - 1);
        }
    };

    // Handle next image in viewer
    const handleMViewerNext = () => {
        if (currentViewMobileImage < data.propertyImages.length - 1) {
            setCurrentViewMobileImage(currentViewMobileImage + 1);
            console.log(currentViewMobileImage);
        } else {
            setCurrentViewMobileImage(0); // Loop back to the first image
        }
    };


    const containerRef = useRef<HTMLDivElement>(null); // Reference to the container

    // Handle mouse/touch drag
    const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
        console.log(e);
        const container = containerRef.current;
        if (!container) return;

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        const startDragging = (e: MouseEvent | TouchEvent) => {
            isDragging = true;
            startX = 'pageX' in e ? e.pageX : e.touches[0].pageX;
            scrollLeft = container.scrollLeft;
        };

        const stopDragging = () => {
            isDragging = false;
        };

        const whileDragging = (e: MouseEvent | TouchEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = 'pageX' in e ? e.pageX : e.touches[0].pageX;
            const walk = (x - startX) * 2; // Adjust scroll speed
            container.scrollLeft = scrollLeft - walk;
        };

        // Mouse events
        container.addEventListener('mousedown', startDragging as EventListener);
        container.addEventListener('mouseup', stopDragging);
        container.addEventListener('mouseleave', stopDragging);
        container.addEventListener('mousemove', whileDragging as EventListener);

        // Touch events
        container.addEventListener('touchstart', startDragging as EventListener);
        container.addEventListener('touchend', stopDragging);
        container.addEventListener('touchmove', whileDragging as EventListener);

        // Cleanup
        return () => {
            container.removeEventListener('mousedown', startDragging as EventListener);
            container.removeEventListener('mouseup', stopDragging);
            container.removeEventListener('mouseleave', stopDragging);
            container.removeEventListener('mousemove', whileDragging as EventListener);
            container.removeEventListener('touchstart', startDragging as EventListener);
            container.removeEventListener('touchend', stopDragging);
            container.removeEventListener('touchmove', whileDragging as EventListener);
        };
    };

    return (
        <div className='p-4 bg-white shadow-sm rounded-[20px] gap-4 border-[1px] border-[#F2F2F2] h-fit xl:h-[620px] flex flex-col-reverse lg:grid lg:grid-cols-3 w-full relative'>
            {/* Left Section */}
            <div className='w-full gap-3 flex flex-col h-full '>
                <div className='w-full h-fit sm:h-[205px] bg-[#d9d9d9]/20 border-[0.8px] border-black/20 rounded-[11px] p-3 gap-2 flex flex-col'>
                    <div className='w-full flex flex-col sm:flex-row gap-2'>
                        <div className='size-[min(40vw,90px)] relative'>
                            <div className='size-[min(40vw,90px)] overflow-hidden  rounded-full bg-gray-200 flex items-center justify-center'>
                                <img src={data.profileImage} alt='home icon' className='size-full' />
                            </div>
                            {data.verified && <img src={verifiedIcon} alt='verified icon' className="absolute -top-0 -right-1 size-[26px] z-10 " />}
                        </div>
                        <div className='w-full sm:w-[calc(100%-90px)] flex-col gap-2'>
                            <h2 className='text-[#2d2d2d] text-[22px] '>
                                {data.name.length > 12 ? data.name.slice(0, 11) + '...' : data.name}
                            </h2>

                            <div className='w-full flex flex-row items-center gap-2 border-[#DEDEDE] border-[1px] rounded-[7px] p-1'>
                                <div className='flex flex-col items-center leading-5'>
                                    <p className='text-black text-[16px] font-bold'>
                                        {data.rating}
                                    </p>
                                    <div className='flex flex-row gap-[2px]'>
                                        {Array(3).fill(0).map((_, index) => (
                                            <div key={index} className='size-[8px]'>
                                                <img src={starIcon} alt='star icon' className='size-[8px]' />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex items-center justify-center text-[11px]'>
                                    ({data.reviewCount} reviews)
                                </div>
                            </div>

                            <div className='w-full flex pt-1'>
                                <p className='text-[12px] text-[#2d2d2d]'>
                                    License No : {data.licenseNo}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <a 
                        href={`/residential/${data.licenseNo}/${UrlGenerator(data.title)}`}
                        className='w-full cursor-pointer flex items-center justify-center h-[36px] bg-[#4BAE4F] rounded-l-full rounded-r-full text-white'>
                            Get in touch
                        </a>
                        <button className='w-full cursor-pointer h-[36px] text-[#2d2d2d] rounded-l-full rounded-r-full border-[#2d2d2d] border-[1px]'>
                            Save property
                        </button>
                    </div>
                </div>

                <div className='w-full h-full bg-[#d9d9d9]/20 border-[0.8px] border-black/20 rounded-[11px] p-3 gap-3 flex flex-col'>
                    <div className='w-full flex flex-col sm:flex-row justify-between gap-4 '>
                        <h2 className='w-[calc(100%-64px)] text-[12px] text-[#2d2d2d] font-bold'>
                            {data.title.length > 60 ? data.title.slice(0, 60) + '...' : data.title}
                        </h2>

                        <div className=' px-2 w-fit min-w-[48px] h-[15px] rounded-l-full rounded-r-full bg-[#2d2d2d] text-white flex flex-row items-center justify-center gap-1'>
                            <img src={homeIcon} alt='Home icon' className='size-[7px]' />
                            <p className='text-[8px]'>
                                {data.category}
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-1 items-center'>
                        <img src={markerBlackIcon} alt='marker icon' className='size-[10px]' />
                        <p className='text-[11px] text-[#2d2d2d]'>
                            {data.location.length > 45 ? data.location.slice(0, 45) + '...' : data.location}
                        </p>
                    </div>
                    <div className='w-full items-center text-[10px] '>
                        {data.description.length > 176 ? data.description.slice(0, 176) + '...' : data.description}
                        <a href={`/residential/${data.licenseNo}/${UrlGenerator(data.title)}`} className='text-[#2d2d2d]'> Read more <span className='text-[#4BAE4F] text-[11px]' >{'>'}</span></a>
                    </div>

                    <div className='w-full flex flex-row items-center justify-center py-1'>
                        <div className='w-[80%] h-[1px] bg-black/10' />
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

                        <div className='w-[78px] h-[25px] bg-white rounded-l-full rounded-r-full border-[1px] border-[#f2f2f2] items-center justify-center flex flex-row gap-2'>
                            <img src={featureIcon} alt='Bed icon' className='size-[15px]' />
                            <p className='text-[13px] text-[#757575]'>
                                {data.landSize}
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-row items-center justify-center py-1'>
                        <div className='w-[80%] h-[1px] bg-black/10' />
                    </div>

                    <div className='w-full flex flex-col gap-3'>
                        <h2 className='text-[12px] text-[#2d2d2d] font-bold'>
                            Property Features
                        </h2>

                        <div className='flex flex-col gap-1'>
                            {
                                data.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className='flex flex-row gap-2 items-center'>
                                        <img src={featureIcon} alt='feature icon' className='size-[15px]' />
                                        <p className='text-[13px] text-[#757575]'>
                                            {feature.length > 35 ? feature.slice(0, 35) + '...' : feature}
                                        </p>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Image Slider */}
            <div className='w-full col-span-2 h-full flex flex-col gap-4 justify-between'>
                <div className='w-full h-[348px] rounded-[11px] overflow-hidden relative flex items-center justify-center'>
                    <div ref={sliderRef} className='w-full h-full flex flex-row'>
                        {data.propertyImages.map((image, index) => (
                            <div key={index} className='w-full h-full flex-shrink-0'>
                                <img src={image} alt='property' className='w-full h-full object-cover' />
                            </div>
                        ))}
                    </div>
                    <div
                        onClick={handlePrev}
                        className='size-[38px] cursor-pointer rounded-full bg-white/50 absolute z-10 border-white border-[1px] left-5 flex items-center justify-center'>
                        <img src={arrowLeftWhiteIcon} alt='left arrow' className='w-[8px] h-[16px]' />
                    </div>
                    <div
                        onClick={handleNext}
                        className='size-[38px] cursor-pointer rounded-full bg-white/50 absolute z-10 border-white border-[1px] right-5 flex items-center justify-center'>
                        <img src={arrowRightWhiteIcon} alt='left arrow' className='w-[8px] h-[16px]' />
                    </div>
                </div>
                <div className='w-full grid grid-cols-3 gap-4'>
                    {data.propertyImages.slice(0, 6).map((image, index) => (
                        index === 5 ?
                            <div
                                onClick={() => setShowImageViewer(true)}
                                key={index} className='w-full h-[105px] cursor-pointer rounded-[11px] overflow-hidden relative'>
                                <img src={image} alt='property' className='w-full h-full object-cover' />
                                {data.propertyImages.length > 6 &&
                                    <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
                                        <p className='text-white text-[20px] font-bold'>
                                            +{data.propertyImages.length - 6}
                                        </p>
                                    </div>
                                }
                            </div>
                            :
                            <div
                                onClick={() => {
                                    setShowImageViewer(true)
                                    setCurrentViewImage(index)
                                }}
                                key={index} className='w-full h-[105px] cursor-pointer rounded-[11px] overflow-hidden'>
                                <img src={image} alt='property' className='w-full h-full object-cover' />
                            </div>
                    ))}
                </div>
            </div>

            {/* Image Viewer Modal */}
            {showImageViewer &&
                <div className='absolute h-full inset-0 bg-black/50 flex items-center justify-center z-[50]'>
                    <div className='w-full h-[80%] flex flex-col gap-4'>
                        <div className='w-full hidden sm:flex flex-row items-center justify-between relative'>
                            <div className='w-[150px] flex items-center justify-center'>
                                <div
                                    onClick={handleViewerPrev}
                                    className='w-[40px] cursor-pointer h-[40px] bg-white/20 group border-white border-[1px] rounded-[12px] flex items-center justify-center'>
                                    <img src={arrowLeftWhiteIcon} alt='left arrow' className='w-[10px] h-[16px] group-hover:-translate-x-1 ease-in-out transition-all duration-300' />
                                </div>
                            </div>
                            <div className='w-[calc(100%-300px)] h-[350px] overflow-hidden rounded-[16px]'>
                                <div ref={viewerSliderRef} className='w-full h-full flex flex-row'>
                                    {data.propertyImages.map((image, index) => (
                                        <div key={index} className='w-full h-full flex-shrink-0'>
                                            <img src={image} alt='property' className='w-full h-full object-cover' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='w-[150px] flex items-center justify-center'>
                                <div
                                    onClick={handleViewerNext}
                                    className='w-[40px] h-[40px] cursor-pointer group bg-white/20 border-white border-[1px] rounded-[12px] flex items-center justify-center'>
                                    <img src={arrowRightWhiteIcon} alt='left arrow' className='w-[10px] h-[16px] group-hover:translate-x-1 ease-in-out transition-all duration-300' />
                                </div>
                            </div>

                            <div
                                onClick={() => setShowImageViewer(false)}
                                className='size-[48px] bg-white/50 absolute group rounded-full border-white border-[1px] cursor-pointer right-5 top-0 flex items-center justify-center'>
                                <div className='relative flex items-center justify-center group-hover:rotate-180 transition-all duration-700 ease-in-out'>
                                    <div className='h-[2px]  rounded-l-full rounded-r-full w-[20px] bg-white rotate-45 absolute' />
                                    <div className='h-[2px]  rounded-l-full rounded-r-full w-[20px] bg-white -rotate-45 absolute' />
                                </div>
                            </div>
                        </div>

                        <div className='w-full sm:hidden flex flex-col gap-5 items-center justify-between relative'>
                            <div className='w-[calc(100%-16px)] h-[350px] overflow-hidden rounded-[16px]'>
                                <div ref={viewerSliderMobileRef} className='w-full h-full flex flex-row'>
                                    {data.propertyImages.map((image, index) => (
                                        <div key={index} className='w-full h-full flex-shrink-0'>
                                            <img src={image} alt='property' className='w-full h-full object-cover' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-row'>

                                <div className='w-[150px] flex items-center justify-center'>
                                    <div
                                        onClick={handleMViewerPrev}
                                        className='w-[40px] cursor-pointer h-[40px] bg-white/20 group border-white border-[1px] rounded-[12px] flex items-center justify-center'>
                                        <img src={arrowLeftWhiteIcon} alt='left arrow' className='w-[10px] h-[16px] group-hover:-translate-x-1 ease-in-out transition-all duration-300' />
                                    </div>
                                </div>

                                <div className='w-[150px] flex items-center justify-center'>
                                    <div
                                        onClick={handleMViewerNext}
                                        className='w-[40px] h-[40px] cursor-pointer group bg-white/20 border-white border-[1px] rounded-[12px] flex items-center justify-center'>
                                        <img src={arrowRightWhiteIcon} alt='left arrow' className='w-[10px] h-[16px] group-hover:translate-x-1 ease-in-out transition-all duration-300' />
                                    </div>
                                </div>
                            </div>

                            <div
                                onClick={() => setShowImageViewer(false)}
                                className='size-[28px] bg-white/50 absolute group rounded-full border-white border-[1px] cursor-pointer right-5 -top-10 flex items-center justify-center'>
                                <div className='relative flex items-center justify-center group-hover:rotate-180 transition-all duration-700 ease-in-out'>
                                    <div className='h-[1.5px]  rounded-l-full rounded-r-full w-[16px] bg-white rotate-45 absolute' />
                                    <div className='h-[1.5px]  rounded-l-full rounded-r-full w-[16px] bg-white -rotate-45 absolute' />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={containerRef}
                            onMouseDown={handleDrag}
                            onTouchStart={handleDrag}
                            className='w-full h-[150px] overflow-x-auto gap-4 flex flex-row items-center relative hide-scrollbar'>
                            {/* Draggable Thumbnails */}
                            {data.propertyImages.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentViewImage(index)}
                                    className={`${index === currentViewImage ? 'scale-125 border-2 border-white z-10' : 'scale-100 border border-gray-300'} w-[100px] h-[60px] md:w-[150px] md:h-[90px] rounded-[8px] transition-transform duration-300 cursor-pointer flex-shrink-0`}>
                                    <img src={image} alt='property' className='w-full h-full object-cover rounded-[6px]' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ResidentialCard;