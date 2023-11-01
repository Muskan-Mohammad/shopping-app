import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

function Message() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }
  const confirmationMessage = localStorage.getItem('Sending message:');
  const handleSendMessage = () => {
    // Handle sending the message here (you can save it to localStorage, send it to the server, etc.)
    // For now, let's save it to localStorage as an example.
   

    // Clear the message input and close the dialog
    setMessage('');
    handleCloseDialog();
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpenDialog}>
        Open Message Dialog
      </Button>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Message Dialog</DialogTitle>
        <Typography>{confirmationMessage}</Typography>
        <DialogContent>
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSendMessage} color="primary">
            Send
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Message;
