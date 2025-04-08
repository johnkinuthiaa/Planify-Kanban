import { Add } from "@mui/icons-material"

type KanbanHeaderProps ={
    title:string,
    total:number
}
const KanbanHeader =({title,total}:KanbanHeaderProps)=>{
    return(
        <div className={"flex bg-gray-400 justify-between p-2 mt-5 mb-5"}>
            <div className={"flex gap-2"}>
                <div>{title}</div>
                <div>{total}</div>
            </div>
            <div className={"flex gap-2"}>
                <button><Add/> </button>
            </div>

        </div>
    )
}
export default KanbanHeader