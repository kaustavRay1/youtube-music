import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
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

const General = lazy(() => import('./components/General'));
const Explore = lazy(() => import('./components/Explore'));

const App = () => {
  const [shuffle, setShuffle] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isRepeat, setIsRepeat] = useState(false);
  
  const targetRef = useRef(null);
  const targetRef1 = useRef(null);
  const myRef = useRef(null);

  const [stack, setStack] = useState([1]); // Initialize with a default song ID
  const [pointer, setPointer] = useState(0);
  const [dataToPass, setDataToPass] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Handle card click / song selection
  const handleCardClick = (cardId) => {
    setStack((prevStack) => {
      // Prevent consecutive duplicate entries at the top of the stack if clicked again
      if (prevStack[prevStack.length - 1] === cardId) return prevStack;
      const newStack = [...prevStack, cardId];
      setPointer(newStack.length - 1);
      return newStack;
    });
    setDataToPass(cardId);
    setIsPlaying(true);
  };

  const shuffleBtn = () => {
    setShuffle((prev) => !prev);
  };

  const repeat = () => {
    setIsRepeat((prev) => !prev);
  };

  const start = () => {
    if (myRef.current) {
      myRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (myRef.current) {
      myRef.current.pause();
      setIsPlaying(false);
    }
  };

  const scroll = (sc) => {
    if (sc && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }
  };

  const scroll1 = (sc1) => {
    if (sc1 && targetRef1.current) {
      targetRef1.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }
  };

  function formatDuration(value) {
    if (value && !isNaN(value)) {
      const minute = Math.floor(value / 60);
      const secondLeft = Math.floor(value - minute * 60);
      return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    return '00:00';
  }

  const handleSliderChange = (e) => {
    const newTime = Number(e.target.value);
    if (myRef.current) {
      myRef.current.currentTime = newTime;
    }
  };

  const navigate = (direction) => {
    if (stack.length === 0) return;
    let newPointer = pointer;
  
    if (direction === "next" && pointer < stack.length - 1) {
      newPointer += 1;
    } else if (direction === "prev" && pointer > 0) {
      newPointer -= 1;
    } else if (direction === "next" && pointer === stack.length - 1) {
      const nextId = stack[newPointer] + 1;
      handleCardClick(nextId);
      return;
    }
  
    setPointer(newPointer);
    setDataToPass(stack[newPointer]);
  };

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const playing = (play2) => {
    setDataToPass(play2);
    setIsPlaying(true);
  };

  return (
    <BrowserRouter>
      <Box sx={{ overflowX: "hidden", overflowY: "hidden", height: "100vh", width: "100vw" }}>
        <Stack sx={{ overflowX: "hidden", overflowY: "hidden" }}>
          
          {/* Top Navbar Header */}
          <Box sx={{ height: 40, width: "100%", backgroundColor: "black", color: "#fff", padding: 2 }} ref={targetRef1}>
            <Stack justifyItems="center">
              <Box className="navbar"><Navbar /></Box>
              <Box className="small-navbar"><SmallNavbar /></Box>
            </Stack>
          </Box>

          {/* Main Content & Sidebar Layout */}
          <Stack direction="row" sx={{ height: "100vh", width: "100%", backgroundColor: "black", color: "white" }}>
            <Box className="sidebar" sx={{ color: "#fff" }}>
              <Sidebar />
            </Box>
            <Box sx={{ width: "100%", height: "86vh", minHeight: "20vh", color: "#fff" }}>
              
              {/* Route Switching Views */}
              <Box sx={{ width: "100%", minHeight: "20vh", color: "#fff" }}>
                <Suspense fallback={<div><SkeletonLoader /></div>}>
                  <Switch>
                    <Route path="/home">
                      <General stack={stack} onClick={playing} handleCardClick={handleCardClick} />
                    </Route>
                    <Route path="/explore">
                      <Explore onClick={playing} handleCardClick={handleCardClick} />
                    </Route>
                    <Route path="/library">
                      <Library stack={stack} onClick={playing} handleCardClick={handleCardClick} />
                    </Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/register"><SignUp /></Route>
                    <Route path="/profile"><Profile /></Route>
                    <Redirect from="/" to="/home" />
                  </Switch>
                </Suspense>
              </Box>

              {/* Bottom Persistent Audio Controller Player */}
              <Box>
                <Player 
                  data1={dataToPass} 
                  navigate={navigate} 
                  pointer={pointer} 
                  stack={stack}
                  myRef={myRef} 
                  formatDuration={formatDuration} 
                  start={start} 
                  setDataToPass={setDataToPass}
                  pauseAudio={pauseAudio} 
                  handleSliderChange={handleSliderChange} 
                  isPlaying={isPlaying} 
                  setIsPlaying={setIsPlaying} 
                  onClick={scroll} 
                  repeat={repeat} 
                  isRepeat={isRepeat} 
                  setIsRepeat={setIsRepeat} 
                  shuffleBtn={shuffleBtn} 
                  shuffle={shuffle} 
                  setShuffle={setShuffle} 
                  handleCardClick={handleCardClick}
                />
              </Box>

            </Box>
          </Stack>
        </Stack>

        {/* Scrollable Fullscreen Enlarged Player View */}
        <Box ref={targetRef} sx={{ height: "100vh", alignItems: "center", justifyContent: "center", width: "100%" }}>
          <Box> 
            <PlayerEnlarged 
              data2={dataToPass} 
              onClick1={playing} 
              navigate={navigate} 
              pointer={pointer} 
              stack={stack} 
              myRef={myRef}
              formatDuration={formatDuration} 
              start={start} 
              pauseAudio={pauseAudio} 
              handleSliderChange={handleSliderChange} 
              isPlaying={isPlaying} 
              setIsPlaying={setIsPlaying} 
              onClick={scroll1} 
              repeat={repeat} 
              isRepeat={isRepeat} 
              setIsRepeat={setIsRepeat} 
              shuffleBtn={shuffleBtn} 
              shuffle={shuffle} 
              setShuffle={setShuffle} 
            /> 
          </Box>
        </Box>

      </Box>
    </BrowserRouter>
  );
};

export default App;