import * as React from 'react';
import {Box, Stack,IconButton,Typography} from "@mui/material";
import { Link } from "react-router-dom";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import {Plus,House, Compass, Equalizer, Playlist} from "phosphor-react";
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,height:"100%", backgroundColor:"black",color:"white" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       <Stack direction={"row"} sx={{ alignItems: "center" }}>
      <Button onClick={toggleDrawer(anchor, true)} sx={{color:"white",p:2}}><MenuIcon fontSize='medium'/></Button>
          <IconButton><img src="favicon.ico" alt="" height={30} ></img></IconButton>
          <Typography fontSize={20}>Music</Typography>
        </Stack>
        <Stack spacing={1} paddingTop={3} sx={{justifyContent:"center",alignContent:"center"}}>
        <ListItem><Link to="/home"><IconButton sx={{color:"white"}}><Stack direction={"row"} spacing={2} sx={{justifyContent:"center",alignContent:"center"}}><House size={25} /> <Typography>Home</Typography></Stack></IconButton></Link></ListItem>
        <ListItem> <Link to="/explore">
    <IconButton sx={{color:'white'}} ><Stack direction={"row"} spacing={2} sx={{justifyContent:"center",alignContent:"center"}}><Compass size={25} /> <Typography>Explore</Typography></Stack></IconButton></Link></ListItem>
        <ListItem> <Link to="/library">
    <IconButton sx={{color:'white'}} ><Stack direction={"row"} spacing={2} sx={{justifyContent:"center",alignContent:"center"}}><LibraryMusicOutlinedIcon fontSize='medium'  /> <Typography>Library</Typography></Stack></IconButton></Link></ListItem>
        </Stack>
      </List>
      <List>
      <Divider color="white" />
      <Box sx={{paddingTop:2,paddingLeft:5}}>
      <IconButton sx={{height:"1.5em", width:"80%",color:"white",backgroundColor:"rgb(79, 78, 78)",borderRadius:"20px",}}><Stack direction={"row"} spacing={1} sx={{justifyContent:"center",alignItems:"center"}}><Plus size={20} /><Typography fontSize={15}>New Playlist</Typography></Stack></IconButton>
      </Box>
      <Box paddingTop={4}>
      <ListItem><Stack direction={"column"}><Typography fontSize={16}>Liked music</Typography><Typography variant='caption'>Auto Playlist</Typography></Stack></ListItem>
      
      <ListItem><Stack><Typography fontSize={18}>Recent</Typography><Typography variant='caption'>Martin Garrix, One Republic...</Typography></Stack> 
      </ListItem>
      <ListItem><Stack><Typography fontSize={18}>Albums</Typography><Typography variant='caption'>Saved</Typography></Stack>
      </ListItem>
      <ListItem><Stack><Typography fontSize={16}>Equalizer</Typography><Typography variant='caption'></Typography></Stack>
      </ListItem>
      </Box>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{color:"white", paddingRight:2}}><MenuIcon fontSize='medium'/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}