import React from 'react'
import { Todoitems } from '../component/Todoitems'
export const Todos=(props)=>{
  let myStyle={
    minheight:"70vh"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length===0?"No items to display":
       props.todos.map((todos)=>{
        return ( 
        <>
        <Todoitems Todos={todos} key={todos.sno} onDelete={props.onDelete}/>
        <hr/>
    </>
    ) 
        })}
     
    </div>
  )
}