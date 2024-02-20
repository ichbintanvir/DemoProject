import ResourcesHeroImg from "/src/assets/images/image 862.png";

const Hero = () => {
    return (
        <div className="bg-orange-900">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 text-white items-center py-6">
                    <div className="space-y-4 py-3">
                        <div className="font-Montserrat text-[52px] text-bold">
                            <h1>Juuuno's privacy</h1>
                            <h1>DMP solutions</h1>
                        </div>
                        <p className="text-[18px] font-THICCCBOI max-w-[500px]">Privacy enables proprietary DMP & Ad-stack solutions built for web 2 & web 3 advertisers. Learn how Juuuno's pDMP aims to solve for attribution related and privacy challenges in this ever-changing ad-tech landscape.</p>
                        <button className="text-black px-5 py-2 bg-amber-200 rounded-lg">Read More</button>
                    </div>
                    <div >
                        <img src={ResourcesHeroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;