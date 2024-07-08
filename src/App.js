import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import { Box,  Stack } from '@mui/material';
import Sidebar from './components/Sidebar';
import General from './components/General';
import Player from './components/Player';
import Explore from './components/Explore';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Library from './components/Library';
import SmallPlayer from './components/SmallPlayer';
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";

const App = () => {
 
  return (
   
    <BrowserRouter>
    
    <Box sx={{overflowX:"hidden", overflowY:"hidden",height:"100vh",width:"100vw"}}>
    <Stack sx={{overflowX:"hidden", overflowY:"hidden"}}>
    <Box sx={{height:40,width:"100%",backgroundColor:"black", color:"#fff",padding:2,}}>
      <Stack justifyItems={"center"} >
 <Navbar />
 
 </Stack>
 
    </Box>
    <Stack direction={"row"} sx={{height:"72.6vh",width:"100%",backgroundColor:"black",padding:2, color:"white",}}>
    <Box sx={{ color:"#fff"}}>
    <Sidebar/>

    </Box>
    <Box sx={{width:"100%",height:"76.2vh",color:"#fff",overflow:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,}}}>
   
    <Switch>
    
    <Route path="/home" ><General/></Route>
    <Route path="/explore"><Explore/></Route>
    <Route path="/library"><Library/></Route>
    <Route path="/login"><Login/></Route>
    <Route path="/register"><SignUp /></Route>
    <Route path="/profile"><Profile /></Route>
    <Redirect from="/" to="/home"/>
   
        </Switch>
    </Box>
  </Stack>
  <Box sx={{height:"13vh", width:"100%", backgroundColor:"black", color:"white",}}>
 
 <SmallPlayer/>
 <Player/>
  </Box>
  </Stack>
  </Box>
  </BrowserRouter>
  )
}


export default App;
