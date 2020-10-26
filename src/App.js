import './App.css';
import customTheme from './customTheme'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Explore from './components/Explore'
import colors from './components/colors'


// import Chakra
import React from "react";
import { ChakraProvider } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

// Use at the root of your app


function App() {

  return (
    <ChakraProvider theme={customTheme} >
      <Box >
        <Header/>
        <Box>
          <Sidebar/>
          <Explore/>
        </Box>
      </Box>
    </ChakraProvider>
  );
}


export default App;
