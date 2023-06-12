import { useGlobalContext } from "../context";
import { CART, LOGIN, PRODUCTS, shippingFee } from "./constants";
import { formatDecimalMoney, formatDecimalMoneyPrecise } from "./Products/Product";
import { WhereAboutBar } from "./utility/Utility";

const Cart = ()=>{
    const { cart,setWebPageState,setCart } = useGlobalContext();
    const changeInCartProductQuantity = (dang,symbol)=>{
        let newCart = cart.map(product=>{
            if(product.id == dang.id) {
                switch(symbol) {
                    case "-":
                        product.quantity--;
                        break;
                    case "+":
                        product.quantity++;
                        break;
                }
                product.total = (product.product.price/100)*product.quantity;
            }
            return product;
        })
        
        setCart(newCart);
    }
    
    let page = [
        {
            name: CART,
            changeState: false
        }
    ]
    return (
        <>
            <WhereAboutBar page={page}/>
            <div className="mx-auto text-center space-y-5 w-[90vw] md:w-[80vw] mb-20">
                
                {
                    cart.length == 0 
                    && <>
                        <h1 className="text-3xl font-bold font-sans"> Your cart is empty</h1>
                        <button
                            className="rounded bg-amber-600 text-white px-2 py-1 hover:bg-amber-700 duration-100"
                            onClick={e=>{
                                setWebPageState(PRODUCTS)
                            }}
                        >
                            FILL IT
                        </button>
                    </>
                    || (
                        <>
                            
                        <div className="max-sm:hidden grid grid-cols-12 text-gray-500 capitalize font-light text-xs md:text-lg">
                            <div className="h-8 col-span-5">items</div>
                            <div className="h-8 col-span-2">price</div>
                            <div className="h-8 col-span-2">quantity</div>
                            <div className="h-8 col-span-2">sub total</div>
                            <div className="h-8 col-span-1"></div>
                        </div>
                                <div className="border-t border-b border-gray-300">

                                    {cart.map(product=>{
                                        return <>
                                            <div key={product.product.id} className="grid grid-cols-12 py-10 md:py-16 ">
                                                <div className="col-span-5 grid grid-cols-[50px,100px] md:grid-cols-[100px,200px] md:space-x-4  items-center  h-[80px]">
                                                    <img src={product.product.image} className=" w-full  object-cover h-full"/>
                                                    <div className="">
                                                        <h1 className="text-xs font-semibold md:text-lg h-[100%] ">{product.product.name}</h1>
                                                        <div className="text-xs text-amber-700 md:text-lg">
                                                            {formatDecimalMoney(product.product.price/100)}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" col-span-2 grid items-center max-sm:hidden">
                                                    <div className="text-xs text-amber-700 md:text-lg">
                                                        {formatDecimalMoney(product.product.price/100)}
                                                    </div>
                                                </div>
                                                <div className="grid items-center col-span-4 md:text-xl ">
                                                        <div>
                                                            <button
                                                                className="px-4 "
                                                                onClick={e=>changeInCartProductQuantity(product,'-')}
                                                            > -</button>
                                                            <span>
                                                                {product.quantity}
                                                            </span>
                                                            <button
                                                                className="px-4"
                                                                onClick={e=>changeInCartProductQuantity(product,'+')}
                                                            > +</button>
                                                        </div>
                                                </div>
                                                <div className="col-span-2 text-xs text-amber-700 flex items-center justify-center md:text-lg">{formatDecimalMoney(product.total)}</div>
                                                <div className="col-span-1 grid items-center">
                                                        <button
                                                            className="text-white px-3 py-1 bg-red-400 rounded capitalize text-xs md:text-lg"
                                                            onClick={e=>{
                                                                    setCart(cart.filter(del=>del.id!=product.id));
                                                                }
                                                            }
                                                        >
                                                            del
                                                        </button>
                                                </div>
                                            </div>
                                            
                                        </>
                                    })}
                                </div>
                            
                            <div className="flex justify-between mb-10">
                                <button
                                    className="md:text-lg text-white bg-amber-600 rounded shadow px-3  py-1"
                                    onClick={e=>{
                                        window.scrollTo({
                                            top:0,behavior: 'smooth'
                                        })
                                        setWebPageState(PRODUCTS)
                                    }}
                                >
                                    Continue Shopping
                                </button>
                                <button
                                    className="md:text-lg text-gray-200 bg-black rounded shadow px-3 py-1"
                                    onClick={e=>{
                                        setCart([]);
                                    }}
                                >
                                    Clear Shopping Cart
                                </button>
                            </div>

                            <div className="ml-auto leading-8 border border-gray-300 py-3 px-8 rounded w-full md:w-[45%] text-left">
                                <h1 className="grid grid-cols-2 font-bold">Subtotal: <span>{
                                       formatDecimalMoneyPrecise(cart.length>1?cart.reduce((x,y)=>typeof(x)!="number"?x.total+y.total:x+y.total):cart[0].total)
                                         
                                    } </span> </h1>

                                <h1 className="grid grid-cols-2 mb-4"> Shipping fee : <span>${shippingFee}</span></h1>
                                    <hr/>
                                <h1 className="font-bold text-xl md:text-3xl grid grid-cols-2">Order Total : <span>{ formatDecimalMoneyPrecise(cart.length>1?cart.reduce((x,y)=>typeof(x)!="number"?x.total+y.total:x+y.total):cart[0].total) }</span></h1>
                            </div>
                            <div className="flex justify-end">

                                <button
                                    className="border shadow rounded bg-amber-600 w-[200px] py-2 text-white"
                                    onClick={e=>{
                                        setWebPageState(LOGIN)
                                    }}  
                                >
                                    Login
                                </button>
                            </div>
                        </>
                    )
                }
                    
                
            </div>
        </>
    )
}


export default Cart;