import { useState } from "react"
import { useMycontext } from "../context"

 function Inputbox(){
  const [addinput,setaddinput] = useState('')
  
  const {addingtodo}= useMycontext()

  function submitfuc(e){
    e.preventDefault()
    if (addinput ==='') return
    let obj = {id: Date.now(),
      text:addinput,
      iscompleted:false,
    }
    addingtodo(obj)
    setaddinput('')
  }


    return (<>
    <div className='inputcontainer'>
    <form onSubmit={(e)=>{submitfuc(e)}}>
    <input type='text' name='input' className='input' value={addinput} onChange={(e)=>{setaddinput(e.target.value)}}>
    </input>
    <button type='submit' name='submit'>
      Add Todo
    </button>
    </form>
  </div>
    </>
  )
}


export default Inputbox