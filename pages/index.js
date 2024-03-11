import { getFeaturedEvents } from "@/dummy-data"
import PostBuilder from "@/components/postBuilder"
import SelectHeader from "@/components/selectHeader"
import Header from "@/components/header"
import path from "path"
import fs from "fs/promises"
import EventSignup from "@/components/eventSignup"


function EventPage(props) {

    const { data } = props

    return (
        <div className="flex flex-col items-center w-screen h-screen bg-slate-100">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full sm:w-2/5 mt-8">

                <div>
                    <EventSignup />
                </div>

                <div className="">
                    <SelectHeader />
                </div>

                <div className="w-full mt-6">
                    {
                        data.map((val) => {
                            return <div key={val.id}> <PostBuilder value={val} /> </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export async function getStaticProps(context) {

    const filePath = path.join(process.cwd(), "data", "db.json")
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    const filterData = data.events.filter((value) => {
        return value.isFeatured
    })

    return (
        {
            props: {
                data: filterData
            }
        }
    )
}

export default EventPage
