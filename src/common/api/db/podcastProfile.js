
export const addPodcastProfileInfo = (firebase, data) => {
    var db = firebase.firestore();

    db.collection("podcast-profiles").add(data)
        .then(function (docRef) {
            console.log("Document written");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}


export const putPodcastProfileInfo = (firebase, data) => {
    var db = firebase.firestore();

    db.collection("podcast-profiles-data").add(data)
        .then(function (docRef) {
            console.log("Document written");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

export const PostFeedbackForm = (firebase, data) => {
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