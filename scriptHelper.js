// Write your helper functions here!
try{
    require('isomorphic-fetch');
} catch (e){
    //do nothing
}


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === "") {
       return "Empty";
   } else if (isNaN(Number(testInput))){
       return "Not a Number";
   } else{
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const inputsValue = [pilot, copilot, fuelLevel, cargoLevel];
   for (let i = 0; i < inputsValue.length; i++){
       if (validateInput(inputsValue[i]) === "Empty"){
           alert("All Fields Are Required!");
           return;
       }
   }
  
    if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        alert("Enter Valid Information for Each Field");
        return;
    }
    fuelLevel = Number(fuelLevel);
    cargoLevel = Number(cargoLevel);

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch.`;
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let ready = true;



    if (fuelLevel < 10000){
        fuelStatus.innerHTML = "Fuel Level is Too Low";
        ready = false;
    }else{
        fuelStatus.innerHTML = "Fuel Level is Good";
    }

    if (cargoLevel > 10000){
       cargoStatus.innerHTML = "Cargo Mass is Too Large";
       ready = false;
    }else{
        cargoStatus.innerHTML = "Cargo Mass is Good";
    }

    if (!ready) {
        launchStatus.innerHTML = "Shuttle not ready for Launch";
        launchStatus.style.color = "red";
    } else {
        launchStatus.innerHTML = "Shuttle is ready for Launch";
        launchStatus.style.color = "green";
        }

      list.style.visibility = "visible";

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}



try{
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
} catch (e){
    // do nothing
}