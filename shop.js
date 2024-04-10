var products = document.getElementById('products');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsHPjnJ9eGhaz3e0QKEWKfVJhz30vr1Ho",
    authDomain: "gamingjs-shop.firebaseapp.com",
    databaseURL: "https://gamingjs-shop-default-rtdb.firebaseio.com",
    projectId: "gamingjs-shop",
    storageBucket: "gamingjs-shop.appspot.com",
    messagingSenderId: "663464401020",
    appId: "1:663464401020:web:ccef8032bc554a898a91f9",
    measurementId: "G-Y9MPVNNMXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const packs = JSON.parse(localStorage.getItem('apps'));

const docs = await getDocs(collection(db, "softwares"));

function addGame(doc) {
    var gameinfo = {
        "displayname" : doc.data().displayname,
        "description" : doc.data().description
    };

    var confirminstall = confirm("Install this app?");

    if (confirminstall)
    {
        var apps = {};

        if (localStorage.getItem("apps") !== null) 
        {
            apps = JSON.parse(localStorage.getItem("apps"));
        }
    
        apps[doc.id] = gameinfo;
    
        localStorage.setItem("apps", JSON.stringify(apps));
    }
}

docs.forEach((doc) => {
    var cont = document.createElement('div');
    var appgrid = document.createElement('div');
    var aname = document.createElement('h3');
    var adescription = document.createElement('p');

    cont.className = 'appcontainer';
    appgrid.className = 'appgrid';
    adescription.style.marginLeft = '10px';
    cont.style.width = '500px';

    aname.innerText = doc.data().displayname;

    appgrid.appendChild(aname);
    cont.appendChild(appgrid);
    cont.appendChild(adescription);

    if (packs !== null) {
        if (packs[doc.id] !== null) 
        {
            adescription.innerText = doc.data().description + ` (Downloaded)`;
        } 
        else 
        {
            adescription.innerText = doc.data().description + ` (${doc.data().price} points)`;
            cont.addEventListener('click', function() {
                addGame(doc);
            });
        }
    } else {
        adescription.innerText = doc.data().description + ` (${doc.data().price} points)`;
        cont.addEventListener('click', function() {
            addGame(doc);
        });
    }

    products.appendChild(cont);
});
