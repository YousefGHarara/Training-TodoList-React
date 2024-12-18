import "../assets/todo.css";

import React from "react";

const Todo = (props) => {


  return (
    <div onClick={props.handleBtn} className="todo-flex">
      <div className="todo">
        <div className="todo-content">
          <h1 className="title">{props.title}</h1>
          <p className="createdAt">{props.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
