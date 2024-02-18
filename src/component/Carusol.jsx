import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className='space-y-20'>
                        <h1 className="text-center content-center text-white text-[22px] sm:text-[82px] mx-auto font-Montserrat">Acquire users at scale</h1>
                        <button className="flex bg-[#FDDC8D] text-black px-5 py-3 rounded mx-auto gap-[6px]">
                            <div className="font-THICCCBOI">
                                <p className='text-sm sm:text-base'>Load more</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className='space-y-20'>
                        <h1 className="text-center content-center text-white text-[22px] sm:text-[82px] mx-auto font-Montserrat">We connect a brand to the<br /> right solution partner</h1>
                        <button className="flex bg-[#FDDC8D] text-black px-5 py-3 rounded mx-auto gap-[6px]">
                            <div className="font-THICCCBOI">
                                <p className='text-sm sm:text-base'>Load more</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </Slider >

            </div>
        </div>
    );
}
export default Navbar;