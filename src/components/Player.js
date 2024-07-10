import { Stack, Typography, IconButton, Box } from '@mui/material'
import { Play, SkipBack, Pause, SkipForward, ThumbsUp, ThumbsDown, DotsThreeOutlineVertical, SpeakerHigh, Repeat, Shuffle, CaretUp } from 'phosphor-react'
import React, { useState,useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider';
import { getDataById } from "./storedata";
export default function Player({ data1, incrementId, decrementId}) {

  const [isPlaying, setIsPlaying] = useState(true);
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
  const [isDisabled, setIsDisabled] = useState(false);
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
  
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsDisabled(screenWidth < 805);
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
    <audio ref={myRef} src={getDataById(data1).music} autoPlay={true} />
    <Stack direction={"column"}>
    <Slider aria-label="Default" sx={{ color: "red",height:2 }} value={position}
    min={0}
    step={1}
    max={timeRemaining}
    onClick={(e,f) =>setPosition(f)} />
<Stack direction={"row"} sx={{paddingLeft:2, alignContent:"center", justifyContent:"space-between", minWidth:"18em" }} spacing={1}>
    <Box display={"flex"} gap={2} sx={{alignContent:"center",justifyContent:"center"}}>
    <Stack spacing={1} sx={{  alignItems: "center" }} direction={"row"}>
          <IconButton sx={{ color: "white" }} onClick={decrementId} ><SkipBack weight='fill' size={24} /></IconButton>
         {isPlaying? (<IconButton sx={{ color: "white" }} onClick={pauseAudio}> <Pause size={30} weight="fill" /></IconButton>):(<IconButton sx={{ color: "white" }} onClick={start}> <Play size={30} weight="fill" /></IconButton>)} 
          <IconButton sx={{ color: "white" }} onClick={incrementId} ><SkipForward size={24} weight="fill" /></IconButton>
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
      <Box display={"flex"} gap={2} sx={{alignContent:"center",justifyContent:"center", minWidth:"15em"}}>
      <Stack direction={"row"}  spacing={1}> <SpeakerHigh size={24}  onPointerEnter={e => {
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
          <Repeat size={24} />
          <Shuffle size={24} />
          <CaretUp size={24} />
      </Box>
      </Stack>
      </Stack>
      </>
  )
}
