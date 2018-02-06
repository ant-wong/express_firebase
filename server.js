const express = require('express')
      app = express()
firebase = require("firebase");


app.set('view engine', 'ejs')
app.use(express.static('public'))

// FIREBASE

const config = {
  apiKey: "AIzaSyB1LDDiAPPx1VMdhaU3aS3xKmIkZupXgC4",
  authDomain: "expressblog-2ea6a.firebaseapp.com",
  databaseURL: "https://expressblog-2ea6a.firebaseio.com",
  projectId: "expressblog-2ea6a",
  storageBucket: "expressblog-2ea6a.appspot.com",
  messagingSenderId: "608350661426"
};

const defaultApp = firebase.initializeApp(config);

const defaultDatabase = firebase.database();

console.log(defaultDatabase)



// ROUTES

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.post('/search', (req, res) => {

})





app.listen(3000, () => {
  console.log("Server started on 3000")
})