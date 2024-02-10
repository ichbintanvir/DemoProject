import React, { useState } from 'react';

const initialCardsToShow = 3;
const cardsPerLoad = 2;

const info = [
    {
        date: "August 13, 2021",
        heading1: "10 Hilarious Cartoons That Depict Real-Life",
        heading2: "Problems of Programmers",
        para1: "Redefined the user acquisition and redesigned the onboarding",
        para2: "experience, all within 3 working weeks.",
        img: "./src/assets/images/123.png",
    },
    {
        date: "August 13, 2021",
        heading1: "10 Hilarious Cartoons That Depict Real-Life",
        heading2: "Problems of Programmers",
        para1: "Redefined the user acquisition and redesigned the onboarding",
        para2: "experience, all within 3 working weeks.",
        img: "./src/assets/images/123.png",
    },
    {
        date: "August 13, 2021",
        heading1: "10 Hilarious Cartoons That Depict Real-Life",
        heading2: "Problems of Programmers",
        para1: "Redefined the user acquisition and redesigned the onboarding",
        para2: "experience, all within 3 working weeks.",
        img: "./src/assets/images/123.png",
    },
    {
        date: "August 13, 2021",
        heading1: "10 Hilarious Cartoons That Depict Real-Life",
        heading2: "Problems of Programmers",
        para1: "Redefined the user acquisition and redesigned the onboarding",
        para2: "experience, all within 3 working weeks.",
        img: "./src/assets/images/123.png",
    },
    {
        date: "August 13, 2021",
        heading1: "10 Hilarious Cartoons That Depict Real-Life",
        heading2: "Problems of Programmers",
        para1: "Redefined the user acquisition and redesigned the onboarding",
        para2: "experience, all within 3 working weeks.",
        img: "./src/assets/images/123.png",
    },
    {
        date: "August 13, 2021",
        heading1: "10 Hilarious Cartoons That Depict Real-Life",
        heading2: "Problems of Programmers",
        para1: "Redefined the user acquisition and redesigned the onboarding",
        para2: "experience, all within 3 working weeks.",
        img: "./src/assets/images/123.png",
    },
];

const News = () => {
    const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

    const handleLoadMore = () => {
        setCardsToShow(cardsToShow + cardsPerLoad);
    };
    return (
        <div className="bg-orange-50 py-5">
            <div className="container mx-auto">
                <form action="" className="flex gap-2 pt-8 px-5">
                    <input type="text" className="px-5 py-2 w-full focus:outline-none rounded-lg" placeholder="Search articles,topices etc." />
                    <button className="text-white bg-amber-900 px-5 py-2 rounded-lg">Search</button>
                </form>
                <div className="flex flex-col sm:flex-row gap-4 mt-5 px-5">
                    <button className='bg-white px-3 rounded-lg'>Design Thinking</button>
                    <button className='bg-white px-3 rounded-lg'>Technology</button>
                    <button className='bg-white px-3 rounded-lg'>Web</button>
                    <button className='bg-white px-3 rounded-lg'>Programming</button>
                    <button className='bg-white px-3 rounded-lg'>AI</button>
                </div>
                {/* <div className="flex gap-4 mt-5 px-5">
                    <a href="" className="px-4 py-1 rounded bg-white inline">Design Thinking</a>
                    <a href="" className="px-4 py-1 rounded bg-white inline">Technology</a>
                    <a href="" className="px-4 py-1 rounded bg-white inline">Web</a>
                    <a href="" className="px-4 py-1 rounded bg-white inline">Programming</a>
                    <a href="" className="px-4 py-1 rounded bg-white inline">AI</a>
                </div> */}
                <div className="mt-5 px-5">
                    {
                        info.slice(0, cardsToShow).map((data, index) => (
                            <div key={index} className="mb-5">
                                <div className="flex flex-col sm:flex-row justify-between bg-white rounded-lg items-center px-[30px] py-[41px]">
                                    <div className="space-y-3">
                                        <span className="text-[13px]">{data.date}</span>
                                        <div>
                                            <h1 className="text-[26px]">{data.heading1}</h1>
                                            <h1 className="text-[26px]">{data.heading2}</h1>
                                        </div>
                                        <div>
                                            <p className="text-[18px]">{data.para1}</p>
                                            <p className="text-[18px]">{data.para2}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="" src={data.img} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {cardsToShow < info.length && (
                    <div className="text-center mt-4">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleLoadMore}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>

        </div >
    );
}
export default News;