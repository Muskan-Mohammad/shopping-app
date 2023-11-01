import { Button, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Mycart(e) {
   
    // Save data to local storage
  
    const navigate = useNavigate();
    
    const handleNext = () => {
     
      navigate('/sell');
    }; 

    const handleCinfirmation = () => {
        localStorage.setItem('orderConfirmation', 'Your order has been confirmed!');
        toast.success("Order is confirmed successfully!!!")
    };
    const confirmationMessage = localStorage.getItem('orderConfirmation');
//   const order = console.log("Order has been Corfirmed!!!!! Successfully")
//   localStorage.setItem('Order has been Corfirmed!!!!! Successfully' ,JSON.stringify(order));
    const storedProducts = JSON.parse(localStorage.getItem('datas'));
    const storedTotalAmount = parseFloat(localStorage.getItem('totalAmounts'));
//     const finalConfirmation = JSON.parse(localStorage.getItem('Order has been Corfirmed!!!!! Successfully'));

  console.log(confirmationMessage , storedProducts);
    
    return (
      <div style={{ width: '600px', border: '2px solid black', padding: '40px' }}>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        {storedProducts && storedProducts.length > 0 ? (
          <>
            <List disablePadding>
              {storedProducts.map((product) => (
                <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
                  <ListItemText primary={product.title} />
                  <Typography variant="body2">${product.newPrice}</Typography>
                </ListItem>
              ))}
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  ${storedTotalAmount}
                </Typography>
              </ListItem>
            </List>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Shipping
                </Typography>
                <Typography gutterBottom>'Muskan'</Typography>
                <Typography gutterBottom>'Bahnavi nagar , xyz colony'</Typography>
              </Grid>
              <Grid item container direction="column" xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Payment details
                </Typography>
                You Have received your payment Successfully
              </Grid>
              <ToastContainer />
              <Button
                variant="contained"
                onClick={handleCinfirmation}
                sx={{ mt: 3, ml: 1 }}
              >
                Order Confirmed
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
               Go Back
              </Button>
            </Grid>
          </>
        ) : (
          <div>
            <Typography variant="h6" gutterBottom>
              Oops sorry !!!You have received no orders yet.
            </Typography>
          </div>
        )}
      </div>
    );
        }    


