import React from 'react';
import { AppBar,Box,Toolbar,Button } from '@mui/material';
const Information = () => {
  return (
  <AppBar
   position='fixed'
   sx={{zIndex:"1",}}
   >
      <Toolbar>
          <Box sx={{flexGrow:1}} style={{justifyContent:"right"}}>
              Ashutosh Shukla
            </Box>
        </Toolbar>
  </AppBar>)
};

export default Information;
