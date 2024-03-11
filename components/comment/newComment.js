const { useRef } = require("react")

function Comments() {

    const emailRef = useRef()
    const nameRef = useRef()
    const commentRef = useRef()

    return (
        <div className="flex flex-col items-start bg-green-500 w-full">
            <div className="flex flex-row">
                <div className="mr-2 w-full">
                    <p>Your email</p>
                    <input type="email" placeholder="" ref={emailRef} className="w-full" />
                </div>
                <div className="w-full">
                    <p>Your name</p>
                    <input type="text" placeholder="" ref={nameRef} className="w-full" />
                </div>
            </div>
            <div className="w-full">
                <p>Your comments</p>
                <textarea rows="4" cols="30" ref={commentRef} className="w-full"></textarea>
            </div>
        </div>
    )
}

export default Comments
