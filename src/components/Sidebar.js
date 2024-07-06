import React, {useState, useEffect} from 'react'
import{House,Compass,} from 'phosphor-react'
import { Stack, Typography,IconButton} from '@mui/material'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsDisabled(screenWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isDisabled) {
    return null;
  } 
  return (
    <Stack spacing={3} alignContent={"center"} justifyContent={"center"}>
      <Stack direction={"column"} sx={{justifyContent:"center",alignItems:"center",color:"white"}} spacing={1}>
      <Link to="/home">
    <IconButton sx={{color:'white'}} ><Stack direction={"column"} sx={{justifyContent:"center",alignItems:"center",color:"white"}} spacing={1}>
   <House size={20} /><Typography>Home</Typography>
    
    </Stack></IconButton></Link></Stack>
    <Stack direction={"column"} sx={{justifyContent:"center",alignItems:"center",color:"white"}} spacing={1}>
    <Link to="/explore">
    <IconButton sx={{color:'white'}} ><Stack direction={"column"} sx={{alignItems:"center"}} spacing={1} >
    <Compass size={20} />
    <Typography>Explore</Typography>
    </Stack></IconButton></Link></Stack>
    <Stack direction={"column"} sx={{justifyContent:"center",alignItems:"center",color:"white"}} spacing={1}>
    <Link to="/library">
    <IconButton sx={{color:'white'}} ><Stack direction={"column"} sx={{alignItems:"center"}} spacing={1}>
    <LibraryMusicOutlinedIcon fontSize='small' />
    <Typography>Library</Typography>
    </Stack></IconButton></Link></Stack>
    </Stack>

  )
}

export default Sidebar