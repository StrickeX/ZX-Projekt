$(document).ready(function(){firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $('#b3').hide();
    $('#b4').show();
    home();
  } else {
    // No user is signed in.
    $('#b4').hide();
    $('#b3').show();
  }
});
});


//Create new Account
create = function(){
	var vname = $('#vname').val();
	var nname = $('#nname').val();
	var email = $('#email-create').val();
	var password = $('#pw-create').val();
if(email != "" && password != "" && vname != "" && nname != ""){
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});

var firebaseRef = firebase.database().ref();
firebaseRef.child("geht").set("huhu");
}
}


//Sign in Authentification
submit = function(){

var email = $('#email-in').val();
var password = $('#pw-in').val();

if(password != "" && email != ""){
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
		});
	};	
}


//Sign out 
signout = function(){
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});
}


// hide, show, switch login and register
log = function(){
document.getElementById("container-reg").style.display = "none";
$('#main').addClass('blur');
$('#cover').addClass('cover'); 
document.getElementById("container-log").style.display = "flex";
}
reg = function(){
document.getElementById("container-log").style.display = "none";
document.getElementById("container-reg").style.display = "flex";
}

back = function(){
document.getElementById("container-reg").style.display = "none";
document.getElementById("container-log").style.display = "flex";
}

home = function(){
	document.getElementById("container-reg").style.display = "none";
	document.getElementById("container-log").style.display = "none";
	$('#main').removeClass('blur');
	$('#cover').removeClass('cover');
}