import React, {useState} from 'react'
import { Stack, Box, Typography, Card, IconButton, Avatar, CardActionArea, CardContent, Link,Stack as MuiStack, Button } from '@mui/material';
import {Play} from "phosphor-react"
import data1 from './storedata1'
const Library = ({stack, handleCardClick, onClick}) => {
  const [clicked, setClicked]=useState(false);

  const stackData = stack.map((id) => data1.find((item) => item.id === id)) .reverse();;

  const arrayDataItems2 = stackData.slice(0, 10).map(data1 => 
    <Card key={data1.id} sx={{ height: "18em", width: "16em",backgroundColor:"black",  }}>
    <CardActionArea>
      <CardContent>
      <img src={data1.img} alt='Carry you' height={"100%"} width={"100%"} />
      <Stack direction={"row"} sx={{width:"100%",justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>{data1.title}</Typography><IconButton sx={{color:"white"}} onClick={e => { onClick(data1.id); setClicked(true); handleCardClick(data1.id); }}><Play size={20} /></IconButton></Stack>
      </CardContent>
    </CardActionArea>
  </Card>
  )
  return (
    <Stack spacing={2} sx={{maxHeight:"74vh",position:"relative",width:"95%",overflow:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4, },paddingLeft:"1%"}}>
       <Box p={2}>
      <Stack overflow={"auto"} direction={"row"} sx={{overflowY:"hidden"}} spacing={2} height={30} p={1} position={"relative"}><Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)",minWidth:"9em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Playlists</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"8em"}} variant='outlined' ><Typography fontSize={14} fontFamily={"sans-serif"}>Songs</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"9em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Albums</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", width:"23"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Artists</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Podcasts</Typography></Button></Link>
      </Stack>
      </Box>
      <Stack direction={"row"} spacing={2} sx={{width: "100%",}}>
      {arrayDataItems2}
      </Stack>
       <Stack direction={"row"} spacing={2} sx={{width: "100%",}}>
       <Box display={"flex"} sx={{overflow:"auto", overflowY:"hidden",position:"relative","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}} gap={2}>
       <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 8.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Rihanna</Typography></Stack></Box>
       
       <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 9.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Harry Styles</Typography></Stack></Box>
       <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 7.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Billie Eilish</Typography></Stack></Box>

       <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 5.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Afrojack</Typography></Stack></Box>
       <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 2.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Drake</Typography></Stack></Box>
       <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 6.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Taylor Swift</Typography></Stack></Box>
       </Box>
       
     </Stack>
      <Stack direction={"row"} spacing={2} sx={{width: "100%",}}>
      <Box display={"flex"} sx={{overflow:"auto", overflowY:"hidden",position:"relative","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}} gap={2}>
      <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 10.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Ed Sheeran</Typography></Stack></Box>
      <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 4.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Weeknd</Typography></Stack></Box>
     </Box>
    </Stack>
    </Stack>
  )
}

export default Library