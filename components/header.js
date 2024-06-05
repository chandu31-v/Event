import Link from "next/link"

function Header(){

    return(
        <div className="flex w-full bg-slate-400 p-2">

            {/* Events */}
            <div className="flex justify-center w-1/2">
                <Link href='/' className="text-2xl">Home</Link>
            </div>

            {/* Browse all events */}
            <div className="flex justify-center w-1/2">
                <Link href="/allEvent" className="text-2xl">Browse all Events</Link>
            </div>

        </div>
    )

}

export default Header
