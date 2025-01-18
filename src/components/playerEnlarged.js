import { Stack, Typography, IconButton, Box, Divider, Card, CardContent,CardActionArea } from '@mui/material'
import { Play, SkipBack, Pause, SkipForward, ThumbsUp, ThumbsDown,
   DotsThreeOutlineVertical, SpeakerHigh, Repeat, Shuffle, CaretUp, 
   Screencast, RepeatOnce, 
   CaretDown} from 'phosphor-react'
import BottomBar from './BottomBar';
import React, { useState, useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider';
import { Link } from "react-router-dom";
import { getDataById } from "./storedata";
import "./playerEnlarged.css";
import data1 from './storedata1';
  
const PlayerEnlarged = ({ data2, incrementId, 
  decrementId, start, formatDuration, pauseAudio, handleSliderChange, 
  isPlaying, onClick, myRef, onChange, repeat, 
  isRepeat, setIsRepeat, onClick1 }) => {
  const [id, setId] = useState(1);
  const sc1 = true;
  const [clicked, setClicked]=useState(false);
  const [play1, setPlay1] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [position, setPosition] = useState(0);
  const [scrl, setScrl] = useState(null);
  const targetRef = useRef(null);
  const targetRef1 = useRef(null);
  const scroll3 = (sc3) => {
    if (sc3) {
      setScrl(targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }));
      console.log("clicked");
    }

  }
  const scroll4 = (sc4) => {
    if (sc4) {
      setScrl(targetRef1.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }));
      console.log("clicked");
    }
  }
  function shuffleArray(array) {
    var i, j, temp;
    
    for (i = array.length -1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i)) + 1;
        temp = array[i];
        array[i] =array[j];
        array[j] = temp;
    }
    return array;
}
useEffect(() => {
      
  const handleOnLoad = () => {
    console.log('Component loaded!');
    shuffleArray(data1)
      setId((prevIndex) =>
          prevIndex === data1.length - 1 ? 0 : prevIndex + 1
      );
  };
  

  handleOnLoad(); 
  return () => {};
}, []);
  const arrayDataItems3 = data1.slice(1, 20).map(data1 => 
    <Card key={data1.id} sx={{backgroundColor:"	#585858",}}>
    <CardActionArea>
      <CardContent>
      <Box onClick={e => { onClick1(data1.id); setClicked(true);  }} gap={2}><Stack direction={"row"} spacing={2}> 
        <Card sx={{ height: "4em", width: "4em",}}><img src={data1.img} height={"100%"} width={"100%"}
         alt={data1.title} /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}>
          <Typography fontSize={16}>{data1.title}</Typography><Typography fontSize={14}>{data1.artist}</Typography>
          </Stack></Stack></Box>
      </CardContent>
    </CardActionArea>
  </Card>
  )
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

      <Box className="playerbtn4" sx={{ height: "100vh", width: "100vw", alignItems: "center", justifyContent: "center", backgroundColor:" rgba(87, 103, 106, 0.48)"}}>
        <Box sx={{justifyContent:"space-evenly", alignItems:"center", display:"flex", paddingTop:4, paddingX:2}}>

       
        <Box gap={0.5} sx={{ alignItems: "center", justifyContent: "center", width: "70%", display:"grid", }}>
          <Box sx={{ height: "25em", width: "25em", }}>
            <img src={getDataById(data2).img} 
          alt={getDataById(data2).name} height={"100%"} width={"100%"} style={{borderRadius:"10px", boxShadow:" 0 0 20px rgba(220, 220, 220, 0.5)"}}/></Box>
          <Box paddingTop={2}>
          <Typography variant='h4' sx={{ color: "white" }}>{getDataById(data2).name}</Typography>
          <Typography variant='caption' sx={{ color: "white"}}>{getDataById(data2).artist}</Typography>
          </Box>
          <Slider aria-label="Default" sx={{ color: "red", height: 2 }} value={position}
            min={0}
            step={1}
            max={timeRemaining}
            onChange={handleSliderChange} />
          <Box sx={{ alignItems: "center", justifyContent: "space-between", display: "flex" }}>
            <Typography variant='caption' sx={{ color: "white" }}>{formatDuration(`${position}`)}</Typography>
            <Typography variant='caption' sx={{ color: "white" }}>-{formatDuration(`${timeRemaining}` - `${position}`)}</Typography>
          </Box>
          <Stack spacing={1} sx={{ alignItems: "center", justifyContent: "space-evenly", paddingTop: 2 }} direction={"row"}>
            
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
            <Shuffle size={24}/>
            <Box> <CaretUp size={26} onClick={(e) => { onClick(sc1); }} /></Box>
          </Stack>
          
      </Box>
      <Box sx={{ alignItems: "center", justifyContent: "center", width: "30%", display:"grid",
         backgroundColor:"#606060",minWidth:"25em", maxHeight:"80vh",overflow:"scroll",
         overflowX:"hidden","&::-webkit-scrollbar":{width:4,height:9},
         "&::-webkit-scrollbar-thumb":{background:"transparent",borderRadius:4,},
         "&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},  borderRadius:"20px", border:"white"}}>
        <Box sx={{ minWidth:"26em", paddingX:1 ,paddingY:1
         
        }}>
        {arrayDataItems3}
        </Box>
      </Box>
      </Box>
      </Box>

      <Box  ref={targetRef1} className= "playerbtn3" sx={{ height: "100vh", width: "100vw", alignItems: "center", justifyContent: "center", display: "grid", backgroundColor:" rgba(87, 103, 106, 0.48)"}}>
        <Box gap={2} sx={{ alignItems: "center", justifyContent: "center", width: "100%", }}>
        <Box paddingY={2}> <CaretDown size={26} onClick={(e) => { onClick(sc1); }} /></Box>
          <Box sx={{ height: "20em", paddingX:2 }}>
          
            <img src={getDataById(data2).img} 
          alt={getDataById(data2).name} height={"100%"} width={"100%"} style={{borderRadius:"10px", boxShadow:" 0 0 20px rgba(220, 220, 220, 0.5)"}}/></Box>
          <Box paddingTop={2}>
          <Typography variant='h4' sx={{ color: "white" }}>{getDataById(data2).name}</Typography>
          <Typography variant='caption' sx={{ color: "white"}}>{getDataById(data2).artist}</Typography>
          </Box>
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
        
        <Box justifyContent={"space-evenly"} display={"flex"}  paddingTop={5}>
          <Card sx={{ height: "2em", width: "6em", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "black", color: "white" }} onClick={scroll3} >Up Next</Card>
          <Card sx={{ height: "2em", width: "6em", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "black", color: "white" }}>Lyrics</Card>
          <Card sx={{ height: "2em", width: "6em", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "black", color: "white" }}>Related</Card>
        </Box>
      </Box>
      </Box>
      <Box >
      <Box ref={targetRef} className="playerbtn3" onClick={scroll4} sx={{ alignItems: "center", justifyContent: "center", minHeight:"100vh", width: "100%", display:"grid",
         backgroundColor:"#585858",minWidth:"25em", maxHeight:"120vh",overflow:"scroll",
         overflowX:"hidden","&::-webkit-scrollbar":{width:4,height:9},
         "&::-webkit-scrollbar-thumb":{background:"transparent",},
         "&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}}>
        <Box sx={{ minWidth:"26em", paddingX:1 ,paddingY:1,
         
        }} >
          <Typography  onClick={scroll4} paddingLeft={2}>Back to top</Typography>
        {arrayDataItems3}
        </Box>
      </Box>
      </Box>
    </>
  )
}

export default PlayerEnlarged;