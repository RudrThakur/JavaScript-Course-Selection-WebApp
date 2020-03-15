// firebase initialisation data
var config = {
  apiKey: "AIzaSyCDwUYc8_0YMQooWOz9psFCuMCkNwFEUIw",
  authDomain: "electivekcg.firebaseapp.com",
  databaseURL: "https://electivekcg.firebaseio.com",
  projectId: "electivekcg",
  storageBucket: "electivekcg.appspot.com",
  messagingSenderId: "920949686070"
};

//initialise firebase
firebase.initializeApp(config);

//on document ready
$(document).ready(function(){

  //add event listener of SUBMIT to login form
  document.getElementById("student-login-form").addEventListener("submit",submitloginform);
  
});



//submit login form function to handle login form after submission

function submitloginform(event){

  //prevent default redirection to action page or reloading
  event.preventDefault();

  //get email id from login form
  var loginemail = document.getElementById("email").value;
  //get password from login form
  var loginpassword = document.getElementById("pass").value;

  //create a reference to collection - studentdata
  var rootRef = firebase.database().ref("studentdata");
  
  //create authflag to check authenticity
  var authflag = 0;
  
  //iterate the whole collection - studentdata
  rootRef.on("value",function(snap){
    snap.forEach(function (snapchild){
      //get student email from collection - studentdata
      var emailfromdb = snapchild.val().email;
      //get student password from collection - studentdata
    var passfromdb  = snapchild.val().password; 
    //get student name from collection - studentdata
    var namefromdb  = snapchild.val().name; 

    //check if the credentials match the ones retrieved from collections studentdata
      if(emailfromdb == loginemail && passfromdb == loginpassword){
            // save student data to fill form automatically on login
            localStorage.setItem("name",namefromdb);
            localStorage.setItem("email",emailfromdb);
            //change authflag state to show that credentials are correct
            authflag = 1;
      }
      

    });

//check authenticity of student
    if(authflag ==1){
      
              //show alert success
  
        alert("Login successful");
        alert("Redirecting you to instructions ..");

        //reset login form
       document.getElementById("student-login-form").reset();
        authflag =0;
        //redirect to instructions page
        window.location.href ='instructions.html';
        //prevent reload and redirect to action page
        return false;
    }
    else{
      //show negative alert
        alert("Invalid Credentials");
        //reset authflag  
        authflag = 0;
        //reset login form
        document.getElementById("student-login-form").reset();
        return false;
        
      

    }
    
  });

  


}
