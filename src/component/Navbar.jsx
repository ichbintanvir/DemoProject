import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-3 px-5 grid grid-cols-1 px-5 sm:grid-cols-2 items-center">
                <div className="w-[61px] h-[61px]" data-aos="fade-up"
                    data-aos-duration="3000">
                    <img src="./src/assets/images/image 7.png" alt="" />
                </div>
                <div className="cursor-pointer">
                    <ul className="flex flex-col w-screen sm:flex-row gap-8">
                        <li className="border-b-4 pb-3 hover:font-bold sm:border-0"><Link to='/r'>Home</Link></li>
                        <li className="border-b-4 pb-3 hover:font-bold sm:border-0">
                            <div className="flex flex-row">
                                <a>Solution</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </div>
                        </li>
                        <li className="border-b-4 pb-3 hover:font-bold sm:border-0">
                            <div className="flex flex-row">
                                <Link to='/r'><a>Resource</a></Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </div>
                        </li>
                        <li className="border-b-4 pb-3 hover:font-bold sm:border-0">
                            <div className="flex flex-row">
                                <a>Company</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;