import NavLogo from "/src/assets/images/image 7.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto flex flex-col font-THICCCBOI">
                <div className="text-white grid grid-cols-1 ml-5 pt-[54px] space-y-4 sm:grid-cols-4 pb-5">
                    <div className="grid justify-center sm:justify-start">
                        <div className="grid place-content-center sm:place-content-start" data-aos="fade-up"
                            data-aos-duration="1000">
                            <img src={NavLogo} alt="" className="w-[62px] h-[62px]" />
                        </div>
                        <div className="pt-[24px] max-w-[388px] font-THICCCBOI font-[500] text-xs sm:text-[18px]" data-aos="fade-up"
                            data-aos-duration="1050">
                            <p className="text-[#959595] mt-3">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                        </div>
                    </div>
                    <div className="grid justify-center sm:justify-start">
                        <div data-aos="fade-up"
                            data-aos-duration="1000">
                            <h1 className="font-THICCCBOI font-[700px] text-sm sm:text-[24px] pb-[20px]">Solutions</h1>
                        </div>
                        <div>
                            <ol className="list-none text-center sm:text-start font-THICCCBOI font-[400] text-xs sm:text-[18px] text-[#959595] cursor-pointer" data-aos="fade-up"
                                data-aos-duration="1050">
                                <li className="pb-3">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to='/b'>Blogs</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to='/r'>Resources</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to='/a'>About Us</Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="grid justify-center sm:justify-start">
                        <div data-aos="fade-up"
                            data-aos-duration="1000">
                            <h1 className="font-THICCCBOI font-[700] text-sm sm:text-[24px] pb-[20px]">Products</h1>
                        </div>
                        <div>
                            <ol className="list-none text-center sm:text-start font-THICCCBOI font-[400] text-[#959595] text-xs sm:text-[18px] cursor-pointer" data-aos="fade-up"
                                data-aos-duration="1050">
                                <li className="pb-3">Pravicy</li>
                                <li className="pb-3">Policy</li>
                                <li className="pb-3">Payment</li>
                                <li className="pb-3">Terms</li>
                            </ol>
                        </div>
                    </div>
                    <div className="grid justify-center sm:justify-start">
                        <div>
                            <h1 className="text-center sm:text-start font-THICCCBOI font-[700] text-sm sm:text-[24px] pb-[20px]" data-aos="fade-up"
                                data-aos-duration="1000">Blog & Resources</h1>
                        </div>
                        <div className="pb-[33px] text-center sm:text-start font-THICCCBOI font-[400] text-[#959595] text-xs sm:text-[18px]" data-aos="fade-up"
                            data-aos-duration="1050">
                            <p className="">+01 234 567 8910</p>
                            <p className="">besnik@gmail.com</p>
                        </div>
                        <div className="flex flex-row gap-[24px] cursor-pointer">
                            <div data-aos="fade-up"
                                data-aos-duration="1100">
                                <img className="logo" src="https://cdn-icons-png.flaticon.com/128/59/59439.png" alt="" />
                            </div>
                            <div data-aos="fade-up"
                                data-aos-duration="1100">
                                <img className="logo ml-3" src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="" />
                            </div>
                            <div data-aos="fade-up"
                                data-aos-duration="1100">
                                <img className="logo ml-3" src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="" />
                            </div>
                            <div data-aos="fade-up"
                                data-aos-duration="1100">
                                <img className="logo ml-3" src="https://cdn-icons-png.flaticon.com/128/4701/4701533.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-[38px]">
                    <hr />
                </div>
                <div className="p-5 font-THICCCBOI font-[400] text-[16px]">
                    <p className="text-white text-center">&copy; Copyright {new Date().getFullYear()} Basnik.All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;