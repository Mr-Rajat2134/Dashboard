import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../images/logo.png'
import { SidebarData } from '../Data/data'
// import {UilSignOutAlt} from '@iconscout/unicons'
import { UilSignOutAlt } from "@iconscout/react-unicons";


const Sidebar = () => {

    
    const[selected,setselected] = useState(0)

    return(

    <div className='Sidebar'>
        
        <div className='logo'>
            <img src={Logo} alt='logo' />
            <span>
                Sh<span>o</span>p
            </span>
        </div>

        {/* Menu */}


        <div className='menu'>
{
    SidebarData.map((item,index)=>{
        return (

            <div className={selected===index?'menuItem active':'menuItem'}
            key={index}

            onClick={()=>setselected(index)}
            
            >

<item.icon/>
<span>
    {item.heading}
</span>

            </div>
        )
    })
}

<div className='menuItem'>
    <UilSignOutAlt/>
</div>



        </div>


    </div>
)

}


export default Sidebar
