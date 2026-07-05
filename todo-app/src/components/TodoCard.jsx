export function TodoCard(props){
    const {todo} = props
   // const todo = todos[todoIndex]
    return(
        <div>
            <p>{todo.input}</p>
            <div>
                <button disabled={todo.complete}>
                 <h6>
                   Done
                </h6>
                </button>
                <button>
                <h6>
                   Delete
                </h6>
                </button>
            </div>
        </div>
    )
}