import PostBuilder from "@/components/postBuilder"
import Header from "@/components/header"
import path from "path"
import fs from "fs/promises"

function AllEvent(props) {

    const { data } = props

    return (
        <div className="flex flex-col items-center w-screen h-screen bg-slate-400">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full sm:w-2/5 mt-8">

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

export async function getServerSideProps(context) {

    const filePath = path.join(process.cwd(), "data", "db.json")
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return (
        {
            props: {
                data: data.events
            }
        }
    )

}

export default AllEvent
