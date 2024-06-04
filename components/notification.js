import { useContext } from "react"
import Context from "./context/configureContext"

function notification(){

    const contextData = useContext(Context)

    return(
        <div className="flex w-full h-10 bg-slate-400">
            <div className="w-1/3"><p>{contextData.notification?.status}</p></div>
            <div className="w-1/3"><p>{contextData.notification?.message}</p></div>
        </div>
    )

}

export default notification
