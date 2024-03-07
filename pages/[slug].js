import { useRouter } from "next/router"
import PostBuilder from "@/components/postBuilder"
import path from "path"
import fs from "fs/promises"

function SlugList(props) {

    const router = useRouter()
    const { data } = props
    console.log(data)

    if (!data) {
        return (<>
            <p>No data found</p>
        </>)
    }

    return (
        
        <div>
            <p>Post</p>
            <PostBuilder value={data[0]} />
        </div>
    )
}

export async function getServerSideProps(context) {

    const {query} = context

    const filePath = path.join(process.cwd(), "data", "db.json")
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    
    const url = query.slug

    const value = data.events.filter((val) => {
        return url && val.id === url
    })

    return (
        {
            props: {
                data: value
            }
        }
    )

}


export default SlugList