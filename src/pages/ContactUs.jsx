import Carusol from "../component/Carusol";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import P from "../component/P";
const ContactUs = () => {
    return (
        <>
            {/* <Navbar /> */}
            <P />
            <Carusol />
            <div className="bg-orange-50 py-10 px-5">
                <Contact className="" />
            </div>
            <Footer />
        </>
    );
}
export default ContactUs;