var firebaseConfig = {
      apiKey: "AIzaSyBSh7PrletzNLVs0eMmIZzgr1O9MBEmLmk",
      authDomain: "test-e9c4d.firebaseapp.com",
      databaseURL: "https://test-e9c4d-default-rtdb.firebaseio.com",
      projectId: "test-e9c4d",
      storageBucket: "test-e9c4d.appspot.com",
      messagingSenderId: "377786553502",
      appId: "1:377786553502:web:e587286767d95c2e9e578f",
      measurementId: "G-BW32NBE1CC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirect()'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function add_room(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
   localStorage.setItem("room_name",room_name)
   window.location="kwitter_page.html"
}

function log_out(){
      window.location="kwitter.html";
}

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}