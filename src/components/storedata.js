const data = [
  {
    id: 0,
    
    title: "Nothing is Playing",
    artist: "Click to Play",
    time: 0,
},
  {
    //Song Details(id,img,title,artist,time)
    //(General.js)
    //Listen again
      id: 1,
      img: './youtube-music/carry you.jpeg',
      title: "Carry You",
      artist: "Martin Garrix",
      music: './youtube-music/carry you.mp3',
  },
  {
      id: 2,
      img: './youtube-music/martin 1.jpeg',
      title: "If We'll Ever Be Rem..",
      artist: "Martin Garrix",
      music: "./youtube-music/If We'll Ever Be Remembered.mp3"
  },
  {
    id: 3,
    img: './youtube-music/martin 7.jpeg',
    title: "Martin Garrix Live @ Ultra Music Festival Miami 2023",
    artist: "Martin Garrix",
    music: "./youtube-music/carry you.mp3"
},
{
  id: 4,
  img: './youtube-music/martin 2.jpeg',
  title: "Starlight",
  artist: "Martin Garrix",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 5,
  img: './youtube-music/martin 3.jpeg',
  title: "Limitless",
  artist: "Martin Garrix",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 6,
  img: './youtube-music/martin 4.jpeg',
  title: "Ocean",
  artist: "Martin Garrix",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 7,
  img: './youtube-music/martin 5.jpeg',
  title: "Follow",
  artist: "Martin Garrix",
  music: "./youtube-music/Martin Garrix & Zedd - Follow.mp3"
},
//Listen again ends
//Quick picks
//col 1 
{
  id: 8,
  img: './youtube-music/q1.jpeg',
  title: "No Lie (feat. Dua Lipa)",
  artist: "Sean Paul • Dua Lipa",
  music: "./youtube-music/No Lie.mp3"
},
{
  id: 9,
  img: './youtube-music/q2.jpeg',
  title: "When We're Gone",
  artist: "Mesto & Justin Mylo",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 10,
  img: 'q4.jpeg',
  title: "Apologize",
  artist: "One Republic • Timbaland",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 11,
  img: './youtube-music/q5.jpeg',
  title: "Circles",
  artist: "Post Malone • Hollywood's Bleeding",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 12,
  img: './youtube-music/q6.jpeg',
  title: "I Feel It Coming (feat. Daft Punk)",
  artist: "Song • The Weeknd",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 13,
  img: './youtube-music/q7.jpeg',
  title: "Breakaway",
  artist: "Single • Martin Garrix, Mesto & WILHELM",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 14,
  img: './youtube-music/q8.jpeg',
  title: "Nevada (feat. Cozi Zuehlsdorff)",
  artist: "Song • Vicetone",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 15,
  img: './youtube-music/q9.jpeg',
  title: "Waiting For Love",
  artist: "Avicii • Stories",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 16,
  img: './youtube-music/q10.jpeg',
  title: "Hymn for the Weekend",
  artist: "Coldplay • A Head Full of Dreams",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 17,
  img: './youtube-music/q11.jpeg',
  title: "Stereo Hearts (feat. Adam Levine)",
  artist: "Gym Class Heroes • The Papercut Chronicles II",
  music: "./youtube-music/carry you.mp3"
},
{
  id: 18,
  img: './youtube-music/q12.jpeg',
  title: "We Are Young (feat. Janelle Monáe)",
  artist: "Fun",
  music: "./youtube-music/carry you.mp3"
},
];

// Function to get data by ID
export function getDataById(id) {
  const item = data.find(item => item.id === id);
  return item ? { // Return the item if found
      id: item.id,
      img: item.img,
      name: item.title,
      artist: item.artist,
      time: item.time,
      music: item.music,
  } : null; 
}

export function getData() {
  return {
    id: data.id,
    img: data.img,
    name: data.title,
    artist: data.artist,
    time: data.time,
    music: data.music,
  };
}
