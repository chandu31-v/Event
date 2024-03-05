import {getAllEvents} from "@/dummy-data"
import PostBuilder from "@/components/postBuilder"
import Header from "@/components/header"

function AllEvent(){

    return(
        <div className="flex flex-col items-center w-screen h-screen bg-slate-100">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full sm:w-2/5 mt-8">

                <div className="w-full mt-6">
                    {
                        getAllEvents().map((val) => {
                            return <div key={val.id}> <PostBuilder value={val} /> </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AllEvent
