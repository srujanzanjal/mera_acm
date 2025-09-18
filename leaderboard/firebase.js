
const firebaseConfig = {
apiKey: "AIzaSyA4OM117mh29OMMC4nNrAPWN5ImcXrARYI",
    authDomain: "leaderboard-2k25.firebaseapp.com",
    projectId: "leaderboard-2k25",
    storageBucket: "leaderboard-2k25.firebasestorage.app",
    messagingSenderId: "123572322518",
    appId: "1:123572322518:web:254490eeac100ac42b0977"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();