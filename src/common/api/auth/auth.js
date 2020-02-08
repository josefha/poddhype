

export const firebaseLogin = async (firebase, email, password) => {
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        return { sucess: true, result }
    } catch (error) {
        console.log(error)
        return { sucess: false, error: "Felaktig email eller lösenord" }
    }
}