import { useRouter } from "next/router"
import { useSelector } from "react-redux"

function PostBuilder({ value }) {

    const router = useRouter()
    // const exploreEvent = () => {
    //     router.push(`/${value.id}`)
    // }
    const login = useSelector((value)=>value.login)

    const bookTicket = ()=>{
        if(login==="false" || login===null){
            router.route("/sigin")
        }else{
            //take to booking page
        }
    }

    return (
        <div className="w-full bg-slate-400">
            <div className="flex flex-col min-[500px]:flex-row p-4 rounded-lg">

                {/* image div */}
                <div className="w-full min-[500px]:w-1/3 min-[500px]:p-10 h-[450px]">
                    <img className="rounded-md w-full h-full" src={value?.images} alt="image" />
                    {/* <Image className="rounded-md w-full" src={value?.images} width={400} height={400} alt="image" /> */}
                </div>

                {/* Body div */}
                <div className="w-full min-[500px]:w-1/3 p-10">
                    <div className="w-full">
                        {/* body */}
                    <div className="text-xl font-bold min-[500px]:mb-4">{value?.title}</div>
                        <div className="w-full">
                            <p className="font-medium text-xs">{value?.date}</p>
                            <p>{value?.location}</p>
                            <p>more data</p>
                        </div>

                        <button className="bg-green-500 px-4 rounded mt-2" onClick={bookTicket}>Book Ticket</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostBuilder
