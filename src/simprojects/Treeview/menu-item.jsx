import React, { useState } from "react";
import Menulist from "./menu-list";
import { FaMinus,FaPlus } from "react-icons/fa";
const Menuitem =({item })=>{

    const [displaychildren, setdisplaychildren] = useState({})
    function handletoggle(getcurrentlabel) {
        setdisplaychildren({
            ...displaychildren,
            [getcurrentlabel]: !displaychildren[getcurrentlabel]
        })
    }
    console.log(displaychildren);
    
 return (<li>
   <div style={{display : "flex"}}> <p>{item.label}</p>
   { item && item.children && item.children.length ? 
   <span  onClick={()=>handletoggle(item.label)}>
    {displaychildren[item.label] ? <FaMinus/>:<FaPlus/>}
   </span>:null}</div>
    {
        item && item.children && item.children.length>0 && displaychildren[item.label]

        ? <Menulist list={item.children}/> 
        :null
    }
 </li>)
}

export default Menuitem;