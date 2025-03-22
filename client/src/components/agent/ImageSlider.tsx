import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface ImageSliderProps {
    images: string[];
    displayDuration?: number; // Duration to display each image
    transitionDuration?: number; // Duration of the slide transition
}

const ImageSlider = ({ images, displayDuration = 2, transitionDuration = 0.5 }: ImageSliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const imageWidth = slider.clientWidth; // Width of the visible container

        // GSAP animation for sliding
        const slideNext = () => {
            const nextIndex = (currentIndex + 1) % images.length; // Calculate the next index
            const nextPosition = -(nextIndex * imageWidth); // Calculate the next position

            // Animate to the next slide
            gsap.to(slider, {
                x: nextPosition,
                duration: transitionDuration,
                ease: 'power2.inOut',
                onComplete: () => {
                    setCurrentIndex(nextIndex); // Update the current index
                },
            });
        };

        // Auto-play with a delay
        const interval = setInterval(slideNext, (displayDuration + transitionDuration) * 1000);

        // Cleanup interval on unmount
        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, images, displayDuration, transitionDuration]);

    return (
        <div className="w-full h-full overflow-hidden relative rounded-[20px]">
            <div ref={sliderRef} className="flex absolute top-0 left-0">
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-96 rounded-[20px] overflow-hidden">
                        <img
                            src={image}
                            alt={`image-${index}`}
                            className="w-full h-full object-cover rounded-[20px]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;