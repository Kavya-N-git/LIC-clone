let express = require('express');
let app = express();
let dotenv = require('dotenv')
dotenv.config()
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let MongoUrl =process.env.MongoURL;
//let MongoUrl =process.env.LiveMongo;
let db;

app.get('/',(req,res)=>{
    res.send('hii from express')
})

//customer_portal details
app.get('/customer_portal',(req,res)=>{
    db.collection('customer_portal').find().toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//premium_payment
app.get('/premium_payment',(req,res)=>{
    db.collection('premium_payment').find().toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//product details
app.get('/products',(req,res)=>{
    db.collection('products').find().toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//db connection
MongoClient.connect(MongoUrl, (err, client)=>{
    if (err) console.log('error while connection');
    db=client.db('testdata');
    app.listen(port,()=>{
      console.log(`server ${port}`)
  })
  })