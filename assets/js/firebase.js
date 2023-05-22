const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyAD1cXX5MiIBJFh511qs_5grVoUgRAz1zo",
    authDomain: "contactform-3ec25.firebaseapp.com",
    databaseURL: "https://contactform-3ec25-default-rtdb.firebaseio.com",
    projectId: "contactform-3ec25",
    storageBucket: "contactform-3ec25.appspot.com",
    messagingSenderId: "710964784943",
    appId: "1:710964784943:web:ef33a76085b8bff9007bda"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };