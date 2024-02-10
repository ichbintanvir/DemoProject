const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto flex flex-col pt-5 pb-5">
                <div className="text-white grid grid-cols-1 ml-5 space-y-4 sm:grid-cols-3 pb-5">
                    <div>
                        <div>
                            <img src="./src/assets/images/image 7.png" alt="" width="61px" height="61px" />
                        </div>
                        <div className="mt-3">
                            <p className="text-white w-3/5 mt-3">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-2xl leading-8 font-bold">Solutions</h1>
                        </div>
                        <div>
                            <ol className="list-none mt-3">
                                <li>Home</li>
                                <li>Blogs</li>
                                <li>Resources</li>
                                <li>About Us</li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-2xl leading-8 font-bold">Contacts</h1>
                        </div>
                        <div className="mt-3">
                            <p className="">+01 234 567 8910</p>
                            <p className="">besnik@gmail.com</p>
                        </div>
                        <div className="flex flex-row mt-3">
                            <div>
                                <img className="logo" src="https://cdn-icons-png.flaticon.com/128/59/59439.png" alt="" />
                            </div>
                            <div>
                                <img className="logo ml-3" src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="" />
                            </div>
                            <div>
                                <img className="logo ml-3" src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="" />
                            </div>
                            <div>
                                <img className="logo ml-3" src="https://cdn-icons-png.flaticon.com/128/4701/4701533.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <hr />
                </div>
                <div className="p-5">
                    <p className="text-white text-center">&copy; Copyright {new Date().getFullYear()} Basnik.All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;