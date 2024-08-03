import { Stack, Box, Typography, Card, IconButton, Button, } from '@mui/material';
import React, {useState} from 'react';
import { MusicNote, ChartLineUp ,Smiley,ApplePodcastsLogo,Play } from 'phosphor-react';
import {Link} from "react-router-dom";
import SmallPlayer from './SmallPlayer';
import Player from './Player';
const Explore = () => {
  const [dataToPass, setDataToPass] = useState(0);
  const[count, setCount]=useState(0);
  const[clicked, setClicked]= useState(false);
  const incrementId = () => {
    setDataToPass(prevId => prevId + 1);
    setCount(count + 1);
  };
  const decrementId = () => {
    if(clicked == true){
      setCount(0);
      setClicked(false)
    } 
    else if (count > 0  && dataToPass > count){
      setCount(count => count - 1);
      setDataToPass(prevId => prevId -1);
    }
    else if (count == dataToPass && count > 0){
      setCount(count => count - 1);
      setDataToPass(prevId => prevId -1);
    }
  };


  return (
    <>
    <Box gap={2} className="general" sx={{height:"74vh",position:"relative",width:"100%",overflow:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,}}}>
  <Stack direction={'row'} alignItems={"center"} spacing={3} sx={{overflow:"scroll",overflowY:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,}}}> 
  <Card sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"18em",height:"4em",}}><Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} p={2} paddingRight={12}><MusicNote size={32} /><Typography fontSize={20}>New releases</Typography></Stack></Card>
  <Card sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"17em",height:"4em",}} variant='outlined'><Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} p={2} paddingRight={14}> <ChartLineUp  size={32} /> <Typography fontSize={20}>Charts</Typography></Stack></Card>
  <Card sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"20em",height:"4em",}} variant='outlined'><Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} p={2} paddingRight={12}><Smiley size={32} /> <Typography fontSize={19}>Mood and genres</Typography></Stack></Card>
  <Card sx={{color:"white",borderRadius:"4",backgroundColor:"rgba(255, 92, 0, .7)", minWidth:"18em",height:"4em",}} variant='outlined'><Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} p={2} paddingRight={12}><ApplePodcastsLogo size={32} /><Typography fontSize={20}>Podcasts</Typography></Stack></Card>
  </Stack>
  <Stack p={2} spacing={2}>
    <Typography fontSize={30}>New albums and singles</Typography>
    <Stack direction={"row"} spacing={2} sx={{width: "100%",}}>
        <Box display={"flex"} sx={{overflow:"scroll",overflowY:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}} gap={2}>
      <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black", }}><img src='q13.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography  >Bad Boy (feat. Luana Kiara)</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q14.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Faded <br/> Alan Walker</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box><Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q15.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Unstoppable <br/> Sia</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q16.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Something Just Like This <br/> Coldplay</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q17.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Fearless Pt. II <br/>Lost Sky & Chris Linton</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box>  <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q18.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Headlights (feat. KIDDO)<br/>Alok & Alan Walker</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        </Box>
      </Stack>
    <Typography fontSize={30}>Top trending</Typography>
      <Box p={2}>
     <Stack direction={"row"} sx={{overflow:"auto", overflowY:"hidden",position:"relative","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}}>
     <Stack direction={"column"} spacing={2} sx={{minWidth:"25em",}}>
        
        <Box onClick={e => {setDataToPass(8); setClicked(true);}}><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q1.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>No Lie (feat. Dua Lipa)</Typography><Typography fontSize={14}>Sean Paul • Dua Lipa</Typography></Stack></Stack></Box>
        <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q2.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>When We're Gone</Typography><Typography fontSize={14}>Mesto & Justin Mylo • When We're Gone</Typography></Stack></Stack></Box>       
        <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q3.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>Follow</Typography><Typography fontSize={14}>Martin Garix & Zedd • Sentio </Typography></Stack></Stack></Box>       
        <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q4.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>Apologize</Typography><Typography fontSize={14} >One Republic • Timbaland</Typography></Stack></Stack></Box>
      
        </Stack>
      <Stack direction={"column"} spacing={2} sx={{minWidth: "25em",}}>
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q5.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>Circles</Typography><Typography fontSize={14}>Post Malone • Hollywood's Bleeding</Typography></Stack></Stack></Box>
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q6.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>I Feel It Coming (feat. Daft Punk)</Typography><Typography fontSize={14}>Song • The Weeknd</Typography></Stack></Stack></Box>       
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q7.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>Breakaway</Typography><Typography fontSize={14}>Single • Martin Garrix, Mesto & WILHELM</Typography></Stack></Stack></Box>       
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q8.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>Nevada (feat. Cozi Zuehlsdorff)</Typography><Typography fontSize={14}>Song • Vicetone</Typography></Stack></Stack></Box>
      </Stack>
      <Stack direction={"column"} spacing={2} sx={{minWidth: "25em",}}>
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q9.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>Waiting For Love</Typography><Typography fontSize={14}>Avicii • Stories</Typography></Stack></Stack></Box>
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q10.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>Hymn for the Weekend</Typography><Typography fontSize={14}>Coldplay • A Head Full of Dreams</Typography></Stack></Stack></Box>       
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q11.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>Stereo Hearts (feat. Adam Levine)</Typography><Typography fontSize={14}>Gym Class Heroes • The Papercut Chronicles II</Typography></Stack></Stack></Box>       
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q12.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>We Are Young (feat. Janelle Monáe)</Typography><Typography fontSize={14}>Fun</Typography></Stack></Stack></Box>
      </Stack>
      </Stack>
      </Box>
      <Typography fontSize={30}>New music videos</Typography>
      <Stack direction={"row"} spacing={2} sx={{width: "100%",}}>
        <Box display={"flex"} sx={{overflow:"scroll",overflowY:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}} gap={2}>
      <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black", }}><img src='q13.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography  >Bad Boy (feat. Luana Kiara)</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q14.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Faded <br/> Alan Walker</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box><Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q15.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Unstoppable <br/> Sia</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q16.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Something Just Like This <br/> Coldplay</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q17.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Fearless Pt. II <br/>Lost Sky & Chris Linton</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box>  <Card sx={{ height: "18em", width: "14em",backgroundColor:"black" }}><img src='q18.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Headlights (feat. KIDDO)<br/>Alok & Alan Walker</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        </Box>
      </Stack>
  </Stack>
  <Typography fontSize={30}>Mood and genres</Typography>
  <Stack direction={'column'}  spacing={3} sx={{overflow:"auto",overflowY:"hidden",width:"100%","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}}> 
  <Stack direction={"row"} spacing={3}>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(250, 7, 7)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Dance and electronic</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(255, 163, 5)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Pop</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(118, 255, 5)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>R&B and Soul</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(5, 255, 172)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>2010s</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(255, 5, 176)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>J-Pop</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(5, 234, 255)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Jazz</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(255, 255, 5)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Hip Hop</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(255, 92, 0, .7)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Rock</Typography></Card></Card>
  </Stack>
  <Stack direction={"row"} spacing={3}>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(255, 76, 5)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Commute</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(5, 63, 255)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Country & Americana</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(200, 205, 222)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Focus</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(193, 122, 255)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Hindusthani Classical</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(255, 38, 96)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Acoustic</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(255, 236, 150)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Calm</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(86, 252, 122)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>2000s</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(57, 172, 179)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Vibe</Typography></Card></Card>
  </Stack>
  <Stack direction={"row"} spacing={3}>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(102, 163, 255)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Family</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(167, 40, 209)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Chill</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(245, 115, 212)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Upbeat</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(156, 84, 84)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Indian Pop</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(188, 191, 25)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>1990s</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(21, 131, 150)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Retro</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(61, 65, 148)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Caribbean</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(212, 121, 121)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Reggae</Typography></Card></Card>
  </Stack>
  <Stack direction={"row"} spacing={3}>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(34, 101, 117)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Capella</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(255, 215, 150)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Energy booster</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(135, 173, 230)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Metal</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(99, 0, 96)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Feel Good</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(166, 186, 155)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Monsoon</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(41, 56, 84)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Sad</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(2102, 7, 166)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Folk</Typography></Card></Card>
  <Card sx={{borderRadius:"4",backgroundColor:"rgb(201, 44, 78)", minWidth:"10em",height:"3em",paddingLeft:1,}}><Card sx={{height:"100%",width:"100%",borderRadius:"0%", backgroundColor:"#212121",justifyContent:"center",alignContent:"center",paddingLeft:1.5,color:"white"}} ><Typography fontSize={14} fontFamily={"sans-serif"}>Indie</Typography></Card></Card>
  </Stack>
  </Stack>
  </Box>
  <Box sx={{height:"13vh", width:"90%", backgroundColor:"black", color:"white",overlay:"unset"}}>
 
  <Box className="small-player"><SmallPlayer data1={dataToPass} incrementId={incrementId}  decrementId={decrementId}/></Box>
  <Box className="player"><Player data1={dataToPass} incrementId={incrementId} decrementId={decrementId}/></Box>
   </Box>
   </>
  )
}

export default Explore