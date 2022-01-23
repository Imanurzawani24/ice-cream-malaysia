import express from "express";

const app = express();
const port = 3000; 
const PUBLISHABLE_KEY = "pk_test_51KKyWdJqlMxi2EGPhvtPS8EU3cfS0BszZDQzSchA0nWd1MJx69V1SAdOH9B5JOliR2pSdu7NGKfTe3wJ7Ot4jfh500TAKoJ1dv";
const SECRET_KEY = "sk_test_51KKyWdJqlMxi2EGPvK0yRIfZzwx2ivOyRY2qxTKXl139D0LIt1BB42eCJVaZrrCnBQ61tR2UYGitlLdPgSzRMTWj00xtScMUOm";
import Stripe from "stripe";


const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.0.179:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000, //lowest denomination of particular currency
      currency: "myr",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});