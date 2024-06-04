import { useRef,useContext } from "react"
import Context from "./context/configureContext"

function EventSignup() {

    const inputRef = useRef()
    const contextData = useContext(Context)
    const registerEmail = async()=>{
        const response = await fetch("http://localhost:3000/api/email",{
            method:"POST",
            body:JSON.stringify({email:String(inputRef.current.value)})
        })
        const resData = await response.json()
        if(resData.status==="success"){
            contextData.showNotification({status:"success",message:"email posted"})
        }else{
            contextData.showNotification({status:"error",message:"email was not posted"})
        }
    }

    return (<>
        <div className="flex flex-col w-full items-center mb-5 bg-slate-400">
            <h1>Sign up to stay updated!</h1>
            <div className="mt-2">
                <input type="email" placeholder=" Your email" ref={inputRef} className="border-[1px] border-gray-500 rounded-l bg-slate-200" />
                <button 
                    className="border-[1px] border-green-500 px-1 bg-green-500 rounded-r"
                    onClick={registerEmail}
                    >Register</button>
            </div>
        </div>
    </>)

}

export default EventSignup
