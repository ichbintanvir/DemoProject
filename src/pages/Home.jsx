import Navbar from "../component/Navbar";
import Carusol from "../component/Carusol";
import About from "../component/About";
import Result from "../component/Result";
import Email from "../component/Email";
import Stories from "../component/Stories";
import Footer from "../component/Footer";
import P from "../component/P";

const Home = () => {
    return (
        <div>
            <P />
            {/* <Navbar /> */}
            <Carusol />
            <About />
            <Result />
            <Email />
            <Stories />
            <Footer />

        </div>
    );
}
export default Home;