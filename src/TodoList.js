import React from 'react';
import Todoitem from './TodoItem'

export default function TodoLis({todos_prop,toggleCheckbox}){
	return(
		<div>
		My ToDo List:
		{todos_prop.map(item => { //map over all of our todo item
			return <Todoitem key ={item.id} toggleCheckbox={toggleCheckbox} todoitem_prop={item}/> 
			//for each one of our todo-> return the todoitem component
			//key: allows React to only re-render or change the component that actually change in the array, 
			//instead of re-rendering all of them every single time(efficiency)
		})}
		</div>
		)	
}