import { Stack, Typography, IconButton, Box, Divider } from '@mui/material'
import { Play, SkipBack, Pause, SkipForward, ThumbsUp, ThumbsDown, DotsThreeOutlineVertical, SpeakerHigh, Repeat, Shuffle, CaretUp, Screencast, RepeatOnce } from 'phosphor-react'
import BottomBar from './BottomBar';
import React, { useState,useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider';
import { getDataById } from "./storedata";
import "./Player.css"
import useSwipeDetection from './useSwipeDetection';
export default function Player({ data1, incrementId, decrementId, onChange, myRef, start,setDataToPass, formatDuration, pauseAudio, handleSliderChange, isPlaying, setIsPlaying, onClick,repeat,isRepeat, setIsRepeat,shuffleBtn, shuffle,setShuffle,handleCardClick, pointer, navigate, stack }) {
  const divRef = useRef();

  useSwipeDetection(
    divRef,
    () => console.log('Swipe Up detected in ComponentA'),
    () => onClick(sc),
    null, // No action for left swipe
    null // No action for right swipe
  );

  const sc=true;
  const[timeRemaining, setTimeRemaining]= useState(0);
  const targetRef = useRef();
  const targetRef1 = useRef();
 
  const [style, setStyle] = useState({ display: 'none'});
  
  const [position, setPosition] = useState(0);
  
  const [play1, setPlay1]=useState(1);
  
  const playNext = () => {
    let x = Math.floor((Math.random() * 10) + 1);
    
    if(shuffle){
      console.log(x);
      handleCardClick(x);
      setDataToPass(x)
    }
    else {
      setPlay1(play1 + 1);
      handleCardClick(play1);
    }
 
  };
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume]=useState(30);
  useEffect(() => {
    if(myRef){
    myRef.current.volume= volume/100;
    }
    if(isPlaying){
      setInterval(() => {
        const _duration =Math.floor(myRef?.current?.duration); // seconds
        setTimeRemaining(_duration);
        const _elapsed =Math.floor(myRef?.current?.currentTime);
        setPosition(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying])
  const [isDisabled, setIsDisabled] = useState(false);
  {/*useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsDisabled(screenWidth < 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);*/}

  if (isDisabled) {
    return null;
  }

  return (
    <>
    <audio ref={myRef} src={getDataById(data1).music} autoPlay={true}  onCanPlay={e =>{setIsPlaying(true);}} onEnded={playNext} loop={isRepeat}/>
    <Stack direction={"column"}>
    <Slider aria-label="Default" sx={{ color: "red",height:2 }} value={position}
    min={0}
    step={1}
    max={timeRemaining}
    onChange={handleSliderChange} />
<Box className="playerbtn">
    <Box display={"flex"} gap={2} sx={{alignContent:"center",justifyContent:"center"}}  >
    <Stack spacing={1} sx={{  alignItems: "center" }} direction={"row"}>
          <IconButton sx={{ color: "white" }} onClick={() => navigate("prev")} ><SkipBack weight='fill' size={24}/></IconButton>
         {isPlaying? (<IconButton sx={{ color: "white" }} onClick={pauseAudio}> <Pause size={30} weight="fill" /></IconButton>):(<IconButton sx={{ color: "white" }} onClick={start}> <Play size={30} weight="fill" /></IconButton>)} 
          <IconButton sx={{ color: "white" }} onClick={() => navigate("next")} ><SkipForward size={24} weight="fill" /></IconButton>
          <Typography variant='caption' sx={{ color: "white" }}>{formatDuration(`${position}`)}/-{formatDuration(`${timeRemaining}` - `${position}`)}</Typography>
        </Stack>
      </Box>
      <Box display={"flex"} gap={2} sx={{alignContent:"center",justifyContent:"center"}}>
      <img src={getDataById(data1).img} alt='' height={"40"} width={"40"}></img>
      <Stack>
        <Typography>{getDataById(data1).name}</Typography>
        <Typography variant='caption' >{getDataById(data1).artist}</Typography>
      </Stack>
      <Box display={"flex"} gap={1} sx={{alignContent:"center",justifyContent:"center"}}>
      <IconButton sx={{ color: "white" }} ><ThumbsUp size={24} /></IconButton>
          <IconButton sx={{ color: "white" }}  > <ThumbsDown size={24} /></IconButton>
          <IconButton sx={{ color: "white" }}><DotsThreeOutlineVertical size={24} /></IconButton>
      </Box>
      </Box>
      <Box gap={2} sx={{alignItems:"center", minWidth:"15em", display: "flex", paddingRight: 4}}>
      <Stack direction={"row"}  spacing={1} sx={{alignItems:"center"}}> <SpeakerHigh size={24}  onPointerEnter={e => {
                     setStyle({display: 'block',width:50,color:"red"});
                 }}
                  /><Box  style={style}  onPointerLeave={e => {
                    setStyle({display: 'none'})
                }}><Slider
              sx={style}
              orientation="horizontal"
              min={0}
              max={100}
              value={volume}
              onChange={(e,v) =>setVolume(v)}
              aria-label="Temperature"
              valueLabelDisplay="auto"
            /></Box></Stack>
             {isRepeat? (<IconButton sx={{ color: "white" }} onClick={repeat}> <RepeatOnce size={24} /></IconButton>):(<IconButton sx={{ color: "white" }} onClick={repeat}> <Repeat size={24} weight="fill" /></IconButton>)} 
          {shuffle? (<IconButton sx={{ color: "white" }} onClick={shuffleBtn}> <Shuffle size={24} weight="bold" /></IconButton>
                   ):(
                   <IconButton sx={{ color: "white" }} onClick={shuffleBtn}> <Shuffle size={24}  /></IconButton>)}
          <CaretUp size={24} onClick={(e) =>{onClick(sc);}} />
      </Box> 
      </Box>
      <Box className="playerbtn2" ref={divRef} >
        <Box className="playerbtn1">
        <Box display={"flex"} gap={2} sx={{alignContent:"center",justifyContent:"center"}}>
          <img src={getDataById(data1).img} alt='' height={"40"} width={"40"}></img>
          <Stack onClick={(e) =>{onClick(sc);}}>
            <Typography variant='caption2'>{getDataById(data1).name}</Typography>
            <Typography variant='caption' >{getDataById(data1).artist}</Typography>
          </Stack>
          
          </Box>
          <Stack direction={"row"} alignItems="center" paddingRight={2}>
          <Typography  variant='caption' sx={{ color: "white" }}>{formatDuration(`${position}`)}/-{formatDuration(`${timeRemaining}` - `${position}`)}</Typography>
          <IconButton sx={{color:'white'}} ><Screencast size={30} /></IconButton>
          {isPlaying? (<IconButton sx={{ color: "white" }} onClick={pauseAudio}> <Pause size={30} weight="fill" /></IconButton>):(<IconButton sx={{ color: "white" }} onClick={start}> <Play size={30} weight="fill" /></IconButton>)} 
          </Stack>
         
          </Box>
          <Box paddingTop={1}>
          <Divider color="white"/>
          <Box paddingTop={1}><BottomBar/></Box>
          </Box>
          </Box>       
          <playerEnlarged position={position} timeRemaining={timeRemaining}  currentTime={currentTime}  sc={sc}  />
      </Stack>
     
      </>
  )
}
