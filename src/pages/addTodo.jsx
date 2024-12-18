import "../assets/addTodo.css";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState();
  const [title, setTitle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    r2.current.focus()
  }, [])

  const r = useRef("");
  const r2 = useRef("");

  const handleBtnAdd = (e) => {
    e.preventDefault();
    if(title !== undefined){
      console.log(title)
      if (task !== "" && task !== undefined) {
        setList([...list, task]);
        r.current.value = "";
        console.log(r);
        r.current.focus();
        setTask("");
      } else {
        r.current.focus();
      }
    }else {
      console.log("Title is" + title)
      r2.current.focus();
    }
  };

  const handleInput = (e) => {
    console.log(task);
    setTask(e.target.value);
  };

  const handleInputTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const checkTitle = (title !== "" && title !== undefined);
    const checkTask = (task !== "" && task !== undefined);
    if(checkTitle) {
      console.log("Done !")
      // Adding List to DataBase <>
      // 
      // 
      console.log(`Title is ${title} | Tasks is ${list.join(" | ")}`)
      setTimeout(() => {
        navigate("/")
      }, 5000);
    } else {console.log("Failed")}
  }

  return (
    <div className="wrapper">
      <Navbar />
      <div className="add-todo">
        <div className="add-todo-body">
          <div className="top">Add New Todo</div>
          <form action="">
            <div className="form-top">
              <div className="todo-title">
                <label htmlFor="">Title</label>
                <input ref={r2} onChange={handleInputTitle} type="text" />
              </div>

              <div className="todo-tasks">
                <label htmlFor="">Tasks</label>
                <input
                  ref={r}
                  onChange={handleInput}
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <button onClick={handleBtnAdd} className="btn-add-task">
              Add
            </button>

            <div className="added-tasks">
              {list.map((e, i) => {
                return <p key={i}>{e}</p>;
              })}
            </div>

            <div className="btn-send">
              <input onClick={handleSubmit} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
