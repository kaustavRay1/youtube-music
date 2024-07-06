import { Stack, Typography, IconButton, Box } from '@mui/material'
import { Play, SkipBack, Pause, SkipForward, ThumbsUp, ThumbsDown, DotsThreeOutlineVertical, SpeakerHigh, Repeat, Shuffle, CaretUp } from 'phosphor-react'
import React, { useState,useEffect } from 'react'
import Slider from '@mui/material/Slider';
import { getDataById } from "./storedata";
import id from "./General"
export default function Player() {
  const key=0;
  const data = getDataById(key);
  const [style, setStyle] = useState({ display: 'none'});
  const duration = `${data.time}`; // seconds
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const [isDisabled, setIsDisabled] = useState(false);

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
    <Stack direction={"column"}>
    <Slider aria-label="Default" sx={{ color: "red",height:2 }} value={position}
    min={0}
    step={1}
    max={duration}
    onChange={(_, value) => setPosition(value)} />
<Stack direction={"row"} sx={{paddingLeft:2, alignContent:"center", justifyContent:"space-between", minWidth:"18em" }} spacing={1}>
    <Box display={"flex"} gap={2} sx={{alignContent:"center",justifyContent:"center"}}>
    <Stack spacing={1} sx={{  alignItems: "center" }} direction={"row"}>
          <IconButton sx={{ color: "white" }} ><SkipBack weight='fill' size={24} /></IconButton>
          <IconButton sx={{ color: "white" }}  > <Play size={30} weight="fill" /></IconButton>
          <IconButton sx={{ color: "white" }}><SkipForward size={24} weight="fill" /></IconButton>
          <Typography variant='caption' sx={{ color: "white" }}>{formatDuration(position)}/-{formatDuration(duration - position)}</Typography>
        </Stack>
      </Box>
      <Box display={"flex"} gap={2} sx={{alignContent:"center",justifyContent:"center"}}>
      <img src={data.img} alt='' height={"40"} width={"40"}></img>
      <Stack>
        <Typography>{data.name}</Typography>
        <Typography variant='caption' >{data.artist}</Typography>
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
              defaultValue={30}
              aria-label="Temperature"
              valueLabelDisplay="auto"
            /></Box></Stack>
          <Repeat size={24} />
          <Shuffle size={24} />
          <CaretUp size={24} />
      </Box>
      </Stack>
      </Stack>

  )
}
