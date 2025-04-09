"use client"
import { Add } from "@mui/icons-material"
import {useState} from "react";
import CreateTask from "@/app/components/createTask";

type KanbanHeaderProps ={
    title:string,
    total:number
}
const KanbanHeader =({title,total}:KanbanHeaderProps)=>{
    const[showTaskForm,setShowTaskForm] =useState<boolean>(false)
    return(
        <div className={"flex bg-white rounded p-3 justify-between mt-5 mb-5 text-black font-bold"}>
            <div className={"flex gap-2"}>
                <div className={`font-bold pt-1 pb-1 pl-2 pr-2 rounded-full 
                ${title.toLowerCase()==="in-progress"&&"bg-orange-300 text-orange-700"}
                ${title.toLowerCase()==="completed"&&"bg-green-200 text-green-800"}
                ${title.toLowerCase()==="cancelled"&&"bg-red-300 text-red-700"}
                ${title.toLowerCase()==="to-do"&&"bg-blue-300 text-blue-700"}`}
                >{title}</div>
                <sub className={"underline h-fit w-fit"}>{total}</sub>
            </div>
            <div className={"flex gap-2"}>
                <button className={"cursor-pointer"} onClick={()=>{
                    setShowTaskForm(!showTaskForm)
                }}><Add/></button>
            </div>
            {showTaskForm&&<CreateTask/>}
        </div>
    )
}
export default KanbanHeader