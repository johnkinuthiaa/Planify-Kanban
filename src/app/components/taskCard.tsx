import {CalendarMonth, DesktopMac} from '@mui/icons-material';
import FlagIcon from '@mui/icons-material/Flag'

const TaskCard =()=>{
    const percentage =40
    return(
        <div
            className={"flex flex-col cursor-pointer border mt-4 " +
                " border-gray-800 rounded-xl shadow-xl p-4 w-full "}>
            <div className={"flex gap-4 p-1  mb-4 [&>*]:gap-1 "}>
                <div className={"border-l-2 border-l-gray-500"}>To-do</div>
                <div className={"text-red-600"}> <span><FlagIcon/></span> High</div>
                <div><span className={"text-blue-400"}><DesktopMac/></span>Website</div>
            </div>
            <div className={"flex flex-col leading-7 mt-4 mb-4 gap-2"}>
                <div className={"font-bold text-lg"}>Design Website Homepage</div>
                <div className={"break-words text-gray-400"}>E-commerce Redesign</div>
            </div>
            <div className={"border-t border-t-gray-700 pt-4 p-2 flex justify-between items-center" +
                "[&>*]:flex [&>*]:gap-2 [&>*]:items-center"}>
                <div className={"items-center"}><span className={"text-gray-500"}><CalendarMonth/></span>Tomorrow </div>
                <div className={"flex"}>
                    <div className={`p-3 w-fit h-fit rounded-[100%] border-2 border-r-blue-500`}></div>
                    <div>{percentage} %</div>
                </div>
            </div>
        </div>
    )
}
export default TaskCard