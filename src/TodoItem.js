import React from 'react';

export default function Todoitem({todoitem_prop,toggleCheckbox}){
	function handleClick(){
		toggleCheckbox(todoitem_prop.id)
	}


	return(
		<div>
			<label>
			<input type="checkbox" checked={todoitem_prop.done} //done is boolean, T/F
			onChange={handleClick}
			/>
			{todoitem_prop.name}
			</label>
		</div>
		)
}