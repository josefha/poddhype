
export const PostBrandEmailSignUp = (fb, data) => {
    var db = fb.firestore();

    db.collection("brand-email-list").add(data)
        .then(function (docRef) {
            console.log("Document written with");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}