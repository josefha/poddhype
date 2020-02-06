export const addPodcastProfileInfo = async (firebase, data) => {
    var db = firebase.firestore();

    await db.collection("podcast-profiles").add(data)
    console.log("Document written");
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
    var db = firebase.firestore();
    let podcastProfile;
    var querySnapshot = await db.collection("podcast-profiles").where("uid", "==", uid).get()
    querySnapshot.forEach(function (doc) {
        podcastProfile = doc.data()
    });

    if (podcastProfile && podcastProfile.data) {
        return true;
    } else {
        return false;
    }
}

export const getPodcastProfile = async (firebase, user) => {
    let uid = user.uid
    var db = firebase.firestore()
    let podcastProfile
    var querySnapshot = await db.collection("podcast-profiles").where("uid", "==", uid).get()
    querySnapshot.forEach(function (doc) {
        podcastProfile = doc.data()
    });

    if (podcastProfile) {
        return { success: true, profile: podcastProfile };
    } else {
        return { success: false, error: "could not find profile" };
    }

}