/* eslint-disable no-unused-vars */
import React from "react";
import background from "../assets/Learning-cuate.svg";

const Background = () => {
  return (
    <section className="absolute top-0 bottom-0 left-0 right-0 -z-10 overflow-hidden">
      <img
        className="absolute top-20 -right-12 opacity-20"
        src={background}
        alt="bg-img"
      />
    </section>
  );
};

export default Background;
