import React from 'react'
import {Box,Stack,Card,Typography,IconButton,Button,Link} from "@mui/material"
import {Play} from "phosphor-react"
const Library = () => {
  return (
    <Stack  p={2} spacing={2}>
       <Box p={2}>
      <Stack overflow={"auto"} direction={"row"} sx={{overflowY:"hidden"}} spacing={2} height={30} p={1} position={"relative"}><Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)",minWidth:"9em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Playlists</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"8em"}} variant='outlined' ><Typography fontSize={14} fontFamily={"sans-serif"}>Songs</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"9em"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Albums</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", width:"23"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Artists</Typography></Button></Link>
      <Link to="/Relax"><Button sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)"}} variant='outlined'><Typography fontSize={14} fontFamily={"sans-serif"}>Podcasts</Typography></Button></Link>
      </Stack>
      </Box>
      <Stack direction={"row"} spacing={2} sx={{width: "100%",}}>
        <Box display={"flex"} sx={{overflow:"scroll",overflowY:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}} gap={2}>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black", }}><img src='q13.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography  >Bad Boy (feat. Luana Kiara)</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>     
        <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "14em", width: "14em",borderRadius:"100%", }}><img src='pro.jpg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Martin Garrix</Typography></Stack></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q14.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Faded <br/> Alan Walker</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box><Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q15.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Unstoppable <br/> Sia</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q16.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Something Just Like This <br/> Coldplay</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q17.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Fearless Pt. II <br/>Lost Sky & Chris Linton</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        </Box>
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