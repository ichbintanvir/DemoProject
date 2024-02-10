const Result = () => {
    return (
        <div className="container mx-auto sm:px-5">
            <div className="text-center pt-24">
                <h1 className="font-bold text-xl sm:text-6xl">Powered to drive optimal results</h1>
                <p className="pt-4 text-sm sm:text-lg">Brands & app marketers can find tailor made solutions to reach your end user.</p>
            </div>
            <div className="pt-14 pb-24 grid grid-cols-1 space-y-4 pl-8 sm:grid-cols-3">
                <div className="text-center w-72 mx-auto">
                    <img className="mx-auto" src="./src/assets/images/Vector (2).png" alt="" />
                    <h1 className="text-xl sm:text-2xl">Brand & performance <br />advertising</h1>
                    <p className="text-sm sm:text-base">Enable all funnel acquisition activity for your brand & app through..</p>
                </div>
                <div className="text-center w-72 mx-auto">
                    <img className="mx-auto" src="./src/assets/images/Vector (1).png" alt="" />
                    <h1 className="text-xl sm:text-2xl">Contextualised <br />targeting</h1>
                    <p className="text-sm sm:text-base">Reach your users better using our top DMP solutions</p>
                </div>
                <div className="text-center w-72 mx-auto">
                    <img className="mx-auto" src="./src/assets/images/Vector.png" alt="" />
                    <h1 className="text-xl sm:text-2xl">Campaign measurability <br /> & analysis</h1>
                    <p className="text-sm sm:text-base">With machine learning and multiple data end points, we are able to draw an...</p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}
export default Result;