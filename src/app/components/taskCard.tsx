"use client"
import {CalendarMonth, DesktopMac} from '@mui/icons-material';
import FlagIcon from '@mui/icons-material/Flag'
import {randomInt} from "node:crypto";
import {useState} from "react";

type Position ={
    x:number,
    y:number
}
const TaskCard =()=>{
    const percentage =40


    return(
        <div
            className={"flex flex-col cursor-pointer border mt-4" +
                " border-gray-700 rounded-xl shadow-2xs p-4 w-full "}>
            <div className={"flex gap-2 p-2 mb-4 [&>*]:p-1"}>
                <div className={"border-l border-l-gray-500 "}>To-do</div>
                <div className={"text-red-600"}> <span><FlagIcon/></span> High</div>
                <div><span className={"text-blue-500"}><DesktopMac/></span>Website</div>
            </div>
            <div className={"flex flex-col leading-7"}>
                <div>Design Website Homepage</div>
                <div className={"break-words"}>E-commerce Redesign</div>
            </div>
            <div className={"border-t border-t-gray-700 pt-4 p-2 flex justify-between items-center"}>
                <div className={"flex items-center"}> <span className={"text-gray-600"}><CalendarMonth/></span>Tomorrow </div>
                <div> <span className={`p-4 w-fit h-fit rounded-full border border-r-blue-500`}></span> {percentage} % </div>
            </div>
        </div>
    )
}
export default TaskCard