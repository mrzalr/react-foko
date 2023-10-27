/* eslint-disable no-unused-vars */
import React from "react";
import TodoCard from "./TodoCard";

const TodoList = () => {
  return (
    <div className="p-3 flex w-full">
      <div className="basis-1/6 flex items-start justify-center gap-3">
        <span className="font-medium text-blue-500">Tue</span>
        <div className="w-[3px] bg-blue-500 h-full rounded-full opacity-60"></div>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoList;
