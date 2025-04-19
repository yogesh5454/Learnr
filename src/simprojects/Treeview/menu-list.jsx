import Menuitem from "./menu-item"
import React from "react"
const Menulist=({list=[]})=>{
return <ul className="menu-list-container">
{
    list && list.length
    ? list.map((listitem)=> <Menuitem item={listitem}/>)
    :null
}
</ul>
}

export default Menulist;