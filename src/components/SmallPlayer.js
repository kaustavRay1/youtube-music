import { Stack,IconButton,Typography, Box } from '@mui/material';
import React, {useState,useEffect} from 'react'
import {Play,Screencast} from "phosphor-react"
import Slider from '@mui/material/Slider';
import { getDataById } from "./storedata";
const SmallPlayer = ({ data1 }) => {
  const data = getDataById(0);
    const [style, setStyle] = useState({ display: 'none'});
  const duration = `${getDataById(data1).time}`; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
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
    <Stack direction={"column"}>
        <Slider aria-label="Default" sx={{ color: "red",height:2 }} value={position}
        min={0}
        step={1}
        max={duration}
        onChange={(_, value) => setPosition(value)} />
    <Stack direction={"row"} sx={{paddingLeft:2, alignContent:"center", justifyContent:"space-between", minWidth:"18em" }} spacing={1}>
        <Box display={"flex"} gap={2} sx={{alignContent:"center",justifyContent:"center"}}>
          <img src={getDataById(data1).img} alt='' height={"40"} width={"40"}></img>
          <Stack>
            <Typography>{getDataById(data1).name}</Typography>
            <Typography variant='caption' >{getDataById(data1).artist}</Typography>
          </Stack>
          </Box>
          <Stack direction={"row"}>
          <IconButton sx={{color:'white'}} ><Screencast size={30} /></IconButton>
          <IconButton sx={{color:'white'}} ><Play size={30} /></IconButton>
          </Stack>
          </Stack>
          </Stack>
  )
}

export default SmallPlayer