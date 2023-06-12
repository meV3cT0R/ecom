import { useGlobalContext } from "../context";
import Navbar from "./Navbar";
import Home from "./Home";
import { ABOUT, CART, HOME, LOGIN, PRODUCTINFO, PRODUCTS, REGISTER } from "./constants";
import About from "./About";
import Products from "./Products/Products";
import Footer from "./Footer";
import ProductInfo from "./Products/ProductInfo";
import Cart from "./Cart";
import Login from "./login/Login";
import Register from "./login/Register";

const Store = ()=>{
    const {webPageState,setWebPageState} = useGlobalContext();
    return (
        <div className="min-h-[100vh] flex flex-col">
            <Navbar />
            {webPageState===HOME && <Home />} 
            {webPageState===ABOUT && <About />}
            {webPageState===PRODUCTS && <Products />}
            {webPageState===PRODUCTINFO && <ProductInfo />}
            {webPageState===CART && <Cart />} 
            {webPageState===LOGIN && <Login />}
            {webPageState===REGISTER && <Register />}
            <Footer />
        </div>
    )
}

export default Store;