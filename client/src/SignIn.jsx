import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       Muskan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const [email , setEmail] = React.useState('');
  const [password , setPassword] = React.useState('');
  const [person , setPerson] = React.useState('');


  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/login', { email, password, person })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          if (person === "Buyer") {
            navigate('/home');
          } else if (person === "Seller") {
            navigate('/sell');
          }
        }
      })
      .catch(err => console.log(err));
      toast.error('Sorry, failed to log in!! Sign In first');
  };
  
  return (
    <ThemeProvider theme={defaultTheme}>
     <img
  src="https://www.henkel.com/resource/image/946964/16x9/1920/1080/9bfca1e4c0193df88f6f9955a70f1c16/F95EF28D2ACBF712E65FC32B4BEB160F/aerospace-industry-growth.webp"
  alt="Aerospace Industry Growth"
  style={{ height: '130vh', width: '340vh', marginLeft:'-1000px' , marginTop:'-40px' }}
/>

      <div style={{marginTop:'-800px'}}>
          <Box
            sx={{
              my: 8,
              ml:'900px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width:'400px'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" href='/home'>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
               <ToastContainer />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
               
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="person"
                label="Person"
                type="person"
                id="person"
                
                onChange={(e) => setPerson(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
             
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </div>
      
    </ThemeProvider>
  );
}