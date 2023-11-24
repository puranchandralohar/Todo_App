import React, { useEffect } from "react";
import { useState } from "react";

import "./Style.css";

export function Todoapp() {
  const [todos, setTodos] = useState([]);
  const [list, setLists] = useState("");
  const [time, setTime] = useState({
    "hours": "",
    "minutes": "",
    "seconds": "",
  });

  const addlist = () => {
    if (list.length <= 0) alert("Empty Field");
    else {
      setTodos([...todos, list]);
      setLists("");
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      let date = new Date();
      setTime({
        "hours": date.getHours(),
        "minutes": date.getMinutes(),
        "seconds": date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);

  }, []);

  return (
    <div className="Wrapper">
      <div className="todoApp">
        <div className="heading">
          <h1>TodoLab</h1>
          <p>{time.hours +`:`+ time.minutes + `:` +time.seconds}</p>
        </div>
        <div className="input-group">
          <input
            className="input"
            type="text"
            name="todo"
            value={list}
            placeholder={"Enter a new item..."}
            onChange={(e) => setLists(e.target.value)}
          />
          <button className="btn" onClick={addlist}>
            +
          </button>
        </div>
        <div className="todo_lists">
        {todos.length > 0 ? (
          <p className="para">Your Todo List</p>
        ) : (
          "No items to show, add a new item...."
        )}
        {todos.map((todo, index) => (
          <div className="list" key={index}>
            <ul type="square">
              <li>{todo}</li>
            </ul>
            <button
              className="del"
              onClick={() => {
                let filteredItems = todos.filter((value) => value !== todo);
                setTodos([...filteredItems]);
              }}
            >
              -
            </button>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}
