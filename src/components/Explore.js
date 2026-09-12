import { Stack, Box, Typography, Card, CardActionArea, CardContent, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { MusicNote, ChartLineUp, Smiley, ApplePodcastsLogo, Play } from 'phosphor-react';
import data1 from './storedata1';

const Explore = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);

  const renderCard = (item) => (
    <Card key={item.id} sx={{ minHeight: "18em", minWidth: "16em", maxWidth: "16em", backgroundColor: "black" }}>
      <CardActionArea>
        <CardContent>
          <img src={item.img} alt={item.title || 'Song cover'} height="100%" width="100%" />
          <Stack direction="row" sx={{ width: "100%", justifyContent: "space-between", alignItems: "center", color: "white" }}>
            <Typography>{item.title}</Typography>
            <IconButton sx={{ color: "white" }} onClick={() => { onClick(item.id); setClicked(true); }}>
              <Play size={20} />
            </IconButton>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const arrayDataItems2 = data1.slice(0, 10).map(renderCard);

  const scrollContainerStyle = {
    overflow: "auto",
    overflowY: "hidden",
    "&::-webkit-scrollbar": { width: 4, height: 9 },
    "&::-webkit-scrollbar-thumb": { background: "black", borderRadius: 4 },
    "&::-webkit-scrollbar-thumb:hover": { background: "red", borderRadius: 4 }
  };

  const newAlbums = [
    { title: "Bad Boy (feat. Luana Kiara)", img: 'q13.jpeg' },
    { title: "Faded \n Alan Walker", img: 'q14.jpeg' },
    { title: "Unstoppable \n Sia", img: 'q15.jpeg' },
    { title: "Something Just Like This \n Coldplay", img: 'q16.jpeg' },
    { title: "Fearless Pt. II \n Lost Sky & Chris Linton", img: 'q17.jpeg' },
    { title: "Headlights (feat. KIDDO)\nAlok & Alan Walker", img: 'q18.jpeg' },
  ];

  const genres = [
    [
      { label: "Dance and electronic", bg: "rgb(250, 7, 7)" },
      { label: "Pop", bg: "rgb(255, 163, 5)" },
      { label: "R&B and Soul", bg: "rgb(118, 255, 5)" },
      { label: "2010s", bg: "rgb(5, 255, 172)" },
      { label: "J-Pop", bg: "rgb(255, 5, 176)" },
      { label: "Jazz", bg: "rgb(5, 234, 255)" },
      { label: "Hip Hop", bg: "rgb(255, 255, 5)" },
      { label: "Rock", bg: "rgb(255, 92, 0)" },
    ],
    [
      { label: "Commute", bg: "rgb(255, 76, 5)" },
      { label: "Country & Americana", bg: "rgb(5, 63, 255)" },
      { label: "Focus", bg: "rgb(200, 205, 222)" },
      { label: "Hindusthani Classical", bg: "rgb(193, 122, 255)" },
      { label: "Acoustic", bg: "rgb(255, 38, 96)" },
      { label: "Calm", bg: "rgb(255, 236, 150)" },
      { label: "2000s", bg: "rgb(86, 252, 122)" },
      { label: "Vibe", bg: "rgb(57, 172, 179)" },
    ],
    [
      { label: "Family", bg: "rgb(102, 163, 255)" },
      { label: "Chill", bg: "rgb(167, 40, 209)" },
      { label: "Upbeat", bg: "rgb(245, 115, 212)" },
      { label: "Indian Pop", bg: "rgb(156, 84, 84)" },
      { label: "1990s", bg: "rgb(188, 191, 25)" },
      { label: "Retro", bg: "rgb(21, 131, 150)" },
      { label: "Caribbean", bg: "rgb(61, 65, 148)" },
      { label: "Reggae", bg: "rgb(212, 121, 121)" },
    ],
    [
      { label: "Capella", bg: "rgb(34, 101, 117)" },
      { label: "Energy booster", bg: "rgb(255, 215, 150)" },
      { label: "Metal", bg: "rgb(135, 173, 230)" },
      { label: "Feel Good", bg: "rgb(99, 0, 96)" },
      { label: "Monsoon", bg: "rgb(166, 186, 155)" },
      { label: "Sad", bg: "rgb(41, 56, 84)" },
      { label: "Folk", bg: "rgb(150, 7, 166)" },
      { label: "Indie", bg: "rgb(201, 44, 78)" },
    ]
  ];

  return (
    <>
      <Box 
        gap={2} 
        className="general" 
        sx={{
          height: "74vh", 
          minHeight: 0, 
          position: "relative", 
          width: "100%", 
          overflowY: "auto", 
          overflowX: "hidden", 
          ...scrollContainerStyle
        }}
      >
        {/* Top Header Categories */}
        <Stack direction={'row'} alignItems={"center"} spacing={3} sx={scrollContainerStyle}> 
          <Card sx={{ color: "white", backgroundColor: "rgba(255, 92, 0, .7)", minWidth: "18em", height: "4em" }}>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} p={2} paddingRight={12}>
              <MusicNote size={32} /><Typography fontSize={20}>New releases</Typography>
            </Stack>
          </Card>
          <Card sx={{ color: "white", backgroundColor: "rgba(255, 92, 0, .7)", minWidth: "17em", height: "4em" }} variant='outlined'>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} p={2} paddingRight={14}> 
              <ChartLineUp size={32} /> <Typography fontSize={20}>Charts</Typography>
            </Stack>
          </Card>
          <Card sx={{ color: "white", backgroundColor: "rgba(255, 92, 0, .7)", minWidth: "20em", height: "4em" }} variant='outlined'>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} p={2} paddingRight={12}>
              <Smiley size={32} /> <Typography fontSize={19}>Mood and genres</Typography>
            </Stack>
          </Card>
          <Card sx={{ color: "white", backgroundColor: "rgba(255, 92, 0, .7)", minWidth: "18em", height: "4em" }} variant='outlined'>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} p={2} paddingRight={12}>
              <ApplePodcastsLogo size={32} /><Typography fontSize={20}>Podcasts</Typography>
            </Stack>
          </Card>
        </Stack>

        {/* Carousel Items */}
        <Box display={"flex"} sx={{ width: "100%", ...scrollContainerStyle }} gap={2}>
          {arrayDataItems2}
        </Box>

        {/* New Albums and Singles */}
        <Stack p={2} spacing={2}>
          <Typography fontSize={30}>New albums and singles</Typography>
          <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
            <Box display={"flex"} sx={scrollContainerStyle} gap={2}>
              {newAlbums.map((item, idx) => (
                <Box key={idx}> 
                  <Card sx={{ height: "18em", width: "14em", backgroundColor: "black" }}>
                    <img src={item.img} alt={item.title} />
                    <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center", color: "white", p: 1 }}>
                      <Typography style={{ whiteSpace: 'pre-line' }}>{item.title}</Typography>
                      <IconButton sx={{ color: "white" }}><Play size={20} /></IconButton>
                    </Stack>
                  </Card>
                </Box>
              ))}
            </Box>
          </Stack>

          {/* Top Trending Section */}
          <Typography fontSize={30}>Top trending</Typography>
          <Box p={2}>
            <Stack direction={"row"} sx={scrollContainerStyle}>
              {/* Column 1 */}
              <Stack direction={"column"} spacing={2} sx={{ minWidth: "25em" }}>
                <Box onClick={() => { setClicked(true); }}>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q1.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>No Lie (feat. Dua Lipa)</Typography><Typography fontSize={14}>Sean Paul • Dua Lipa</Typography></Stack>
                  </Stack>
                </Box>
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q2.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>When We're Gone</Typography><Typography fontSize={14}>Mesto & Justin Mylo</Typography></Stack>
                  </Stack>
                </Box>       
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q3.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>Follow</Typography><Typography fontSize={14}>Martin Garrix & Zedd • Sentio</Typography></Stack>
                  </Stack>
                </Box>       
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q4.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>Apologize</Typography><Typography fontSize={14}>One Republic • Timbaland</Typography></Stack>
                  </Stack>
                </Box>
              </Stack>
              {/* Column 2 */}
              <Stack direction={"column"} spacing={2} sx={{ minWidth: "25em" }}>
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q5.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>Circles</Typography><Typography fontSize={14}>Post Malone</Typography></Stack>
                  </Stack>
                </Box>
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q6.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>I Feel It Coming</Typography><Typography fontSize={14}>The Weeknd</Typography></Stack>
                  </Stack>
                </Box>       
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q7.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>Breakaway</Typography><Typography fontSize={14}>Martin Garrix</Typography></Stack>
                  </Stack>
                </Box>       
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q8.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>Nevada</Typography><Typography fontSize={14}>Vicetone</Typography></Stack>
                  </Stack>
                </Box>
              </Stack>
              {/* Column 3 */}
              <Stack direction={"column"} spacing={2} sx={{ minWidth: "25em" }}>
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q9.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>Waiting For Love</Typography><Typography fontSize={14}>Avicii • Stories</Typography></Stack>
                  </Stack>
                </Box>
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q10.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>Hymn for the Weekend</Typography><Typography fontSize={14}>Coldplay</Typography></Stack>
                  </Stack>
                </Box>       
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q11.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>Stereo Hearts</Typography><Typography fontSize={14}>Gym Class Heroes</Typography></Stack>
                  </Stack>
                </Box>       
                <Box>
                  <Stack direction={"row"} spacing={2}> 
                    <Card sx={{ height: "4em", width: "4em", backgroundColor: "grey" }}><img src='q12.jpeg' height={"100%"} width={"100%"} alt='Cover' /></Card>
                    <Stack direction={"column"} sx={{ justifyContent: "center", color: "white" }}><Typography fontSize={16}>We Are Young</Typography><Typography fontSize={14}>Fun</Typography></Stack>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* New Music Videos */}
          <Typography fontSize={30}>New music videos</Typography>
          <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
            <Box display={"flex"} sx={scrollContainerStyle} gap={2}>
              {newAlbums.map((item, idx) => (
                <Box key={idx}> 
                  <Card sx={{ height: "18em", width: "14em", backgroundColor: "black" }}>
                    <img src={item.img} alt={item.title} />
                    <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center", color: "white", p: 1 }}>
                      <Typography style={{ whiteSpace: 'pre-line' }}>{item.title}</Typography>
                      <IconButton sx={{ color: "white" }}><Play size={20} /></IconButton>
                    </Stack>
                  </Card>
                </Box>
              ))}
            </Box>
          </Stack>
        </Stack>

        {/* Mood and Genres Grid */}
        <Box p={2}>
          <Typography fontSize={30} pb={2}>Mood and genres</Typography>
          <Stack direction={'column'} spacing={3} sx={scrollContainerStyle}> 
            {genres.map((row, rowIndex) => (
              <Stack key={rowIndex} direction={"row"} spacing={3}>
                {row.map((genre, gIndex) => (
                  <Card key={gIndex} sx={{ borderRadius: "4px", backgroundColor: genre.bg, minWidth: "10em", height: "3em", paddingLeft: "4px" }}>
                    <Card sx={{ height: "100%", width: "100%", borderRadius: "0px", backgroundColor: "#212121", display: "flex", alignItems: "center", paddingLeft: 1.5, color: "white" }}>
                      <Typography fontSize={14} fontFamily={"sans-serif"}>{genre.label}</Typography>
                    </Card>
                  </Card>
                ))}
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Explore;