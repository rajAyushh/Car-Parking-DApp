const express = require("express");
const connectDB = require("./db/connectdb");
const cors = require("cors");
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Some constants
const PORT=process.env.PORT || 8000;
const DB_URL=process.env.MONGO_DB_URL||"mongodb://localhost:27017/";


const user_route = require("./routes/userRoute");
const owner_route = require("./routes/ownerRoute");
const transaction_route = require("./routes/transactionRoute");


connectDB(DB_URL);

app.use('/api', user_route)
app.use('/api', owner_route)
app.use('/api', transaction_route)

app.listen(PORT, () => {
  console.log("Server has started at port " + PORT);
});
