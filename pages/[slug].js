import { useState,useContext,useEffect } from "react"
import PostBuilder from "@/components/postBuilder"
import path from "path"
import fs from "fs/promises"
import Comments from "@/components/comment/commentBox"
import CommentBlock from "@/components/comment/commentBlock"
import Context from "@/components/context/configureContext"
import Notification from "@/components/notification"

function SlugList(props) {

    const { data, comments, url, status } = props
    const [check, setCheck] = useState(true)

    const toggle = () => {
        setCheck(!check)
    }

    //context
    const contextData = useContext(Context)

    useEffect(()=>{
        contextData.showNotification({status:status,message:"error connectiong"})
    },[])

    //const comment = JSON.parse(comments)

    if (!data) {
        return (<>
            <p>No data found</p>
        </>)
    }

    return (

        <div className="flex flex-col items-center w-full">
            <p>Post</p>
            <PostBuilder value={data[0]} />
            <div className="w-1/2">
                {
                    check ?
                        <div className="flex justify-center w-full">
                            <button className="bg-green-500 px-4 rounded" onClick={toggle}>Comment</button>
                        </div>
                        :
                        <div className="w-full">
                            <Comments url={url} />
                            {comments?.map((comment) => {
                                return <CommentBlock key={comment._id} name={comment.name} comment={comment.comment} />
                            })}
                        </div>
                }
            </div>
            <div className="w-full">
                {
                    contextData.notification ? <Notification /> : null
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {

    const { query } = context

    const filePath = path.join(process.cwd(), "data", "db.json")
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)


    const url = query.slug

    const value = data.events.filter((val) => {
        return url && val.id === url
    })

    //fetch from api endpoint
    let comments, comment, status=null
    try {
        comments = await fetch(`http://localhost:3000/api/${url}`)
        comment = await comments.json()
        if (comment.data === undefined) {
            comment.data = []
        }
        status = comment.status
    } catch (err) {
        comment={
            data:[]
        }
    }

    return (
        {
            props: {
                data: value,
                comments: comment.data,
                url: url,
                status
            }
        }
    )

}


export default SlugList