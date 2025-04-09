const CreateTask =()=>{
    return(
        <div className={"absolute z-[9999] bg-black text-white w-[25%]" +
            " bg-gray-700 shadow-xl content-center justify-center items-center" +
            " p-4 rounded-xl border border-gray-600"}>
            <div className={"font-bold text-center mb-10"}>Create Task</div>
            <form className={"w-full flex flex-col gap-5  p-3" +
                "[&>select]:border-gray-700  [&>select]:border [&>select]:p-2 [&>select]:rounded-xl" +
                "[&>input]:border-gray-700 [&>input]:border [&>input]:p-2 [&>input]:rounded" +
                " [&>input]:rounded"}>
                <label htmlFor={"type"}>Task type:</label>
                <select id={"type"}>
                    <option>To-do</option>
                    <option>In-Progress</option>
                </select>
                <label htmlFor={"priority"}>Task Priority:</label>
                <select>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
                <label htmlFor={"title"}>Title:</label>
                <input type={"text"} placeholder={"enter the Title for the task"}/>
                <label htmlFor={"description"}>Description:</label>
                <input type={"text"} placeholder={"enter the description for the task"}/>
                <label htmlFor={"deadline"}>Deadline:</label>
                <input type={"date"} placeholder={"enter the deadline for the task"}/>
            </form>
        </div>
    )
}
export default CreateTask