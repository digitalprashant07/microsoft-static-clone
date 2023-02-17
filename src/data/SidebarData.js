import { VscBell } from "react-icons/vsc";
import { BsChatDots } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { BsHeadphones } from "react-icons/bs";
import { BsFileEarmark } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";


export const SidebarData = [

    {
        id:1,
        name:"Activity",
        icon:<VscBell/>,
    },
    {
        id:2,
        name:"Chat",
        icon:<BsChatDots/>,
    },
    {
        id:3,
        name:"Teams",
        icon:<BsPeopleFill/>,
    },
    {
        id:4,
        name:"Assignment",
        icon:<MdOutlineWorkOutline/>,
    },
    {
        id:5,
        name:"Calendar",
        icon:<BsCalendar2Event/>,
    },
    {
        id:6,
        name:"Calls",
        icon:<BsHeadphones/>,
    },
    {
        id:7,
        name:"Files",
        icon:<BsFileEarmark/>,
    },
]

export const SidebarMore ={
    id:1,
    icon:<BsThreeDots/>,
}

export const SidebarBotoom = [
    {
        id:1,
        name:"Apps",
        icon:<GrAppsRounded/>,
    },
    {
        id:2,
        name:"Help",
        icon:<BsQuestionCircle/>,
    },
]