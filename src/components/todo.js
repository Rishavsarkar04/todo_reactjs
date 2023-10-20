import { useState } from "react";
import { AiFillDelete} from "react-icons/ai";
import { useMycontext } from "../context";



export default function Todo({obj:{text,iscompleted,id} , type}){


    const [editinput,seteditinput] = useState(text)
    const {edittodo,button , setbutton ,deletetodo ,compltedtodo} = useMycontext()

  

    function editsubmit(e){
        console.log('submited')
        e.preventDefault()
        const type = e.target.dataset.type
        console.log(type)
        if (type==='Save'){
            edittodo(id,editinput)
            e.target.firstElementChild.readOnly=true
        }else{
            setbutton(id)
            e.target.firstElementChild.readOnly=false
            e.target.firstElementChild.focus()
        }  }


       
    function remove(id,e){
            deletetodo(id,e)
        }
    
    function completed(e,id){
        if (e.target.readOnly === true) compltedtodo(e,id)
    }



    return (<li>
    <form onSubmit={(e)=>{editsubmit(e)}} data-type={id===Number(button)?'Save':'Edit'}> 
    <input type='text'  className={`listinput ${iscompleted?'complete':''}`} readOnly={id===Number(button)?false:true}  value={editinput} onChange={(e)=>{seteditinput(e.target.value)}} onClick={(e)=>{completed(e,id)}} >
    </input>
    {iscompleted?null:<button type='submit' className="smallbutton" name='submit'>
      {id===Number(button)?'Save':'Edit'}
    </button>}
    
    </form>
    <div onClick={(e)=>{remove(id,e)}}>
    <AiFillDelete className='delete'/>
    </div>
    
    </li>)
}