import { Stack, Box, Typography, Card, IconButton, Avatar, CardActionArea, CardContent } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Fire, Play } from 'phosphor-react';
import { Category } from './Category';
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from "./firebase";
import data1 from './storedata1';

const General = ({ onClick, handleCardClick, stack }) => {
  const [authUser, setAuthUser] = useState(null);

  // Authentication and Firestore user profile data listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setAuthUser(docSnap.data());
          } else {
            setAuthUser(user);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setAuthUser(user);
        }
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const stackData = stack.map((id) => data1.find((item) => item.id === id)).reverse();

  const renderCard = (item) => (
    <Card key={item.id} sx={{ height: "18em", minWidth: "16em", maxWidth: "16em", backgroundColor: "black" }}>
      <CardActionArea>
        <CardContent>
          <img src={item.img} alt={item.title || 'Song cover'} height="100%" width="100%" />
          <Stack direction="row" sx={{ width: "100%", justifyContent: "space-between", alignItems: "center", color: "white" }}>
            <Typography>{item.title}</Typography>
            <IconButton 
              sx={{ color: "white" }} 
              onClick={() => { onClick(item.id); handleCardClick(item.id); }}
            >
              <Play size={20} />
            </IconButton>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const renderQuickPickItem = (item) => (
    <Card key={item.id} sx={{ backgroundColor: "black" }}>
      <CardActionArea>
        <CardContent>
          <Box onClick={() => { onClick(item.id); handleCardClick(item.id); }}>
            <Stack direction="row" spacing={2}>
              <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}>
                <img src={item.img} height="100%" width="100%" alt={item.title} />
              </Card>
              <Stack direction="column" sx={{ justifyContent: "center", color: "white" }}>
                <Typography fontSize={16}>{item.title}</Typography>
                <Typography fontSize={14}>{item.artist}</Typography>
              </Stack>
            </Stack>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const arrayDataItemsLogin = stackData.slice(0, 10).map(renderCard);
  const arrayDataItems2 = data1.slice(0, 10).map(renderCard);
  const arrayDataItems3 = data1.slice(10, 14).map(renderQuickPickItem);
  const arrayDataItems4 = data1.slice(14, 18).map(renderQuickPickItem);
  const arrayDataItems5 = data1.slice(4, 8).map(renderQuickPickItem);

  const scrollContainerStyle = {
    overflow: "auto",
    overflowY: "hidden",
    "&::-webkit-scrollbar": { width: 4, height: 9 },
    "&::-webkit-scrollbar-thumb": { background: "black", borderRadius: 4 },
    "&::-webkit-scrollbar-thumb:hover": { background: "red", borderRadius: 4 }
  };

  const topArtists = [
    { name: "Martin Garrix", img: 'pro.jpg' },
    { name: "Weeknd", img: 'profile 4.jpeg' },
    { name: "Camila Cabello", img: 'profile 3.jpeg' },
    { name: "Afrojack", img: 'profile 5.jpeg' },
    { name: "Drake", img: 'profile 2.jpeg' },
    { name: "Taylor Swift", img: 'profile 6.jpeg' },
  ];

  const danceMusic = [
    { title: "Bad Boy (feat. Luana Kiara)", img: 'q13.jpeg' },
    { title: "Faded \n Alan Walker", img: 'q14.jpeg' },
    { title: "Unstoppable \n Sia", img: 'q15.jpeg' },
    { title: "Something Just Like This \n Coldplay", img: 'q16.jpeg' },
    { title: "Fearless Pt. II \n Lost Sky & Chris Linton", img: 'q17.jpeg' },
    { title: "Headlights (feat. KIDDO)\nAlok & Alan Walker", img: 'q18.jpeg' },
  ];

  const newReleases = [
    { title: "Papercuts", img: 'q19.jpg' },
    { title: "Shadows (feat. Blythe)", img: 'q20.jpeg' },
    { title: "IDEM", img: 'q21.jpeg' },
    { title: "Illusion", img: 'q22.jpeg' },
    { title: "Team Side feat. RCB", img: 'q23.jpeg' },
    { title: "Breathe", img: 'q24.jpeg' },
  ];

  return (
    <>
      <Box 
        gap={1} 
        className="general" 
        sx={{
          height: "74vh", 
          minHeight: 0, // <--- Fixed flex/scroll collapse
          position: "relative", 
          width: "95%", 
          overflowY: "auto", // <--- Changed from "scroll" to "auto" for proper scrolling
          overflowX: "hidden", 
          ...scrollContainerStyle, 
          paddingLeft: "1%"
        }}
      >
        <Box p={1}><Category /></Box>
        
        {authUser ? (
          <Box> 
            <Stack direction="row" spacing={2} alignItems="center"> 
              <Avatar src={authUser.photo} alt={authUser.firstName || 'User'} />
              <Stack>
                <Typography fontFamily="sans-serif">Hello {authUser.firstName || 'Music Lover'}</Typography> 
                <Typography fontSize={28} fontFamily="sans-serif">Listen again</Typography>
              </Stack>
            </Stack>
            <Box display="flex" sx={{ width: "100%", ...scrollContainerStyle }} gap={1}>
              {arrayDataItemsLogin}
            </Box>
          </Box>
        ) : ( 
          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography fontSize={28} fontFamily="sans-serif">Top Trending</Typography>
              <Fire size={25} weight="bold" />
            </Stack>
            <Box display="flex" sx={{ width: "100%", ...scrollContainerStyle }} gap={1}>
              {arrayDataItems2}
            </Box>
          </Box>
        )}
        
        <Stack p={2} spacing={1}>
          <Typography variant='body2' fontSize={14} fontFamily="sans-serif">START RADIO BASED ON A SONG</Typography>
          <Typography variant="h3" fontFamily="sans-serif">Quick picks</Typography>
        </Stack>

        <Box p={2}>
          <Stack direction="row" sx={scrollContainerStyle}>
            <Stack direction="column" spacing={-2} sx={{ minWidth: "25em" }}>{arrayDataItems3}</Stack>
            <Stack direction="column" spacing={-2} sx={{ minWidth: "25em" }}>{arrayDataItems4}</Stack>
            <Stack direction="column" spacing={-2} sx={{ minWidth: "25em" }}>{arrayDataItems5}</Stack>
          </Stack>
        </Box>

        <Typography fontSize={30} fontFamily="sans-serif">Top Artists</Typography>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <Box display="flex" sx={{ ...scrollContainerStyle }} gap={2}>
            {topArtists.map((artist, idx) => (
              <Box key={idx}>
                <Stack direction="column" justifyContent="center" alignItems="center">
                  <Card sx={{ height: "12em", width: "12em", borderRadius: "100%" }}>
                    <img src={artist.img} height="100%" width="100%" alt={artist.name} />
                  </Card>
                  <Typography variant='h6'>{artist.name}</Typography>
                </Stack>
              </Box>
            ))}
          </Box>
        </Stack>

        <Typography variant='h3' fontFamily="sans-serif" p={2}>Dance and electronic</Typography>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <Box display="flex" sx={{ ...scrollContainerStyle }} gap={2}>
            {danceMusic.map((song, idx) => (
              <Box key={idx}> 
                <Card sx={{ height: "18em", width: "14em", backgroundColor: "black" }}>
                  <img src={song.img} alt={song.title} />
                  <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", color: "white", p: 1 }}>
                    <Typography style={{ whiteSpace: 'pre-line' }}>{song.title}</Typography>
                    <IconButton sx={{ color: "white" }}><Play size={20} /></IconButton>
                  </Stack>
                </Card>
              </Box>
            ))}
          </Box>
        </Stack>

        <Typography fontSize={34} fontFamily="sans-serif">New releases</Typography>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <Box display="flex" sx={{ ...scrollContainerStyle }} gap={2}>
            {newReleases.map((release, idx) => (
              <Box key={idx}> 
                <Card sx={{ height: "18em", width: "14em", backgroundColor: "black" }}>
                  <img src={release.img} alt={release.title} />
                  <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", color: "white", p: 1 }}>
                    <Typography>{release.title}</Typography>
                    <IconButton sx={{ color: "white" }}><Play size={20} /></IconButton>
                  </Stack>
                </Card>
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default General; 