const express = require('express')
const app = express()
const port = process.env.PORT || 3002

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arronabay:Sunshine360&$@cluster0.s1qrw.mongodb.net/shop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect().then(result => console.log("connected to database"), err => console.log(err))

 /*(async () =>
{
 await client.connect();
  const database = client.db("store");
  const collection = database.collection("shoes");
  const result1 = await collection.insertOne({
    "name": "Air Jordan XIII",
    "image": "/Users/arronabay/Code/node/store/frontend/src/images/airjordanx.webp",
    "price": "$200",
    "type": "mens"
  })
  const result2 = await collection.insertOne({
    "name": "Cosmics",
    "image": "/Users/arronabay/Code/node/store/frontend/src/images/cosmic.jpeg",
    "price": "$300",
    "type": "mens"
  })
  const result3 = await collection.insertOne({
    "name": "Lebron 19",
    "image": "/Users/arronabay/Code/node/store/frontend/src/images/Lebron19.webp",
    "price": "$150",
    "type": "mens"
  }) 


})();*/

// This is your test secret API key.
const stripe = require("stripe")('sk_test_51Kle2wIQT4mcOofEePoBTYWUU3LTaJHVhrRBakxZlkfBni1jKTEI1LxA6j1VutdfrbMB5cMjsEZc8bkRiNN1wnNF00YDuUJ9eI');
var PRICE = 0;

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  
  var total = 1;

  if( Object.values(items[0]).length > 0)
  {
    total = 0;
  }
  
  for(var i = 0; i < Object.values(items[0]).length; i++)
  {
    var k = i + 1;
    total += parseInt(eval("items[0].position" + k).price.split('$')[1])
  }


  total = total * 100
  console.log(total);
  return total;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.post('/postprice' , async (req, res) => {

    PRICE = res;

});


app.get("/getfeature1", (req, res) => {
  const database = client.db("store");
  const collection = database.collection("shoes");
  collection.findOne({name:"Air Jordan XIII"}).then(shoe => res.json(shoe));
});

app.get("/getfeature2", (req, res) => {
  const database = client.db("store");
  const collection = database.collection("shoes");
  collection.findOne({name:"Cosmics"}).then(shoe => res.json(shoe));
});

app.get("/getfeature3", (req, res) => {
  const database = client.db("store");
  const collection = database.collection("shoes");
  collection.findOne({name:"Lebron 19"}).then(shoe => res.json(shoe));
});

app.get("/getmensshoes", (req, res) => {
  const database = client.db("store");
  const collection = database.collection("shoes");
  collection.find({type:"mens"}).then(shoe => res.json(shoe));
  });

app.get("/getwomensshoes", (req, res) => {
  const database = client.db("store");
  const collection = database.collection("shoes");
  collection.find({type:"womens"}).then(shoe => res.json(shoe));
  });

app.get("/getkidsshoes", (req, res) => {
  const database = client.db("store");
  const collection = database.collection("shoes");
  collection.find({type:"kids"}).then(shoe => res.json(shoe));
  });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(port, ()=> console.log(`app is listening on port ${port}!`))