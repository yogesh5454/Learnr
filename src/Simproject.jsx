import Accordion from "./simprojects/Accordion/Accordion";
import Randomcolor from "./simprojects/Randomcolor/Randomcolor";
import Starrating from "./simprojects/Starrating/starrating";
import ImageSlider from "./simprojects/Imageslider/Imageslider";
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
    </>
  );
}

export default Simproject;
