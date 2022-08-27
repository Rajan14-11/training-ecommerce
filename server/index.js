 const express = require("express");
const app = express();
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors");
const { faArrowTrendUp } = require("@fortawesome/free-solid-svg-icons");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.post("/payment",cors(), async (req, res) => {
  let{amount,id} = req.body
  try{
    const payment = await stripe.paymentIntents.create({
      amount,
      currency:'USD',
      description:"Ecommerce",
      payment_method:id,
      confirm:true
    })
    console.log("Payment",payment)
    res.json({
      message:"payment successful",sucess:faArrowTrendUp
    })
  }

  catch(error){
    console.log("Error",error)
    res.json({
      message:"payment failed",
      success:false
    })
  }

});

app.listen(process.env.PORT || 4000 , () => console.log("Running on port 4242"));
