const Bhero = () => {
    return (
        <div className="bg-[#8D462E]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center text-white sm:grid-cols-2 py-[60px] px-5 space-y-5">
                    <div>
                        <span className="text-[18px]">25.12.2025</span>
                        <div className="text-[42px]">
                            <h1>Juuuno's Blog</h1>
                            <h1>DMP solutions</h1>
                        </div>
                        <p className="text-[18px]">
                            Privacy enables proprietary DMP & Ad-stack solutions built for web 2 & web 3 advertisers.
                        </p>
                    </div>
                    <div>
                        <img src="./src/assets/images/12.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Bhero;