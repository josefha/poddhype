let firebaseConfig = {
    apiKey: process.env.GATSBY_FB_APIKEY,
    authDomain: process.env.GATSBY_FB_AUTHDOMAIN,
    databaseURL: process.env.GATSBY_FB_DATABASEURL,
    projectId: process.env.GATSBY_FB_PROJECTID,
    storageBucket: process.env.GATSBY_FB_STORAGEBUCKET,
    messagingSenderId: process.env.GATSBY_FB_MESSAGINGSENDERID,
    appId: process.env.GATSBY_FB_APPID,
    measurementId: process.env.GATSBY_FB_MEASUREMENTID,
    storageBucket: process.env.GATSBY_FB_STORAGEBUCKET
}

let firebaseInstance
export const getFirebase = firebase => {
    if (firebaseInstance) {
        return firebaseInstance
    }

    firebase.initializeApp(firebaseConfig)
    firebaseInstance = firebase

    return firebase
}
