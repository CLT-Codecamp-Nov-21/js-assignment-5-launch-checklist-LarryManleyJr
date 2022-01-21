// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");


window.addEventListener("load", function() {
  let list = document.getElementById("faultyItems");
  list.style.visibility = "hidden";
    let form = document.getElementById("the-form");
    form.addEventListener("submit", function(event){ 
      event.preventDefault();
       let pilot = document.querySelector("input[name=pilotName]");
       let copilot = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoLevel = document.querySelector("input[name=cargoMass]");
       console.log(pilot.value);
       console.log(copilot.value);
       console.log(fuelLevel);
       console.log(cargoLevel);
       if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === ""){
           alert("All fields are Required!");
      }
      formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    });

  // let listedPlanetsResponse = myFetch();
   //listedPlanetsResponse.then(function (json) {
    //   console.log(json);
  // })
});