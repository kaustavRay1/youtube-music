import { Stack, IconButton, Typography, Box, Divider } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { Play, Screencast, Pause } from "phosphor-react";
import Slider from '@mui/material/Slider';
import { getDataById } from "./storedata";
import BottomBar from './BottomBar';

const SmallPlayer = ({ data1, incrementId, decrementId, onChange }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [position, setPosition] = useState(0);
  const [play1, setPlay1] = useState(1);
  const myRef = useRef();

  const start = () => {
    myRef.current?.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    myRef.current?.pause();
    setIsPlaying(false);
  };

  const playNext = () => {
    setPlay1((prev) => prev + 1);
    onChange(play1 + 1);
  };

  const handleSliderChange = (e) => {
    const newTime = Number(e.target.value);
    if (myRef.current) {
      myRef.current.currentTime = newTime;
    }
    setPosition(newTime);
  };

  function formatDuration(value) {
    if (value && !isNaN(value)) {
      const minute = Math.floor(value / 60);
      const secondLeft = Math.floor(value - minute * 60);
      return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    return '00:00';
  }

  // Proper interval setup with cleanup to prevent memory leaks
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        if (myRef.current) {
          const _duration = Math.floor(myRef.current.duration || 0);
          setTimeRemaining(_duration);
          const _elapsed = Math.floor(myRef.current.currentTime || 0);
          setPosition(_elapsed);
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const songData = getDataById(data1) || { name: "Nothing is Playing", artist: "Click to Play", img: "", music: "" };

  return (
    <>
      <audio 
        ref={myRef} 
        src={songData.music} 
        autoPlay={true} 
        onCanPlay={() => setIsPlaying(true)} 
        onEnded={playNext} 
      />
      <Stack direction={"column"}>
        <Slider 
          aria-label="Default" 
          sx={{ color: "red", height: 2 }} 
          value={position}
          min={0}
          step={1}
          max={timeRemaining || 100}
          onChange={handleSliderChange} 
        />
        <Stack direction={"row"} sx={{ paddingLeft: 2, alignContent: "center", justifyContent: "space-between", minWidth: "18em" }} spacing={1}>
          <Box display={"flex"} gap={2} sx={{ alignContent: "center", justifyContent: "center" }}>
            <img src={songData.img} alt={songData.name} height={"40"} width={"40"} />
            <Stack justifyContent="center">
              <Typography variant='caption'>{songData.name}</Typography>
              <Typography variant='caption' sx={{ color: "gray" }}>{songData.artist}</Typography>
            </Stack>
          </Box>
          <Stack direction={"row"} alignItems="center">
            <Typography variant='caption' sx={{ color: "white", mr: 1 }}>
              {formatDuration(position)} / -{formatDuration(timeRemaining - position)}
            </Typography>
            <IconButton sx={{ color: 'white' }}><Screencast size={30} /></IconButton>
            {isPlaying ? (
              <IconButton sx={{ color: "white" }} onClick={pauseAudio}><Pause size={30} weight="fill" /></IconButton>
            ) : (
              <IconButton sx={{ color: "white" }} onClick={start}><Play size={30} weight="fill" /></IconButton>
            )}
          </Stack>
        </Stack>
        <Box paddingTop={1}>
          <Divider color="white" />
          <Box paddingTop={1}><BottomBar /></Box>
        </Box>
      </Stack>
    </>
  );
};

export default SmallPlayer;