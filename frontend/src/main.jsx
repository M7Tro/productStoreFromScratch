import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <Router>
        <App />
      </Router>      
    </ChakraProvider>
  </StrictMode>,
)
