/* eslint-disable no-unused-vars */
import React from "react";

const TodoCard = () => {
  return (
    <div className="bg-white flex justify-between items-center p-4 rounded-lg shadow-[0px_3px_8px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl">Belajar pubsub</h1>
          <h3 className="text-xs font-semibold text-gray-400">backend</h3>
        </div>
        <h3 className="flex gap-2 items-center text-sm text-blue-400 font-medium">
          <i className="bx bx-time-five text-gray-400 text-lg"></i>
          35:23
        </h3>
      </div>
      <button className="w-12 h-12 bg-blue-500 rounded-full">
        <i className="bx bxs-right-arrow text-xl text-white"></i>
      </button>
    </div>
  );
};

export default TodoCard;
