const data = [
  {
    id: 0,
    title: "Nothing is Playing",
    artist: "Click to Play",
    time: 0,
  },
  {
    id: 1,
    img: `${process.env.PUBLIC_URL}/carry you.jpeg`,
    title: "Carry You",
    artist: "Martin Garrix",
    music: `${process.env.PUBLIC_URL}/carry you.mp3`,
  },
  {
    id: 2,
    img: `${process.env.PUBLIC_URL}/martin 1.jpeg`,
    title: "If We'll Ever Be Rem..",
    artist: "Martin Garrix",
    music: `${process.env.PUBLIC_URL}/If We'll Ever Be Remembered.mp3`
  },
  {
    id: 3,
    img: `${process.env.PUBLIC_URL}/espresso.jpeg`,
    title: "Espresso",
    artist: "Sabrina Carpenter",
    music: `${process.env.PUBLIC_URL}/Espresso.mp3`
  },
  {
    id: 4,
    img: `${process.env.PUBLIC_URL}/martin 2.jpeg`,
    title: "Starlight",
    artist: "Martin Garrix",
    music: `${process.env.PUBLIC_URL}/Martin Garrix, DubVision feat. Shaun Farrugia - Starlight (Keep Me Afloat) [Official Video].mp3`
  },
  {
    id: 5,
    img: `${process.env.PUBLIC_URL}/martin 3.jpeg`,
    title: "Limitless",
    artist: "Martin Garrix",
    music: `${process.env.PUBLIC_URL}/Martin Garrix & Mesto - Limitless (Official Video).mp3`
  },
  {
    id: 6,
    img: `${process.env.PUBLIC_URL}/martin 4.jpeg`,
    title: "Ocean",
    artist: "Martin Garrix",
    music: `${process.env.PUBLIC_URL}/Martin Garrix feat. Khalid - Ocean (Official Video).mp3`
  },
  {
    id: 7,
    img: `${process.env.PUBLIC_URL}/martin 5.jpeg`,
    title: "Follow",
    artist: "Martin Garrix",
    music: `${process.env.PUBLIC_URL}/Martin Garrix & Zedd - Follow.mp3`
  },
  {
    id: 8,
    img: `${process.env.PUBLIC_URL}/q1.jpeg`,
    title: "No Lie (feat. Dua Lipa)",
    artist: "Sean Paul • Dua Lipa",
    music: `${process.env.PUBLIC_URL}/No Lie.mp3`
  },
  {
    id: 9,
    img: `${process.env.PUBLIC_URL}/q2.jpeg`,
    title: "When We're Gone",
    artist: "Mesto & Justin Mylo",
    music: `${process.env.PUBLIC_URL}/Mesto & Justin Mylo - When We're Gone.mp3`
  },
  {
    id: 10,
    img: `${process.env.PUBLIC_URL}/q4.jpeg`,
    title: "Apologize",
    artist: "One Republic • Timbaland",
    music: `${process.env.PUBLIC_URL}/Apologize.mp3`
  },
  {
    id: 11,
    img: `${process.env.PUBLIC_URL}/q5.jpeg`,
    title: "Circles",
    artist: "Post Malone • Hollywood's Bleeding",
    music: `${process.env.PUBLIC_URL}/Post Malone - Circles.mp3`
  },
  {
    id: 12,
    img: `${process.env.PUBLIC_URL}/q6.jpeg`,
    title: "I Feel It Coming (feat. Daft Punk)",
    artist: "Song • The Weeknd",
    music: `${process.env.PUBLIC_URL}/The Weeknd - I Feel It Coming ft. Daft Punk.mp3`
  },
  {
    id: 13,
    img: `${process.env.PUBLIC_URL}/q7.jpeg`,
    title: "Breakaway",
    artist: "Single • Martin Garrix, Mesto & WILHELM",
    music: `${process.env.PUBLIC_URL}/Martin Garrix & Mesto - Breakaway (feat. WILHELM) [Official Video].mp3`
  },
  {
    id: 14,
    img: `${process.env.PUBLIC_URL}/q8.jpeg`,
    title: "Nevada (feat. Cozi Zuehlsdorff)",
    artist: "Song • Vicetone",
    music: `${process.env.PUBLIC_URL}/Vicetone - Nevada (feat. Cozi Zuehlsdorff) [Monstercat Official Music Video].mp3`
  },
  {
    id: 15,
    img: `${process.env.PUBLIC_URL}/q9.jpeg`,
    title: "Waiting For Love",
    artist: "Avicii • Stories",
    music: `${process.env.PUBLIC_URL}/Avicii - Waiting For Love.mp3`
  },
  {
    id: 16,
    img: `${process.env.PUBLIC_URL}/q10.jpeg`,
    title: "Hymn for the Weekend",
    artist: "Coldplay • A Head Full of Dreams",
    music: `${process.env.PUBLIC_URL}/Coldplay - Hymn For The Weekend (Official Video).mp3`
  },
  {
    id: 17,
    img: `${process.env.PUBLIC_URL}/q11.jpeg`,
    title: "Stereo Hearts (feat. Adam Levine)",
    artist: "Gym Class Heroes • The Papercut Chronicles II",
    music: `${process.env.PUBLIC_URL}/Gym Class Heroes - Stereo Hearts (Lyrics) _ Heart Stereo.mp3`
  },
  {
    id: 18,
    img: `${process.env.PUBLIC_URL}/q12.jpeg`,
    title: "We Are Young (feat. Janelle Monáe)",
    artist: "Fun",
    music: `${process.env.PUBLIC_URL}/Fun._ We Are Young ft. Janelle Monáe [OFFICIAL VIDEO].mp3`
  },
  {
    id: 19,
    img: `${process.env.PUBLIC_URL}/q13.jpeg`,
    title: "Bad Boy (feat. Luana Kiara)",
    artist: "Tungevaag & Raaban",
    music: `${process.env.PUBLIC_URL}/Tungevaag & Raaban - Bad Boy (feat. Luana Kiara).mp3`
  },
  {
    id: 20,
    img: `${process.env.PUBLIC_URL}/q14.jpeg`,
    title: "Faded",
    artist: "Alan Walker",
    music: `${process.env.PUBLIC_URL}/Alan Walker - Faded.mp3`
  },
  {
    id: 21,
    img: `${process.env.PUBLIC_URL}/q15.jpeg`,
    title: "Unstoppable",
    artist: "Sia",
    music: `${process.env.PUBLIC_URL}/Sia - Unstoppable (Lyrics).mp3`
  },
  {
    id: 22,
    img: `${process.env.PUBLIC_URL}/q16.jpeg`,
    title: "Something Just Like This",
    artist: "Coldplay",
    music: `${process.env.PUBLIC_URL}/The Chainsmokers & Coldplay - Something Just Like This (Lyrics).mp3`
  },
];

export default data;

// Function to get song data by ID
export function getDataById(id) {
  const item = data.find(item => item.id === id);
  console.log(process.env.PUBLIC_URL);
  return item ? {
      id: item.id,
      img: item.img,
      name: item.title,
      artist: item.artist,
      time: item.time,
      music: item.music,
  } : null; 
}

export function getData() {
  const item = data[0];
  return {
    id: item.id,
    img: item.img,
    name: item.title,
    artist: item.artist,
    time: item.time,
    music: item.music,
  };
}