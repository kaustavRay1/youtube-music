import React, {useState, useEffect, lazy, Suspense, useRef} from 'react'
import Navbar from './components/Navbar';
import { Box,  Stack } from '@mui/material';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Library from './components/Library';
import SmallNavbar from './components/SmallNavbar';
import PlayerEnlarged from './components/playerEnlarged';
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";
import Loading from './components/Loading';
import SkeletonLoader from './components/SkeletonLoader';
import "./App.css";
import SmallPlayer from './components/SmallPlayer';

const General = lazy(()=> import('./components/General'));
const Explore = lazy(()=> import('./components/Explore'));
const App = () => {
  
  const [isPlaying, setIsPlaying] = useState(true);
  const[timeRemaining, setTimeRemaining]= useState(0);
  const targetRef = useRef(null);
  const targetRef1 = useRef();
  const myRef = useRef();
  const start = () => {
    myRef.current.play();
      setIsPlaying(true);
  }
  const pauseAudio = () => {
    console.log("here");
    myRef.current.pause();
    setIsPlaying(false);
  }
  const [scrl,setScrl] =useState(null);
  const scroll = (sc) => {
    if(sc){
   setScrl( targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }));
   console.log("clicked");
    }
    
  }
  const scroll1 = (sc1) => {
  if(sc1){
    setScrl( targetRef1.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }));
 console.log("clicked");
  }
}
  const [style, setStyle] = useState({ display: 'none'});
  
  const [position, setPosition] = useState(0);
  
  function formatDuration(value) {
    if(value && !isNaN(value))
    {
      
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    else{
      return '00:00';
    }
  }
  const [currentTime, setCurrentTime] = useState(0);
  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    myRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };


  const[count, setCount]=useState(0);
  const[clicked, setClicked]= useState(false);
  const handleChange = (play1) => {
    setDataToPass(dataToPass + play1);
  };
  const incrementId = () => {
    setDataToPass(prevId => prevId + 1);
    setCount(count + 1);
  };
  const decrementId = () => {
    if(clicked == true){
      setCount(0);
      setClicked(false);
    } 
    else if (count > 0  && dataToPass > count){
      setCount(count => count - 1);
      setDataToPass(prevId => prevId -1);
    }
    else if (count == dataToPass && count > 0){
      setCount(count => count - 1);
      setDataToPass(prevId => prevId -1);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [dataToPass, setDataToPass] = useState(0);
      useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);
    
      if (isLoading) {
        return <Loading />;
      }
      const playing = (play2) => {
        setDataToPass(play2);
      };
      
  return (
   
    <BrowserRouter basename="/youtube-music">
    
    <Box sx={{overflowX:"hidden", overflowY:"hidden",height:"100vh",width:"100vw"}} >
    <Stack sx={{overflowX:"hidden", overflowY:"hidden"}}>
    <Box sx={{height:40,width:"100%",backgroundColor:"black", color:"#fff",padding:2,}} ref={targetRef1} >
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
    <Box sx={{width:"100%",height:"86vh", minHeight:"20vh",color:"#fff",}}>
   
    <Box sx={{width:"100%", minHeight:"20vh",color:"#fff",}}>
    <Suspense fallback={<div><SkeletonLoader/></div>}>
    <Switch>
    <Route path="/home" ><General onClick={playing}/></Route>
    <Route path="/explore"><Explore onClick={playing} /></Route>
    <Route path="/library"><Library/></Route>
    <Route path="/login" ><Login/></Route>
    <Route path="/register"><SignUp /></Route>
    <Route path="/profile"><Profile /></Route>
    <Redirect from="/" to="/home"/>
    </Switch>
    </Suspense>
    </Box>
    <Box ><Player data1={dataToPass} incrementId={incrementId}  decrementId={decrementId} onChange={handleChange} myRef={myRef} formatDuration={formatDuration} start={start} pauseAudio={pauseAudio} handleSliderChange={handleSliderChange} isPlaying={isPlaying} setIsPlaying={setIsPlaying} onClick={scroll} /></Box>
     
    </Box>
  </Stack>
  </Stack>
  <Box ref={targetRef}  sx={{ height: "100vh",alignItems:"center", justifyContent:"center", width:"100%",}}>
    <Box> <PlayerEnlarged data2={dataToPass} incrementId={incrementId}  decrementId={decrementId} onChange={handleChange} myRef={myRef} formatDuration={formatDuration} start={start} pauseAudio={pauseAudio} handleSliderChange={handleSliderChange} isPlaying={isPlaying} setIsPlaying={setIsPlaying} onClick={scroll1}/> </Box>
    </Box>
  </Box>
  </BrowserRouter>
  )
}


export default App;
