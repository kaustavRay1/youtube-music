import {  IconButton, Stack, Typography,Avatar,Box, } from '@mui/material'
import { List } from '@mui/material/List';
import { MagnifyingGlass, Screencast } from 'phosphor-react'
import React, { useState, useEffect } from 'react'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import { auth, db, } from "./firebase";
import { doc, getDoc, } from "firebase/firestore";
import { onAuthStateChanged, signOut } from 'firebase/auth';
const SmallNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
  const [authUser, setAuthUser] = useState(null);
    
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if(user)
        {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAuthUser(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    } else {
      console.log("User is not logged in");
    }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);


  return (
   
     

    
      <Stack direction={"row"} sx={{ alignItems: "center",width:"90%", justifyContent:"space-between"}} spacing={1}>
      <Box display={"flex"}>
       
        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          <IconButton><img src="favicon.ico" alt="" height={30} ></img></IconButton>
          <Typography >Music</Typography>
        </Stack>
        </Box>
        <Stack direction="row"  spacing={1}>
        <IconButton sx={{color:'white'}} ><Screencast size={32} /></IconButton>
        {authUser ? (
        <>
        <Box>
       <Avatar src={authUser.photo} alt={authUser.firstName} onClick={toggleDropdown}/>
        {isOpen && (
        <div className="dropdown">
          <ul>
          <li><IconButton sx={{color:'white',fontSize:"1em"}} href='/youtube-music/profile' > Profile
            </IconButton></li>
            <li><IconButton sx={{color:'white',fontSize:"1em"}} onClick={userSignOut} > Logout
            </IconButton></li>
          </ul>
        </div>
      )}
      </Box>
          </>

      ) : (
        <Box>
        <Avatar onClick={toggleDropdown} />
        {isOpen && (
        <div className="dropdown">
          <ul>
            <li><IconButton sx={{color:'white',fontSize:"1em"}} href='/youtube-music/register' > Sign Up
            </IconButton></li>
            <li><IconButton sx={{color:'white',fontSize:"1em"}} href='/youtube-music/login' > Login
            </IconButton></li>
          </ul>
        </div>
      )}
      </Box>
      )}
        </Stack>
       </Stack>
     

  )
}

export default SmallNavbar