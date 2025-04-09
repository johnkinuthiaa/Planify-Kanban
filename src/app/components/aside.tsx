"use client"
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TaskIcon from '@mui/icons-material/Task';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from 'next/image'

const Aside =()=>{
    return(
        <aside className={"flex flex-col gap-2 justify-between fixed " +
            "w-72 border-r border-r-gray-800 h-full [&>div>*]:flex" +
            " [&>div>*]:justify-between [&>div>*]:flex-col p-4 text-gray-300"}>
            <div className={"[&>*>*]:cursor-pointer"}>
                <div className={"[&>*]:flex gap-6 [&>*]:gap-2"}>
                    <a href={"/"}>
                        <HomeFilledIcon/>
                        <div>Dashboard</div>
                    </a>
                    <a>
                        <TaskIcon/>
                        <div>Tasks</div>
                    </a>
                    <a>
                        <NoteAltIcon/>
                        <div>Notes</div>
                    </a>
                </div>
            </div>

            <div className={"[&>*>*]:cursor-pointer"}>
                <div className={"[&>*]:flex gap-6 [&>*]:gap-2"}>
                    <div>
                        <LiveHelpIcon/>
                        <div>Help and Support</div>
                    </div>
                    <div className={"mb-10"}>
                        <SettingsIcon/>
                        <div>Settings</div>
                    </div>
                    <div className={" mb-4 [&>*>*]:cursor-pointer justify-between items-center gap-2"}>
                        <Image
                            src={"https://i.pinimg.com/736x/b2/72/f2/b272f21be077fdc48e63bc3529c545ad.jpg"}
                            height={1000}
                            width={1000}
                            alt={"profile photo"}
                            className={"w-14 h-14 object-fit rounded-full"}

                        />
                        <div>
                            <div className={"font-bold"}>John kinuthia</div>
                            <div>kinuthia....@gmail.com</div>
                        </div>
                        <div className={"border border-gray-400 rounded-lg cursor-pointer"}>
                            <button><KeyboardArrowRightIcon/></button>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    )
}
export default Aside