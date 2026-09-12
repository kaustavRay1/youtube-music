import { Stack, Typography, IconButton, Box, Card, CardContent, CardActionArea } from '@mui/material';
import { Play, SkipBack, Pause, SkipForward, Repeat, Shuffle, CaretUp, RepeatOnce, CaretDown } from 'phosphor-react';
import React, { useState, useEffect, useRef } from 'react';
import Slider from '@mui/material/Slider';
import { getDataById } from "./storedata";
import "./playerEnlarged.css";
import data1 from './storedata1';
import useSwipeDetection from './useSwipeDetection';
import LyricsDisplay from './LyricsDisplay';

const PlayerEnlarged = ({ 
  data2, incrementId, decrementId, start, formatDuration, 
  pauseAudio, handleSliderChange, isPlaying, onClick, 
  myRef, repeat, isRepeat, onClick1, shuffleBtn, shuffle 
}) => {
  const divRef = useRef();
  const divRef1 = useRef();
  const targetRef = useRef(null);
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);

  const [timeRemaining, setTimeRemaining] = useState(0);
  const [position, setPosition] = useState(0);

  const sc1 = true;

  useSwipeDetection(divRef, () => onClick(sc1), () => {}, null, null);
  useSwipeDetection(divRef1, () => {
    if (divRef1.current.scrollTop === 0) scroll4();
  }, () => {}, () => scroll5(), () => scroll3());

  const scroll3 = () => targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scroll5 = () => targetRef2.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const scroll4 = () => targetRef1.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const currentSong = getDataById(data2) || { name: "Unknown Track", artist: "Unknown Artist", img: "" };

  useEffect(() => {
    let interval;
    if (isPlaying && myRef?.current) {
      interval = setInterval(() => {
        setTimeRemaining(Math.floor(myRef.current.duration || 0));
        setPosition(Math.floor(myRef.current.currentTime || 0));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, myRef]);

  const queueItems = data1.slice(1, 20).map(item => (
    <Card 
      key={item.id} 
      sx={{ 
        backgroundColor: "#585858", 
        borderRadius: "12px",
        mb: 1.5, 
      }}
    >
      <CardActionArea>
        <CardContent sx={{ p: '12px !important' }}>
          <Box onClick={() => onClick1(item.id)}>
            <Stack direction="row" spacing={2} alignItems="center"> 
              <Card sx={{ height: "3.5em", width: "3.5em", borderRadius: "8px", flexShrink: 0 }}>
                <img src={item.img} height="100%" width="100%" alt={item.title} style={{ objectFit: 'cover' }} />
              </Card>
              <Stack direction="column" sx={{ justifyContent: "center", color: "white", overflow: 'hidden' }}>
                <Typography fontSize={15} fontWeight={500} noWrap>{item.title}</Typography>
                <Typography fontSize={13} sx={{ color: "rgba(255,255,255,0.7)" }} noWrap>{item.artist}</Typography>
              </Stack>
            </Stack>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  return (
    <>
      {/* --- DESKTOP VIEW (Controlled by .playerbtn4 class & CSS media query) --- */}
      <Box className="playerbtn4" sx={{ height: "100vh", width: "100vw", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(87, 103, 106, 0.48)" }}>
        <Box sx={{ justifyContent: "space-evenly", alignItems: "center", display: "flex", paddingTop: 4, paddingX: 2 }}>
          <Box gap={0.5} sx={{ alignItems: "center", justifyContent: "center", width: "70%", display: "grid" }}>
            <Box sx={{ height: "25em", width: "25em" }}>
              <img src={currentSong.img} alt={currentSong.name} height="100%" width="100%" style={{ borderRadius: "10px", boxShadow: "0 0 20px rgba(220, 220, 220, 0.5)" }} />
            </Box>
            <Box paddingTop={2}>
              <Typography variant='h4' sx={{ color: "white" }}>{currentSong.name}</Typography>
              <Typography variant='caption' sx={{ color: "white" }}>{currentSong.artist}</Typography>
            </Box>
            <Slider 
              aria-label="Default" 
              sx={{ color: "red", height: 2 }} 
              value={position}
              min={0}
              step={1}
              max={timeRemaining || 100}
              onChange={handleSliderChange} 
            />
            <Box sx={{ alignItems: "center", justifyContent: "space-between", display: "flex" }}>
              <Typography variant='caption' sx={{ color: "white" }}>{formatDuration(`${position}`)}</Typography>
              <Typography variant='caption' sx={{ color: "white" }}>-{formatDuration(`${timeRemaining}` - `${position}`)}</Typography>
            </Box>
            <Stack spacing={1} sx={{ alignItems: "center", justifyContent: "space-evenly", paddingTop: 2 }} direction="row">
              {isRepeat ? (
                <IconButton sx={{ color: "white" }} onClick={repeat}><RepeatOnce size={24} /></IconButton>
              ) : (
                <IconButton sx={{ color: "white" }} onClick={repeat}><Repeat size={24} weight="fill" /></IconButton>
              )}
              <Box sx={{ justifyContent: "space-between" }}>
                <IconButton sx={{ color: "white" }} onClick={decrementId}><SkipBack weight='fill' size={24} /></IconButton>
                {isPlaying ? (
                  <IconButton sx={{ color: "white" }} onClick={pauseAudio}><Pause size={42} weight="fill" /></IconButton>
                ) : (
                  <IconButton sx={{ color: "white" }} onClick={start}><Play size={42} weight="fill" /></IconButton>
                )}
                <IconButton sx={{ color: "white" }} onClick={incrementId}><SkipForward size={24} weight="fill" /></IconButton>
              </Box>
              {shuffle ? (
                <IconButton sx={{ color: "white" }} onClick={shuffleBtn}><Shuffle size={24} weight="bold" /></IconButton>
              ) : (
                <IconButton sx={{ color: "white" }} onClick={shuffleBtn}><Shuffle size={24} /></IconButton>
              )}
              <Box><CaretUp size={26} onClick={() => onClick(sc1)} /></Box>
            </Stack>
          </Box>

          <Box sx={{ 
            alignItems: "center", justifyContent: "center", width: "30%", display: "grid",
            backgroundColor: "#606060", minWidth: "25em", maxHeight: "80vh", overflowY: "auto",
            overflowX: "hidden", "&::-webkit-scrollbar": { width: 4, height: 9 },
            "&::-webkit-scrollbar-thumb": { background: "transparent", borderRadius: 4 },
            "&::-webkit-scrollbar-thumb:hover": { background: "red", borderRadius: 4 }, 
            borderRadius: "20px", border: "1px solid white" 
          }}>
            <Box sx={{ minWidth: "26em", paddingX: 1, paddingY: 1 }}>
              {queueItems}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* --- MOBILE VIEW (Controlled by .playerbtn3 class & CSS media query) --- */}
      <Box ref={targetRef1} className="playerbtn3" sx={{ height: "100vh", width: "100vw", alignItems: "center", justifyContent: "center", display: "grid", backgroundColor: "rgba(87, 103, 106, 0.48)" }}>
        <Box ref={divRef} gap={2} sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
          <Box paddingTop={2}><CaretDown size={26} onClick={() => onClick(sc1)} /></Box>
          <Box sx={{ height: "20em", paddingX: 2 }}>
            <img src={currentSong.img} alt={currentSong.name} height="100%" width="100%" style={{ borderRadius: "10px", boxShadow: "0 0 20px rgba(220, 220, 220, 0.5)" }} />
          </Box>
          <Box paddingTop={2}>
            <Typography variant='h6' sx={{ color: "white" }}>{currentSong.name}</Typography>
            <Typography variant='caption' sx={{ color: "white" }}>{currentSong.artist}</Typography>
          </Box>
          <Stack spacing={1} sx={{ alignItems: "center", justifyContent: "space-evenly", paddingTop: 3 }} direction="row">
            {isRepeat ? (
              <IconButton sx={{ color: "white" }} onClick={repeat}><RepeatOnce size={24} /></IconButton>
            ) : (
              <IconButton sx={{ color: "white" }} onClick={repeat}><Repeat size={24} weight="fill" /></IconButton>
            )}
            <Box sx={{ justifyContent: "space-between" }}>
              <IconButton sx={{ color: "white" }} onClick={decrementId}><SkipBack weight='fill' size={24} /></IconButton>
              {isPlaying ? (
                <IconButton sx={{ color: "white" }} onClick={pauseAudio}><Pause size={42} weight="fill" /></IconButton>
              ) : (
                <IconButton sx={{ color: "white" }} onClick={start}><Play size={42} weight="fill" /></IconButton>
              )}
              <IconButton sx={{ color: "white" }} onClick={incrementId}><SkipForward size={24} weight="fill" /></IconButton>
            </Box>
            {shuffle ? (
              <IconButton sx={{ color: "white" }} onClick={shuffleBtn}><Shuffle size={24} weight="bold" /></IconButton>
            ) : (
              <IconButton sx={{ color: "white" }} onClick={shuffleBtn}><Shuffle size={24} /></IconButton>
            )}
          </Stack>
          <Slider 
            aria-label="Default" 
            sx={{ color: "red", height: 2 }} 
            value={position}
            min={0}
            step={1}
            max={timeRemaining || 100}
            onChange={handleSliderChange} 
          />
          <Box sx={{ alignItems: "center", justifyContent: "space-between", display: "flex", paddingX: 2 }}>
            <Typography variant='caption' sx={{ color: "white" }}>{formatDuration(`${position}`)}</Typography>
            <Typography variant='caption' sx={{ color: "white" }}>-{formatDuration(`${timeRemaining}` - `${position}`)}</Typography>
          </Box>
        
          <Box justifyContent={"space-evenly"} display={"flex"} paddingTop={3} gap={2}>
            <Card sx={{ height: "2em", width: "6em", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "black", color: "white" }} onClick={scroll3}>Up Next</Card>
            <Card sx={{ height: "2em", width: "6em", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "black", color: "white" }} onClick={scroll5}>Lyrics</Card>
            <Card sx={{ height: "2em", width: "6em", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "black", color: "white" }}>Related</Card>
          </Box>
        </Box>
      </Box>

      {/* Mobile Swipeable Bottom Drawer (Queue & Lyrics) */}
      <Box 
        className="playerbtn3" 
        sx={{ 
          alignItems: "center", justifyContent: "center", minHeight: "70vh", width: "100vw", display: "grid",
          backgroundColor: "#585858", minWidth: "20em", maxHeight: "82vh", overflowY: "auto",
          "&::-webkit-scrollbar": { width: 4, height: 9 },
          "&::-webkit-scrollbar-thumb": { background: "transparent" },
          "&::-webkit-scrollbar-thumb:hover": { background: "red", borderRadius: 4 }
        }} 
        ref={divRef1}
      >
        <Box display="flex" overflow={"hidden"}>
          <Box sx={{ minWidth: "100vw", paddingX: 1, paddingY: 1 }} ref={targetRef}>
            {queueItems}
          </Box>
          <Box sx={{ maxHeight: "70vh", minWidth: "100vw" }} ref={targetRef2}>
            <Box paddingTop={"5em"}><LyricsDisplay myRef={myRef} isPlaying={true} /></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PlayerEnlarged;