import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider , useTheme } from '@mui/material/styles';
import { Avatar, Card, CardContent, CardMedia, Rating } from '@mui/material';
import Dashboards from './Dashboard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const items = [
    {
      label: 'John Doe',
      avatar:'https://source.unsplash.com/random?wallpapers',
      rating: 4,
      description: `I'm consistently impressed with the quality and reliability of the aerospace products from this website. The products have not only met but exceeded our expectations in terms of performance and durability. The customer service is exceptional, making every purchase a smooth and satisfying experience.`,
    },
    {
        label: 'Lara Davis',
        avatar:'https://source.unsplash.com/random?wallpapers',
        rating: 4.5,
        description: `As an aerospace enthusiast, this website has become my go-to destination for sourcing high-grade components. Their vast product selection, competitive pricing, and detailed product information make it easy to find exactly what I need. It's a trusted resource for professionals and hobbyists alike.`,
      },
      {
        label: 'Polly Simpson',
        avatar:'https://source.unsplash.com/random?wallpapers',
        rating: 5,
        description: `The aerospace products from this website are a game-changer. They've significantly improved the efficiency and safety of our operations. The quick shipping and responsive customer support have been a huge bonus. I wholeheartedly recommend this site to anyone in the aerospace industry.`,
      },
      {
        label: 'Carrie Kim',
        avatar:'https://source.unsplash.com/random?wallpapers',
        rating: 4,
        description: `I've been a loyal customer for years, and this website has never let me down. The extensive range of aerospace products and the ability to find rare or hard-to-source items is impressive. The quality is consistently top-notch, and the pricing is competitive. I appreciate their dedication to the aerospace community`,
      },
      {
        label: 'Bella Hadid',
        avatar:'https://source.unsplash.com/random?wallpapers',
        rating: 5,
        description:`This website is the epitome of excellence in the aerospace industry. The products are technologically advanced, and they stand behind their quality with excellent warranties and guarantees. The comprehensive product descriptions and documentation make it easy to choose the right components. It's a one-stop-shop for all aerospace needs.`,
      },
  ];
function Copyright() {
  return (
    <div
  style={{
    background: 'black',
    width: '140%',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '-7rem',
    marginLeft:'-10rem'
  }}
>
  <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
    {'Copyright © '}
    <Link color="inherit">Muskan</Link> {new Date().getFullYear()}
    {'.'}
  </Typography>
</div>

  );
}


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  return (
   <div>
      <Box sx={{ width: '93rem',height:'5rem' , backgroundColor: 'black' , mt:'-1.9rem' , ml:'-7rem' }}></Box>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
            <Dashboards />
            <ImageCarousel />
          <Container sx={{marginTop:'-750px'}} >
        
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Ziegler Aerospace
            </Typography>
            <Typography variant="h5" >
            Ziegler Aerospace is an ingenious Aerospace company offering a unique range of engineering services for airlines,
             MROs, and regulatory organisations. Our innovative solutions are tailored to meet the specific needs of our clients 
             in the aerospace industry.
<br/> <br/> <br/>
             At ZA Strength, we pride ourselves on our team of experts who possess extensive knowledge and experience in the aviation industry.
              Our team is fully equipped to provide a comprehensive range of services, including design and planning, production and installation,
               maintenance, repair, and certification of both minor and major (STC) aircraft modifications. Our expertise spans across a variety of areas, 
               including interiors, avionics, and structures.
            </Typography>
          </Container>
        </Box>
        <SwipeableTextMobileStepper />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
      </div>
  );
}

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = items.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    function handleStepChange(step) {
        setActiveStep(step);
      }
      
  
    return (
      <Box sx={{ maxWidth: 1000, flexGrow: 1 , mt:'29rem' , ml:'11rem'}}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
         
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
        {items.map((item, index) => (
        <Card key={index}>
         
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {item.label}
            </Typography>
            <Avatar alt="User Avatar" src={item.avatar} />
            <Typography component="legend">Rating</Typography>
            <Rating name={`rating-${index}`} value={item.rating} readOnly />
            <Typography variant="body2" color="textSecondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    );
  }


  function ImageCarousel() {
    return (
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showArrows={false}
        showThumbs={false}
      >
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZ_XkigNYmGBAneO8bPKjrEG5OEydYxP2fA&usqp=CAU" alt="Image 2"
            style={{
              width: '90vw', // Full width of the viewport
              opacity: 0.4,
              marginBottom:'-100px'    // Opacity value (adjust as needed)
            }}
          />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdR3OZzux1AJ2ZdPkRdSw8RGEhIFDmyMnhadaecxh7SI0d5JBUpUKkqbPoK0Rt2P5WdgA&usqp=CAU" alt="Image 3"
            style={{
              width: '90vw', // Full width of the viewport
              opacity: 0.4,    // Opacity value (adjust as needed)
            }}
          />
        </div>
       
        <div>
        <img
  src="https://img.freepik.com/free-photo/metallic-propeller-turning-inside-modern-airplane-engine-generated-by-ai_188544-25351.jpg"
  alt="Image 3"
  style={{
    width: '90vw', // Full width of the viewport
    opacity: 0.4,    // Opacity value (adjust as needed)
  }}
/>

        </div> 
      </Carousel>
    );
  }
  
 
  