import React from "react";
import menus from "./data";
import Menulist from "./menu-list";
const Treeview = ({menus=[]}) => {
  return <div>
    <Menulist list ={menus}/>
  </div>
};

export default Treeview;
