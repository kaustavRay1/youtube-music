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
      img: 'carry you.jpeg',
      title: "Carry You",
      artist: "Martin Garrix",
      time: 217,
  },
  {
      id: 2,
      img: 'martin 1.jpeg',
      title: "If We'll Ever be Rem..",
      artist: "Martin Garrix",
      time: 219,
  },
  {
    id: 3,
    img: 'martin 7.jpeg',
    title: "Martin Garrix Live @ Ultra Music Festival Miami 2023",
    artist: "Martin Garrix",
    time: 219,
},
{
  id: 4,
  img: 'martin 2.jpeg',
  title: "Starlight",
  artist: "Martin Garrix",
  time: 219,
},
{
  id: 5,
  img: 'martin 3.jpeg',
  title: "Limitless",
  artist: "Martin Garrix",
  time: 219,
},
{
  id: 6,
  img: 'martin 4.jpeg',
  title: "Ocean",
  artist: "Martin Garrix",
  time: 219,
},
{
  id: 7,
  img: 'martin 5.jpeg',
  title: "Follow",
  artist: "Martin Garrix",
  time: 219,
},
//Listen again ends
//Quick picks
//col 1 
{
  id: 8,
  img: 'q1.jpeg',
  title: "No Lie (feat. Dua Lipa)",
  artist: "Sean Paul • Dua Lipa",
  time: 219,
},
{
  id: 9,
  img: 'q2.jpeg',
  title: "When We're Gone",
  artist: "Mesto & Justin Mylo",
  time: 219,
},
{
  id: 10,
  img: 'cry.jpeg',
  title: "Cry",
  artist: "Cigarettes after sex",
  time: 219,
},
{
  id: 11,
  img: 'cry.jpeg',
  title: "Cry",
  artist: "Cigarettes after sex",
  time: 219,
},
{
  id: 12,
  img: 'cry.jpeg',
  title: "Cry",
  artist: "Cigarettes after sex",
  time: 219,
},
{
  id: 13,
  img: 'cry.jpeg',
  title: "Cry",
  artist: "Cigarettes after sex",
  time: 219,
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
  } : null; 
}

export function getData() {
  return {
    id: data.id,
    img: data.img,
    name: data.title,
    artist: data.artist,
    time: data.time,
  };
}
