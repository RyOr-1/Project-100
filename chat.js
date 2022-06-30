// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAOV2Ad4EfVjcIuG-UMK9pFV_fucAN5L0o",
    authDomain: "chat-app-574cb.firebaseapp.com",
    databaseURL: "https://chat-app-574cb-default-rtdb.firebaseio.com",
    projectId: "chat-app-574cb",
    storageBucket: "chat-app-574cb.appspot.com",
    messagingSenderId: "829082991893",
    appId: "1:829082991893:web:a2751f53d2dbd5531b3d1c",
    measurementId: "G-3BWXSMRYBX"
  };
  
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    console.log(user_name)
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



