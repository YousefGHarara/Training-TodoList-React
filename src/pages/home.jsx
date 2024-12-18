import "../assets/home.css";

import React from "react";
import Todo from "../components/todo";
import Navbar from "../components/navbar";

const JSON_DATA = [
  {
    id: 1,
    title: "javascript",
    createdAt: "2024/10/7",
    tasks: ["task1", "task2", "task3"],
  },
  {
    id: 2,
    title: "Html",
    createdAt: "2020/12/3",
    tasks: ["task1", "task2", "task3"],
  },
  {
    id: 3,
    title: "React js",
    createdAt: "2021/2/11",
    tasks: ["task1", "task2", "task3"],
  },
  {
    id: 4,
    title: "Node js",
    createdAt: "2019/7/7",
    tasks: ["task1", "task2", "task3"],
  },
];

const Home = () => {

  const handle = (e) => {
    console.log("Hello")
    console.log(e.target)
  }

  return (
    <div className="main">
      <Navbar />
      <header className="header">
        <div className="header-content">
          {JSON_DATA.map((e) => {
            return <Todo handleBtn={handle} key={e.id} title={e.title} createdAt={e.createdAt} />;
          })}
        </div>
      </header>
    </div>
  );
};

export default Home;
