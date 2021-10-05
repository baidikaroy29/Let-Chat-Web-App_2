// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNCnXgNL2xxNmaLp3MsIZbExP_yKxr79Q",
    authDomain: "practiceactivity-ff640.firebaseapp.com",
    databaseURL: "https://practiceactivity-ff640-default-rtdb.firebaseio.com",
    projectId: "practiceactivity-ff640",
    storageBucket: "practiceactivity-ff640.appspot.com",
    messagingSenderId: "869136224974",
    appId: "1:869136224974:web:c1824a3bf77d598732769f"
  };

  firebase.initializeApp(firebaseConfig);


  function addUser()
      {
           user_name = document.getElementById("userName").value ;

          firebase.database().ref("/").child(user_name).update({
              purpose:"adding user"
          })
      }
