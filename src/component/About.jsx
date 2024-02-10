const About = () => {
    return (
        <div className="bg-[#F9F8F3]">
            <div className="container mx-auto">
                <div className="flex flex-row items-center py-10 grid grid-cols-1 space-y-6 px-5 sm:grid-cols-2">
                    <div>
                        <img className="w-11/12 sm:w-3/4" src="./src/assets/images/Rectangle 463.png" alt="" />
                        {/* <img className="mx-auto h-full w-full lg:w-auto max-h-[16rem] lg:max-h-[30rem] xl:max-h-[40] 2xl:max-h-[50] aspect-square object-cover rounded-xl aos-init aos-animate" src="./src/assets/images/Rectangle 463.png" alt="" /> */}
                    </div>
                    <div className="space-y-6">
                        <span className="bg-amber-100 p-2 rounded">About Us</span>
                        <h1 className="text-2xl sm:text-5xl font-bold">Solutions to boost ROI <br /> and growth for your <br /> enterprise</h1>
                        <p>We meticulously archestrate a harmonious synergy between <br /> advertisers and publishers for optimal results.</p>
                        <button className="flex bg-orange-900 text-white px-5 py-3 rounded">
                            <div className="">
                                <p>Find out more</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;