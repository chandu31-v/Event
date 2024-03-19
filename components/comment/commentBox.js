import { useContext,useRef } from "react"
import Context from "../context/configureContext"

function Comments({ url }) {

    const emailRef = useRef()
    const nameRef = useRef()
    const commentRef = useRef()

    const contextData = useContext(Context)

    const addCommentFun = async () => {
        try {
            console.log("clicked")
            const response = await fetch(`http://localhost:3000/api/${url}`, {
                method: 'POST',
                body: JSON.stringify({ name: nameRef.current.value, comment: commentRef.current.value, id: emailRef.current.value })
            })
            const data = await response.json()
            //console.log(data)
            contextData.showNotification({
                status: data.status,
                message: data.message
            })

        } catch (err) {
            console.log(err)
            contextData.showNotification({
                status: "failed",
                message: "error"
            })
        }
    }


    return (
        <div className="flex flex-col items-start bg-green-500 w-full p-8">
            <div className="flex flex-row w-full">
                <div className="mr-2 w-1/2">
                    <p>Your email</p>
                    <input type="email" placeholder="" ref={emailRef} className="w-full" />
                </div>
                <div className="w-1/2">
                    <p>Your name</p>
                    <input type="text" placeholder="" ref={nameRef} className="w-full" />
                </div>
            </div>
            <div className="w-full">
                <p>Your comments</p>
                <textarea rows="4" cols="30" ref={commentRef} className="w-full"></textarea>
            </div>
            <button onClick={addCommentFun}>Submit</button>
        </div>
    )
}

export default Comments
