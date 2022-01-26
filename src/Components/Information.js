import React from 'react';
import { AppBar,Box,Toolbar,Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Information = () => {
  return (
  <AppBar
   position='fixed'
   sx={{zIndex:"1",}}
   >
      <Toolbar>
          <Box sx={{flexGrow:1}} style={{display:'flex', justifyContent:"left"}}>
            <Link to="/" style={{paddingLeft:"1em",color:"white"}}>Home</Link>
            <Link to="/users" style={{paddingLeft:"1em",color:"white"}}>Users</Link>
            <Link to="/todos" style={{paddingLeft:"1em",color:"white"}}>Todos</Link>
            </Box>
            <Box sx={{flexGrow:1}} style={{display:'flex', justifyContent:"right"}}>
              <div style={{justifyContent:"right"}}><a style={{color:"white",textDecoration: "none"}} target="_blank" href="https://linkedin.com/in/ashutoshshukla011">Ashutosh Shukla</a></div>
            </Box>
        </Toolbar>
  </AppBar>)
};

export default Information;
