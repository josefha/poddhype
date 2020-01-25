import { async } from "q";

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


export const putPodcastProfileInfo = (firebase, data, uid) => {
    var db = firebase.firestore();

    db.collection("podcast-profiles").where("uid", "==", uid)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
                // Build doc ref from doc.id
                db.collection("podcast-profiles").doc(doc.id).update({ data });
            });
        })
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

export const signupIsCompleted = async (firebase, uid) => {
    console.log("CHECK", uid)

    var db = firebase.firestore();
    let podcastProfile;
    var querySnapshot = await db.collection("podcast-profiles").where("uid", "==", uid).get()
    console.log(querySnapshot)
    querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
        podcastProfile = doc.data()
    });

    console.log(podcastProfile)
    if (podcastProfile && podcastProfile.data) {
        return true;
    } else {
        return false;
    }


}