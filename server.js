const express = require("express");
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const firebaseConfig = {
    apiKey: "AIzaSyC9mYCDtgw-B5jM4yPoWKIvP3O6Z88AwhA",
    authDomain: "glemtpassord-b9c1d.firebaseapp.com",
    projectId: "glemtpassord-b9c1d",
    storageBucket: "glemtpassord-b9c1d.appspot.com",
    messagingSenderId: "689261225105",
    appId: "1:689261225105:web:b21c73a7bbf2c7b0b44b30"
};

const dbapp = initializeApp(firebaseConfig)
const db = getFirestore(dbapp);
console.log(db);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {
    res.render("login")
})

app.listen("3000", () => {
    console.log("listening 3000");
});