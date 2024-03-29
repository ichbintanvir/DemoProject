import ResultImage1 from "/src/assets/images/Vector (2).png";
import ResultImage2 from "/src/assets/images/Vector (1).png";
import ResultImage3 from "/src/assets/images/Vector.png";

const Result = () => {
    return (
        <div className="container mx-auto sm:px-5">
            <div className="text-center pt-24">
                <h1 className="font-bold text-xl sm:text-6xl font-Montserrat" data-aos="fade-up" data-aos-duration="1000">Powered to drive optimal results</h1>
                <p className="pt-4 text-sm sm:text-lg font-THICCCBOI" data-aos="fade-up" data-aos-duration="2000">Brands & app marketers can find tailor made solutions to reach your end user.</p>
            </div>
            <div className="pt-14 pb-24 grid grid-cols-1 space-y-4 pl-8 sm:grid-cols-3">
                <div className="w-72 space-y-[48px] text-center mx-auto" data-aos="fade-up" data-aos-duration="3000">
                    <img className="mx-auto w-[100px] h-[100px]" src={ResultImage1} alt="" />
                    <div className="space-y-[12px]">
                        <h1 className="text-xl sm:text-2xl font-THICCCBOI font-[700]">Brand & performance <br />advertising</h1>
                        <p className="text-sm sm:text-base font-THICCCBOI font-[400] text-[#646670]">Enable all funnel acquisition activity for your brand & app through..</p>
                    </div>
                </div>
                <div className="w-72 space-y-[48px] text-center mx-auto" data-aos="fade-up" data-aos-duration="3000">
                    <img className="mx-auto w-[100px] h-[100px]" src={ResultImage2} alt="" />
                    <div className="space-y-[12px]">
                        <h1 className="text-xl sm:text-2xl font-THICCCBOI font-[700]">Contextualised <br />targeting</h1>
                        <p className="text-sm sm:text-base font-THICCCBOI font-[400] text-[#646670]">Reach your users better using our top DMP solutions</p>
                    </div>
                </div>
                <div className="w-72 space-y-[48px] text-center mx-auto" data-aos="fade-up" data-aos-duration="3000">
                    <img className="mx-auto w-[100px] h-[100px]" src={ResultImage3} alt="" />
                    <div className="space-y-[12px]">
                        <h1 className="text-xl sm:text-2xl font-THICCCBOI font-[700]">Campaign measurability <br /> & analysis</h1>
                        <p className="text-sm sm:text-base font-THICCCBOI font-[400] text-[#646670]">With machine learning and multiple data end points, we are able to draw an...</p>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}
export default Result;