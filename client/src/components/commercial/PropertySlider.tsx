import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import CommercialPropertyCard from './CommercialPropertyCard';
import { arrowLeftWhiteIcon, arrowRightWhiteIcon } from '../../assets/icons';

interface PropertySliderProps {
    data: {
        id: number;
        title: string;
        bedrooms: number;
        bathrooms: number;
        garageSpaces: number;
        landSize: string;
        price: number;
        img: string;
    }[];
}

const PropertySlider = ({ data }: PropertySliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null); // Reference to the slider container
    const containerRef = useRef<HTMLDivElement>(null); // Reference to the container
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index
    const [maxScroll, setMaxScroll] = useState(0); // Track the maximum scrollable distance

    // Calculate the maximum scrollable distance
    useEffect(() => {
        if (sliderRef.current && containerRef.current) {
            const cardWidth = sliderRef.current.children[0].clientWidth + 32; // Card width + gap
            const containerWidth = containerRef.current.clientWidth;
            const totalWidth = data.length * cardWidth;
            setMaxScroll(totalWidth - containerWidth);
        }
    }, [data]);

    // Handle sliding to the left (previous card)
    const handlePrev = () => {
        if (currentIndex > 0 && sliderRef.current) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            const cardWidth = sliderRef.current.children[0].clientWidth + 32; // Card width + gap
            gsap.to(sliderRef.current, {
                x: -newIndex * cardWidth, // Move to the exact position
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    };

    // Handle sliding to the right (next card)
    const handleNext = () => {
        if (currentIndex < data.length - 1 && sliderRef.current && containerRef.current) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            const cardWidth = sliderRef.current.children[0].clientWidth + 32; // Card width + gap
            const newX = -newIndex * cardWidth;

            // Ensure the slider doesn't scroll beyond the maximum distance
            if (Math.abs(newX) <= maxScroll) {
                gsap.to(sliderRef.current, {
                    x: newX, // Move to the exact position
                    duration: 0.5,
                    ease: 'power2.out',
                });
            } else {
                gsap.to(sliderRef.current, {
                    x: -maxScroll, // Stop at the maximum scrollable distance
                    duration: 0.5,
                    ease: 'power2.out',
                });
            }
        } else if (currentIndex === data.length - 1) {
            // If at the end, reset the slider position
            setCurrentIndex(0);
            gsap.to(sliderRef.current, {
                x: 0,
                duration: 0.5,
                ease: 'power2.out',
            });
        }

    };

    // Update the slider position when the window is resized
    useEffect(() => {
        const handleResize = () => {
            if (sliderRef.current && containerRef.current) {
                const cardWidth = sliderRef.current.children[0].clientWidth + 32; // Card width + gap
                const containerWidth = containerRef.current.clientWidth;
                const totalWidth = data.length * cardWidth;
                setMaxScroll(totalWidth - containerWidth);

                // Recalculate the slider position based on the current index
                gsap.to(sliderRef.current, {
                    x: -currentIndex * cardWidth,
                    duration: 0,
                });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex, data]);

    return (
        <div className='relative w-full' ref={containerRef}>
            {/* Slider Container */}
            <div className='w-full flex flex-row gap-8 overflow-hidden'>
                <div
                    ref={sliderRef}
                    className='flex flex-row gap-8 items-center'
                    style={{ width: `${data.length * (300 + 32)}px` }} // Adjust width based on the number of cards and gap
                >
                    {data.map((item, index) => (
                        <div key={index} className='flex-shrink-0'>
                            <CommercialPropertyCard data={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div
                onClick={handlePrev}
                className={`size-[47px] rounded-full border-[#DFDFDF] border-[1px] bg-white absolute -left-5 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-100 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                style={{ pointerEvents: currentIndex === 0 ? 'none' : 'auto' }} // Disable button when at the start
            >
                <img src={arrowLeftWhiteIcon} alt='arrow icon' className='w-[9px] h-[18px] filter grayscale brightness-50' />
            </div>

            <div
                onClick={handleNext}
                className={`size-[47px] rounded-full bg-white border-[#DFDFDF] border-[1px] absolute -right-5 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-100 transition-colors 
                    
                `}
            // style={{ pointerEvents: currentIndex === data.length - 1 ? 'none' : 'auto' }} // Disable button when at the end
            >
                <img src={arrowRightWhiteIcon} alt='arrow icon' className='w-[9px] h-[18px] filter grayscale brightness-50' />
            </div>
        </div>
    );
};

export default PropertySlider;