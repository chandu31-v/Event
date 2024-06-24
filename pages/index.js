import { useContext } from "react"
import PostBuilder from "@/components/postBuilder"
import SelectHeader from "@/components/selectHeader"
import Header from "@/components/header"
// import path from "path"
// import fs from "fs/promises"
import EventSignup from "@/components/eventSignup"
import Notification from "@/components/notification"
import Context from "@/components/context/configureContext"
import Loading from "@/components/loading"


function EventPage(props) {

    const { data } = props
    const contextData = useContext(Context)

    return (
        <div className="flex flex-col items-center max-w-screen min-h-screen bg-slate-400">
            <Loading />
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full mt-8">

                <div className="">
                    <EventSignup />
                </div>

                <div className="flex justify-center w-full bg-slate-400">
                    <div className="w-full min-[500px]:w-2/4">
                        <SelectHeader />
                    </div>
                </div>

                <div className="flex flex-wrap w-full mt-6 h-full">
                    {
                        data.length > 0 ?
                            data?.map((val) => {
                                return <div className="w-full min-[500px]:w-1/3 px-3 h-full" key={val._id}> <PostBuilder value={val} /> </div>
                            }) :
                            <div>No data found</div>
                    }
                </div>
            </div>
            {
                contextData.notification ? <Notification /> : null
            }
        </div>
    )
}

export async function getServerSideProps(context) {

    //for local file
    // const filePath = path.join(process.cwd(), "data", "db.json")
    // const jsonData = await fs.readFile(filePath)
    // const data = JSON.parse(jsonData)

    // const filterData = data.events.filter((value) => {
    //     return value.isFeatured
    // })


    //get data from mongoDB
    //http://localhost:3000/api/isFeatured
    //https://event-git-main-chandrashekars-projects.vercel.app/api/isFeatured

    let featuredPosts
    try {
        //const featuredPostsResponse = await fetch("https://event-git-main-chandrashekars-projects.vercel.app/api/isFeatured")
        const featuredPostsResponse = await fetch("http://localhost:3000/api/isFeatured")
        featuredPosts = await featuredPostsResponse.json()
    } catch (e) {
        console.log(e)
    }

    if (featuredPosts === undefined) {
        featuredPosts = []
    } else {
        featuredPosts = featuredPosts?.data
    }

    return (
        {
            props: {
                data: featuredPosts
            }
        }
    )
}

export default EventPage
