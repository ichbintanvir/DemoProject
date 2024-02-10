import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const P = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        // <div className="container mx-auto">
        <div className="container mx-auto">
            <div className=" flex justify-between px-5 items-center py-3">
                <div>
                    <img className="w-[61px] h-[61px] flex items-center" src="./src/assets/images/image 7.png" alt="" />
                </div>
                {/* <div className="absolute sm:static sm:min-h-fit bg-white min-h-[60vh] left-0 top-[9%] sm:w-auto w-full px-5"> */}
                <div className={!nav ? "absolute sm:static sm:min-h-fit bg-white left-0 top-[10%] sm:w-auto w-full px-5" : "hidden"}>
                    {/* <ul className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-[4vw] cursor-pointer"> */}
                    <ul className="flex flex-col sm:flex-row items-center gap-8 sm:gap-[4vw] cursor-pointer">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li className="group relative">
                            <a className="flex items-center">Solutions
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </a>
                            <div className="absolute bg-white hidden group-hover:block w-[100px] text-black rounded-md p-2 ">
                                <ul>
                                    <li className=""><a href="/b">Blogs</a></li>
                                    <li className="">Case studies</li>
                                    <li className="">Events reports</li>
                                </ul>
                            </div>
                        </li>
                        <li className="group relative">
                            <a className="flex items-center" href="/r">Resources
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </a>
                            <div className="absolute bg-white hidden group-hover:block w-[100px] text-black rounded-md p-2 ">
                                <ul>
                                    <li><a href="/a">About</a></li>
                                    <li>News</li>
                                </ul>
                            </div>
                        </li>
                        <li className="group relative">
                            <a className="flex items-center" href="/c">Company
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </a>
                            <div className="absolute hidden group-hover:block w-[150px] text-black rounded-md p-2 ">
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden">
                    {!nav ? <FiX className="text-3xl cursor-pointer" /> : <FiAlignJustify className="text-3xl cursor-pointer" />}
                </div>
            </div>
        </div>
    );
}
export default P;

// i can't see any output. fixed the code