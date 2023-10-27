/* eslint-disable no-unused-vars */
import React from "react";

const WeekFilter = () => {
  return (
    <section className="flex justify-center gap-12 p-4">
      <button>
        <i className="bx bxs-chevron-left"></i>
      </button>
      <button className="flex flex-col items-center gap-1">
        <span className="text-xs font-thin">week 4</span>
        <span className="text-sm font-medium">day 23 • 27</span>
      </button>
      <button>
        <i className="bx bxs-chevron-right"></i>
      </button>
    </section>
  );
};

export default WeekFilter;
