import TodoList from './TodoList'
import {useState,useRef, useEffect} from 'react';
//import uuidv4 from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid';
//useRef: to reference element inside the HTML
//props //pass them just like pass attribute to HTML

function App() {

const LOCAL_STORAGE_KEY = 'hk'
const [todos,setTodos] = useState([])
const inputTodo = useRef()

//useEffect(()=>{},[array]) // anytime anything in the the array change->run the function
useEffect(()=>{
	const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) //convert(parse) String to array
	if (storedTodo) setTodos(storedTodo)
},[])

useEffect(()=>{
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) //setItem(key:string,value:string)

},[todos]) 

function toggleCheckbox(id){ //toggle the todo(by id) in the list
	//Goal: reset the todo list variable to the new list of todos with the check
	//creat a copy before modifying state variable, use the copy to set the new state
	const newTodos = [...todos] //copy of prev todos
	const todoe = newTodos.find(todo=>todo.id===id) //find each element of the array that...
	todoe.done = !todoe.done //update the todo object
	setTodos(newTodos)
}

function handleAddTodo(e){
	//inputTodo.current //element that currently referencing(<input type='text'/>)
	const name = inputTodo.current.value // value of the input
	console.log(name)
	if (name === '') return 
	setTodos(prevTodos =>{
		return [...prevTodos, {id : uuidv4(),name: name, done: false}]

	})
		inputTodo.current.value = null
}

function handleClean(){
	setTodos([])
}

function handleCleanCompelete(){
	const unfinish = todos.filter(todo=>!todo.done)
	setTodos(unfinish)
}
  return (
  	<>
  	<TodoList todos_prop={todos} toggleCheckbox={toggleCheckbox}/> 
  	<input ref={inputTodo}type='text'/>
  	<button onClick={handleAddTodo}> Add </button>
  	<button onClick={handleCleanCompelete}>Clean Compelete </button>
  	<button onClick={handleClean}>Clean All </button>
  	<div>{todos.filter(todo=>!todo.done).length} left to do</div>
  	<div>{console.log(todos.filter(todo=>!todo.done))}</div>


  	</>
  	)
}

export default App;
