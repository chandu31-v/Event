import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { toggleLoginState } from "@/store/slice"


function Header() {

    const dispatch = useDispatch()
    let login = useSelector((value) => value.login)

    if (typeof window !== "undefined" && login === null){
        console.log("inside setTimeout")
            if (localStorage.getItem("nextEventLogInStatus") === null) {
                localStorage.setItem("nextEventLogInStatus", false)
                dispatch(toggleLoginState("false"))
            } else {
                dispatch(toggleLoginState(localStorage.getItem("nextEventLogInStatus")))
            }
        }


    const logoutUser = () => {
        localStorage.setItem("nextEventLogInStatus", false)
        dispatch(toggleLoginState("false"))
    }

    //console.log("login " + login)

    return (
        <div className="flex w-full bg-slate-400 p-2">

            {/* Events */}
            <div className="flex justify-center w-2/5">
                <Link href='/' className="text-2xl">Home</Link>
            </div>

            {/* Browse all events */}
            <div className="flex justify-center w-2/5">
                <Link href="/allEvent" className="text-2xl">Browse all Events</Link>
            </div>

            {/**Login and Logout */}
            {
                login==="true" ?
                    <div className="flex justify-end mr-4 w-1/5">
                        <button onClick={logoutUser} className="text-2xl">Logout</button>
                    </div>
                    :
                    <div className="flex justify-end mr-4 w-1/5">
                        <Link href="/sigin" className="text-2xl">Login</Link>
                    </div>
            }

        </div>
    )

}

export default Header
