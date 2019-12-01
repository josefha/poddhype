import * as firebase from "firebase/app";
import "firebase/firestore";

export const PostBrandEmailSignUp = (data) => {
    var db = firebase.firestore();

    console.log("Added brand email to db")
    db.collection("brand-email-list").add(data)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}