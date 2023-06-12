import { useGlobalContext } from "../context";
import { HOME,ABOUT,PRODUCTS, CART, LOGIN } from "./constants";

const Navbar = () =>{
    const {setWebPageState} = useGlobalContext();
    return (
        <div className="flex flex-col max-sm:py-5 sm:flex-row sm:h-[5rem] bg-gray-100  px-10 sm:justify-center space-y-10 sm:space-y-0 items-start sm:items-center">
            <div className="max-sm:flex max-sm:justify-between max-sm:w-full ">
                <h1 className="text-5xl font-serif ">Comfy<span className="text-amber-700">Sloth</span></h1>
                <button
                    className="block sm:hidden"
                    onClick={(e)=>{
                        const navLinks =  document.querySelector("#navLinks");
                        const otherNavLinks = document.querySelector("#otherNavLinks");

                        if(navLinks.classList.contains("hidden")) {
                            navLinks.classList.remove("hidden");
                            otherNavLinks.classList.remove("hidden")
                        }else {
                            navLinks.classList.add("hidden");
                            otherNavLinks.classList.add("hidden");
                        }
                    }}
                >
                Click
                </button>
            </div>
            <ul id="navLinks" className="hidden sm:block sm:flex-1 text-center">
                <li className="text-lg block sm:inline-block px-4 py-1 border-b-2 border-b-transparent cursor-pointer text-gray-600 hover:border-b-amber-700 duration-100"><a
                    onClick={(e)=>setWebPageState(HOME)}
                    >Home</a></li>
                <li className="text-lg block sm:inline-block px-4 py-1 border-b-2 border-b-transparent cursor-pointer text-gray-600 hover:border-b-amber-700 duration-100"><a 
                    onClick={(e)=>setWebPageState(ABOUT)}
                    >About</a></li>
                <li className="text-lg block sm:inline-block px-4 py-1 border-b-2 border-b-transparent cursor-pointer text-gray-600 hover:border-b-amber-700 duration-100"><a 
                    onClick={(e)=>setWebPageState(PRODUCTS)}
                    >Products</a></li>

            </ul>
            <div className="hidden sm:block font-serif" id="otherNavLinks">
                <button
                    className="text-3xl capitalize px-3"
                    onClick={e=>{
                        setWebPageState(CART)
                    }}
                >
                    Cart
                </button>
                <button
                    className="text-3xl capitalize px-3"
                    onClick={e=>{
                        setWebPageState(LOGIN)
                    }}
                >
                    Login
                </button>
            </div>
            
        </div>
    )
}

export default Navbar;