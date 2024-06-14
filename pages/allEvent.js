import { useRef, useState } from "react"
import PostBuilder from "@/components/postBuilder"
import Header from "@/components/header"
// import path from "path"
// import fs from "fs/promises"
import { client } from "@/mongoDB/connect"
import Loading from "@/components/loading"

function AllEvent(props) {

    const titleRef = useRef(null)
    const dateRef = useRef(null)
    const [searchData, setSearchData] = useState(null)
    const { data } = props
    let selectedData

    const searchResult = () => {
        if (titleRef.current.value || dateRef.current.value) {
            selectedData = data?.filter((value) => {
                if (titleRef.current.value && dateRef.current.value) {
                    return value.title === titleRef.current.value && value.date === dateRef.current.value
                } else if (titleRef.current.value) {
                    return value.title === titleRef.current.value
                } else {
                    return value.date === dateRef.current.value
                }
            })
            setSearchData(selectedData)

            if (selectedData?.length<1){
                setTimeout(() => {
                    console.log("reverting")
                    setSearchData(null)
                }, 3000)
            }

        } else {
            //notification to enter some data before search
        }
    }

    const searchBack = ()=>{
        setSearchData(null)
    }

    return (
        <div className="flex flex-col max-w-screen min-h-screen bg-slate-400">
            <Loading />
            <div className="w-full">
                <Header />
            </div>
            <div className="flex justify-center w-full">
                <div className="flex justify-center w-3/4">
                    <input type="text" placeholder=" title" ref={titleRef} className="mx-1 rounded-sm" />
                    <input type="date" placeholder=" date" ref={dateRef} className="mx-1 rounded-sm" />
                    <button className="bg-green-500 p-1 px-2 mx-2 rounded-lg" onClick={searchResult}>Search</button>
                    {searchData?.length>0 && <button className="bg-green-500 p-1 px-2 rounded-lg" onClick={searchBack} >Back</button>}
                </div>
            </div>
            <div className="flex flex-wrap w-full mt-8">
                {
                    (!searchData) ?
                        data.map((val) => {
                            return <div className="w-full min-[500px]:w-1/3 p-3" key={val._id}> <PostBuilder value={val} /> </div>
                        }) :
                        searchData?.length > 0 ? searchData?.map((val) => {
                            return <div className="w-full min-[500px]:w-1/3 p-3" key={val._id}> <PostBuilder value={val} /> </div>
                        }) : <div className="flex justify-center w-full animate-bounce"><div> no data, Rendering back... </div></div>
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
