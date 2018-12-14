
  var config = {
    apiKey: "AIzaSyCfxlTQY9fqwadZJEpHBp0XONValgx4yGs",
    authDomain: "contact-form-d3a86.firebaseapp.com",
    databaseURL: "https://contact-form-d3a86.firebaseio.com",
    projectId: "contact-form-d3a86",
    storageBucket: "contact-form-d3a86.appspot.com",
    messagingSenderId: "829325617158"
  };
  firebase.initializeApp(config);

function upload(){

    var database = firebase.database();
    var ref = database.ref("Contact");
    
    var fname = document.querySelector("#first name").value;
    var lname = document.querySelector("#last name").value;
    var email = document.querySelector("#email").value ;
    var subject = document.querySelector("#subject").value ;

    
    var contact ={
        fname : fname,
        lname: lname,
        email: email,
        subject : subject,
        
    
    };
    
    
    ref.push(contact);
    
    // initialisation
    document.querySelector("#fname").value = "";
    document.querySelector("#lname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#subject").value = "";
    
    }
    