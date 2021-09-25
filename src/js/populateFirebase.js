   
const appointmentList = require("../js/component/Data");
const firebase = require("firebase");
const { promise } = require("remote-origin-url");
const fetch = require ("node-fetch")
require("firebase/firestore")

var firebaseConfig = {}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const populateFirebase=(collectionName, items)=>{
    return Promise.all(
        items && items.map((item)=>{
            const {id,...data}= item;
            return db.collection(collectionName).doc(id).set(data)
        })
    )

}
Promise.all([
    populateFirebase("appointmentList",appointmentList)
]).then(()=> {
    console.log("done")
    process.exit(0)
}).catch ((err)=> console.log(err))