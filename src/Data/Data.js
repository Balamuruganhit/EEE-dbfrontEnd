// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilUser,
  UilClipboardNotes,UilEdit,UilCalendarAlt,UilAlignCenter
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import img4 from "../imgs/Dr.-M.-Arun-M.E-PhD-1.png";
import img5 from "../imgs/Prof.-M.L.-Ramamoorthy-M.E-PhD.png"
import img6 from "../imgs/Prof.P-.Madasamy-M.E-PhD.png";
import img7 from "../imgs/Prof.-V.-Pradeep-M.E-PhD.png";
import img8 from "../imgs/Prof.-S.-Aasaimani-M.E-PhD.png";
// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
 
 
];
export const SidebarData2=[
  {
    icon: UilEstate,
    heading: "Dashboard",
    link:''
  },
  {
    icon: UilUsersAlt,
    heading: "Student mark",
    link:"/dashboard/faculty/attendance"
  },
 
  {
    icon: UilUsersAlt,
    heading: "Student Attendance",
    link:"/dashboard/faculty/mark"
  },

  {
    icon: UilChart,
    heading: 'Student Detail',
    link:"/dashboard/faculty/student"
  },
  {
    icon: UilChart,
    heading: 'Certificate Approval',
    link:"/dashboard/faculty/certificate"
  },

]
export const SidebarData1=[
  {
    icon: UilEstate,
    heading: "Dashboard",
    link:''
  },
 
  {
    icon: UilUsersAlt,
    heading: "Faculty",
    link:"/dashboard/HOD/faculty"
  },

  {
    icon: UilChart,
    heading: 'Student',
    link:"/dashboard/HOD/student"
  },
  {
    icon: UilChart,
    heading: 'Certificate Approval',
    link:"/dashboard/HOD/certificate"
  },

]

export const studentData =[
  {
    title:"Basic Info",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    Img: UilUser,
    barValue: 70,
    value: "25,970",
   
  },
  {
    title:"Attendance Details",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
      Img: UilUser,
      barValue: 70,
      value: "25,970",
      
    
    },
  },
  {
    title:"Series Test Mark",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    Img: UilUser,
    barValue: 70,
    value: "25,970",
    
    
  },
  {
    title:"Apply Bonafide",
    color: {
      backGround:
        "#3fd83f",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    Img: UilUser,
    barValue: 70,
    value: "25,970",
    
    
  }
]
export const staticsData =[
  {
    title:"Total No of Students",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    Img: UilUser,
    barValue: 100,
    value: "430",
   
  },
  {
    title:"No of Teaching Staff",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    Img: UilUser,
      barValue: 100,
      value: "15",
  },
  {
    title:"No of Non-Teaching staff",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    Img: UilUser,
    barValue: 100,
    value: "10",
    
    
  },
  {
    title:"No of Part-Time Sutdent",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    Img: UilUser,
    barValue: 100,
    value: "100",
    
    
  },
 
 
]


// Analytics Cards Data
export const cardsData = [
  {
    class:"parentContainer",
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    class:"parentContainer",
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    class:"parentContainer",
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
 
  
 
  
];
export const images=[
  {
    img: img4,
    sub:"Electrical Energyy Utilization And Conservation",
    name:"Dr.-M.-Arun-M.E-PhD-1"
  },
  {
    img: img5,
    sub:"Control System",
    name:"Prof.-M.L.-Ramamoorthy-M.E-PhD"
  },
  {
    img: img6,
    sub:"AC machines",
    name:"Prof.P-.Madasamy-M.E-PhD"
  },
  {
    img: img7,
    sub:"Analysis Of Signal And System",
    name:"Prof.-V.-Pradeep-M.E-PhD"
  },
  {
    img: img8,
    sub:"Internet Of Things",
    name:"Prof.-G.AAsaiMani-M.E-PhD"
  }

]

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img4,
    name:"Dr.-M.-Arun-M.E-PhD-1",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img5,
    name:"Prof.-M.L.-Ramamoorthy-M.E-PhD",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img6,
    name:"Prof.P-.Madasamy-M.E-PhD",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
