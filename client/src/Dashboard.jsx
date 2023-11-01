import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { DialogActions, DialogContent } from '@mui/material';

const emails = ['Buyers', 'Sellers' , 'Logout'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const navigate  =useNavigate();
    const handleClose = () => {
      onClose(selectedValue);
      setIsDialogOpen(false);
    };
    
    const handleLogout = () => {
        // Perform the logout action here
        setIsDialogOpen(false);
        navigate('/')
      };
    const handleListItemClick = (email) => {
        if(email == "Buyers"){
          navigate('/buyer')
        } else if(email == "Sellers"){
            navigate('/sell')
        } else {
            setIsDialogOpen(true);
            
        }
      onClose();
    };
    
  return (
    <div>

    
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>DashBoard</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email} sx={{width:'400px'}}>
            <ListItemButton sx={{width:'100px'}} onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar  sx={{ bgcolor: blue[100], color: blue[600] , ml:'100px' }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} sx={{ml:'20px'}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>

<Dialog open={isDialogOpen} onClose={handleClose}>
<DialogTitle>Logout Confirmation</DialogTitle>
<DialogContent>
  <p>Are you sure you want to logout?</p>
</DialogContent>
<DialogActions>
  <Button onClick={handleLogout} color="primary">
    Yes
  </Button>
  <Button onClick={handleClose} color="primary">
    No
  </Button>
</DialogActions>
</Dialog>
</div>
  );
}

export default function Dashboards() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <TableRowsIcon onClick={handleClickOpen} sx={{color:'white' , position:'absolute' , top:'2rem' , left:'2rem'}} />
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}