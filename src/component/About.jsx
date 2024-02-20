import AboutImage from "/src/assets/images/Rectangle 463.png";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
    return (
        <div className="bg-[#F9F8F3]">
            <div className="container mx-auto">
                <div className="flex flex-row items-center py-10 grid grid-cols-1 space-y-6 px-5 sm:grid-cols-2">
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <img className="w-full sm:w-3/4" src={AboutImage} alt="" />
                        {/* <img className="mx-auto h-full w-full lg:w-auto max-h-[16rem] lg:max-h-[30rem] xl:max-h-[40] 2xl:max-h-[50] aspect-square object-cover rounded-xl aos-init aos-animate" src="/src/assets/images/Rectangle 463.png" alt="" /> */}
                    </div>
                    <div className="space-y-6 grid justify-items-center sm:justify-items-start">
                        <button data-aos="fade-up"
                            data-aos-duration="1000">
                            <span className="bg-amber-100 p-2 font-[500] text-[18px] rounded font-THICCCBOI">About Us</span>
                        </button>
                        <div className="font-Montserrat text-center sm:text-start">
                            <h1 className="text-2xl sm:text-5xl font-[700]" data-aos="fade-up"
                                data-aos-duration="2000">Solutions to boost ROI</h1>
                            <h1 className="text-2xl sm:text-5xl font-[700]" data-aos="fade-up"
                                data-aos-duration="2500">and growth for your</h1>
                            <h1 className="text-2xl sm:text-5xl font-[700]" data-aos="fade-up"
                                data-aos-duration="2800">enterprise</h1>
                        </div>
                        <p data-aos="fade-up"
                            data-aos-duration="3000" className="font-THICCCBOI font-[400] text-[18px] text-[#353535]">We meticulously archestrate a harmonious synergy between <br /> advertisers and publishers for optimal results.</p>
                        <button className="flex items-center bg-orange-900 text-white gap-[6px] text-[16px] px-5 py-3 rounded font-[700] font-THICCCBOI" data-aos="fade-up"
                            data-aos-duration="3200">
                            <div className="">
                                <p>Find out more</p>
                            </div>
                            <div>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg> */}
                                <FiArrowRight />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;