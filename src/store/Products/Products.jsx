import axios from "axios";
import { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { CATEGORY, PRODUCTS, COMPANY, PRICE, KEYWORD, COLOR,DefaultState } from "../constants";
import { url } from "../Home";
import Product from "./Product";
import { WhereAboutBar } from "../utility/Utility";
import SideBar from "./Sidebar";
import MainContent from "./MainContent";
import { useState } from "react";



export const ProductContext = createContext();


const initialState = {
    keyword: '',
    category : 'all',
    company : 'all',
    color : 'all',
    price : 100000,
    products : [],
    filteredProducts : []
}


const reducer = (state,action)=>{
    switch(action.type) {
        case CATEGORY:
            return {...state,category:action.id};
        case COMPANY:
            return {...state,company:action.company}
        case PRICE:
            return {...state,price:action.price}
        case PRODUCTS:
            return {...state,products:action.data}
        case KEYWORD:
            return {...state,keyword:action.key}
        case COLOR:
            return {...state,color:action.color}

        case DefaultState:
            return {...initialState,products:state.products}
    }

        
    throw new Error("Unknown Action");
}

const Products = ()=> {
    const [state,dispatch] = useReducer(reducer,initialState);
    const [loading,setLoading] = useState(true);

    const fetchProducts = async ()=>{

        try {
            const data = await axios(url);
            dispatch({type:PRODUCTS,data:data.data.sort((a,b)=>a.price>b.price)});;
        } catch (error) {
            console.log(error.response);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    const page = [{
        name: PRODUCTS,
        changeState : false
    }];
    return (
        <>
            <WhereAboutBar page={page}/>
            <ProductContext.Provider value={{state,dispatch}}>
                <div className="flex flex-col md:flex-row pb-20">
                    <SideBar />
                    {loading?<h1>Loading...</h1>:<MainContent />}
                </div>
            </ProductContext.Provider>
        </>
    )
}

export default Products;