const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7k1zdza.mongodb.net/?retryWrites=true&w=majority`;


//middleware
app.use(express.json());
app.use(cors());

app.get('/',async (req,res) => { 
  res.send("Test Server is runnig well!")
 })



 // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    //collection
    const userColl = client.db('jwt-test').collection('users');
 
    //auth related route
  app.post('/jwt', async (req, rea ) => { 
    const email = req.body;
    const token =await jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
    console.log(token)
    res.send(token)
   })

  app.get('/', async (req,res) => { 
    const result = await userColl.find().toArray();
    res.send(result);
   })
  
  app.post('/',async (req,res) => { 
    const user = req.body;
    const result = await userColl.insertOne(user);
    res.send(result)
   })
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(port, () => { 
  console.log(`server is runnig on port: ${port}`)
 })