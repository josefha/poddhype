import * as firebase from "firebase/app";
import "firebase/firestore";

export const addPodcastProfileInfo = (data) => {
    var db = firebase.firestore();
    console.log("Added podcast title and name to db")
    db.collection("podcast-profiles").add(data)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}


export const putPodcastProfileInfo = (data) => {
    var db = firebase.firestore();

    console.log("Added podcast data to db")
    db.collection("podcast-profiles-test").add(data)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

export const PostFeedbackForm = (data) => {
    const date = new Date()
    var db = firebase.firestore();
    console.log("adding feedback")

    console.log("Added brand email to db")
    db.collection("podcast-feedback-form").add({ ...data, date })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}