import { useContext,createContext,useState } from "react"

const GlobalContext = createContext();

export const useGlobalContext = ()=> useContext(GlobalContext);
const AppContext = (props)=>{
    const [webPageState,setWebPageState] = useState("HOME");
    const [cart,setCart] = useState([]);
    const [product,setProduct] = useState({});

    return (
        <GlobalContext.Provider value={{
                webPageState,
                setWebPageState,
                cart,
                setCart,
                product,
                setProduct
            }}>
            {props.children}
        </GlobalContext.Provider>
    );
}
export default AppContext;