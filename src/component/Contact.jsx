const Contact = () => {
    return (
        <div className="container mx-auto rounded-lg">
            <div className="max-w-[75rem] bg-white p-8 sm:px-[90px] rounded-lg mx-auto mt-[-10rem]">
                <div className="grid grid-cols-1 sm:grid-cols-2 px-3 items-center">
                    <div className="flex flex-col space-y-8 max-w-[420px]">
                        <div className="flex gap-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <span className="pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </span>
                            <div className="">
                                <p className="font-[THICCCBOI] font-bold text-[28px]">Call Us</p>
                                <p className="font-[Montserrat] text-[#372C2C] text-[18px]">+8801840307041</p>
                            </div>
                        </div>
                        <div className="flex gap-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <span className="pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>
                            <div className="">
                                <p className="font-[THICCCBOI] font-bold text-[28px]">Location</p>
                                <p className="font-[Montserrat] text-[#372C2C] text-[18px]">Mirpur Road</p>
                            </div>
                        </div>
                        <div className="flex gap-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <span className="pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </span>
                            <div className="">
                                <p className="font-[THICCCBOI] font-bold text-[28px]">Office Hours</p>
                                <p className="font-[Montserrat] text-[#372C2C] text-[18px]">Monday To Friday 9:30 Am - 5:30 Pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4" data-aos="fade-up"
                        data-aos-duration="1000">
                        <div>
                            <h1 className="text-[28px] font-THICCCBOI text-[#3C4245] text-[28px]">Leave a message</h1>
                            <p className="text-[18px] font-Montserrat text-[18px]">Get in touch with us</p>
                        </div>
                        <form action="" className="font-Montserrat"></form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex flex-col space-y-2">
                                <label className="text-[14px]" for="fname">First name:</label>
                                <input className="border-2 px-2 py-1 rounded-md" type="text" placeholder="Enter your first name" id="fname" name="fname" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-[14px]" for="lname">Last name:</label>
                                <input className="border-2 px-2 py-1 rounded-md" type="text" placeholder="Enter your last name" id="fname" name="fname" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-[14px]" for="email">Email:</label>
                            <input className="border-2 px-2 py-1 rounded-md" type="email" placeholder="Enter your email" id="fname" name="fname" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-[14px]" for="text">Message</label>
                            <textarea className="resize border-2 px-2 py-1 rounded-md" placeholder="Enter your message" name="" id="" cols="" rows=""></textarea>
                        </div>
                        <div className="flex flex-start sm:justify-center">
                            <button className="bg-orange-800 text-white px-5 py-2 rounded-lg font-THICCCBOI">Send My Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;