
function CommentBlock(comment) {

    return (
        <div className="flex justify-center w-full m-2">
            <div className="flex w-fit px-4 py-2 border-2 border-gray-500 rounded ">
                <h1>{comment.name}</h1>
                <p>{comment.comment}</p>
            </div>
        </div>
    )
}

export default CommentBlock
