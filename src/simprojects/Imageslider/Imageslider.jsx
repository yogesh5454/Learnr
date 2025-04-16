import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./image.css";
const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [image, setimage] = useState([]);
  const [currentslide, setcurrentslide] = useState(0);
  const [errormsg, seterrormsg] = useState(null);
  const [loading, setloading] = useState(false);
  async function fetchimages(geturl) {
    try {
      setloading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setimage(data);
        setloading(false);
      }
    } catch (e) {
      seterrormsg(e.message);
      setloading(false);
    }
  }
  useEffect(() => {
    if (url !== "") fetchimages(url);
  }, [url]);
  console.log(image);

  if (loading) {
    return <div>Loading data</div>;
  }
  if (errormsg !== null) {
    return <div>Error occured{errormsg}</div>;
  }

  return (
    <>
      <style>{}</style>
      <div className="container ">
        <BsArrowLeftCircleFill className="arrow arrow-left" />
        {image && image.length
          ? image.map((imageitem) => (
              <img
                key={imageitem.id}
                alt={imageitem.download_url}
                src={imageitem.download_url}
                className="current-image"
              />
            ))
          : null}

        <BsArrowRightCircleFill className="arrow arrow-right" />
        <span className="circle-indicators">
          {image && image.length
            ? image.map((_, index) => (
                <button key={index} className="current-indicator"></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
};

export default ImageSlider;
