import { Stack,IconButton,Typography, Box } from '@mui/material';
import React, {useState,useEffect, useRef} from 'react'
import {Play,Screencast, Pause} from "phosphor-react"
import Slider from '@mui/material/Slider';
import { getDataById } from "./storedata";
const SmallPlayer = ({ data1 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const[timeRemaining, setTimeRemaining]= useState(0);
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
  useEffect(() => {
    if(isPlaying){
      setInterval(() => {
        const _duration =Math.floor(myRef?.current?.duration); // seconds
        setTimeRemaining(_duration);
        const _elapsed =Math.floor(myRef?.current?.currentTime);
        setPosition(_elapsed);
      }, 100);
    }
  }, [isPlaying])
    const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsDisabled(screenWidth > 805);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isDisabled) {
    return null;
  }
  return (
    <>
     <audio ref={myRef} src={getDataById(data1).music} />
    <Stack direction={"column"}>
        <Slider aria-label="Default" sx={{ color: "red",height:2 }} value={position}
        min={0}
        step={1}
        max={timeRemaining}
        onChange={(_, value) => setPosition(value)} />
    <Stack direction={"row"} sx={{paddingLeft:2, alignContent:"center", justifyContent:"space-between", minWidth:"18em" }} spacing={1}>
        <Box display={"flex"} gap={2} sx={{alignContent:"center",justifyContent:"center"}}>
          <img src={getDataById(data1).img} alt='' height={"40"} width={"40"}></img>
          <Stack>
            <Typography>{getDataById(data1).name}</Typography>
            <Typography variant='caption' >{getDataById(data1).artist}</Typography>
          </Stack>
          
          </Box>
          <Stack direction={"row"} alignItems="center">
          <Typography  variant='caption' sx={{ color: "white" }}>{formatDuration(`${position}`)}/-{formatDuration(`${timeRemaining}` - `${position}`)}</Typography>
          <IconButton sx={{color:'white'}} ><Screencast size={30} /></IconButton>
          {isPlaying? (<IconButton sx={{ color: "white" }} onClick={pauseAudio}> <Pause size={30} weight="fill" /></IconButton>):(<IconButton sx={{ color: "white" }} onClick={start}> <Play size={30} weight="fill" /></IconButton>)} 
          </Stack>
          </Stack>
          </Stack>
          </>
  )
}

export default SmallPlayer