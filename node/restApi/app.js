const mongoose = require('mongoose');
const morgan=require('morgan');
const express = require('express');


let app = express();

const LiveUrl='mongodb+srv://test:test123@cluster0.pmiyo3t.mongodb.net/testdata?retryWrites=true&w=majority'

//for localDB
//let dotenv = require('dotenv')
//dotenv.config()
//let port = process.env.PORT || 9800;
//let mongo = require('mongodb');
//let MongoClient = mongo.MongoClient;
//let MongoUrl =process.env.MongoURL;
//let MongoUrl =process.env.LiveMongo;*/
let db;

app.get('/',(req,res)=>{
    res.send('hii from express')
})

/*app.get('/products',(req,res)=>{
    console.log("hello i'm plan details");
    res.send("hello ")
});*/


//customer_portal details
app.get('/customer_portal',(req,res)=>{
    db.collection('customer_portal').find().toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})


/*//premium_payment
app.get('/premium_payment',(req,res)=>{
    testdata.collection('premium_payment').find().toArray((err, result)=>{
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
})*/

//db connection with atlas
mongoose.connect(LiveUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected");
}).catch((err)=>console.log(err));
app.listen(9800,()=>{
    console.log("app running at port 9800")
})

//db connection with localDb
/*MongoClient.connect(MongoUrl, (err, client)=>{
    if (err) console.log('error while connection');
    db=client.db('testdata');
    app.listen(port,()=>{
      console.log(`server ${port}`)
  })
  })*/