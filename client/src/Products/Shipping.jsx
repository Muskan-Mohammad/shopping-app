
import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventIcon from '@mui/icons-material/Event';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import './Buyer.css';

import {  Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';



function Shipping() {
  const confirmationMessage = localStorage.getItem('orderConfirmation');
  console.log(confirmationMessage);

  return (
   
      <div>
      {confirmationMessage !== null ? (
        <div className="shipping-container">
          <div className="step">
            <div className={`step-icon ${confirmationMessage ? 'completed' : ''}`}>
              <CheckCircleIcon sx={{ fontSize: '100px' }} />
            </div>
            <div>Order Confirmed</div>
          </div>
          <div
            style={{
              borderTop: '5px solid #333',
              width: '10rem',
            }}
          ></div>
          <div className="step">
            <div className={`step-icon ${confirmationMessage ? 'completed' : ''}`}>
              <LocalShippingIcon sx={{ fontSize: '100px' }} />
            </div>
            <div>Shipping</div>
          </div>
          <div
            style={{
              borderTop: '5px solid #333',
              width: '10rem',
            }}
          ></div>
          <div className="step">
            <div className={`step-icon ${confirmationMessage ? 'completed' : ''}`}>
              <EventIcon sx={{ fontSize: '100px' }} />
            </div>
            <div>Receiving by 4 Nov 2023</div>
          </div>
          <Queries />
        </div>
      ) : (
        <h3>Shipping details are yet to be confirmed.</h3>
      )}
      </div>
      
   
  );
}

export default Shipping;


function Queries() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  return (
    <div>
      <Tooltip sx={{ mt:'-30rem' , ml:'10rem'}} title="Write Your query here !">
        <IconButton onClick={handleOpenDialog}>
          <MessageIcon sx={{ fontSize: '60px', color: 'blue' }} />
        </IconButton>
      </Tooltip>
      <MessageDialog open={openDialog} onClose={handleCloseDialog} />
    </div>
  );
}

function MessageDialog({ open, onClose }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Handle sending the message (e.g., by calling an API)
    // You can add your logic here to send the message to the seller
    console.log('Sending message:', message);
    localStorage.setItem('Sending message:', JSON.stringify(message));
    const confirmationMessage = localStorage.getItem('Sending message:');
    // Clear the message input and close the dialog
    console.log("befd" , confirmationMessage)
    setMessage('');
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} sx={{}}>
      <DialogTitle>Send a Message</DialogTitle>
      <DialogContent>
        <TextField
          label="Message"
          multiline
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
         sx={{width:'10rem'}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSendMessage} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

