import { useContext } from "react"
import PostBuilder from "@/components/postBuilder"
import SelectHeader from "@/components/selectHeader"
import Header from "@/components/header"
// import path from "path"
// import fs from "fs/promises"
import EventSignup from "@/components/eventSignup"
import Notification from "@/components/notification"
import Context from "@/components/context/configureContext"

function EventPage(props) {

    const { data } = props
    const contextData = useContext(Context)

    return (
        <div className="flex flex-col items-center max-w-screen min-h-screen bg-slate-400">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full sm:w-2/5 mt-8">

                <div>
                    <EventSignup />
                </div>

                <div className="bg-slate-400">
                    <SelectHeader />
                </div>

                <div className="max-w-screen mt-6">
                    {
                        data.length>0?
                        data.map((val) => {
                            return <div key={val._id}> <PostBuilder value={val} /> </div>
                        }):
                        <div>No data found</div>
                    }
                </div>
            </div>
            {
                contextData.notification?<Notification />:null
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
    const featuredPostsResponse = await fetch("https://event-git-main-chandrashekars-projects.vercel.app/api/isFeatured")
    const featuredPosts = await featuredPostsResponse.json()

    return (
        {
            props: {
                data: featuredPosts.data
            }
        }
    )
}

export default EventPage
