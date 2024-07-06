import {  IconButton, Stack, Typography, InputBase, Avatar,Box } from '@mui/material'
import { List, MagnifyingGlass, Screencast } from 'phosphor-react'
import React from 'react'
import { styled, } from "@mui/material/styles";
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
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
        <IconButton sx={{color:'white'}} ><Avatar
            alt="Kaustav Ray"
            src='favico.ico'
            sx={{ width: 30, height: 30, backgroundColor: "orange" }}
          /></IconButton>
        </Stack>


      </Stack>


  )
}

export default Navbar