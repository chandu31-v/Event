import { useRouter } from "next/router"

function PostBuilder({ value }) {

    const router = useRouter()
    const exploreEvent = () => {
        router.push(`/${value.id}`)
    }

    return (
        <div className="w-full">

            <div className="flex flex-row p-4 m-4 rounded-lg bg-slate-300">
                {/* image div */}
                <div className="w-2/5 rounded-md mx-2">
                    <img className="rounded-md" src={value?.image} alt="image" />
                </div>

                {/* Content div */}
                <div className="w-3/5">
                    <div className="w-full">

                        <header className="w-full font-semibold">{value?.title}</header>
                        {/* body */}
                        <div className="w-full">
                            <p className="font-medium text-xs">{value?.date}</p>
                            <p>{value?.location}</p>
                        </div>
                        {/* explore event */}
                        <div className="flex justify-end w-full mt-8">
                            <button
                                className="rounded bg-green-500 px-6 py-[2px]"
                                onClick={exploreEvent}

                            >Explore event</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default PostBuilder
