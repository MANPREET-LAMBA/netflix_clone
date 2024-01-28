
import './App.css';
import Trending from './components/Trending';
import Signup_page from './components/Signup_page'
import {Routes,Route} from 'react-router-dom';

import FormX from './Signup_form/FormX'

function App() {
  return(
    <Routes>
        <Route path='/' element={<Signup_page/>}/>
        <Route path='/sign' element={<FormX/>}/>
        <Route path='/main' element={<Trending/>}/>
       
    </Routes>
  )
}

export default App;
