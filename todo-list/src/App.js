import logo from './logo.svg'
import './App.css'
import TodoList from './TodoList'
import React, {useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

const init_counter = 0

const LOCAL_STORAGE_KEY = "TodoApp.todos"
function App() {

  const [todos, setTodos] = useState([])
  const todoInput = useRef()
  
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])
  
  useEffect(() => {
    if(todos.length !== 0){
      console.log(todos.length)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }
    
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id===id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function clearTodos(){
    const newTodos = todos.filter(todo => todo.complete === false)
    setTodos(newTodos)
  }

  function addTodo(e){
    
    const todoName = todoInput.current.value
    if(todoName.length === 0){
      return 
    }
    setTodos(currTodos => {
      return [...currTodos, {
        name: todoName,
        complete: false,
        id: uuidv4()
      }]
    })
    todoInput.current.value = null
  }

  return (
    <React.StrictMode>
      <TodoList todoList={todos} toggleTodo = {toggleTodo}/>
      <input ref={todoInput} type="text" />
      <button onClick={addTodo}> Add todo </button>
      <button onClick={clearTodos}> Clear completed todos </button>

      <div>{todos.filter(todo => todo.complete === false).length}</div>
    </React.StrictMode>
  )
}

export default App
