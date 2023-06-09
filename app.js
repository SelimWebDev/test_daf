const express = require('express');
const mongoose = require('mongoose');
const subscriptionRoutes = require('./routes/subscription');

mongoose.connect("mongodb+srv://masterp6:passwordp6@cluster0.ck76z.mongodb.net/daf_db?retryWrites=true&w=majority")
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => console.log(error));

const app = express();

app.use((req, res, next) => {                   
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
  
app.use('/subscription', subscriptionRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('erreur serveur')
})

module.exports = app;