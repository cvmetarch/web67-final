import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import Form from "./components/Form";
import TodosList from './components/TodosList';
import TodosList2 from './components/TodosList2';
import './App.css';

const wDone = () => {
  return (<div></div>)
};

export default function App() {  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="withDone=1" element={<WDone />} />
    </Routes>
    );
};

const Home = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [filtered, setFiltered] = useState(false); 
  const [count, setCount] = useState(todos.filter((todo) => (!todo.completed)).length);

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  return (
    <div className='container'>
    <div className='app-wrapper'>
      <div><Header /></div>
      <h2>You have {count} tasks left</h2> 
      <div>
        <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        count = {count}
        setCount={setCount}
        />
      </div>
      <div>
        <TodosList 
        todos={todos} 
        setTodos={setTodos}
        count = {count}
        setCount={setCount}
        filtered={filtered}
        setFiltered={setFiltered}
        />
      </div>      
      <div><Footer /></div>    
    </div>
  </div>
  );
};

const WDone = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [count, setCount] = useState(todos.filter((todo) => (!todo.completed)).length);

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  return (
    <div className='container'>
    <div className='app-wrapper'>
      <div><Header /></div>
      <h2>You have {count} tasks left</h2> 
      <div>
        <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        count = {count}
        setCount={setCount}
        />
      </div>
      <div>
        <TodosList2 
        todos={todos} 
        setTodos={setTodos}
        count = {count}
        setCount={setCount}
        />
      </div>      
      <div><Footer /></div>    
    </div>
  </div>
  );
};
