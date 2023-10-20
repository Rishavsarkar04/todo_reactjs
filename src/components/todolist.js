import { useMycontext } from "../context"
import Todo from "./todo"

export default function Todolists({type}){
    const {todos} = useMycontext()
    console.log(type)

    let filtertodo;
    
    if (type ==='complete') filtertodo = todos.filter((todo)=> todo.iscompleted === true)
    if (type ==='incomplete') filtertodo = todos.filter((todo)=> todo.iscompleted === false)
    if (type ==='all') filtertodo = todos

    return<ul>
        {filtertodo.map((todo)=>{

            return <Todo obj={todo} key={todo.id} type={type}/>
        
        })}
  </ul>
}