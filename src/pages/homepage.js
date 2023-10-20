import { Outlet } from 'react-router-dom';
import Inputbox  from '../components/inputbox';
import Navbar from '../components/nav';
import { useMycontext } from '../context';


export default function Homepage(){
  let{logout,user} = useMycontext()


  console.log(user.isauthenticated,'home page')
  

  // function loggingout(){}
    return (
    
    <div className='containerbox'>

    
    <div className='todocontainer'>
    <button className='logout'  onClick={logout}>logout</button>

      <p>TO-DO APP</p>

      <div className='addinput'>  
        <Inputbox/>
        <Navbar/>
      </div>
      
      <div className='todolist'>
      <Outlet/>
      </div>
      </div>


    </div>
    )

  
}