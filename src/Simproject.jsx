import Accordion from "./simprojects/Accordion/Accordion";
import Randomcolor from "./simprojects/Randomcolor/Randomcolor";
import Starrating from "./simprojects/Starrating/starrating";
import ImageSlider from "./simprojects/Imageslider/Imageslider";
import Lodeproducts from "./simprojects/Lodemoreproducts/Lodeproducts";
import Treeview from "./simprojects/Treeview/Treeview";
import menus from "./simprojects/Treeview/data";
import QRCode from "react-qr-code";
import Qrcode from "./simprojects/Qrcode/Qrcode";
function Simproject() {
  return (
    <>
      <Accordion />
      <Randomcolor />
      <Starrating />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <Lodeproducts />
      <Treeview menus={menus}/>
      <Qrcode/>
    </>
  );
}

export default Simproject;
