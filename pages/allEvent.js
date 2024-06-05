import PostBuilder from "@/components/postBuilder"
import Header from "@/components/header"
// import path from "path"
// import fs from "fs/promises"
import { client } from "@/mongoDB/connect"

function AllEvent(props) {

    const { data } = props

    return (
        <div className="flex flex-col max-w-screen min-h-screen bg-slate-400">
            <div className="w-full">
                <Header />
            </div>
            <div className="flex flex-wrap w-full mt-8">
                    {
                        data.map((val) => {
                            return <div className="w-full min-[500px]:w-1/3 p-3" key={val._id}> <PostBuilder value={val} /> </div>
                        })
                    }
            </div>
        </div>
    )
}

export async function getStaticProps() {

    // const filePath = path.join(process.cwd(), "data", "db.json")
    // const jsonData = await fs.readFile(filePath)
    // const data = JSON.parse(jsonData)

    let allPosts
    // try{
    //     const response = await fetch("http://localhost:3000/api/allEvents") //should never call fetch api inside staticprops
    //     allPosts = await response.json()
    // }catch(e){
    //     console.log(e)
    // }

    //directly from mongoDB
    let data
    try {

        //connect to mongo Database
        await client.connect()

        //connect to database
        const db = await client.db("event")

        //connect to desired collection
        data = await db.collection("eventDetails").find().toArray()
        client.close()
    } catch (e) {
        console.log(e)
    }

    if (!data) {
        // return {notFound:true}
        data = []
    }

    return (
        {
            props: {
                data: data
            }
        }
    )

}

export default AllEvent
