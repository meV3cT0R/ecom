import { useGlobalContext } from "../../context";
import { LOGIN } from "../constants";

const Register = ()=>{
    const{ setWebPageState } = useGlobalContext();
    return (
        <form onSubmit={e=>e.preventDefault()} className="px-8 py-6 border shadow rounded w-[80vw] md:max-w-sm mx-auto mt-[5%] mb-20  font-mono">
            <h1 className="text-3xl font-bold text-center capitalize mb-6">Register</h1>
            <div className="mb-6">
                <label className="text-lg">First Name</label><br/>
                <input type="text" placeholder="First Name" className="mt-2 border shadow rounded px-3 py-2 w-full"/>
            </div>
            <div className="mb-6">
                <label className="text-lg">Last Name</label><br/>
                <input type="text" placeholder="Last Name" className="mt-2 border shadow rounded px-3 py-2 w-full"/>
            </div>
            <div className="mb-6">
                <label className="text-lg">Username</label><br/>
                <input type="text" placeholder="username" className="mt-2 border shadow rounded px-3 py-2 w-full"/>
            </div>
            <div className="mb-6">
                <label className="text-lg">Password</label><br/>
                <input type="pass" placeholder="password" className="mt-2 border shadow rounded px-3 py-2 w-full"/>
            </div>


            <button
                className="mb-6 border w-full py-1 bg-amber-600 text-white hover:bg-amber-700 duration-100"
               
            >
                Log in
            </button>

            <button 
                className="text-amber-600 font-bold w-full text-center underline hover:text-amber-700 duration-100"
                onClick={e=>{
                    
                    setWebPageState(LOGIN)
                }}
            >
                Already Registered?
            </button>
        </form>
    )
}

export default Register;