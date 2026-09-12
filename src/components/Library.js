import React, { useState } from 'react';
import { Stack, Box, Typography, Card, IconButton, CardActionArea, CardContent, Button } from '@mui/material';
import { Play } from "phosphor-react";
import { Link } from "react-router-dom";
import data1 from './storedata1';

const Library = ({ stack, handleCardClick, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const stackData = stack.map((id) => data1.find((item) => item.id === id)).reverse();

  const scrollContainerStyle = {
    overflow: "auto",
    overflowY: "hidden",
    "&::-webkit-scrollbar": { width: 4, height: 9 },
    "&::-webkit-scrollbar-thumb": { background: "black", borderRadius: 4 },
    "&::-webkit-scrollbar-thumb:hover": { background: "red", borderRadius: 4 }
  };

  const renderCard = (item) => (
    <Card key={item.id} sx={{ height: "18em", minWidth: "16em", maxWidth: "16em", backgroundColor: "black" }}>
      <CardActionArea>
        <CardContent>
          <img src={item.img} alt={item.title || 'Song cover'} height="100%" width="100%" />
          <Stack direction="row" sx={{ width: "100%", justifyContent: "space-between", alignItems: "center", color: "white" }}>
            <Typography>{item.title}</Typography>
            <IconButton 
              sx={{ color: "white" }} 
              onClick={() => { onClick(item.id); setClicked(true); handleCardClick(item.id); }}
            >
              <Play size={20} />
            </IconButton>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const arrayDataItems2 = stackData.slice(0, 10).map(renderCard);

  const row1Artists = [
    { name: "Rihanna", img: 'profile 8.jpeg' },
    { name: "Harry Styles", img: 'profile 9.jpeg' },
    { name: "Billie Eilish", img: 'profile 7.jpeg' },
    { name: "Afrojack", img: 'profile 5.jpeg' },
    { name: "Drake", img: 'profile 2.jpeg' },
    { name: "Taylor Swift", img: 'profile 6.jpeg' },
  ];

  const row2Artists = [
    { name: "Ed Sheeran", img: 'profile 10.jpeg' },
    { name: "Weeknd", img: 'profile 4.jpeg' },
  ];

  return (
    <Stack 
      spacing={2} 
      sx={{
        maxHeight: "74vh", 
        minHeight: 0, // <--- Fixed flex/scroll collapse
        position: "relative", 
        width: "95%", 
        overflowY: "auto", 
        overflowX: "hidden", 
        ...scrollContainerStyle, 
        paddingLeft: "1%"
      }}
    >
      {/* Navigation Filter Buttons */}
      <Box p={2}>
        <Stack overflow="auto" direction="row" sx={{ overflowY: "hidden", ...scrollContainerStyle }} spacing={2} height={30} p={1} position="relative">
          <Link to="/Relax"><Button sx={{ color: "white", borderRadius: 4, backgroundColor: "rgba(255, 92, 0, .7)", minWidth: "9em" }} variant='outlined'><Typography fontSize={14} fontFamily="sans-serif">Playlists</Typography></Button></Link>
          <Link to="/Relax"><Button sx={{ color: "white", borderRadius: 4, backgroundColor: "rgba(255, 92, 0, .7)", minWidth: "8em" }} variant='outlined'><Typography fontSize={14} fontFamily="sans-serif">Songs</Typography></Button></Link>
          <Link to="/Relax"><Button sx={{ color: "white", borderRadius: 4, backgroundColor: "rgba(255, 92, 0, .7)", minWidth: "9em" }} variant='outlined'><Typography fontSize={14} fontFamily="sans-serif">Albums</Typography></Button></Link>
          <Link to="/Relax"><Button sx={{ color: "white", borderRadius: 4, backgroundColor: "rgba(255, 92, 0, .7)" }} variant='outlined'><Typography fontSize={14} fontFamily="sans-serif">Artists</Typography></Button></Link>
          <Link to="/Relax"><Button sx={{ color: "white", borderRadius: 4, backgroundColor: "rgba(255, 92, 0, .7)" }} variant='outlined'><Typography fontSize={14} fontFamily="sans-serif">Podcasts</Typography></Button></Link>
        </Stack>
      </Box>

      {/* History / Stack Data Section */}
      {stackData.length > 0 ? (
        <Box display="flex" sx={{ width: "100%", ...scrollContainerStyle }} gap={2}>
          {arrayDataItems2}
        </Box>
      ) : (
        <Typography sx={{ color: "white", p: 2 }}>Nothing here! Try playing something</Typography>
      )}

      {/* Artist Row 1 */}
      <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
        <Box display="flex" sx={scrollContainerStyle} gap={2}>
          {row1Artists.map((artist, idx) => (
            <Box key={idx}>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Card sx={{ height: "12em", width: "12em", borderRadius: "100%" }}>
                  <img src={artist.img} height="100%" width="100%" alt={artist.name} />
                </Card>
                <Typography variant='h6' sx={{ color: "white" }}>{artist.name}</Typography>
              </Stack>
            </Box>
          ))}
        </Box>
      </Stack>

      {/* Artist Row 2 */}
      <Stack direction="row" spacing={2} sx={{ width: "100%", pb: 2 }}>
        <Box display="flex" sx={scrollContainerStyle} gap={2}>
          {row2Artists.map((artist, idx) => (
            <Box key={idx}>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Card sx={{ height: "12em", width: "12em", borderRadius: "100%" }}>
                  <img src={artist.img} height="100%" width="100%" alt={artist.name} />
                </Card>
                <Typography variant='h6' sx={{ color: "white" }}>{artist.name}</Typography>
              </Stack>
            </Box>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Library;