import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import P from "./component/P";
import Bhero from "./component/Bhero";
import Blog from "./pages/Blog";
import Demo from "./component/Demo";
import Practic from "./component/Practic";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/r" element={<Resources />} />
        <Route path="/a" element={<AboutUs />} />
        <Route path="/c" element={<ContactUs />} />
        <Route path="/b" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    // <Practic />
  );
};

export default App;

