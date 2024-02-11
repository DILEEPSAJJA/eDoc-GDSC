const firebaseConfig = {
    //   copy your firebase config informations
  apiKey: "AIzaSyBYDCi4PNdYeDpWPUi9RHmHvngtpd-wR6E",
  authDomain: "sample-test-1b75c.firebaseapp.com",
  databaseURL: "https://sample-test-1b75c-default-rtdb.firebaseio.com",
  projectId: "sample-test-1b75c",
  storageBucket: "sample-test-1b75c.appspot.com",
  messagingSenderId: "286128393898",
  appId: "1:286128393898:web:219e5dc83fc79ca1be0ad3",
  measurementId: "G-75H25EJP51"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var subject = getElementVal("subject");
    var message = getElementVal("message");
  
    saveMessages(name, email, subject , message);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, email, subject, message ) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };