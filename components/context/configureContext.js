import { useState,useEffect, createContext } from "react";


const Context = createContext({
    notification:null, //holds data {title,message,status}
    showNotification:function(){},
    hideNotification:function(){}
})

export function ContextProvider(props){

    const [notification,setNotification] = useState(null)

    function showNotificationHandler(data){
        setNotification(data)
    }
    
    function hideNotificationHandler(){
        setNotification(null)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setNotification(null)
        },3000)

        return(()=>{
            clearTimeout(timer)
        })
    },[notification])


    const contextData = {
        notification:notification,
        showNotification:showNotificationHandler,
        hideNotification:hideNotificationHandler
    }

    return(
        <Context.Provider value={contextData}>
            {props.children}
        </Context.Provider>
    )

}

export default Context

