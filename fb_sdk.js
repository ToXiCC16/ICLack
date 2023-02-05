<body> 
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  import { getAuth } from "firebase/auth"; 

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDM7TC3aARFieg-34N92vM8TWUbN8PHUo4", 
    authDomain: "ichack-587c0.firebaseapp.com",
    projectId: "ichack-587c0",
    storageBucket: "ichack-587c0.appspot.com",
    messagingSenderId: "809773180643",
    appId: "1:809773180643:web:f5a38daa078f190a2387d6",
    measurementId: "G-T50F6061K9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app); 

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) { 
    var user = userCredential.user;
    })
  .catch((error) {
    identity()}
    var errorCode = error.code; 
    var errorMessage = error.message;)  

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) {
    identity()}
    var user = userCredential.user;)
  .catch((error) {
    identity()}
    var errorCode = error.code; 
    var errorMessage = error.message;)
</script>
</body> 