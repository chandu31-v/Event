import Header from "@/components/header"
import PostBuilder from "@/components/postBuilder"
import path from "path"
import fs from "fs/promises"

function AllSlugList(props) {

    const { data } = props
    //console.log(data)

    if (!data) {
        return (
            <div>loading...</div>
        )
    }

    return (
        <div className="flex flex-col items-center w-screen h-screen bg-slate-100">
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

export async function getStaticProps({params}) {

    const filePath = path.join(process.cwd(), "data", "db.json")
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    //const slugValue = params[0].slug.split("/")
    //console.log(slugValue)
    const slugValue = params.slug

    const filteredEvents = data.events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() == slugValue[0] && eventDate.getMonth() == slugValue[1];
    });

    //console.log(filteredEvents)

    if(!filteredEvents){
        return {notFound:true}
    }

    return (
        {
            props: {
                data: filteredEvents
            }
        }
    )

}

export async function getStaticPaths() {

    const year = ["2021", "2022", "2023"]
    const month = ["4", "5", "6"]

    let allSlugValue = []
    year.map((yr) => {
        month.map((mon) => {
            allSlugValue.push({ params: { slug: [yr,mon] } })
        })
    })

    //console.log(allSlugValue[0].params.slug)

    return (
        {
            paths: allSlugValue,
            fallback: false
        }
    )
}


export default AllSlugList
