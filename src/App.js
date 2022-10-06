import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Todos } from './component/Todos';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './component/AddTodo';
function App() {

  // let initTodo;
  // if (localStorage.getItem("todos") === null) {
  //   initTodo = [];
  // }
  // else {
  //   initTodo = JSON.parse(localStorage.getItem("todos"));
  // }

  const onDelete = (todo) => {
    console.log("I am onDelete", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;

    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  //setting new desc,title of new todo into addtodo
  const addTodo = (title, desc) => {
    console.log("i am adding this in todos list", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    // setting new todo into the last position of exitisting todos!!
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <> <Navbar title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;