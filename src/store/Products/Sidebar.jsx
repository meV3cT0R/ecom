import { useContext } from "react";
import { PRICE,CATEGORY, KEYWORD, PRODUCTS,COMPANY, COLOR,DefaultState } from "../constants";
import { ProductContext } from "./Products";

const categories = ["all","office","living room","kitchen","dining","kids"];
const companies = ["all","marcos","liddy","ikea","caressa"]
const colors = ["all","#ff0000","#00ff00","#0000ff","#ffb900"];

const categoryConstant = "category";

const SideBar = ()=>{
    const {state,dispatch} = useContext(ProductContext);

    /*
        Switches underline ( which indicates selected elements )

        @param prev id of previous category
        @param next current event that is being handled
    */
    const switchUnderline = (prev,next) =>{

        const css = ["underline","underline-offset-8"]
        console.log(categoryConstant+prev.replace(" ",""));
        document.getElementById(categoryConstant+prev.replace(" ","")).classList.remove(...css);
        next.currentTarget.classList.add(...css)
        dispatch({type:CATEGORY,id:next.target.id})
    }


    return <div id="sidebar" className="flex flex-col  px-5 space-y-8 mb-10">
    <form>
        <input
            type="text"
            className="border shadow-lg px-2 py-2 rounded bg-slate-100"
            placeholder="Search"
            onKeyUp={(e)=>{
                dispatch({type:KEYWORD,key:e.target.value});
            }}
            />
    </form>

    <div>
        <h1 className="font-bold text-gray-600 mb-2">Category</h1>
        <ul className="leading-8">
            {categories.map((category)=>{
                let css = "";
                if(category == "all") css="underline underline-offset-8"
                return (
                    <li className="text-gray-400 cursor-pointer" key={"category"+category}>
                        <a
                            className={css}
                            id={categoryConstant+category.replace(" ","")}
                            onClick={(e)=>{
                                console.log(category.replace(" ",""))
                                switchUnderline(state.category,e);
                                dispatch({type:CATEGORY,id:category})
                            }
                        }
                        >{category}</a>
                    </li>
                )
            })
            }
        </ul>
    </div>

    <div>
        <h1 className="font-bold text-gray-600 mb-2"> Company</h1>
        <form>
            <select onChange={(e)=>{
                console.log(e.target.value)
                dispatch({type:COMPANY,company:e.target.value})
            }}>
                {
                    companies.map(company=>{
                        return (
                            <option key={company} value={company}>{company}</option>
                        )
                    })
                }
            </select>
        </form>
    </div>

    <div>
        <h1 className="font-bold text-gray-600 mb-2">
            Colors
        </h1>
        <ul className="flex items-center">
            {
                colors.map(color=>{

                    return (
                        <>
                            {
                                (color.startsWith('#') && <button
                                    key={color}
                                    id={"color"+color}
                                    className="w-5 h-5 border rounded-full mr-2"
                                    style={{"backgroundColor": color}}
                                    onClick={(e)=>{
                                        
                                        //previously selected color
                                        const prev = document.getElementById("color"+state.color)
                                              

                                        if(prev != null) {
                                            prev.childNodes[0]
                                            .classList
                                            .add("hidden") 
                                        }
                                        
                                        // currently selected color 
                                        // to show inner div indicating this color is selected
                                        document
                                        .getElementById("color"+color)
                                        .childNodes[0].classList.remove("hidden")
                 
                                        dispatch({type:COLOR,color})
                                    }}
                                    >
                                        <div className="hidden w-3 h-3 border mx-auto mt-[1%] bg-white rounded-full"></div>
                                    </button>) 
                                || <li className="capitalize inline-block mr-2 cursor-pointer" key={"color"+color}> <a onClick={(e)=>{
                                    if(state.color != "all") {
                                        document
                                            .getElementById("color"+state.color)
                                            .childNodes[0]
                                            .classList
                                            .add("hidden") 
                                    }
                                    dispatch({type:COLOR,color})
                                }}>{color}</a></li>
                            }
                        </>
                    )
                })
            }
        </ul>
    </div>

    <div>
        Price
        <p id="output">$ {state.price/100}</p>
        <input type="range" min="1" max="4100"
            value={state.price/100} 
            onInput={(e)=>{
                console.log(e.target.value);
                dispatch({type:PRICE,price:e.target.value*100})
            }}
        />
    </div>

    <button
        className="bg bg-red-400 text-white capitalize rounded py-1"
        onClick={(e)=>{

            dispatch({type:DefaultState})
        }}
    >
        clear filter
    </button>

    <button >
        
    </button>
</div>
}


export default SideBar;