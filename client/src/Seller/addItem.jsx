import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { shopContext } from '../Products/Redux';

const AddItem = () => {
  const {products} = useContext(shopContext);
  const [product, setProduct] = useState({
    imgs: '',
    title: '',
    reviews: '',
    prevPrice: '',
    newPrice: '',
    company: '',
    color: '',
    category: '',
    id:29
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const productArray = [product]; // Wrap the product object in an array
    // console.log("Products" , productArray);
    
    axios.post('http://localhost:3001/buyer', product)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        toast.success("From was Submitted Successfully!!!");
        const updatedData = [...products, { ...product, id: data.length + 1 }];
          console.log("Updated Data:", updatedData);

      })
      .catch((error) => {
        console.error('Error sending data:', error);
        toast.error("Form wasn't submit !! Check Your From Inputs")
      });
  };
  

  return (
    <Paper elevation={3} style={{ padding: '16px' , width:'700px' }}>
      <Typography variant="h6" gutterBottom>
        Add a New Product
      </Typography>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="imgs"
              label="Image URL"
              fullWidth
              value={product.imgs}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="title"
              label="Title"
              fullWidth
              value={product.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="reviews"
              label="Reviews"
              fullWidth
              value={product.reviews}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="id"
              label="ID"
              fullWidth
              value={product.id}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="prevPrice"
              label="Previous Price"
              fullWidth
              value={product.prevPrice}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="newPrice"
              label="New Price"
              fullWidth
              value={product.newPrice}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="company"
              label="Company"
              fullWidth
              value={product.company}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="color"
              label="Color"
              fullWidth
              value={product.color}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="category"
              label="Category"
              fullWidth
              value={product.category}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{marginTop:'20px'}}>
          Add Product
        </Button>
      </form>
    </Paper>
  );
};

export default AddItem;




