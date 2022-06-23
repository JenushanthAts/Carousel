import React, { useEffect, useState } from "react";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";
import Image from "./image/Image";
import { useDispatch, useSelector } from "react-redux";
import { fetchingItems } from "../features/apiCalls";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./carousel.css";

const Carousel = ({ slides, infinite }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchingItems(slides, dispatch);
  }, [slides, dispatch]);
  const carouselLists = useSelector((state) => state.carousel.itemLists.slides);
  const [current, setCurrent] = useState(0);
  const length = carouselLists?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // console.log(current);
  if (slides === "1") {
    infinite = false;
  }

  return (
    <section className="slider">
      {infinite === false ? (
        <></>
      ) : (
        <>
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </>
      )}

      {carouselLists?.map((item, index) => (
        // return (
        <div key={item.title}>
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <Image url={item.image} className="image" />
                <div className="center__text">
                  <Title title={item.title} />
                  <Subtitle subtitle={item.subTitle} />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Carousel;
