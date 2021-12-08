const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const SigninRoute = require('./routes/signin');
const SignupRoute = require('./routes/signup');
const signWithIDRoute = require('./routes/signinWithID');
const getWatchlistRoute = require('./routes/getWatchlist');
const addWatchlistRoute = require('./routes/addWatchlist');
const checkWatchlistRoute = require('./routes/checkWatchlist');
const removeWatchlistRoute = require('./routes/remoeWatchlist');

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, () => {
    console.log("Connected Successfully to Mongodb")
});

app.use("/",SigninRoute);
app.use("/",SignupRoute);
app.use("/",signWithIDRoute);
app.use("/",getWatchlistRoute);
app.use("/",addWatchlistRoute);
app.use("/",checkWatchlistRoute);
app.use("/",removeWatchlistRoute);


const port = process.env.PORT;
app.listen(port, () => {
    console.log("server Started...@", port);
});
