import React from 'react'
import "./Style.css"


export function Todoapp() {
  return (
    <div className='Wrapper'>
        <div className='todoApp'>
            <input
            type="text"
            name='todo'
            placeholder={"Enter Your Todo"}
            />
            <button>Add Todo</button>
        </div>       
    </div>
  )
}
