const Hero = () => {
    return (
        <div className="bg-orange-900">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 text-white items-center py-6">
                    <div className="space-y-4 py-3">
                        <h1 className="text-[52px] text-bold">Juuuno's privacy DMP solutions</h1>
                        <p className="text-[18px]">Privacy enables proprietary DMP & Ad-stack solutions built for web 2 & web 3 advertisers. Learn how Juuuno's pDMP aims to solve for attribution related and privacy challenges in this ever-changing ad-tech landscape.</p>
                        <button className="text-black px-5 py-2 bg-amber-200 rounded-lg">Read More</button>
                    </div>
                    <div >
                        <img src="./src/assets/images/image 862.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;