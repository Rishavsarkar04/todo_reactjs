import './App.css';
import PageNotFound from './pages/page404';
import Todolists from './components/todolist';
import Homepage from './pages/homepage';
import Provider from './context';

import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import Loginpage from './pages/login';
import Authprovider from './auth_protection';


function App() {
  return (

      <BrowserRouter>
       <Provider>
          <Routes> 

           
              <Route path='/' element={ <Authprovider><Homepage/> </Authprovider>} >
                <Route index element={<Navigate to='/alltodo'replace/>}></Route>
                <Route path='alltodo' element={<Todolists type='all'/>}></Route>  
                <Route path='completetodo' element={<Todolists type='complete'/>}></Route>
                <Route path='incompletetodo' element={<Todolists type='incomplete'/>}></Route>
              </Route>
           

              <Route path='/login' element={<Loginpage/>}></Route>
              <Route path='*' element={<PageNotFound/>}></Route>
             
          </Routes>  
          </Provider>
      </BrowserRouter> 
     

   
   
   
  );
}

export default App;
