function logindd(){
     var email = document.gerElementById('email').value;
     var pwd = document.getElementById('pwd').value;
     
     firebase.auth().signInWithEmailAndPassword(email, pwd).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
     
}
