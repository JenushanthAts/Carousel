import React from "react";
import Carousel from "./carousel";
import { useParams } from "react-router-dom";

const Main = () => {
  let { id } = useParams();

  return <Carousel slides={id} infinite={true} />;
  //}
};

export default Main;
