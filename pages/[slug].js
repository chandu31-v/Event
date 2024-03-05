import { useRouter } from "next/router"
import {getEventById} from "@/dummy-data"
import {PostBuilder} from "@/components/postBuilder"

function slugList(){

    const router = useRouter()
    console.log(getEventById(router.query.slug))

    return(
        <div>
            <PostBuilder value={getEventById(router.query.slug)} />
        </div>
    )
}

export default slugList