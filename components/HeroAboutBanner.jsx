import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Breadcrumb from "./Breadcrumb";


const HeroAboutBanner = () => {
    return (
        <div className="relative text-white text-[20px]">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div>
                    <img
                        src="/about-slider.jpg"
                        className="aspect-[60/10] md:aspect-auto object-cover w-[500px] h-[350px]"
                    />
                </div>

                <div>
                    <img
                        src="/about-slider2.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover w-[500px] h-[350px]"
                    />
                </div>

                <div>
                    <img
                        src="/about-slider3.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover w-[500px] h-[350px]"
                    />
                </div>
            </Carousel>
            <div className="absolute top-0 left-0 w-full flex items-center justify-center h-full">
                <Breadcrumb />
            </div>
        </div>
    );
};

export default HeroAboutBanner;
