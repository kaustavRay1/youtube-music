import { Stack, Typography, IconButton, Box, Divider, Card } from '@mui/material'
import { Play, SkipBack, Pause, SkipForward, ThumbsUp, ThumbsDown, DotsThreeOutlineVertical, SpeakerHigh, Repeat, Shuffle, CaretUp, Screencast, RepeatOnce } from 'phosphor-react'
import BottomBar from './BottomBar';
import React, { useState, useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider';
import { Link } from "react-router-dom";
import { getDataById } from "./storedata";
import "./Player.css"
const PlayerEnlarged = ({ data2, incrementId, 
  decrementId, start, formatDuration, pauseAudio, handleSliderChange, 
  isPlaying, onClick, myRef, onChange, repeat, 
  isRepeat, setIsRepeat }) => {
  const sc1 = true;
  const [play1, setPlay1] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [position, setPosition] = useState(0);
  const playNext = () => {
    setPlay1(play1 + 1);
    onChange(play1);
  };
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(30);
  useEffect(() => {
    if (myRef) {
      myRef.current.volume = volume / 100;
    }
    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(myRef?.current?.duration); // seconds
        setTimeRemaining(_duration);
        const _elapsed = Math.floor(myRef?.current?.currentTime);
        setPosition(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying])
  return (
    <>

      <Box sx={{ height: "100vh", width: "100vw", alignItems: "center", justifyContent: "center", display: "grid" }}>
        <Box gap={2} sx={{ alignItems: "center", justifyContent: "center", width: "100%", }}>
          <Box sx={{ height: "20em", width: "20em", }}>
            <img src={getDataById(data2).img} 
          alt={getDataById(data2).name} height={"100%"} width={"100%"} /></Box>
          <Typography sx={{ color: "white" }}>{getDataById(data2).name}</Typography>
          <Typography sx={{ color: "white" }}>{getDataById(data2).artist}</Typography>
          <Stack spacing={1} sx={{ alignItems: "center", justifyContent: "space-evenly", paddingTop: 3 }} direction={"row"}>
            {isRepeat ? (<IconButton sx={{ color: "white" }} onClick={repeat}> <RepeatOnce size={24} /></IconButton>
          ) : (
          <IconButton sx={{ color: "white" }} onClick={repeat}> <Repeat size={24} weight="fill" /></IconButton>
          )}
            <Box sx={{ justifyContent: "space-between" }}>
              <IconButton sx={{ color: "white" }} onClick={decrementId} ><SkipBack weight='fill' size={24} /></IconButton>
              {isPlaying ? (
                <IconButton sx={{ color: "white" }} onClick={pauseAudio}> <Pause size={42} weight="fill" /></IconButton>
            ) : (
            <IconButton sx={{ color: "white" }} onClick={start}> <Play size={42} weight="fill" /></IconButton>
            )}
              <IconButton sx={{ color: "white" }} onClick={incrementId} ><SkipForward size={24} weight="fill" /></IconButton>
            </Box>
            <Box> <CaretUp size={26} onClick={(e) => { onClick(sc1); }} /></Box>
          </Stack>
          <Slider aria-label="Default" sx={{ color: "red", height: 2 }} value={position}
            min={0}
            step={1}
            max={timeRemaining}
            onChange={handleSliderChange} />
          <Box sx={{ alignItems: "center", justifyContent: "space-between", display: "flex" }}>
            <Typography variant='caption' sx={{ color: "white" }}>{formatDuration(`${position}`)}</Typography>
            <Typography variant='caption' sx={{ color: "white" }}>-{formatDuration(`${timeRemaining}` - `${position}`)}</Typography>
          </Box>
        </Box>
        <Box gap={2} display={"flex"}>
          <Card sx={{ height: "2em", width: "6em", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "black", color: "white" }}>Up Next</Card>
          <Card sx={{ height: "2em", width: "6em", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "black", color: "white" }}>Lyrics</Card>
          <Card sx={{ height: "2em", width: "6em", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "black", color: "white" }}>Related</Card>
        </Box>
      </Box>

    </>
  )
}

export default PlayerEnlarged;