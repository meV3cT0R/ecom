import { useGlobalContext } from "../../context";
import { PRODUCTINFO } from "../constants";
import search from "../images/search.png"
const Product = ({product}) => {
    const {setWebPageState,setProduct}= useGlobalContext();
    return (
        <div className="flex flex-col space-y-3 mt-10 sm:mt-0  w-[90%] mx-auto mb-10">
            <div 
                className="relative cursor-pointer"
                onClick={(e)=>{
                    setWebPageState(PRODUCTINFO);
                    setProduct(product);
                }}
            >
                <img src={product.image} className="w-full rounded h-[230px] object-cover"
                onMouseEnter={(e)=>{
                    document.getElementById(product.id).classList.remove("hidden");

                }}

                onMouseLeave={(e)=>{
                    document.getElementById(product.id).classList.add("hidden");
                }}
                
                
                />
                
                <img
                    id={product.id}
                    src={search}
                    className="absolute hidden w-1/6 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white ease-in"
                    
                />
            </div>
            <div className="flex justify-between">
                <p className="capitalize text-gray-600">{product.name}</p>
                <p className="text-amber-600"> {formatDecimalMoney(product.price/100) || "Null"} </p>
            </div>
        </div>
    )
}

const reverse = (money)=> {
    let temp = "";
    for(let i=money.length-1;i>=0;i--) {
        temp += money[i];
    }
    return temp;
}

const formatMoney = (unformattedMoney)=>{

    let temp = reverse(String(unformattedMoney));
    let formattedMoney = format(temp);
    formattedMoney = reverse(formattedMoney);

    return "$ " +formattedMoney;
}

export const formatDecimalMoney = (unformattedMoney)=>{
    let money = String(unformattedMoney).split(".");

    let temp = reverse(money[0]);
    let formattedMoney = format(temp);
    formattedMoney = reverse(formattedMoney);
    return `$ ${formattedMoney}.${money[1]}`;
}
export const formatDecimalMoneyPrecise = (unformattedMoney,adasdf)=>{
    let money = String(unformattedMoney).split(".");

    let temp = reverse(money[0]);
    let formattedMoney = format(temp);
    formattedMoney = reverse(formattedMoney);
    return `$ ${formattedMoney}.${money.length>1?money[1].slice(0,2):"00"}`;
}

const format = (money)=>{
    let formatedMoney = "";
    for(let i =0;i<money.length;i++) {
        if(i%3 ==0 && i > 0) {
            formatedMoney+=",";
        }
        formatedMoney += money[i]
    }
    return formatedMoney;
}

export default Product;