import KanbanHeader from "@/app/components/kanbanHeader"
import TaskCard from "@/app/components/taskCard"

const Page =()=>{
    return(
        <div className={"flex w-full gap-2 rounded-xl [&>*]:w-[33.333%] [&>*]:flex [&>*]:flex-col "}>
            <div>
                <KanbanHeader title={'To-do'} total={18}/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
            </div>
            <div>
                <KanbanHeader title={'In-Progress'} total={18}/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
            </div>
            <div>
                <KanbanHeader title={'Completed'} total={0}/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
            </div>
            <div>
                <KanbanHeader title={'Cancelled'} total={2}/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
            </div>

        </div>
    )
}
export default Page
