import * as firebase from "firebase/app";
import "firebase/firestore";

export const PostBrandEmailSignUp = (data) => {
    var db = firebase.firestore();

    db.collection("brand-email-list").add(data)
        .then(function (docRef) {
            console.log("Document written with");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}