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

  function handleprevious() {
    setcurrentslide(currentslide === 0 ? image.length - 1 : currentslide - 1);
  }
  function handlenext() {
    setcurrentslide(currentslide === image.length ? 0 : currentslide + 1);
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
        <BsArrowLeftCircleFill
          onClick={handleprevious}
          className="arrow arrow-left"
        />
        {image && image.length
          ? image.map((imageitem, index) => (
              <img
                key={imageitem.id}
                alt={imageitem.download_url}
                src={imageitem.download_url}
                className={
                  currentslide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}

        <BsArrowRightCircleFill
          onClick={handlenext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {image && image.length
            ? image.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentslide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setcurrentslide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
};

export default ImageSlider;
