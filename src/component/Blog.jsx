// const list = [
//     {
//         image: "./src/assets/images/image 863.png",
//         title: "JUNNO RETAIL MEDIA PLATFORM",
//         date: "Nov 03,2023",
//         description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
//         exit: "Read More",
//     },
//     {
//         image: "./src/assets/images/image 863.png",
//         title: "JUNNO RETAIL MEDIA PLATFORM",
//         date: "Nov 03,2023",
//         description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
//         exit: "Read More",
//     },
//     {
//         image: "./src/assets/images/image 863.png",
//         title: "JUNNO RETAIL MEDIA PLATFORM",
//         date: "Nov 03,2023",
//         description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
//         exit: "Read More",
//     },
//     {
//         image: "./src/assets/images/image 863.png",
//         title: "JUNNO RETAIL MEDIA PLATFORM",
//         date: "Nov 03,2023",
//         description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
//         exit: "Read More",
//     },
// ];
// const Blog = () => {
//     return (
//         <div className="bg-stone-300">
//             <div className="container mx-auto">
//                 <div className="pt-8 pb-8">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
//                         {list.map((data) => (
//                             <div className="w-screen sm:w-[580px]">
//                                 <div>
//                                     <img src={data.image} alt="" />
//                                 </div>
//                                 <div className="space-y-4 bg-white p-6">
//                                     <div className="flex flex-col sm:flex-row justify-between">
//                                         <p className="font-bold">{data.title}</p>
//                                         <p>{data.date}</p>
//                                     </div>
//                                     <p>{data.description}</p>
//                                     <p className="font-bold">{data.exit}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Blog;

import React, { useState } from 'react';

const initialCardsToShow = 4;
const cardsPerLoad = 2;

const list = [
    {
        image: "./src/assets/images/image 863.png",
        title: "JUNNO RETAIL MEDIA PLATFORM",
        date: "Nov 03,2023",
        description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
        exit: "Read More",
    },
    {
        image: "./src/assets/images/image 863.png",
        title: "JUNNO RETAIL MEDIA PLATFORM",
        date: "Nov 03,2023",
        description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
        exit: "Read More",
    },
    {
        image: "./src/assets/images/image 863.png",
        title: "JUNNO RETAIL MEDIA PLATFORM",
        date: "Nov 03,2023",
        description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
        exit: "Read More",
    },
    {
        image: "./src/assets/images/image 863.png",
        title: "JUNNO RETAIL MEDIA PLATFORM",
        date: "Nov 03,2023",
        description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
        exit: "Read More",
    },
    {
        image: "./src/assets/images/image 863.png",
        title: "JUNNO RETAIL MEDIA PLATFORM",
        date: "Nov 03,2023",
        description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
        exit: "Read More",
    },
    {
        image: "./src/assets/images/image 863.png",
        title: "JUNNO RETAIL MEDIA PLATFORM",
        date: "Nov 03,2023",
        description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
        exit: "Read More",
    },
    {
        image: "./src/assets/images/image 863.png",
        title: "JUNNO RETAIL MEDIA PLATFORM",
        date: "Nov 03,2023",
        description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
        exit: "Read More",
    },
    {
        image: "./src/assets/images/image 863.png",
        title: "JUNNO RETAIL MEDIA PLATFORM",
        date: "Nov 03,2023",
        description: "Learn how machine learning and first-party data optimize omnichannel sales, ensure precise attribution, and boost media integration for online media.",
        exit: "Read More",
    },
];

const Blog = () => {
    const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

    const handleLoadMore = () => {
        setCardsToShow(cardsToShow + cardsPerLoad);
    };

    return (
        <div className="bg-stone-300">
            <div className="container mx-auto px-5">
                <div className="pt-8 pb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                        {list.slice(0, cardsToShow).map((data, index) => (
                            <div key={index} className="sm:w-[580px]">
                                {
                                    <div>
                                        <div className='flex flex-col'>
                                            <div>
                                                <img src={data.image} alt="" />
                                            </div>
                                            <div className="mt-[-60px] bg-orange-50 w-full opacity-70 px-5 flex items-center gap-3">
                                                <img src="./src/assets/images/image 7.png" className="w-[61px] h-[61px]" alt="" />
                                                <p>Anna Bell</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 bg-white p-6">
                                            <div className="flex flex-col sm:flex-row justify-between">
                                                <p className="font-bold">{data.title}</p>
                                                <p>{data.date}</p>
                                            </div>
                                            <p>{data.description}</p>
                                            <p className="font-bold">{data.exit}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    {cardsToShow < list.length && (
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
            </div>
        </div>
    );
};

export default Blog;