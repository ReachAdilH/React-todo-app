export function Tabs(props){
    const {todos} = props

    const tabs = ['All', 'Open', 'Completed']
    return(
        <nav>{tabs.map((tab, tabindex) => {
            const numOfTasks = tab === 'All' ?  todos.length :
                               tab === 'Open'?  todos.filter(val => !val.complete).length :
                                                todos.filter(val => val.complete).length
            return(
                <button key={tabindex}>
                    <h4>{tab}<span>({numOfTasks})</span></h4>
                </button>
            )
        })}
           
        </nav>
    )
}