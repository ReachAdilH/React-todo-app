import { useState } from "react"

export function TodoInput(props){
    const { handleAddTodo }= props
    const [inputValue, setInputValue] = useState('')
// console.log(inputValue)
    return(
        <div>
            <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Add task"></input>
            <button onClick={()=> { 
                if(!inputValue){return} 
                handleAddTodo(inputValue)}} >
                    {/* class="fa-solid fa-plus" */}
                <i >+</i> 
            </button>
        </div>
    )
}