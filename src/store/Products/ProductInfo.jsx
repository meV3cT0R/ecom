import { useState } from "react";
import { useGlobalContext } from "../../context";
import { CART, PRODUCTS } from "../constants";
import { WhereAboutBar } from "../utility/Utility";
import { formatDecimalMoney } from "./Product";

const ProductInfo = ()=>{
    const {setWebPageState,product,cart,setCart} = useGlobalContext();
    const [counter, setCounter] = useState(1);
    const page = [
        {
            name: PRODUCTS,
            changeState: true
        },
        {
            name: product.name,
            changeState: false
        } 
    ]
    return (
        <>
            <WhereAboutBar page={page}/>
            <div className="mb-20 mx-auto">
                <div className="max-w-[1170px] px-10">
                    <button
                        className="px-5 py-1 bg-amber-900 text-white rounded"
                        onClick={(e)=>{
                            setWebPageState(PRODUCTS)
                        }}
                        >
                        Back to Products
                    </button>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-20 mt-10 items-center">
                        <div>
                            <img src={product.image} className="h-[300px] md:h-[500px] w-full object-cover"/>
                            <div className="grid grid-cols-5 gap-4 mt-5 h-16 md:h-24">
                                <div className="border border-black rounded"></div>
                                <div className="border border-black rounded"></div>
                                <div className="border border-black rounded"></div>
                                <div className="border border-black rounded"></div>
                                <div className="border border-black rounded"></div>
                            </div>
                        </div>

                        <div className="space-y-4 ">
                            <h1 className="font-bold text-3xl capitalize">{product.name}</h1>
                            <p className="text-sm text-amber-800 font-bold md:text-lg"> {formatDecimalMoney(product.price/100)}</p>
                            <p className="text-gray-600 text-sm leading-8 md:text-lg">{product.description}</p>
                            <p className="text-gray-600 text-sm"><span className="font-bold text-gray-800 text-md md:text-lg">SKU :</span> {product.id} </p>
                            <p className="text-gray-600 text-sm"><span className="font-bold text-gray-800 text-md md:text-lg">Brand :</span> {product.company}</p>
                            <hr style={{"background-color":"black"}}/>
                            <p className="flex items-center capitalize font-bold"> colors: {
                                    product.colors.map(color=>{
                                        return <button 
                                            className="w-5 h-5 rounded-full ml-3"
                                            style={{"backgroundColor":color}}
                                            >
                                        </button>
                                    })
                                }
                            </p>
                            <div className="flex items-center space-x-5">
                                <button
                                    className="px-8 py-2 text-3xl"
                                    onClick={(e)=>{
                                        setCounter(counter>1?counter-1:1);
                                    }}
                                >-</button>
                                    <span className="text-3xl font-bold">
                                        {counter}

                                    </span>
                                <button
                                    className="px-8 py-2 text-3xl"
                                    onClick={(e)=>{
                                        setCounter(counter<9?counter+1:9);
                                    }}
                                >+</button>
                            </div>
                            <button
                                className="capitalize bg-amber-700 text-gray-100 px-3 py-1 rounded"
                                onClick={(e)=>{
                                    let isInCart = false;
                                    let newCart = cart;
                                    for(let i =0;i<newCart.length;i++) {
                                        if(newCart[i].id == product.id) {
                                            newCart[i].quantity += 1;
                                            newCart[i].total = (product.price/100)*newCart[i].quantity
                                            isInCart = true;
                                            break;
                                        }
                                    }

                                    if(!isInCart) {
                                        newCart.push({
                                            id:product.id,
                                            product,
                                            quantity : counter,
                                            total:(product.price/100)*counter 
                                        })
                                        console.log(`product name : ${newCart[newCart.length-1].product.name} typeof(Total) : ${typeof(newCart[newCart.length-1].total)}`)
                                    }

                                    setCart(newCart);
                                    setWebPageState(CART)
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo;