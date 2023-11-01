const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { userModel, sellerModel } = require('./models/user'); 

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/user" , { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.post("/login" , (req , res) => {
    const {email , password} = req.body;
    userModel.findOne({email:email})
    .then(users => {
        if(users){
            if(users.password === password){
                res.json("Success")
            } else {
                res.json("Passwrod Incorrect ")
            }
        } else {
            res.json("No Such User Found ")
        }
    })
})

app.post('/register' , (req , res) => {
  userModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get('/buyer', async (req, res) => {
    try {
      const allProducts = await sellerModel.find(); // Fetch all products from the database
      res.status(200).json(allProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Error fetching products' });
    }
  });
  

app.post('/buyer', async (req, res) => {
    const data = [req.body]; // Assuming req.body is an array of objects
  console.log(data ,"from server" , data.length + 1)
    try {
      for (const item of data) {
        const newSeller = new sellerModel(item);
        await newSeller.save(); 
      }
      console.log('Data saved successfully');
      res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
    }
  });
  
  
  

app.listen(3001 , () => {
    console.log("Server is running on port ")
});
