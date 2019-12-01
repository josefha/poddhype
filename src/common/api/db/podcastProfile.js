import * as firebase from "firebase/app";
import "firebase/firestore";

export const addPodcastProfileInfo = (data) => {
    var db = firebase.firestore();

    db.collection("podcast-profiles").add(data)
        .then(function (docRef) {
            console.log("Document written");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}


export const putPodcastProfileInfo = (data) => {
    var db = firebase.firestore();

    db.collection("podcast-profiles-data").add(data)
        .then(function (docRef) {
            console.log("Document written");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

export const PostFeedbackForm = (data) => {
    const date = new Date()
    var db = firebase.firestore();

    db.collection("podcast-feedback-form").add({ ...data, date })
        .then(function (docRef) {
            console.log("Document written");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}