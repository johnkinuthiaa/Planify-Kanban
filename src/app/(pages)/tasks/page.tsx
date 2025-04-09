"use client"
import KanbanHeader from "@/app/components/KanbanHeader"
import TaskColumn from "@/app/components/taskColumn";

const Page =()=>{

    return(
        <main className={"flex flex-col m-auto ml-10 justify-between items-center "}>
            <div className={"font-bold mb-10"}>Tasks</div>
            <section className={"flex lg:w-[70%] items-center justify-between m-auto" +
                " gap-4 rounded-xl  [&>*]:border-l" +
                " [&>*]:border-l-gray-800 [&>*]:p-2" +
                "  [&>*]:flex [&>*]:flex-col  nth-[3]:border-r  nth-[3]:border-r-gray-800"}>
                <div>
                    <KanbanHeader title={'To-do'} total={18}/>
                    <TaskColumn/>
                </div>
                <div>
                    <KanbanHeader title={'In-Progress'} total={18}/>
                    <TaskColumn/>
                </div>
                <div>
                    <KanbanHeader title={'Completed'} total={0}/>
                    <TaskColumn/>
                </div>
                <div>
                    <KanbanHeader title={'Cancelled'} total={2}/>
                    <TaskColumn/>
                </div>

            </section>
        </main>

    )
}
export default Page
