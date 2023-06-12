import { useEffect } from "react";
import { useContext } from "react";
import { PRODUCTS } from "../constants";
import Product from "./Product";
import { ProductContext } from "./Products";



const MainContent = ()=>{
    const {state,dispatch} = useContext(ProductContext);
    const filterData = ()=>{
        let data;
        data = state.products.filter(product=>product.name.startsWith(state.keyword)).filter(product=>state.price>product.price);

        if(state.category != "all") {
            data = data.filter(product=>product.category==state.category)
        }
        if(state.company !="all") {
            data = data.filter(product=> product.company==state.company);
        }
        if(state.color !="all") {
            data = data.filter(product=> product.colors.includes(state.color));
        }
        return data;
    }

    return (
        <div className="space-y-10 md:w-[80%]">
            <div className="flex px-5 text-gray-500 text-lg justify-between">
                <h3>{filterData().length} products found</h3>  
                <select onChange={(e)=>{
                    if(e.target.value==="highestPrice") {
                        dispatch({type:PRODUCTS,data:state.products.sort((a,b)=>a.price<b.price)})
                    }else if(e.target.value==="lowestPrice") {
                        dispatch({type:PRODUCTS,data:state.products.sort((a,b)=>a.price>b.price)})
                    }
                }}>
                    <option value="lowestPrice">Price (Lowest)</option>
                    <option value="highestPrice">Price (Highest)</option>
                </select>

            </div>
            <div className="grid md:grid-cols-3">
                {
                    filterData().map(product=>{
                        return <Product key={product.id} product={product}/>
                    })
                }
            </div>
        </div>
    )
}

export default MainContent;1