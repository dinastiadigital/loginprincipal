function logindd(){
     var email = document.getElementById('email').value;
     var pwd = document.getElementById('pwd').value;
     
    firebase.auth().createUserWithEmailAndPassword(email, pwd).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}
