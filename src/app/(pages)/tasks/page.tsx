"use client"

import {TaskColumn} from "@/app/components/taskColumn";
import {Task,Column as ColumnType} from "@/types";
import {DndContext, DragEndEvent} from "@dnd-kit/core";
import {useState} from "react";

const COLUMNS: ColumnType[] = [
    { id: 'TODO', title: 'To Do' },
    { id: 'IN_PROGRESS', title: 'In Progress' },
    { id: 'DONE', title: 'Done' },
    { id: 'CANCELLED', title: 'Cancelled' },
];

const INITIAL_TASKS: Task[] = [
    {
        id: '1',
        title: 'Research Project',
        description: 'Gather requirements and create initial documentation',
        status: 'TODO',
    },
    {
        id: '2',
        title: 'Design System',
        description: 'Create component library and design tokens',
        status: 'CANCELLED',
    },
    {
        id: '3',
        title: 'API Integration',
        description: 'Implement REST API endpoints',
        status: 'IN_PROGRESS',
    },
    {
        id: '4',
        title: 'Testing',
        description: 'Write unit tests for core functionality',
        status: 'DONE',
    },
];

const Page =()=>{
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as Task['status'];

        setTasks(() =>
            tasks.map((task:Task) =>
                task.id === taskId
                    ? {
                        ...task,
                        status: newStatus,
                    }
                    : task,
            ),
        );
    }
    return(
        <main className={"flex flex-col m-auto ml-10 justify-between items-center "}>
            <div className={"font-bold mb-10"}>Tasks</div>
            <section className={"flex lg:w-[70%] items-center justify-between m-auto" +
                " gap-4 rounded-xl  [&>*]:border-l" +
                " [&>*]:border-l-gray-800 [&>*]:p-2" +
                "  [&>*]:flex [&>*]:flex-col  nth-[3]:border-r  nth-[3]:border-r-gray-800"}>
                <DndContext onDragEnd={handleDragEnd}>
                    {COLUMNS.map((column) => {
                        return (
                            <TaskColumn
                                key={column.id}
                                column={column}
                                tasks={tasks.filter((task) => task.status === column.id)}
                            />
                        );
                    })}
                </DndContext>
            </section>
        </main>

    )
}
export default Page
