import React from 'react'

export const Todoitems = ({Todos,onDelete}) => {
  return (
    
    <div >

<h4> {Todos.title}</h4>
<p>{Todos.desc}</p>
  <button className="btn btn-sm btn-danger " onClick={()=>{onDelete(Todos)}}>Delete</button>

    </div>
     
  )
}
