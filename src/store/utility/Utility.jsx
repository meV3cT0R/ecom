import { useGlobalContext } from "../../context"
import { HOME } from "../constants";


export const WhereAboutBar = ({page}) =>{
    const {setWebPageState} = useGlobalContext();
    return (
        <div className="bg-amber-100 mb-20">
            <div className="min-h-[20vh] max-w-[1170px] mx-auto items-center flex max-sm:pl-10">

                <p className="text-5xl text-amber-600 ">
                    <a 
                        className="cursor-pointer"
                        onClick={(e)=>{
                            setWebPageState(HOME)
                        }}
                        >Home </a>
                    
                    {page.map(current=>{
                        return (
                            <>
                                / <a
                                    key={current.name}
                                    className={`${(current.changeState && "text-amber-600" && "cursor-pointer") || "text-amber-900"} capitalize`}
                                    onClick={(e)=>{
                                        current.changeState && setWebPageState(current.name);
                                    }}
                                > {current.name.toLowerCase()}</a>
                            </>
                        )
                    })}
                    
                </p>
            </div>
        </div>
    )
}