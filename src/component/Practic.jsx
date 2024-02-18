import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Practic = () => {
    const [icon, setIcon] = useState(false);
    const changeIcon = () => {
        setIcon(!icon);
    }
    return (
        <div className="bg-red-400">
            <nav className="container mx-auto px-5 py-3 space-y-5 grid grid-cols-2 items-center">
                <div>
                    <img src="/src/assets/images/image 7.png" alt="" />
                </div>
                {/* <div className={icon ? "hidden" : "col-span-2 sm:col-span-1"}> */}
                <div className={`col-span-2 sm:col-span-1 ${!icon ? "" : "hidden"} sm:!block`}>
                    {/* <div className="col-span-2 sm:col-span-1"> */}
                    <ul className="flex flex-col sm:flex-row gap-8 sm:gap-[4vw] cursor-pointer">
                        <li>Home</li>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div onClick={changeIcon} className="col-start-2 row-start-1 flex justify-end sm:hidden">
                    {icon ? <HiMenu /> : <GrClose />}
                </div>
            </nav>
        </div>
    );
}
export default Practic;
