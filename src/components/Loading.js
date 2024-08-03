import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
    
function Loading() {
  return (
    <Box className="loader-container" gap={3}>
      <Box className="loader" gap={2}><img src="favicon.ico" width={"100%"} height={"100%"}/><Typography color={"white"} class="music">Music</Typography></Box>
      <Box><CircularProgress /></Box>
    </Box>
  );
}

export default Loading;
