//Initialise firebase
var config = {
  apiKey: "AIzaSyCDwUYc8_0YMQooWOz9psFCuMCkNwFEUIw",
  authDomain: "electivekcg.firebaseapp.com",
  databaseURL: "https://electivekcg.firebaseio.com",
  projectId: "electivekcg",
  storageBucket: "electivekcg.appspot.com",
  messagingSenderId: "920949686070"
};
firebase.initializeApp(config);

//reference to elective data collections
var availRef = firebase.database().ref("subjectavail");

$(document).ready(function(){
  var electivesub = "";

//default option 
  $("#department").change(function(){

    if ($("#department").val()== "Choose Your Department..")
  {
    $("#defualt-elective").show();
  }
  else{
    $("#default-elective").hide();
  }
});

  //cse department availability

  $("#department").change(function(){

    if ($("#department").val()== "CSE")//CSE Department
  {
    $("#cseelective").val("Choose Your Subject..");
    $("#cse").show();
    $("#avail").hide();
    $("#cseelective").change(function(){
      electivesub = $("#cseelective").val();
    availRef.on("value", function(snap){
      snap.forEach(function(snapchild){

       var subjectcodefromdb =  snapchild.val().subjectcode;
       var availfromdb = snapchild.val().availability;
       var subjectfromdb = snapchild.val().subject;
       if(electivesub == subjectfromdb){
         $("#avail").show();
         $("#avail").html("Availability:"+availfromdb+" seats out of 60 seats");
       }
      
         
       

      });
    });

    });
  
 
     //alert(electivesub);
    }

  
  else{
    $("#cse").hide();

  }
});

//IT DEPARTMENT Availability
$("#department").change(function(){

  if ($("#department").val()== "IT")//IT Department
{
  $("#itelective").val("Choose Your Subject..");
  $("#it").show();
  $("#avail").hide();
  $("#itelective").change(function(){
    electivesub = $("#itelective").val();
  availRef.on("value", function(snap){
    snap.forEach(function(snapchild){

     var subjectcodefromdb =  snapchild.val().subjectcode;
     var availfromdb = snapchild.val().availability;
     var subjectfromdb = snapchild.val().subject;
     if(electivesub == subjectfromdb){
       $("#avail").show();
       $("#avail").html("Availability:"+availfromdb+" seats out of 60 seats");
     }
    
       
     

    });
  });

  });


   //alert(electivesub);
  }


else{
  $("#it").hide();


}
});


$("#department").change(function(){

    if ($("#department").val()== "ECE")//ECE Department
  {
    $("#eceelective").val("Choose Your Subject..");
    $("#ece").show();
    $("#avail").hide();
    $("#eceelective").change(function(){
      electivesub = $("#eceelective").val();
    availRef.on("value", function(snap){
      snap.forEach(function(snapchild){
  
       var subjectcodefromdb =  snapchild.val().subjectcode;
       var availfromdb = snapchild.val().availability;
       var subjectfromdb = snapchild.val().subject;
       if(electivesub == subjectfromdb){
         $("#avail").show();
         $("#avail").html("Availability:"+availfromdb+" seats out of 60 seats");
       }
      
         
       
  
      });
    });
  
    });
  }
  else{
    $("#ece").hide();
  }
});

$("#department").change(function(){

    if ($("#department").val()== "EIE")//EIE Department
  {
    $("#eieelective").val("Choose Your Subject..");
    $("#eie").show();
    $("#avail").hide();
    $("#eieelective").change(function(){
      electivesub = $("#eieelective").val();
    availRef.on("value", function(snap){
      snap.forEach(function(snapchild){
  
       var subjectcodefromdb =  snapchild.val().subjectcode;
       var availfromdb = snapchild.val().availability;
       var subjectfromdb = snapchild.val().subject;
       if(electivesub == subjectfromdb){
         $("#avail").show();
         $("#avail").html("Availability:"+availfromdb+" seats out of 60 seats");
       }
      
         
       
  
      });
    });
  
    });
  }
  else{
    $("#eie").hide();
  }
});

$("#department").change(function(){

    if ($("#department").val()== "AERO")//AERO Department
  {
    $("#aeroelective").val("Choose Your Subject..");
    $("#aero").show();
    $("#avail").hide();
    $("#aeroelective").change(function(){
      electivesub = $("#aeroelective").val();
    availRef.on("value", function(snap){
      snap.forEach(function(snapchild){
  
       var subjectcodefromdb =  snapchild.val().subjectcode;
       var availfromdb = snapchild.val().availability;
       var subjectfromdb = snapchild.val().subject;
       if(electivesub == subjectfromdb){
         $("#avail").show();
         $("#avail").html("Availability:"+availfromdb+" seats out of 60 seats");
       }
      
         
       
  
      });
    });
  
    });
  }
  else{
    $("#aero").hide();
  }
});

$("#department").change(function(){

    if ($("#department").val()== "CIVIL")//CIVIL Department
  {
    $("#civilelective").val("Choose Your Subject..");
    $("#civil").show();
    $("#avail").hide();
    $("#civilelective").change(function(){
      electivesub = $("#civilelective").val();
    availRef.on("value", function(snap){
      snap.forEach(function(snapchild){
  
       var subjectcodefromdb =  snapchild.val().subjectcode;
       var availfromdb = snapchild.val().availability;
       var subjectfromdb = snapchild.val().subject;
       if(electivesub == subjectfromdb){
         $("#avail").show();
         $("#avail").html("Availability:"+availfromdb+" seats out of 60 seats");
       }
      
         
       
  
      });
    });
  
    });
  }
  else{
    $("#civil").hide();
  }
});

$("#department").change(function(){

    if ($("#department").val()== "EEE")//EEE Department
  {
    $("#eeeelective").val("Choose Your Subject..");
    $("#eee").show();
    $("#avail").hide();
    $("#eeeelective").change(function(){
      electivesub = $("#eeeelective").val();
    availRef.on("value", function(snap){
      snap.forEach(function(snapchild){
  
       var subjectcodefromdb =  snapchild.val().subjectcode;
       var availfromdb = snapchild.val().availability;
       var subjectfromdb = snapchild.val().subject;
       if(electivesub == subjectfromdb){
         $("#avail").show();
         $("#avail").html("Availability:"+availfromdb+" seats out of 60 seats");
       }
      
         
       
  
      });
    });
  
    });
  }
  else{
    $("#eee").hide();
  }
});

$("#department").change(function(){

    if ($("#department").val()== "MECH")//MECH Department
  {
    $("#mechelective").val("Choose Your Subject..");
    $("#mech").show();
    $("#avail").hide();
    $("#mechelective").change(function(){
      electivesub = $("#mechelective").val();
    availRef.on("value", function(snap){
      snap.forEach(function(snapchild){
  
       var subjectcodefromdb =  snapchild.val().subjectcode;
       var availfromdb = snapchild.val().availability;
       var subjectfromdb = snapchild.val().subject;
       if(electivesub == subjectfromdb){
         $("#avail").show();
         $("#avail").html("Availability:"+availfromdb+" seats out of 60 seats");
       }
      
         
       
  
      });
    });
  
    });
  }
  else{
    $("#mech").hide();
  }
});



//load student data from localstorage
$("#email").val(localStorage.getItem("email"));
$("#studentname").val(localStorage.getItem("name"));

//listen to submission of elective form
document.getElementById("electiveform").addEventListener("submit",submitelectiveform);

});

//reference to elective data collections
var electiveRef = firebase.database().ref("electivedata");


var existingflag = 0;
// Submit the elective form
function submitelectiveform(event){

event.preventDefault();


var elective ="";
var studentname = $("#studentname").val();//get students name
var department = $("#department").val();//get department
var email = $("#email").val();//get email id
var registernumber = $("#registernumber").val();//get register number
var contact = $("#contact").val();

if (department == "CSE"){
  elective = $("#cseelective").val();//get cse elective value
  $("#electivesubject").val(elective);
}
if (department =="IT"){
  elective = $("#itelective").val();//get cse elective value
  $("#electivesubject").val(elective);
}
if(department == "ECE"){
  elective = $("#eceelective").val();//get ece elective value
  $("#electivesubject").val(elective);
}
if(department == "EIE"){
  elective = $("#eieelective").val();//get eie elective value
  $("#electivesubject").val(elective);
}
if(department == "AERO"){
  elective = $("#aeroelective").val();//get aero elective value
  $("#electivesubject").val(elective);
}
if(department == "CIVIL"){
  elective = $("#civilelective").val();//get civil elective value
  $("#electivesubject").val(elective);
}
if(department == "EEE"){
  elective = $("#eeeelective").val();//get eee elective value
  $("#electivesubject").val(elective);
}
if(department == "MECH"){
  elective = $("#mechelective").val();//get mech elective value
  $("#electivesubject").val(elective);
}




//create reference to collection - subjectavail
var checkavailRef = firebase.database().ref("/subjectavail/" + elective);

//read values once 
checkavailRef.once('value').then(function(snapshot) {

  
  //get availability of the selected subject
  var availfromdb = snapshot.val().availability;
  
  //check if seats are available
  if(availfromdb >0)
  {
    
    var checkstudent = firebase.database().ref("electivedata");
    
    checkstudent.once("value",function (snapshot){
      
      snapshot.forEach(function(snap){

        var existingstudent = snap.val().studentname;
      
        //if student data already exists 
        if (existingstudent == studentname){
          existingflag = 1;

        }

      });

      if(existingflag ==1){
        alert("Sorry ! you have already registered. Kindly close the application ");
        //clear localstorage
        localStorage.clear();
        //redirect to index page
        window.location.href ='index.html';
        return false;
      }

      else{

        
                    //push student data to collection - electivedata
                    electiveRef.push({
                      "studentname" :studentname,
                      "registernumber":registernumber,
                      "department": department,
                      "email": email,
                      "contact":contact,
                      "elective":elective
                    });
                    
                    //decrement availability
                    var newavailvalue = availfromdb - 1;
                
                    //reference to collection - subjectavail
                    var updateavailRef = firebase.database().ref("/subjectavail/" + elective);
                    // update availability
                    updateavailRef.update({availability:newavailvalue});
                
                      //show success alert to student
                      alert("Your details have been saved .");
                      alert("Thank you for your time");
                
                      //clear localstorage
                      localStorage.clear();
                      //redirect to index page
                      window.location.href ='index.html';
                      return false;



      }




     

 });
}


  else
  {
    console.log("subject not available");
    alert("Sorry seats are full ! This subject is not available");
  }


});

//end of event handler
}