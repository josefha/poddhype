import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

export const putFile = async (name, folder, file) => {
    var storageRef = firebase.storage().ref();
    let ref = storageRef.child(folder + name);
    try {
        await ref.put(file)
        return ref.location.path_
    } catch (error) {
        console.log("putfile error", error)
        return null
    }
}