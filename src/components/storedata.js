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
      music: 'carry you.mp3',
  },
  {
      id: 2,
      img: 'martin 1.jpeg',
      title: "If We'll Ever Be Rem..",
      artist: "Martin Garrix",
      music: "If We'll Ever Be Remembered.mp3"
  },
  {
    id: 3,
    img: 'martin 7.jpeg',
    title: "Martin Garrix Live @ Ultra Music Festival Miami 2023",
    artist: "Martin Garrix",
    music: "carry you.mp3"
},
{
  id: 4,
  img: 'martin 2.jpeg',
  title: "Starlight",
  artist: "Martin Garrix",
  music: "Martin Garrix, DubVision feat. Shaun Farrugia - Starlight (Keep Me Afloat) [Official Video].mp3"
},
{
  id: 5,
  img: 'martin 3.jpeg',
  title: "Limitless",
  artist: "Martin Garrix",
  music: "Martin Garrix & Mesto - Limitless (Official Video).mp3"
},
{
  id: 6,
  img: 'martin 4.jpeg',
  title: "Ocean",
  artist: "Martin Garrix",
  music: "Martin Garrix feat. Khalid - Ocean (Official Video).mp3"
},
{
  id: 7,
  img: 'martin 5.jpeg',
  title: "Follow",
  artist: "Martin Garrix",
  music: "Martin Garrix & Zedd - Follow.mp3"
},
//Listen again ends
//Quick picks
//col 1 
{
  id: 8,
  img: 'q1.jpeg',
  title: "No Lie (feat. Dua Lipa)",
  artist: "Sean Paul • Dua Lipa",
  music: "No Lie.mp3"
},
{
  id: 9,
  img: 'q2.jpeg',
  title: "When We're Gone",
  artist: "Mesto & Justin Mylo",
  music: "Mesto & Justin Mylo - When We're Gone.mp3"
},
{
  id: 10,
  img: 'q4.jpeg',
  title: "Apologize",
  artist: "One Republic • Timbaland",
  music: "Apologize.mp3"
},
{
  id: 11,
  img: 'q5.jpeg',
  title: "Circles",
  artist: "Post Malone • Hollywood's Bleeding",
  music: "Post Malone - Circles.mp3"
},
{
  id: 12,
  img: 'q6.jpeg',
  title: "I Feel It Coming (feat. Daft Punk)",
  artist: "Song • The Weeknd",
  music: "The Weeknd - I Feel It Coming ft. Daft Punk.mp3"
},
{
  id: 13,
  img: 'q7.jpeg',
  title: "Breakaway",
  artist: "Single • Martin Garrix, Mesto & WILHELM",
  music: "Martin Garrix & Mesto - Breakaway (feat. WILHELM) [Official Video].mp3"
},
{
  id: 14,
  img: 'q8.jpeg',
  title: "Nevada (feat. Cozi Zuehlsdorff)",
  artist: "Song • Vicetone",
  music: "Vicetone - Nevada (feat. Cozi Zuehlsdorff) [Monstercat Official Music Video].mp3"
},
{
  id: 15,
  img: 'q9.jpeg',
  title: "Waiting For Love",
  artist: "Avicii • Stories",
  music: "Avicii - Waiting For Love.mp3"
},
{
  id: 16,
  img: 'q10.jpeg',
  title: "Hymn for the Weekend",
  artist: "Coldplay • A Head Full of Dreams",
  music: "Coldplay - Hymn For The Weekend (Official Video).mp3"
},
{
  id: 17,
  img: 'q11.jpeg',
  title: "Stereo Hearts (feat. Adam Levine)",
  artist: "Gym Class Heroes • The Papercut Chronicles II",
  music: "Gym Class Heroes - Stereo Hearts (Lyrics) _ Heart Stereo.mp3"
},
{
  id: 18,
  img: 'q12.jpeg',
  title: "We Are Young (feat. Janelle Monáe)",
  artist: "Fun",
  music: "Fun._ We Are Young ft. Janelle Monáe [OFFICIAL VIDEO].mp3"
},
{
  id: 19,
  img: 'q13.jpeg',
  title: "Bad Boy (feat. Luana Kiara)",
  artist: "Tungevaag & Raaban",
  music: "Tungevaag & Raaban - Bad Boy (feat. Luana Kiara).mp3"
},
{
  id: 20,
  img: 'q14.jpeg',
  title: "Faded",
  artist: "Alan Walker",
  music: "Alan Walker - Faded.mp3"
},
{
  id: 21,
  img: 'q15.jpeg',
  title: "Unstoppable",
  artist: "Sia",
  music: "Sia - Unstoppable (Lyrics).mp3"
},
{
  id: 22,
  img: 'q16.jpeg',
  title: "Something Just Like This",
  artist: "Coldplay",
  music: "The Chainsmokers & Coldplay - Something Just Like This (Lyrics).mp3"
},
];
export default data;
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
