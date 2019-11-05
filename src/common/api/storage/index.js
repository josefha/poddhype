import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

export const putFile = (name, folder, file) => {
    var storageRef = firebase.storage().ref();
    let ref = storageRef.child(folder + name);

    ref.put(file).then(function (snapshot) {
        console.log('Uploaded file to google cloud');
        return ref
    });

    return null
}