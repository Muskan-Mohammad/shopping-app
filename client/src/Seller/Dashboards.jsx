import React from 'react';
import { Box, Paper, Typography,Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import './seller.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import Seller from './Cart';
import MessageIcon from '@mui/icons-material/Message';

function Dashboards() {
  return (
    <div>
    <Box>
      <Typography variant="h5" sx={{ fontSize: '60px' , marginTop:'-20rem' , marginBottom:'-30px', position:'fixed', marginLeft:'20rem'}}>
        Your DashBoard
      </Typography>
    </Box>
    <div
      style={{
        borderTop: '5px solid #333', 
        marginTop: '-15rem',
        width:'90rem',
        marginLeft:'-4rem' ,
        position:'fixed'
      }}
    ></div>
       <div
  style={{
    borderLeft: '5px solid #333', 
    height: '44rem', 
    marginLeft: '3rem',
    marginTop:'-20rem',
   position:'fixed'
  }}
></div>
<Box sx={{marginLeft:'-84rem' , marginTop:'20rem'}}  borderColor="primary.main">
<Box>
        <Tooltip title="Your Cart" arrow>
        <Link to="/mycart">
          <ShoppingCartIcon fontSize="large" className="icon" />
       </Link>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="LogOut" arrow>
            <Link to="/">
          <PersonIcon fontSize="large" className="icon" />
          </Link>
        </Tooltip>
      </Box>
      <Box>
      <Tooltip title="Add to Cart" arrow >
          <Link to="/addItem"> 
            <AddIcon fontSize="large" className="icon" />
          </Link>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="Messages" arrow>
            <Link to="/chat">
          <MessageIcon fontSize="large" className="icon" />
          </Link>
        </Tooltip>
      </Box>
    </Box>
<Seller />
  </div>
  
  );
}

export default Dashboards;
