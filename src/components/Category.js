import React from 'react';
import { Stack, Box, Typography, Button, } from '@mui/material';
import {Link} from "react-router-dom";
export const Category = () => {
  return (
    <Box >
      <Stack overflow={"auto"} direction={"row"} sx={{overflowY:"hidden"}} spacing={2} height={30} p={1} position={"relative"}><Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)",minWidth:"9em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Relax</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"8em"}} variant='outlined' ><Typography fontSize={14} fontFamily={"sans-serif"}>Podcasts</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"9em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Feel good</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", width:"23"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Party</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Sad</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"7em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Commute</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Sleep</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)",minWidth:"8em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Work out</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"8em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Energise</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"6em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Focus</Typography></Button></Link>
       
      </Stack>
      </Box>
  )
}
