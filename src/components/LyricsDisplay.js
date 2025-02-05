import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

const lyrics = [
  {
    time: 0, text: ["We are never going home",
      " We're the wild ones living on the go",
      " You know that there is no rest for the wicked",
      " I will show you if you come with me",
      " Make you feel like it was all a dream",
      " Imagine it's like heaven for a sinner"]
  },
  {
    time: 12, text: ["[Chorus]",
      " I can lead the way",
      " Let me ease your pain",
      " When the whole world is against you, I will carry you",
      " Carry you away",
      " Through the darkest days",
      " When the whole world is against you, I will carry you",
      " Carry you with me"]
  },
  {
  time: 30, text: ["[Drop]",
    " Carry you with me",
    " Carry you with me"]
},
  // Add more lines with timestamps
];

const LyricsDisplay = ({ myRef, isPlaying }) => {
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const lyricsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = myRef?.current?.currentTime;
      const newIndex = lyrics.findIndex((lyric, i) =>
        currentTime >= lyric.time && (i === lyrics.length - 1 || currentTime < lyrics[i + 1].time)
      );
      if (newIndex !== -1 && newIndex !== currentLyricIndex) {
        setCurrentLyricIndex(newIndex);
        //lyricsRef.current[newIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying, currentLyricIndex]);

  return (
    <Box sx={{ overflowY: "auto", textAlign: "left", color: "white", paddingX: "2em" }}>
      {lyrics.map((lyric, index) => (
        <Typography
          key={index}
          ref={(el) => (lyricsRef.current[index] = el)}
          sx={{ fontSize: "1.6rem", color: index === currentLyricIndex ? "white" : "grey", transition: "color 0.3s", fontFamily: "roboto", fontWeight: 400 }}
        >
          {lyric.text}
        </Typography>
      ))}
    </Box>
  );
};

export default LyricsDisplay;
