// import { useRouter } from "next/router"

function PostBuilder({ value }) {

    // const router = useRouter()
    // const exploreEvent = () => {
    //     router.push(`/${value.id}`)
    // }

    return (
        <div className="w-full bg-slate-400">
            <div className="flex flex-row p-4 rounded-lg">

                {/* image div */}
                <div className="w-1/2 p-10">
                    <img className="rounded-md w-full" src={value?.images} alt="image" />
                    {/* <Image className="rounded-md w-full" src={value?.images} width={400} height={400} alt="image" /> */}
                </div>

                {/* Body div */}
                <div className="w-1/2 p-10">
                    <div className="w-full">
                        {/* body */}
                        <div className="w-full">
                            <p className="font-medium text-xs">{value?.date}</p>
                            <p>{value?.location}</p>
                            <p>more data</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostBuilder
