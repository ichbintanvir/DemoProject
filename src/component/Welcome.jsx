import LeftImg from "/src/assets/images/Rectangle 5649.png";
import RightImg from "/src/assets/images/Rectangle 5650.png";
import { FiArrowRight } from "react-icons/fi";

const Welcome = () => {
    return (
        <div className="bg-orange-50">
            <div className="container mx-auto space-y-12 px-5 py-16">
                <h1 className="text-[22px] sm:text-[48px] font-THICCCBOI" data-aos="fade-up"
                    data-aos-duration="3000">Welcome to the Juuuno</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src={LeftImg} alt="" />
                    </div>
                    <div className="text-[12px] sm:text-[20px] items-center space-y-4">
                        <div className="font-THICCCBOI max-w-[400px] text-justify">
                            <p data-aos="fade-up"
                                data-aos-duration="2900">Juuuno is your trusted partner in navigating the complexities of the business world. We are a business consulting company dedicated to empowering entrepreneurs and organizations by providing innovative solutions to their most pressing challenges. With a sharp focus on opening business discussions, streamlining product sales, optimizing media strategies, and refining Go-To-Market (GTM) approaches, we pave the way for your success.</p>       ‍
                            <p data-aos="fade-up"
                                data-aos-duration="2850">We understand that every business is unique, and so are its challenges. Our team of experienced consultants is committed to tailoring strategies that suit your specific needs. Whether you are looking to expand your market reach, enhance customer engagement, or improve your overall operational efficiency.....</p>
                        </div>
                        <button className="flex bg-orange-900 text-white px-5 py-3 rounded-full items-center font-[Urbanist] gap-[16px]" data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="font-Urbanist">
                                <p>Start a project</p>
                            </div>
                            <div>
                                <FiArrowRight />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <div className="max-w-[550] space-y-6 mx-w-[500px]">
                        <div className="space-y-6 font-THICCCBOI">
                            <h1 className="text-[22px] sm:text-[40px]" data-aos="fade-up"
                                data-aos-duration="3000">Our Mission</h1>
                            <p className="text-[12px] sm:text-[18px] text-justify max-w-[400px]" data-aos="fade-up"
                                data-aos-duration="2900">Curate multi-layered top of the line solutions & products (via proprietary & reseller model), to aid our clients solve for immediate & future challenges in the ever-changing ad-tech realm.</p>
                        </div>
                        <div className="max-w-[550] space-y-6 mx-w-[500px] font-THICCCBOI">
                            <h1 className="text-[22px] sm:text-[40px]" data-aos="fade-up"
                                data-aos-duration="3000">Our Vision</h1>
                            <p className="text-[12px] font-THICCCBOI sm:text-[18px] max-w-[400px]" data-aos="fade-up"
                                data-aos-duration="2900">We aim to empower marketers by enabling them to take intelligent decisions with ease.</p>
                        </div>
                    </div>
                    <div className="" data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src={RightImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;