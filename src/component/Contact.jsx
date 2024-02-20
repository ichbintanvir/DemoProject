import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="container mx-auto rounded-lg">
            <div className="max-w-[75rem] bg-white p-8 sm:px-[90px] rounded-lg mx-auto mt-[-10rem]">
                <div className="grid grid-cols-1 sm:grid-cols-2 px-3 items-center">
                    <div className="flex flex-col space-y-8 max-w-[420px]">
                        <div className="flex gap-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <span className="pt-2">
                                <BsTelephoneFill className="w-[28px] h-[28px]" />
                            </span>
                            <div className="">
                                <p className="font-THICCCBOI font-[600] text-[#3C4245] text-[28px]">Call Us</p>
                                <p className="font-Montserrat font-[400] text-[#372C2C] text-[18px]">+8801840307041</p>
                            </div>
                        </div>
                        <div className="flex gap-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <span className="pt-2">
                                <MdLocationOn className="w-[28px] h-[28px]" />
                            </span>
                            <div className="">
                                <p className="font-THICCCBOI font-[600] text-[#3C4245] text-[28px]">Location</p>
                                <p className="font-Montserrat font-[400] text-[#372C2C] text-[18px]">Mirpur Road</p>
                            </div>
                        </div>
                        <div className="flex gap-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <span className="pt-2">
                                <FaClock className="w-[28px] h-[28px]" />
                            </span>
                            <div className="">
                                <p className="font-THICCCBOI font-[600] text-[#3C4245] text-[28px]">Office Hours</p>
                                <p className="font-Montserrat font-[400] text-[#372C2C] text-[18px]">Monday To Friday 9:30 Am - 5:30 Pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4" data-aos="fade-up"
                        data-aos-duration="1000">
                        <div>
                            <h1 className="font-THICCCBOI font-[600] text-[#3C4245] text-[28px]">Leave a message</h1>
                            <p className="font-Montserrat font-[400] text-[#372C2C] text-[18px]">Get in touch with us</p>
                        </div>
                        <form action="" className="font-Montserrat font-[400] text-[18px]"></form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex flex-col space-y-2">
                                <label className="" for="fname">First name:</label>
                                <input className="border-2 px-2 py-1 rounded-md" type="text" placeholder="Enter your first name" id="fname" name="fname" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="" for="lname">Last name:</label>
                                <input className="border-2 px-2 py-1 rounded-md" type="text" placeholder="Enter your last name" id="fname" name="fname" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="" for="email">Email:</label>
                            <input className="border-2 px-2 py-1 rounded-md" type="email" placeholder="Enter your email" id="fname" name="fname" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="" for="text">Message</label>
                            <textarea className="resize border-2 px-2 py-1 rounded-md" placeholder="Enter your message" name="" id="" cols="" rows=""></textarea>
                        </div>
                        <div className="flex flex-start sm:justify-center font-THICCCBOI font-[600] text-[16px]">
                            <button className="bg-orange-800 text-white px-5 py-2 rounded-lg">Send My Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;