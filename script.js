let button = null;
let paragraph = null;
let missionAbort = null;

function init () {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoff");
    paragraph = document.querySelector("p");

    // Put your code for the exercises here. (my code starts here)
    button.addEventListener("click", function (event) {
      paragraph.innerHTML = "Houston, we have lift off!";
    });


    missionAbort.addEventListener("mouseover", function (event) {
        let element = event.target;
        element.style.backgroundColor = "red";
    });


    missionAbort.addEventListener("click", function (event) {
      window.alert("Are you sure you want to abort the mission?");
    }); 
    // my code ends here
}

window.onload = init;