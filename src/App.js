import React, {useState, useEffect, lazy, Suspense} from 'react'
import Navbar from './components/Navbar';
import { Box,  Stack } from '@mui/material';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Library from './components/Library';
import SmallNavbar from './components/SmallNavbar';
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";
import Loading from './components/Loading';
import SkeletonLoader from './components/SkeletonLoader';
import "./App.css";
const General = lazy(()=> import('./components/General'));
const Explore = lazy(()=> import('./components/Explore'));
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);
    
      if (isLoading) {
        return <Loading />;
      }
  return (
   
    <BrowserRouter basename="/youtube-music">
    
    <Box sx={{overflowX:"hidden", overflowY:"hidden",height:"100vh",width:"100vw"}}>
    <Stack sx={{overflowX:"hidden", overflowY:"hidden"}}>
    <Box sx={{height:40,width:"100%",backgroundColor:"black", color:"#fff",padding:2,}}  >
      <Stack justifyItems={"center"} >
        <Box className="navbar">
         <Navbar/></Box>
         <Box className="small-navbar"><SmallNavbar/></Box>
         
 </Stack>
 
    </Box>
    <Stack direction={"row"} sx={{height:"100vh",width:"100%",backgroundColor:"black",padding:2, color:"white",}}>
    <Box  className="sidebar" sx={{color:"#fff"}}>
    <Sidebar/>

    </Box>
    <Box sx={{width:"100%",height:"86vh",color:"#fff",}}>
   
    
    <Suspense fallback={<div><SkeletonLoader/></div>}>
    <Switch>
    <Route path="/home" ><General/></Route>
    <Route path="/explore"><Explore /></Route>
    <Route path="/library"><Library/></Route>
    <Route path="/login" ><Login/></Route>
    <Route path="/register"><SignUp /></Route>
    <Route path="/profile"><Profile /></Route>
    <Redirect from="/" to="/home"/>
    </Switch>
    </Suspense>
    
    
   
        
    </Box>
  </Stack>
  </Stack>
  </Box>
  </BrowserRouter>
  )
}


export default App;
