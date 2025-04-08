import KanbanHeader from "@/app/components/kanbanHeader"
import TaskCard from "@/app/components/taskCard"

const Page =()=>{
    return(
        <section className={"flex lg:w-[70%] items-center justify-between m-auto" +
            " gap-2 rounded-xl [&>*]:w-[33.333%] [&>*]:border-l" +
            " [&>*]:border-l-gray-700 [&>*]:p-2" +
            "  [&>*]:flex [&>*]:flex-col  nth-[3]:border-r  nth-[3]:border-r-gray-700"}>
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

        </section>
    )
}
export default Page
