import { useState } from "react";
import {AiOutlineEye,AiTwotoneEyeInvisible} from "react-icons/ai";
import { useMycontext } from "../context";
// import { useNavigate } from "react-router-dom";
// ai AiTwotoneEyeInvisible


export default function Loginpage(){
    let [isvisible, setisvisible] = useState(false)
    let [username, setusername] = useState('')
    let [password, setpassword] = useState('')

    let {login,seterror,error}=useMycontext()

    // let navigate =useNavigate()

    function formsubmit(e){
        e.preventDefault()
        if (!username && !password){  
            seterror('')
            return
        }
        login(username,password)
      
    }

    function changevisi(){
        setisvisible(!isvisible)
    }

    return (
        <div className="containerbox">
        
        {error?<p className="error">{error}</p>:''}

            <form className="formcontainer" onSubmit={(e)=>{formsubmit(e)}}>
                <div className="namdiv">
                    <input type="text" placeholder="Enter Your name" className="name" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                </div>

                <div className="passdiv">
                     <input type={isvisible?"tex":"password"} placeholder="Enter Your password" className="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/> <span onClick={changevisi} className="passicon"> {isvisible?<AiOutlineEye className="eye"/>:<AiTwotoneEyeInvisible className="eye" />}</span>
                </div>
                    
                    
                     <button type="submit" className="login"> Login </button>
            </form>

     

        </div>
      ); 
}