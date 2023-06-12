const Login =()=>{
    return (
        <form className="px-8 py-6 border shadow rounded w-[80vw] md:max-w-sm mx-auto mt-[5%]  font-mono">
            <h1 className="text-3xl font-bold text-center capitalize mb-6">Login</h1>
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

            <div className="flex justify-between ">

                <a
                    className="text-amber-600 font-bold cursor-pointer hover:text-amber-700 duration-100"
                >
                    Register
                </a>
                <a
                    className="text-amber-600 font-bold cursor-pointer underline hover:text-amber-700 duration-100"
                > 
                    Forgot Password?
                </a>
            </div>
        </form>   
        
    )
}

export default Login;