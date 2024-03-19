import React, { useRef, useState } from "react";
import { SiginFun, LoginFun } from "@/firebase/account";


function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [check,setState] = useState(false)

    const toggle = ()=>{
        setState(!state)
    }

    const handleLogin = async () => {
        try {
            LoginFun(emailRef.current.value,passwordRef.current.value)

        } catch (err) {
            setErrors("Check email and password")
        }

    }

    const handleSigin = async () => {
        try {
            //console.log(email.current.value,password.current.value)
            SiginFun(emailRef.current.value,passwordRef.current.value)

        } catch (err) {
            setErrors("Check email and password")
        }
    }

    return (<>
        <div className="flex flex-col w-full h-full items-center justify-center">
            {/* email */}
            <div className="flex justify-start w-2/6 ">
                <label className="1/3">Email</label>
                <input type="email" placeholder=" Email" ref={emailRef} className="border-[1px] border-gray-500 rounded w-2/3" />
            </div>

            {/* password */}
            <div className="w-2/6">
                <label className="w-1/3">Password</label>
                <input type="password" placeholder=" Password" ref={passwordRef} className="border-[1px] border-gray-500 rounded w-2/3" />
            </div>

            <div className="border-[1px] border-gray-500 px-2 rounded mt-2">
                {
                    check ?
                        <button onClick={handleLogin}>Login</button>
                        :
                        <button onClick={handleSigin}>Sigin</button>
                }
            </div>
            <div onClick={toggle} className="text-xs text-blue-500">
                {
                    check ?
                        <label>sigin</label>
                        :
                        <label>login</label>
                }
            </div>

        </div>

    </>)

}

export default Login
