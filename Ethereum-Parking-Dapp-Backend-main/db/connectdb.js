
const mongoose=require('mongoose');
const connectDB = async (DB_URL) => {
 try {
  const DB_OPTIONS = {
   dbName: 'newDB',
  }
  await mongoose.connect(DB_URL, DB_OPTIONS);
  console.log('Connected Successfully..');
 } catch (err) {
  console.log(err);
 }
}
module.exports=connectDB;