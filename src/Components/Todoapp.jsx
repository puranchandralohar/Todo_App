import React from 'react'
import "./Style.css";
import { useState } from 'react';


export function Todoapp() {
    const [todos, setTodos] = useState([]);
    const [list, setLists] = useState("");

    const addlist = () => {
    if(list.length <= 0) alert("Empty Field");
    else{
      setTodos([...todos, list]);
      setLists("");
    }
    };

  return (
    <div className='Wrapper'>
    <div className="heading"><h1>Todo App</h1></div>
        <div className='todoApp'>
            <input
            type="text"
            name='todo'
            value={list}
            placeholder={"Enter Your Todo"}
            onChange={(e) => setLists(e.target.value)}
            />
            <button onClick={addlist}>Add Todo</button>
        </div>
        <div className='todo_lists'>
            {todos.map((todo) => (
                <div>
                    <span>{todo}</span>
                    <button className='btn del'
                        onClick={() => {
                            let filteredItems = todos.filter((value) => value !== todo);
                            setTodos([...filteredItems]);
                        }}
                        >
                        Delete
                    </button>
                </div>
            ))}
        </div>          
    </div>
  )
}
