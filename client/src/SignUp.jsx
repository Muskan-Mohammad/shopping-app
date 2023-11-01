import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
       Muskan 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

    const [fName , setFName] = React.useState('');
    const [lName , setLName] = React.useState('');
    const [email , setEmail] = React.useState('');
    const [password , setPassword] = React.useState('');
    const [person , setPerson] = React.useState('');

const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
   axios.post('http://localhost:3001/register' ,{ fName , lName,password,email ,person})
   .then(result => {console.log(result)
   toast.success("Signed up successfully")
   navigate('/login')
})
   .catch(err => console.log(err))
   toast.error("Sorry Try Again ")
  };

  return (
    <div>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_85sHt7W2wrhrOSRPNrNfr-0qQPFTItpbhA&usqp=CAU'
       style={{height:'100vh' , width:'220vh' , marginTop:'-30px' , marginLeft:'-140px'}}
       />
       <div style={{marginTop:'-650px' , zIndex:1 , position:'absolute' , marginLeft:'300px'}}>
    <Paper elevation={10} sx={{width:'600px' }}>
    <ThemeProvider theme={defaultTheme}>
     
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <ToastContainer />
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <ToastContainer />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="person"
                  label="Person"
                  name="person"
                  autoComplete="person"
                  onChange={(e) => setPerson(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </Paper>
    </div>
    </div>
  );
}