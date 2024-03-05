import { useRouter } from "next/router"
import Header from "@/components/header"
import {getFilteredEvents} from "@/dummy-data"
import PostBuilder from "@/components/postBuilder"

function allSlugList(){

    const router = useRouter()
    const value = router.query.slug
    //console.log(value)

    return(
        <div className="flex flex-col items-center w-screen h-screen bg-slate-100">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full sm:w-2/5 mt-8">

                <div className="w-full mt-6">
                    {
                        value ? getFilteredEvents([router.query.slug[0],router.query.slug[1]]).map((val) => {
                            return <div key={val.id}> <PostBuilder value={val} /> </div>
                        }):""
                    }
                </div>
            </div>

        </div>
    )
}

export default allSlugList
