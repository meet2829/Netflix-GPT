import React, { useRef, useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const email = useRef(null)
    const password = useRef(null)


    const HandleToggle = () => {
        setIsLogin(!isLogin)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email.current.value);
        console.log("Password:", password.current.value);
    };
    return (
        <div className="relative w-full h-screen">

            <img
                className="absolute w-full h-full object-cover"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_small.jpg"
                alt="Netflix background"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-20">
                <Header />
            </div>


            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-black/75 p-8 rounded-lg w-96 shadow-lg">
                    <h1 className="text-white text-3xl font-bold mb-6 text-center">
                        {isLogin ? "Sign In" : "Sign Up"}
                    </h1>

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="p-3 rounded bg-gray-800 text-white outline-none"
                            />
                        )}

                        <input
                            ref={email}
                            type="email"
                            placeholder="Email"
                            className="p-3 rounded bg-gray-800 text-white outline-none"
                            required
                        />

                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="p-3 rounded bg-gray-800 text-white outline-none"
                            required
                        />

                        <button className="bg-red-600 hover:bg-red-700 transition p-3 rounded text-white font-semibold">
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>

                    <p className="text-gray-400 mt-6 text-center">
                        {isLogin ? "New to Netflix? " : "Already have an account? "}
                        <span
                            className="text-white cursor-pointer hover:underline"
                            onClick={HandleToggle}
                        >
                            {isLogin ? "Sign Up now" : "Login"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
