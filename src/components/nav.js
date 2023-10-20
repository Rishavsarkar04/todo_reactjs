import { NavLink } from "react-router-dom"

export default function Navbar(){
return <nav>
<NavLink className='nav' to='alltodo'>All Todo</NavLink>
<NavLink className='nav' to='completetodo'>Complete Todo</NavLink>
<NavLink className='nav' to='incompletetodo'>incomplete Todo </NavLink>
</nav>
}