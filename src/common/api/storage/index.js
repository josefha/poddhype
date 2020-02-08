
export const putFile = async (firebase, name, folder, file) => {
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

export const getFile = async (firebase, path) => {
    console.log(firebase)
    var storageRef = firebase.storage().ref();

    // Create a reference to the file we want to download
    var starsRef = storageRef.child(path);

    // Get the download URL
    try {
        let url = await starsRef.getDownloadURL()
        console.log(url)
        return { success: true, url }
    } catch (error) {
        return { success: false, error: error.code }
    }
}