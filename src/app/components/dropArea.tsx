"use client"
import {useState} from "react";
import {useDroppable} from '@dnd-kit/core';

type TaskCardProps ={
    id:string
}
const DropArea =({id}:TaskCardProps)=>{
    const[showDrop,setShowDrop] =useState(false)
    const {isOver, setNodeRef} = useDroppable({
        id: id,
    });
    const style = {
        opacity: isOver ? 1 : 0.5,
    };
    return(

        <section
            className={`${showDrop?"visible":"invisible"}  w-full h-full p-4 border border-dashed border-b-gray-400`}
            onDragLeave={()=>setShowDrop(false)}
            onDragEnter={()=>setShowDrop(true)}
            ref={setNodeRef} style={style}
        >
            Drop here
        </section>
    )
}
export default DropArea