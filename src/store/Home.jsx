import Product from "./Products/Product";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

import compass from "./images/compass.png"; 
import history_book from "./images/history-book.png"; 
import pickaxe from "./images/pickaxe.png"; 
import { PRODUCTS, url } from "./constants";
import { useGlobalContext } from "../context";



const Home = () => {
    const [featuredProducts,setFeaturedProducts] = useState([]);
    const { setWebPageState }  = useGlobalContext();
    const fetchData = async () => {
        try {
            const {data} = await axios(url);
            setFeaturedProducts(data.slice(0,3));
        } catch (error) {
            console.log(error.response);
        }
    }
    useEffect(()=>{
        fetchData()
    },[]);
    return (
        <div className="bg-gray-100 w-[100vw]">
            <div className="px-7 grid sm:grid-cols-2 gap-[8rem] pt-10 sm:pt-20 pb-40 max-w-[1170px] mx-auto">
                <div className="w-full lg:min-w-lg pt-20 flex flex-col space-y-10 items-start">
                    <h1 className="capitalize text-3xl md:text-5xl font-bold font-serif">design your comfort zone</h1>
                    <p className="text-gray-600 md:text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                    </p>
                    <button
                        className="bg-amber-700 px-4 py-1 sm:px-5 sm:py-2 text-white rounded uppercase text-lg sm:text-xl hover:bg-amber-600 duration-100"
                        onClick={e=>{
                            setWebPageState(PRODUCTS);
                        }}
                    >
                        Shop Now
                    </button>
                </div>
                <div className="hidden sm:relative sm:block">
                    <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" className="w-11/12 h-[550px] relative block rounded"/>
                    <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg" className="w-2/5 absolute left-20 bottom-0 rounded translate-x-[-50%]"/>
                </div>
            </div>

            <div className="bg-slate-200 py-20 ">
                <div className="flex flex-col items-center space-y-4">

                    <h1 className="text-center text-4xl font-bold">Featured Products</h1>
                    <div className="w-[100px] h-[5px] bg-amber-600"></div>
                </div>
                <div className="grid sm:grid-cols-3 gap-8 px-3 sm:px-20 mt-16 max-w-[1170px] mx-auto">
                    {
                        featuredProducts.map(data=>{
                            return <Product key={data.id} product={data} />
                        })
                    }
                </div>
            </div>

            <div className="bg-red-100 py-20 px-10 md:px-20 ">
                <div className="max-w-[1170px] mx-auto">

                    <div className="flex flex-col sm:flex-row justify-between mb-10">
                        <h1 className="capitalize text-red-800 text-3xl font-bold max-w-sm">Custom Furniture Build Only For you</h1>
                        <p className="max-w-lg text-red-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                        </p>
                    </div>

                    <div className="sm:px-20">
                        <div className="sm:translate-y-[50%] grid sm:grid-cols-3 gap-10">
                            <Bread image={compass} title="mission" paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi" />
                            <Bread image={pickaxe} title="vision" paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi" />
                            <Bread image={history_book} title="vision" paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-48 px-10 max-w-[1170px] mx-auto">
                <h1 className="font-bold text-4xl capitalize">
                    Join our newsletter and get 20% off
                </h1>
                <div className="flex flex-col space-y-10 items-start sm:flex-row justify-between sm:items-center mt-10 sm:space-x-20">
                    <p className="sm:basis-1/3 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                    </p>
                    
                    <form className="sm:basis-1/2 w-full">
                        <input type='text' className="border rounded-e-none rounded border-black w-3/5 md:w-4/5 h-[50px] px-3" placeholder="Enter Email" />
                        <button
                            className="px-4 bg-amber-900 text-white h-[50px] rounded rounded-s-none border-l-0"
                        >Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const Bread = ({title,paragraph,image})=>{
    return (
        <div className=" border px-8 py-6 text-center bg-red-300 rounded flex flex-col items-center space-y-4">


            <img src={image} className="w-1/6"/>

            <h1 className="text-3xl font-bold capitalize text-red-900 ">{title}</h1>
            <p className="text-red-800">
                {paragraph}
            </p>
        </div>
    )
}
export default Home;