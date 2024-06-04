'use client'
import { useRef } from "react"
import { useRouter } from "next/router"

function Header() {

    const year = useRef()
    const month = useRef()
    const router = useRouter()

    const findEvent = ()=>{
        router.push(`/${year.current.value}/${month.current.value}`)
    }

    return (
        <div className="w-full bg-slate-300">
            <div className="flex w-full p-4">
                {/* year */}
                <div className="flex mr-2 w-2/5">
                    <label className="mr-2 font-semibold">Year </label>
                    <select defaultValue="2021" ref={year} className="border-[1px] rounded w-full bg-slate-100">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>

                {/* month */}
                <div className="flex w-2/5">
                    <label className="mr-2 font-semibold">Month </label>
                    <select defaultValue="2021" ref={month} className="border-[1px] rounded w-full bg-slate-100">
                        <option value="1">january</option>
                        <option value="4">april</option>
                        <option value="5">may</option>
                    </select>
                </div>

                {/* find event */}
                <div className="w-1/5 ml-2">
                    <button className="bg-green-500 rounded px-2" onClick={findEvent}>Find Events</button>
                </div>

            </div>

        </div>
    )

}

export default Header
