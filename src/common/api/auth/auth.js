

export const firebaseLogin = async (firebase, email, password) => {
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        return { sucess: true, result }
    } catch (error) {
        return { sucess: false, error }
    }
}