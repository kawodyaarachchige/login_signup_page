//firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDDlzwS4_pNHOoL4tQdeChtqb72WgHFgs0",
    authDomain: "simpleauthentication-9e62b.firebaseapp.com",
    projectId: "simpleauthentication-9e62b",
    storageBucket: "simpleauthentication-9e62b.appspot.com",
    messagingSenderId: "844106200976",
    appId: "1:844106200976:web:de5eabcf31164e5270e515"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);


//create a auth instance
const auth = firebase.auth();


//signup function
document.getElementById('signup-btn').addEventListener('click', (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        alert('user created');
        document.getElementById('login-btn').click()
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })
});


//login function
document.getElementById('login-btn').addEventListener('click',(e) => {
    console.log('clicked');
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    auth.signInWithEmailAndPassword(email, password).then(() => {
        alert('user logged ');
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })

});

