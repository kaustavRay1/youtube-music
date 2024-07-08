import {  IconButton, Stack, Typography, InputBase, Avatar,Box, NativeSelect, Button } from '@mui/material'
import { List, MagnifyingGlass, Screencast } from 'phosphor-react'
import React, { useState, useEffect } from 'react'
import { styled, } from "@mui/material/styles";
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import { auth, db, } from "./firebase";
import { doc, getDoc, } from "firebase/firestore";
import { onAuthStateChanged, signOut } from 'firebase/auth';
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 5,
  backgroundColor: "white",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "60%",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));
const Navbar = () => {
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
   
     

    
      <Stack direction={"row"} sx={{ alignItems: "center",width:"90%"}} spacing={1}>
      <Box display={"flex"}>
    <IconButton><SwipeableTemporaryDrawer/></IconButton>  
        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          <IconButton><img src="favicon.ico" alt="" height={30} ></img></IconButton>
          <Typography >Music</Typography>
        </Stack>
        </Box>
        <Stack sx={{ width: "80%", justifyContent: "center",}} spacing={2}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }}/>
          </Search>
        </Stack>
        <Stack direction="row" sx={{justifyContent: "space-between" }} spacing={1}>
        <IconButton sx={{color:'white'}} ><Screencast size={32} /></IconButton>
        {authUser ? (
        <>
        <Box display={"flex"}>
        <IconButton sx={{color:'white',fontSize:"1em"}} href='/profile' > <Avatar src={authUser.photo} alt={authUser.firstName}/>
          </IconButton>
          </Box>
          </>

      ) : (
        <Box display={"flex"}>
        <IconButton sx={{color:'white',fontSize:"1em"}} href='/register' > Sign Up
        </IconButton>
        <IconButton sx={{color:'white',fontSize:"1em"}} href='/login'> Login
        </IconButton>
        </Box>
      )}
        </Stack>


      </Stack>


  )
}

export default Navbar