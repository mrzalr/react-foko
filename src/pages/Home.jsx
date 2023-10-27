/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Background from "../components/Background";
import WeekFilter from "../components/WeekFilter";
import TodoListWrapper from "../components/TodoListWrapper";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Background />
      <WeekFilter />
      <TodoListWrapper />
      <button className="fixed bottom-4 left-[50%] translate-x-[-50%] bg-blue-500 text-white text-sm font-medium pl-[.65rem] pr-4 py-[.35rem] rounded-full flex justify-center items-center gap-2">
        <i className="bx bx-plus text-xl"></i>
        <span>create</span>
      </button>
    </>
  );
};

export default Home;
