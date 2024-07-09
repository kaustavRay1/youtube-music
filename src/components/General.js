import { Stack, Box, Typography, Card, IconButton, Avatar, Button, } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Fire, Play } from 'phosphor-react';
import {Link} from "react-router-dom";
import carry from "../components/carry you.mp3";
import useSound from "use-sound"; 
import { Category } from './Category';
import { Pause } from '@mui/icons-material';
import { getDataById } from "./storedata";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from 'firebase/auth';
const General = () => {
  const [keys, setKeys]=useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(0);
  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
      setKeys(0);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
      setKeys(1);
    }
  };
  const [authUser, setAuthUser] = useState(null);
    
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  const fetchUserData = async () => {
    
     auth.onAuthStateChanged(async (user) => {
      if(user)
      {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAuthUser(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    }
    else{
      console.log("User not logged in.");
    }
    });

  };
  useEffect(() => {
    fetchUserData();
  }, []);


  return (
   
    <Stack  spacing={2} sx={{height:"81.4vh",position:"relative",width:"100%"}}>
      <Box p={1}><Category/></Box>
      {authUser ? (
     <Stack direction={"row"} spacing={2}> <Avatar src={authUser.photo} alt='K' /><Stack><Typography fontFamily={"sans-serif"}> Hello {authUser.firstName} </Typography>
    <Typography fontSize={28} fontFamily={"sans-serif"} >Listen again</Typography></Stack></Stack>):( <Stack direction={"row"} alignItems={"center"} spacing={1}>
      <Typography fontSize={28} fontFamily={"sans-serif"} >Top Trending </Typography><Fire size={25} weight="bold"/></Stack>
      )}
      <Stack direction={"row"} spacing={2} sx={{width: "100%",}}>
      
        <Box display={"flex"}  sx={{overflow:"scroll",overflowY:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}}  gap={2}>
      <Box> <Card sx={{ height: "17em", width: "14em",backgroundColor:"black"}}><img src={getDataById(1).img} alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"center",alignItems:"center",color:"white"}}><Typography  className='title' name={getDataById(1).id} >{getDataById(1).name} •{getDataById(1).artist}</Typography>{!isPlaying ? (
<IconButton onClick={playingButton} sx={{color:"white"}}><Play size={20} name={getDataById(1).id} /></IconButton>   ) : ( <IconButton onClick={playingButton}  sx={{color:"white"}}><Pause fontSize='small' /></IconButton> )}</Stack></Card></Box>
<Box> <Card sx={{ height: "17em", width: "14em",backgroundColor:"black"}}><img src={getDataById(2).img} alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"center",alignItems:"center",color:"white"}}><Typography onClick={playingButton} className='title' >{getDataById(2).name}</Typography>
<IconButton   sx={{color:"white"}}><Play size={20} /></IconButton>  <IconButton  sx={{color:"white"}}></IconButton></Stack></Card></Box>  <Box> <Card sx={{ height: "17em", width: "22em",backgroundColor:"black"}}><img src={getDataById(3).img} alt='Carry you' height="81.5%" width="100%" /><Stack direction={"row"} sx={{justifyContent:"center",alignItems:"center",color:"white"}}><Typography className='title' >{getDataById(3).name}</Typography>
<IconButton   sx={{color:"white"}}><Play size={20} /></IconButton>   <IconButton  sx={{color:"white"}}></IconButton></Stack></Card></Box>  <Box> <Card sx={{ height: "17em", width: "14em",backgroundColor:"black"}}><img src={getDataById(4).img} alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"center",alignItems:"center",color:"white"}}><Typography  className='title' >{getDataById(4).name} •{getDataById(4).artist}</Typography>
<IconButton   sx={{color:"white"}}><Play size={20} /></IconButton>   <IconButton  sx={{color:"white"}}></IconButton></Stack></Card></Box>  <Box> <Card sx={{ height: "17em", width: "14em",backgroundColor:"black"}}><img src={getDataById(5).img} alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"center",alignItems:"center",color:"white"}}><Typography className='title' >{getDataById(5).name} •{getDataById(5).artist}</Typography>
<IconButton   sx={{color:"white"}}><Play size={20} /></IconButton>   <IconButton  sx={{color:"white"}}></IconButton> </Stack></Card></Box>  <Box> <Card sx={{ height: "17em", width: "14em",backgroundColor:"black"}}><img src={getDataById(6).img} alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"center",alignItems:"center",color:"white"}}><Typography  className='title' >{getDataById(6).name} •{getDataById(6).artist}</Typography>
<IconButton   sx={{color:"white"}}><Play size={20} /></IconButton>   <IconButton  sx={{color:"white"}}></IconButton> </Stack></Card></Box>  <Box> <Card sx={{ height: "17em", width: "14em",backgroundColor:"black"}}><img src={getDataById(7).img} alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"center",alignItems:"center",color:"white"}}><Typography  className='title' >{getDataById(7).name} •{getDataById(7).artist}</Typography>
<IconButton   sx={{color:"white"}}><Play size={20} /></IconButton>   <IconButton  sx={{color:"white"}}></IconButton> </Stack></Card></Box>
        </Box>
      </Stack>

      <Stack p={2} spacing={1}>
      <Typography variant='p' fontSize={"14"}  fontFamily={"sans-serif"}>START RADIO BASED ON A SONG {keys}</Typography>
      <Typography variant="h3"  fontFamily={"sans-serif"}>Quick picks</Typography>
      </Stack>
     <Box p={2}>
     <Stack direction={"row"} sx={{overflow:"auto", overflowY:"hidden",position:"relative","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}}>
     <Stack direction={"column"} spacing={2} sx={{minWidth:"25em",}}>
        
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src={getDataById(8).img} height={"100%"} width={"100%"} alt={getDataById(8).name} /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>{getDataById(8).name}</Typography><Typography fontSize={14}>{getDataById(8).artist}</Typography></Stack></Stack></Box>
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src={getDataById(9).img} height={"100%"} width={"100%"} alt={getDataById(9).name} /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>{getDataById(9).name}</Typography><Typography fontSize={14}>{getDataById(9).artist} • {getDataById(9).name}</Typography></Stack></Stack></Box>       
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
   <Typography fontSize={30} fontFamily={"sans-serif"}>Top Artists</Typography>
   <Stack direction={"row"} spacing={2} sx={{width: "100%",}}>
        <Box display={"flex"} sx={{overflow:"auto", overflowY:"hidden",position:"relative","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}} gap={2}>
        <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='pro.jpg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Martin Garrix</Typography></Stack></Box>
        <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 4.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Weeknd</Typography></Stack></Box>
        <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 3.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Camila Cabello</Typography></Stack></Box>
        <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 5.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Afrojack</Typography></Stack></Box>
        <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 2.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Drake</Typography></Stack></Box>
        <Box><Stack direction={"column"} justifyContent={"center"} alignItems={"center"}><Card sx={{  height: "12em", width: "12em",borderRadius:"100%", }}><img src='profile 6.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Typography variant='h6'>Taylor Swift</Typography></Stack></Box>
        </Box>
      </Stack>
      <Typography variant='h3' fontFamily={"sans-serif"} p={2}>Dance and electronic</Typography>
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
      <Typography fontSize={34} fontFamily={"sans-serif"}>New releases</Typography>
     <Stack direction={"row"} spacing={2} sx={{width: "100%",}}>
        <Box display={"flex"}  sx={{overflow:"scroll",overflowY:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}} gap={2}>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black", }}><img src='q19.jpg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Papercuts</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black", }}><img src='q20.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>Shadows (feat. Blythe)</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black", }}><img src='q21.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography  >IDEM</Typography><IconButton sx={{color:"white"}} ><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black", }}><img src='q22.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography  >Illusion</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black", }}><img src='q23.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography  >Team Side feat. RCB</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        <Box> <Card sx={{ height: "18em", width: "14em",backgroundColor:"black", }}><img src='q24.jpeg' alt='Carry you' /><Stack direction={"row"} sx={{justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography  >Breathe</Typography><IconButton sx={{color:"white"}}><Play size={20} /></IconButton></Stack></Card></Box>
        </Box>
      </Stack>
      <Typography fontSize={34} p={2} fontFamily={"sans-serif"}>Trending in Shorts</Typography>
      <Box p={2}>
     <Stack direction={"row"} sx={{overflow:"auto", overflowY:"hidden",position:"relative","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}}>
     <Stack direction={"column"} spacing={2} sx={{minWidth:"25em",}}>
        
      <Box><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src='q1.jpeg' height={"100%"} width={"100%"} alt='Carry you' /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>No Lie (feat. Dua Lipa)</Typography><Typography fontSize={14}>Sean Paul • Dua Lipa</Typography></Stack></Stack></Box>
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
   </Stack>
  )
  
}

export default General