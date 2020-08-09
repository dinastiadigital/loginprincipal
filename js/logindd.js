function logindd(){
     var email = document.getElementById('email').value;
     var pwd = document.getElementById('pwd').value;
     
firebase.auth().createUserWithEmailAndPassword(email, pwd)
  .catch(function(error){
               var errorCode = error.code;
               var errorMessage = error.message;
                    
               console.log(errorCode);
               console.log(errorMessage);
               }
        );
}
