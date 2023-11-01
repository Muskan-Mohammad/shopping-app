const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password : String,
    person:String
})

const sellerSchema = new mongoose.Schema({
    id:Number,
    imgs: String,
    title: String,
    reviews: String,
    prevPrice: String,
    newPrice: String,
    company: String,
    color: String,
    category: String,
  });
const userModel = mongoose.model("users" , UserSchema);
const sellerModel = mongoose.model("sellers" , sellerSchema);
module.exports = {userModel , sellerModel};