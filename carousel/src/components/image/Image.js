import React from "react";

const Image = ({ url }) => {
  return (
    <>
      {typeof url === "undefined" ? (
        <p>No Preview Available</p>
      ) : (
        <img src={url} alt="Freedom Blog" className="image" />
      )}
    </>
  );
};

export default Image;
