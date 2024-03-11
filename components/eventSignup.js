import { useRef } from "react"

function EventSignup() {

    const inputRef = useRef()
    const registerEmail = ()=>{
        console.log(inputRef.current.value)
    }

    return (<>
        <div className="flex flex-col w-full items-center mb-5">
            <h1>Sign up to stay updated!</h1>
            <div className="mt-2">
                <input type="email" placeholder=" Your email" ref={inputRef} className="border-[1px] border-gray-500 rounded-l" />
                <button 
                    className="border-[1px] border-green-500 px-1 bg-green-500 rounded-r"
                    onClick={registerEmail}
                    >Register</button>
            </div>
        </div>
    </>)

}

export default EventSignup
