import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavImage from "/src/assets/images/image 7.png";

const P = () => {
    const [nav, setNav] = useState();
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className="sticky top-0 z-[1000] bg-white">
            <div className="container mx-auto">
                <div className="px-5 py-3 space-y-5 grid grid-cols-2 items-center font-THICCCBOI font-[500px] leading-[19px] text-sm sm:text-[18px]">
                    <div>
                        <img className="w-[61px] h-[61px] flex items-center" src={NavImage} alt="" />
                    </div>
                    {/* <div className="absolute sm:static sm:min-h-fit bg-white min-h-[60vh] left-0 top-[9%] sm:w-auto w-full px-5"> */}
                    <div className={`col-span-2 sm:col-span-1 ${nav ? "" : "hidden"} sm:!block`}>
                        {/* <ul className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-[4vw] cursor-pointer"> */}
                        <ul className="flex flex-col sm:flex-row items-center font-[500] text-[18px] gap-8 sm:gap-[32px] cursor-pointer">
                            <li className="w-full">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="group relative w-full">
                                <Link className="flex items-center sm:justify-start justify-between">
                                    <span>
                                        Solutions
                                    </span>
                                    <FiChevronDown className="w-6 h-6" />
                                </Link>
                                <div className="sm:absolute grid gap-4 bg-white hidden group-hover:block text-black rounded-md p-2">
                                    <ul className="sm:text-start grid gap-3 min-w-[15rem]">
                                        <li className="hover:border-b-2 px-3 py-1"><Link to="/b">Blogs</Link></li>
                                        <li className="hover:border-b-2 px-3 py-1">Case studies</li>
                                        <li className="hover:border-b-2 px-3 py-1">Events reports</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group relative w-full">
                                <Link className="flex items-center sm:justify-start justify-between" to="/r">
                                    <span>
                                        Resources
                                    </span>
                                    <FiChevronDown className="w-6 h-6" />
                                </Link>
                                <div className="sm:absolute grid bg-white gap-4 hidden group-hover:block text-black rounded-md p-2">
                                    <ul className="sm:text-start grid gap-3 min-w-[15rem]">
                                        <li className="hover:border-b-2 px-3 py-1"><Link to="/a">About</Link></li>
                                        <li className="hover:border-b-2 px-3 py-1">
                                            <Link to=''>News</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group relative w-full">
                                <Link className="flex items-center sm:justify-start justify-between" to="/c">
                                    <span>
                                        Company
                                    </span>
                                    <FiChevronDown className="w-6 h-6" />
                                </Link>
                                <div className="sm:absolute grid gap-4 hidden group-hover:block text-black rounded-md p-2 overflow-hidden">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div onClick={handleNav} className="col-start-2 row-start-1 flex justify-end sm:hidden">
                        {!nav ? <FiAlignJustify className="text-3xl cursor-pointer" /> : <FiX className="text-3xl cursor-pointer" />}
                    </div>
                </div>
            </div>
        </div >
    );
}
export default P;

// fixed the hover effect for mobile screen