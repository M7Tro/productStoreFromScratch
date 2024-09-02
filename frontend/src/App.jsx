import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Create from './pages/Create';

export default function App () {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
    </div>
  )
}