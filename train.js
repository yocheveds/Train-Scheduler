// 1.Initialize Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCmpVv4Bclqnu8BCihePcAoRlAk4mfkbPw",
    authDomain: "yoyos-project.firebaseapp.com",
    databaseURL: "https://yoyos-project.firebaseio.com",
    projectId: "yoyos-project",
    storageBucket: "yoyos-project.appspot.com",
    messagingSenderId: "331768743296"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Employees
$("#submit-bid").on("click", function(event) {
  event.preventDefault();

// Grabs user input
  var trainName = $("#train-Name-input").val().trim();
  var trainDestination = $("#Destination-input").val().trim();
  var trainstartTime= moment($("#train-time-input").val().trim(), "DD/MM/YY").format("X");
  var trainFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var Trains = {
  name: trainName,
  destination: trainDestination,
  Frequency: trainFrequency
      };
    console.log(Trains);
   
    // Uploads employee data to the database
    database.ref().push(Trains);

   // Logs everything to console
   console.log(Trains.name);
   // console.log(newDestination.destination);
   // console.log(newstartTime.Time);
   // console.log(newFrequency.frequency);

   //Alert
    alert("Train successfully added");

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#startTime-input").val("");
    $("#frequency-input").val("");
  });
  

  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());
  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainstartTime = childSnapshot.val().startTime;
  var trainFrequency = childSnapshot.val().frequency;

  // Employee Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainstartTime);
  console.log(trainFrequency);

  // Prettify the employee start
  var trainStartPretty = moment.unix(trainstartTime).format("MM/DD/YY");
  
  // Calculate the months worked using hardcore math
  // To calculate the months worked
  var trainminute = moment().diff(moment.unix(trainstartTime, "X"), "minute");
  console.log(trainminute);
  // Calculate the total billed rate
  var trainfrequency = trainminute * trainDestination;
  
  console.log($("#train-table").html());


  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + "</td><td>" +
  trainStartPretty + "</td><td>" + trainminute + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td></tr>");
});









//   database.ref().push({
//     name: name,
//     destination: destination,
//      train-time: train-time,
//     frequency: frequency
//   });


// database.ref().on("child_added", function(childSnapshot) {

//       console.log(childSnapshot.val().name);
//       console.log(childSnapshot.val().destination;
//       console.log(childSnapshot.val().first train-time);
//       console.log(childSnapshot.val().frequency);

// var a = $("<tr>");
//       a.append("<td class='info'>" + childSnapshot.val().name + "</td>");
//       a.append("<td class='info'>" + childSnapshot.val().destination + "</td>");
//       a.append("<td class='info'>" + childSnapshot.val().first train-time + "</td>");
//       a.append("<td class='info'>" + childSnapshot.val().frequency + "</td>");
//       a.append("</tr>");
//       $("#employee-info").append(a);

// }, function(errorObject) {
//       console.log("Errors handled: " + errorObject.code);
//     });

//   <!-- Table -->
//   <table class="table">
   




