import React, { useState, useEffect, lazy, Suspense, useRef } from 'react'
import Navbar from './components/Navbar';
import { Box, Stack } from '@mui/material';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Library from './components/Library';
import SmallNavbar from './components/SmallNavbar';
import PlayerEnlarged from './components/playerEnlarged';
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";
import Loading from './components/Loading';
import SkeletonLoader from './components/SkeletonLoader';
import "./App.css";
import data1 from './components/storedata1';
import { NextWeek } from '@mui/icons-material';

const General = lazy(() => import('./components/General'));
const Explore = lazy(() => import('./components/Explore'));
const App = () => {
  
 const [shuffle, setShuffle] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isRepeat, setIsRepeat] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const targetRef = useRef(null);
  const targetRef1 = useRef();
  const myRef = useRef();
  const [stack, setStack] = useState([]); 
  const [pointer, setPointer] = useState(stack.length - 1); // State to store the stack
  const [lastVisitedId, setLastVisitedId] = useState(null);
  const [output, setOutput] = useState(""); // State to display output
  const currentItem = stack.length > 0 ? data1.find((item) => item.id === stack[pointer]) : null;

  // Function to handle card click
  const handleCardClick = (cardId) => {
    setStack((prevStack) => {
      const newStack = [...prevStack, cardId];
      setOutput(`${newStack.join(", ")}`);
      console.log(`Stack: ${newStack}`);
      return newStack;
    });
  };

  // Function to handle pop action
  const handlePop = () => {
    setStack((prevStack) => {
      if (prevStack.length === 0) {
        setOutput("Stack is empty.");
        return prevStack;
      }
      const poppedCard = prevStack[prevStack.length - 1];
      const newStack = prevStack.slice(0, -1);
      setOutput(`Popped: ${poppedCard} | Stack: ${newStack.join(", ")}`);
      return newStack;
    });
  };

  const shuffleBtn = () =>{
    if(shuffle){
      setShuffle(false);
      console.log("ok");
    }
    else{
      setShuffle(true);
    }
  }
  const repeat = () => {
    if (isRepeat) {
      setIsRepeat(false);
    }
    else {
      setIsRepeat(true);
    }
  }
  const start = () => {
    myRef.current.play();
    setIsPlaying(true);
  }
  const pauseAudio = () => {
    console.log("here");
    myRef.current.pause();
    setIsPlaying(false);
  }
  const [scrl, setScrl] = useState(null);
  const scroll = (sc) => {
    if (sc) {
      setScrl(targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }));
      console.log("clicked");
    }

  }
  const scroll1 = (sc1) => {
    if (sc1) {
      setScrl(targetRef1.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }));
      console.log("clicked");
    }
  }
  const [style, setStyle] = useState({ display: 'none' });

  const [position, setPosition] = useState(0);

  function formatDuration(value) {
    if (value && !isNaN(value)) {

      const minute = Math.floor(value / 60);
      const secondLeft = value - minute * 60;
      return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    else {
      return '00:00';
    }
  }
  const [currentTime, setCurrentTime] = useState(0);
  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    myRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };


  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

    const navigate = (direction) => {
      if (stack.length === 0) return; // Prevent navigation if stack is empty
      let newPointer = pointer;
    
      if (direction === "next" && pointer < stack.length - 1) {
        newPointer += 1;
      } else if (direction === "prev" && pointer > 0) {
        newPointer -= 1;
      } else if (direction === "next" && pointer === stack.length - 1) {
       var x;
        handleCardClick(x=stack[newPointer]+ 1);
      }
    
      setPointer(newPointer);
      setDataToPass(stack[newPointer]); // Update the data being displayed
    };
    
    //setDataToPass(stack[pointer]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataToPass, setDataToPass] = useState(0);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setPointer(stack.length - 1);
  }, [stack]);

  if (isLoading) {
    return <Loading />;
  }
  const playing = (play2) => {
    setDataToPass(play2);
  };

  return (

    <BrowserRouter basename="/youtube-music">

      <Box sx={{ overflowX: "hidden", overflowY: "hidden", height: "100vh", width: "100vw" }} >
        <Stack sx={{ overflowX: "hidden", overflowY: "hidden" }}>
          <Box sx={{ height: 40, width: "100%", backgroundColor: "black", color: "#fff", padding: 2, }} ref={targetRef1} >
            <Stack justifyItems={"center"} >
              <Box className="navbar">
                <Navbar /></Box>
              <Box className="small-navbar"><SmallNavbar /></Box>

            </Stack>

          </Box>
          <Stack direction={"row"} sx={{ height: "100vh", width: "100%", backgroundColor: "black", color: "white", }}>
            <Box className="sidebar" sx={{ color: "#fff" }}>
              <Sidebar />

            </Box>
            <Box sx={{ width: "100%", height: "86vh", minHeight: "20vh", color: "#fff", }}>

              <Box sx={{ width: "100%", minHeight: "20vh", color: "#fff", }}>
                <Suspense fallback={<div><SkeletonLoader /></div>}>
                  <Switch>
                    <Route path="/home" ><General stack={stack} onClick={playing} handleCardClick={handleCardClick} /></Route>
                    <Route path="/explore"><Explore onClick={playing} handleCardClick={handleCardClick} /></Route>
                    <Route path="/library"><Library stack={stack} onClick={playing} handleCardClick={handleCardClick}/></Route>
                    <Route path="/login" ><Login /></Route>
                    <Route path="/register"><SignUp /></Route>
                    <Route path="/profile"><Profile /></Route>
                    <Redirect from="/" to="/home" />
                  </Switch>
                </Suspense>
              </Box>
              <Box ><Player data1={dataToPass} navigate={navigate} pointer={pointer} stack={stack}
              myRef={myRef} formatDuration={formatDuration} start={start} setDataToPass ={setDataToPass}
              pauseAudio={pauseAudio} handleSliderChange={handleSliderChange} isPlaying={isPlaying} 
              setIsPlaying={setIsPlaying} onClick={scroll} repeat={repeat} isRepeat={isRepeat} 
              setIsRepeat={setIsRepeat} shuffleBtn={shuffleBtn} shuffle={shuffle} setShuffle={setShuffle} handleCardClick={handleCardClick}/>
              </Box>

            </Box>
          </Stack>
        </Stack>
        <Box ref={targetRef} sx={{ height: "100vh", alignItems: "center", justifyContent: "center", width: "100%", }}>
          <Box> <PlayerEnlarged data2={dataToPass} onClick1={playing} 
          navigate={navigate} pointer={pointer} stack={stack} myRef={myRef}
           formatDuration={formatDuration} start={start} pauseAudio={pauseAudio} handleSliderChange={handleSliderChange} 
           isPlaying={isPlaying} setIsPlaying={setIsPlaying} onClick={scroll1} repeat={repeat} 
           isRepeat={isRepeat} setIsRepeat={setIsRepeat} shuffleBtn={shuffleBtn} shuffle={shuffle} setShuffle={setShuffle} /> </Box>
        </Box>
      </Box>
    </BrowserRouter>
  )
}


export default App;
