const Welcome = () => {
    return (
        <div className="bg-orange-50">
            <div className="container mx-auto space-y-12 px-5 py-16">
                <h1 className="text-[22px] sm:text-[48px]" data-aos="fade-up"
                    data-aos-duration="3000">Welcome to the Juuuno</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src="../src/assets/images/Rectangle 5649.png" alt="" />
                    </div>
                    <div className="text-[12px] sm:text-[20px] items-center space-y-4">
                        <div className="">
                            <p data-aos="fade-up"
                                data-aos-duration="2900">Juuuno is your trusted partner in navigating the complexities of the business world. We are a business consulting company dedicated to empowering entrepreneurs and organizations by providing innovative solutions to their most pressing challenges. With a sharp focus on opening business discussions, streamlining product sales, optimizing media strategies, and refining Go-To-Market (GTM) approaches, we pave the way for your success.</p>       ‍
                            <p data-aos="fade-up"
                                data-aos-duration="2850">We understand that every business is unique, and so are its challenges. Our team of experienced consultants is committed to tailoring strategies that suit your specific needs. Whether you are looking to expand your market reach, enhance customer engagement, or improve your overall operational efficiency.....</p>
                        </div>
                        <button className="flex bg-orange-900 text-white px-5 py-3 rounded-full items-center" data-aos="fade-up"
                            data-aos-duration="3000">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <div className="w-[550] space-y-6">
                        <div className="space-y-6">
                            <h1 className="text-[22px] sm:text-[40px]" data-aos="fade-up"
                                data-aos-duration="3000">Our Mission</h1>
                            <p className="text-[12px] sm:text-[18px]" data-aos="fade-up"
                                data-aos-duration="2900">Curate multi-layered top of the line solutions & products (via proprietary & reseller model), to aid our clients solve for immediate & future challenges in the ever-changing ad-tech realm.</p>
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-[22px] sm:text-[40px]" data-aos="fade-up"
                                data-aos-duration="3000">Our Vision</h1>
                            <p className="text-[12px] sm:text-[18px]" data-aos="fade-up"
                                data-aos-duration="2900">We aim to empower marketers by enabling them to take intelligent decisions with ease.</p>
                        </div>
                    </div>
                    <div className="" data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src="../src/assets/images/Rectangle 5650.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;