"use client"
import { Add } from "@mui/icons-material"

type KanbanHeaderProps ={
    title:string,
    total:number
}
const KanbanHeader =({title,total}:KanbanHeaderProps)=>{
    return(
        <div className={"flex bg-gray-400 justify-between p-2 mt-5 mb-5 text-white font-bold"}>
            <div className={"flex gap-2"}>
                <div >{title}</div>
                <p>{total}</p>
            </div>
            <div className={"flex gap-2"}>
                <button className={"cursor-pointer"}><Add/></button>
            </div>
        </div>
    )
}
export default KanbanHeader