import React, { useRef } from "react";
import { SiginFun, LoginFun } from "@/firebase/account";
import Header from "@/components/header";
import {useRouter} from "next/router";
import { useDispatch } from "react-redux";
import { toggleLoginState } from "@/store/slice";
import Loading from "@/components/loading";

function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const router = useRouter()
    const dispatch = useDispatch()

    const handleLogin = async () => {
        try {
            const data = await LoginFun(emailRef.current.value, passwordRef.current.value)
            if(data){
                localStorage.setItem("nextEventLogInStatus",true)
                dispatch(toggleLoginState("true"))
                router.push("/",{ shallow: true })
            }
        } catch (err) {
            //setErrors("Check email and password")
            console.log(err)
        }
    }

    return (<>
        <div className="max-w-screen h-full bg-slate-400">
            <Loading />
            <div className="w-full">
                <Header />
            </div>
            <div className="flex w-full mt-32 justify-center items-center">
                <div className="pr-5 w-full m-5 min-[500px]:w-2/5 bg-slate-500 p-10 border rounded-xl border-[#3b4049]">
                    <h1 className="text-xl font-bold text-white">Welcome Back!</h1>
                    <div className="pt-4 pb-4">

                        <label className="block text-sm">EMAIL</label>
                        <input type="email" ref={emailRef} className="w-2/3 bg-slate-400 border border-[#202225] "></input>

                        <label className=" block pt-3 text-sm">PASSWORD</label>
                        <input type="password" ref={passwordRef} className="w-2/3 bg-slate-400 border border-[#202225]"></input>
                    </div>
                    <div className="pb-4">
                        {/* <a href="#" className="text-[#5865f2]">Forgot your password?</a> */}
                    </div>
                    <button onClick={handleLogin} className="block px-2 py-1 bg-green-400 rounded" >Login</button>


                    <div className="flex pt-1">
                        <p className="text-[#b9bbbe] pr-1">Need an account?</p>
                        {/* <a href="/Signup" className="text-[#5865f2]" id="register">Register</a> */}
                    </div>
                </div>
            </div>
        </div>

    </>)

}

export default Login
