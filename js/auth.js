import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.loginUser = async function(){

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

if(!email || !password){
alert("Please enter email and password");
return;
}

try{

await signInWithEmailAndPassword(auth, email, password);

// ✅ Firebase handles session automatically
window.location.replace("dashboard.html");

}
catch(error){

console.error("Login Error:", error.message);

if(error.code === "auth/user-not-found"){
alert("User not found");
}
else if(error.code === "auth/wrong-password"){
alert("Wrong password");
}
else{
alert("Login failed: " + error.message);
}

}

};
