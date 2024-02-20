import StoriesImage from "/src/assets/images/image 859.png";
import { FaRegClock } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

const Stories = () => {
    return (
        <div className="bg-[#FBF9F1]">
            <div className="container mx-auto space-y-6">
                <h1 className="text-sm sm:text-[58px] font-[700] text-[#000204] text-center pt-[100px] pb-[60px] font-THICCCBOI" data-aos="fade-up" data-aos-duration="1000">Read Our Stories</h1>
                <div className="pb-12 grid grid-cols-1  sm:grid-cols-3 gap-5 px-5">
                    <div className="bg-white w-[295px] space-y-6 rounded-md mx-auto mb-5" data-aos="fade-up" data-aos-duration="2000">
                        <div className="">
                            <img src={StoriesImage} alt="" />
                        </div>
                        <div className="px-3 font-THICCCBOI">
                            <div className="flex justify-between text-[#908E8E]">
                                <div className="flex items-center gap-2 text-[14px] font-[600]">
                                    <span className="inline">Aug 22, 2022</span>
                                    <FaRegClock />
                                    <span className="flex gap-2">
                                        11 Min Read</span>
                                </div>
                                <div>
                                    <FiEdit3 />
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className="px-3 font-THICCCBOI text-sm sm:text-[20px] font-[600] leading-[30px]">
                            <p>Impact, sustainability, and CSR: Using data to build the organizations.</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="bg-white w-[295px] space-y-6 rounded-md mx-auto mb-5" data-aos="fade-up" data-aos-duration="2000">
                        <div>
                            <img src={StoriesImage} alt="" />
                        </div>
                        <div className="px-3 font-THICCCBOI">
                            <div className="flex justify-between text-[#908E8E]">
                                <div className="flex items-center gap-2 text-[14px] font-[600]">
                                    <span className="inline">Aug 22, 2022</span>
                                    <FaRegClock />
                                    <span className="flex gap-2">
                                        11 Min Read</span>
                                </div>
                                <div>
                                    <FiEdit3 />
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className="px-3 font-THICCCBOI text-sm sm:text-[20px] font-[600] leading-[30px]">
                            <p>Impact, sustainability, and CSR: Using data to build the organizations.</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="bg-white w-[295px] space-y-6 rounded-md mx-auto mb-5" data-aos="fade-up" data-aos-duration="2000">
                        <div>
                            <img src={StoriesImage} alt="" />
                        </div>
                        <div className="px-3 font-THICCCBOI">
                            <div className="flex justify-between text-[#908E8E]">
                                <div className="flex items-center gap-2 text-[14px] font-[600]">
                                    <span className="inline">Aug 22, 2022</span>
                                    <FaRegClock />
                                    <span className="flex gap-2">
                                        11 Min Read</span>
                                </div>
                                <div>
                                    <FiEdit3 />
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className="px-3 font-THICCCBOI text-sm sm:text-[20px] font-[600] leading-[30px]">
                            <p>Impact, sustainability, and CSR: Using data to build the organizations.</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Stories;