import { useEffect } from "react"
import PostBuilder from "@/components/postBuilder"
// import path from "path"
// import fs from "fs/promises"
import { useRouter } from "next/router"
import { client } from "@/mongoDB/connect"
import Header from "@/components/header"

function AllSlugList(props) {

    const { data } = props
    const router = useRouter()
    //console.log(data)

    if (!data) {
        return (
            <div>loading...</div>
        )
    }

    useEffect(() => {
        if (data?.length === 0) {
            router.push("/")
        }
    }, [])

    if (data?.length === 0) {

        return (
            <div className="flex flex-col max-w-screen min-h-screen justify-center items-center bg-slate-400">
                <div>No data found!!</div>
                <div>Redirecting to home...</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center w-screen min-h-screen bg-slate-400">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full sm:w-2/5 mt-8">

                <div className="w-full mt-6">
                    {
                        data?.map((val) => {
                            return <div key={val._id}> <PostBuilder value={val} /> </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export async function getStaticProps({ params }) {

    //for local file json
    // const filePath = path.join(process.cwd(), "data", "db.json")
    // const jsonData = await fs.readFile(filePath)
    // const data = JSON.parse(jsonData)

    //const slugValue = params[0].slug.split("/")
    //console.log(slugValue)

    //console.log(params.slug)
    const dateValue = params.slug

    // let filteredEvents = data.events.filter((event) => {
    //     const eventDate = new Date(event.date);
    //     return eventDate.getFullYear() == slugValue[0] && eventDate.getMonth() == slugValue[1];
    // });

    //get data from mongo (should not use fetch API inside getStaticProps)
    // let responseData
    // try{
    //     const response = await fetch(`http://localhost:3000/api/${dateValue}`)
    //     responseData = await response.json()
    // }catch(e){
    //     console.log(e)
    // }

    //get data directly from mongoDB
    let data
    try {

        //connect to mongo Database
        await client.connect()

        //connect to database
        const db = await client.db("event")

        //connect to desired collection
        data = await db.collection("eventDetails").find({ "date": `${dateValue[0]}-0${dateValue[1]}-12` }).toArray()
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

export function getStaticPaths() {

    const year = ["2021", "2022", "2023"]
    const month = ["4", "5", "6"]

    let allSlugValue = []
    year.map((yr) => {
        month.map((mon) => {
            allSlugValue.push({ params: { slug: [yr, mon] } })
        })
    })

    //console.log(allSlugValue[0].params.slug)

    return (
        {
            paths: allSlugValue,
            fallback: true
        }
    )
}


export default AllSlugList
