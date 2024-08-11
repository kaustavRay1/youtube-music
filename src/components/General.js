import { Stack, Box, Typography, Card, IconButton, Avatar, CardActionArea, CardContent } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Fire, Play } from 'phosphor-react';
import { Category } from './Category';
import { Pause } from '@mui/icons-material';
import { getDataById } from "./storedata";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import SmallPlayer from './SmallPlayer';
import Player from './Player';
import Explore from './Explore';
import data from './storedata';
import data1 from './storedata1';
const General = ({onClick}) => {
  

  const [id, setId] = useState(1);
  const [play2, setPlay2]=useState(0);
  const [clicked, setClicked]=useState(false);
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
  const arrayDataItems2 = data1.slice(0, 10).map(data1 => 
      <Card key={data1.id} sx={{ minHeight: "18em", minWidth: "16em",backgroundColor:"black", aspectRatio:"4/3" }}>
      <CardActionArea>
        <CardContent>
        <img src={data1.img} alt='Carry you' /><Stack direction={"row"} sx={{width:"100%",justifyContent:"space-between",alignItems:"center",color:"white"}}><Typography>{data1.title}</Typography><IconButton sx={{color:"white"}} onClick={e => { onClick(data1.id); setClicked(true);  }}><Play size={20} /></IconButton></Stack>
        </CardContent>
      </CardActionArea>
    </Card>
    )
    const arrayDataItems3 = data1.slice(10, 14).map(data1 => 
      <Card key={data1.id} sx={{backgroundColor:"black"}}>
      <CardActionArea>
        <CardContent>
        <Box onClick={e => { onClick(data1.id); setClicked(true);  }}><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src={data1.img} height={"100%"} width={"100%"} alt={data1.title} /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>{data1.title}</Typography><Typography fontSize={14}>{data1.artist}</Typography></Stack></Stack></Box>
        </CardContent>
      </CardActionArea>
    </Card>
    )
    const arrayDataItems4 = data1.slice(14, 18).map(data2 => 
      <Card key={data2.id} sx={{backgroundColor:"black"}}>
      <CardActionArea>
        <CardContent>
        <Box onClick={e => { onClick(data2.id); setClicked(true);  }}><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src={data2.img} height={"100%"} width={"100%"} alt={data2.title} /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>{data2.title}</Typography><Typography fontSize={14}>{data2.artist}</Typography></Stack></Stack></Box>
        </CardContent>
      </CardActionArea>
    </Card>
    )
    const arrayDataItems5 = data1.slice(4, 8).map(data2 => 
      <Card key={data2.id} sx={{backgroundColor:"black"}}>
      <CardActionArea>
        <CardContent>
        <Box onClick={e => { onClick(data2.id); setClicked(true);  }}><Stack direction={"row"} spacing={2}> <Card sx={{ height: "4em", width: "4em",backgroundColor:"grey", }}><img src={data2.img} height={"100%"} width={"100%"} alt={data2.title} /></Card><Stack direction={"column"} sx={{justifyContent:"center",color:"white"}}><Typography fontSize={16}>{data2.title}</Typography><Typography fontSize={14}>{data2.artist}</Typography></Stack></Stack></Box>
        </CardContent>
      </CardActionArea>
    </Card>
    )
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
  function shuffleArray1(array1) {
    var i, j, temp;
    
    for (i = array1.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * (i)) + 1;
        temp = array1[i];
        array1[i] =array1[j];
        array1[j] = temp;
    }
    return array1;
}

  
  ;
  useEffect(() => {
      
      const handleOnLoad = () => {
        console.log('Component loaded!');
        shuffleArray(data1)
          setId((prevIndex) =>
              prevIndex === data1.length - 1 ? 0 : prevIndex + 1
          );
          shuffleArray1(data1)
          setId((prevIndex) =>
              prevIndex === data1.length - 1 ? 0 : prevIndex + 1
          );
      };
      
  
      handleOnLoad(); 
      return () => {};
  }, []);

  return (
   <>
    <Box gap={1} className="general" sx={{height:"74vh",position:"relative",width:"95%",overflow:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4, },paddingLeft:"1%"}}>
      <Box p={1}><Category/></Box>
      {authUser ? (
     <Stack direction={"row"} spacing={2}> <Avatar src={authUser.photo} alt='K' /><Stack><Typography fontFamily={"sans-serif"}> Hello {authUser.firstName} </Typography>
    <Typography fontSize={28} fontFamily={"sans-serif"} >Listen again</Typography></Stack></Stack>):( <Stack direction={"row"} alignItems={"center"} spacing={1}>
      <Typography fontSize={28} fontFamily={"sans-serif"} >Top Trending </Typography><Fire size={25} weight="bold"/></Stack>
      )}
      <Box display={"flex"} sx={{width:"100%",overflow:"scroll",overflowY:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}} gap={1}>
 {arrayDataItems2}
 </Box>
      <Stack p={2} spacing={1}>
      <Typography variant='p' fontSize={"14"}  fontFamily={"sans-serif"}>START RADIO BASED ON A SONG </Typography>
      <Typography variant="h3"  fontFamily={"sans-serif"}>Quick picks</Typography>
      </Stack>
     <Box p={2}>
     <Stack direction={"row"} sx={{overflow:"auto", overflowY:"hidden",position:"relative","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,},}}>
     <Stack direction={"column"} spacing={1} sx={{minWidth:"25em",}}>
     {arrayDataItems3}
      </Stack>
      <Stack direction={"column"} spacing={1} sx={{minWidth: "25em",}}>
      {arrayDataItems4}
      </Stack>
      <Stack direction={"column"} spacing={1} sx={{minWidth: "25em",}}>
      {arrayDataItems5}
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
      
   </Box>
  {/*  <Box sx={{height:"13vh", width:"90%", backgroundColor:"black", color:"white",overlay:"unset"}}>
 
  <Box ><SmallPlayer data1={dataToPass} incrementId={incrementId}  decrementId={decrementId} onChange={handleChange} /></Box>
   <Box className="player"><Player data1={dataToPass} incrementId={incrementId} decrementId={decrementId} onChange={handleChange}/></Box>
   <Box display={"none"}><Explore data1={dataToPass} incrementId={incrementId} decrementId={decrementId} onChange={handleChange}/></Box>
    </Box>*/}
    
    </>
  )
  
}

export default General
