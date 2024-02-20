import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         // Enable auto-play
        autoplaySpeed: 3000,    // Set the auto-play speed in milliseconds (e.g., 3000 ms or 3 seconds)
    };

    return (
        <div className="bg-[#8D462E]">
            {/* <div className="container mx-auto pt-[120px] pb-[150px]"> */}
            <div className="pt-[120px] pb-[150px]">
                <Slider {...settings}>
                    <div className='space-y-20'>
                        <h1 className="text-center content-center text-white text-[20px] sm:text-[82px] mx-auto font-Montserrat">We specialize in helping <br /> a user find your brand</h1>
                        <button className="flex items-center bg-[#FDDC8D] text-black px-5 py-3 rounded mx-auto gap-[6px]">
                            <div className="font-THICCCBOI">
                                <p className='text-sm sm:text-base'>Load more</p>
                            </div>
                            <div>
                                <FiArrowRight />
                            </div>
                        </button>
                    </div>
                    <div className='space-y-20'>
                        <h1 className="text-center content-center text-white text-[22px] sm:text-[82px] mx-auto font-Montserrat">Acquire users at scale</h1>
                        <button className="flex items-center bg-[#FDDC8D] text-black px-5 py-3 rounded mx-auto gap-[6px]">
                            <div className="font-THICCCBOI">
                                <p className='text-sm sm:text-base'>Load more</p>
                            </div>
                            <div>
                                <FiArrowRight />
                            </div>
                        </button>
                    </div>
                    <div className='space-y-20'>
                        <h1 className="text-center content-center text-white text-[22px] sm:text-[82px] mx-auto font-Montserrat">We connect a brand to the<br /> right solution partner</h1>
                        <button className="flex items-center bg-[#FDDC8D] text-black px-5 py-3 rounded mx-auto gap-[6px]">
                            <div className="font-THICCCBOI">
                                <p className='text-sm sm:text-base'>Load more</p>
                            </div>
                            <div>
                                <FiArrowRight />
                            </div>
                        </button>
                    </div>
                </Slider >

            </div>
        </div>
    );
}
export default Navbar;