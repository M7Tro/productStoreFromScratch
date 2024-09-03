import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Create from './pages/Create';
import { Box } from '@chakra-ui/react';

export default function App () {
  return (
    <Box minH={"100vh"}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>      
    </Box>
  )
}