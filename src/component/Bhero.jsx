const Bhero = () => {
    return (
        <div className="bg-[#8D462E]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center text-white sm:grid-cols-2 py-[60px] px-5 space-y-5">
                    <div className="space-y-[16px]">
                        <span className="text-[18px]">25.12.2025</span>
                        <div className="text-[42px] font-Montserrat">
                            <h1 data-aos="fade-up"
                                data-aos-duration="3000">Juuuno's Blog</h1>
                            <h1 data-aos="fade-up"
                                data-aos-duration="2800">DMP solutions</h1>
                        </div>
                        <p className="text-[18px] max-w-[500px] font-THICCCBOI" data-aos="fade-up"
                            data-aos-duration="3000">
                            Privacy enables proprietary DMP & Ad-stack <br /> solutions built for web 2 & web 3 advertisers.
                        </p>
                        <button className="bg-[#FDDC8D] text-[#151010] rounded px-5 py-2 font-THICCCBOI" data-aos="fade-up"
                            data-aos-duration="3200">
                            <p>Read more</p>
                        </button>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src="/src/assets/images/12.png" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Bhero;