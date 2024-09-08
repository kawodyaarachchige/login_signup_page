import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { firebaseConfig } from './authDetails.js'; // Ensure firebaseConfig is correctly exported from firebaseConfig.js

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create an auth instance
const auth = getAuth(app);

// Signup function
document.getElementById('signup-btn').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            alert('User created successfully');
            document.getElementById('login-btn').click(); // Simulate login button click or navigate to login
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
});

// Login function
document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Logged in successfully
            const user = userCredential.user;
            alert('User logged in successfully');
            // Redirect to the dashboard or another page
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
});
