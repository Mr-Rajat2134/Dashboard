import {
    UilEstate,UilClipboardAlt,
UilUsersAlt,UilPackage,UilChart,UilMoneyWithdrawal,UilUsdSquare} from '@iconscout/react-unicons'



import img1 from '../images/img1.png'
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";




 export const SidebarData =[

{
    icon:UilEstate,
    heading:"Dashboard",
},
{
    icon:UilClipboardAlt,
    heading:"Oders",
},
{
    icon:UilUsersAlt,
    heading:"Customers",
},

{
    icon:UilPackage,
    heading:"Products",
},
{
    icon:UilChart,
    heading:"Analystics",
}


 ]


 export const CardsData =[
    {



title:"Seles",
color:{
    backGround:"linear-gradient(180deg   ,#bb67ff 0%,#c484f3 100%)",
    boxShadow:"0px  10px 20px 0px #e0c6f5",
},
barValue:76,
value:"25,970",
png:UilUsdSquare,
series:[
    {
        name:"sales",
        data:[31,40,28,51,42,109,100],
    },
]

},



{

    title:"Revenue",
    color:{
        backGround:"linear-gradient(180deg,#FF919D 0%,#FC929D 100%)",
        boxShadow:"0px  10px 20px 0px #FDC0C7",
    },
    barValue:80,
    value:"14,270",
    png:UilMoneyWithdrawal,
    series:[
        {
            name:"Revanue",
            data:[10,100,50,70,80,30,40],
        },
    ]
    
    },


    {

        title:"Expenses",
        color:{
            backGround:"linear-gradient(rgb(248,212,154) -146.42%,  rgb(255 202 113) -46.42%)",
            boxShadow:"0px  10px 20px 0px #F9D59B",
        },
        barValue:60,
        value:"4,270",
        png:UilClipboardAlt,
        series:[
            {
                name:"Expenses",
                data:[10,25,15,30,12,15,20],
            },
        ]
        
        }

 ]



//  Update


export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Naina",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];