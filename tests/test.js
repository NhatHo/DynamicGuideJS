/*******************************************************************************
 * Copyright (c) 2016. MIT License.
 * NhatHo-nhatminhhoca@gmail.com
 ******************************************************************************/

var actionsList = {};
actionsList.action1 = function (currentStep) {
    currentStep.position = "top";
    return true;
};
actionsList.action2 = function () {
    return true;
};
actionsList.skipWhenElementIsNotShowed = function () {
    var isShowed = document.querySelector("#randomEle");
    return isShowed.style.display === "block";
};
actionsList.showAlert = function () {
    alert("Hello you're stuck here.");
};
actionsList.showAlert2 = function () {
    alert("Hello Alert 2 here, are you stuck again?");
};
actionsList.onStart = function () {
    console.log("Preparing everything for your start!!!");
};

actionsList.onExit = function () {
    console.log("Cleaning up everything for you here");
};
actionsList.beforeStepRender = function () {
    console.log("Before step render");
};
actionsList.afterStepRender = function () {
    console.log("After step render");
};


var tourDesc = [{
    id: "test",
    endOnEsc: true,
    endOnOverlayClick: true,
    canInteract: false,
    waitIntervals: 1000,
    retries: 20,
    pauseOnExit: true,
    steps: [{
        title: "First Step of the thing",
        content: "Header level 1<br />Testing level again<br /><br />Line 3",
        position: "right",
        skip: 7,
        target: "#title",
        type: "info",
        prerequisites: ["action1"]
    }, {
        title: "Drag and Drop Test",
        content: "You must drag this thing",
        position: "right",
        target: "#draggable",
        dragAndDrop: true,
        type: "action",
        noButtons: true,
        multipage: true
    }, {
        title: "Second Step of the thing",
        content: "Header level 2",
        position: "bottom",
        target: "#testBlock",
        type: "action",
        nextStepTrigger: "#nextButtonTest",
        flashTarget: "#nextButtonTest",
        prerequisites: ["action2"],
        nextButton: "Next",
        backButton: "Back",
        doneButton: "Yay"
    }, {
        content: "Random Header",
        position: "bottom",
        skip: 4,
        target: "#randomEle",
        type: "info",
        prerequisites: ["!skipWhenElementIsNotShowed"]
    }, {
        content: "Standard block inside scroll",
        target: "#ite1",
        position: "right"
    }, {
        content: "Header level 2 again",
        position: "left",
        skip: 6,
        target: "#title3",
        type: "info",
        prerequisites: ["action1"]
    }, {
        content: "Big box of nothing",
        position: "top",
        target: "#testbox"
    }, {
        content: "Open Modal",
        position: "right",
        target: "#myBtn",
        nextStepTrigger: "@target@",
        flashTarget: "@target@",
        type: "action",
        savePoint: true
    }, {
        content: "Please wait for Modal",
        position: "float",
        type: "info",
        transition: true
    }, {
        content: "Show Modal here",
        position: "top",
        target: ".modal-content",
        scrollLock: true,
        delay: 600,
        noBack: true,
        prerequisites: ["action1", "?isVisible:@target@"]
    }, {
        content: "Child Element",
        position: "left",
        scrollLock: true,
        target: "#item3",
        modal: true
    }]
}];

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    setTimeout(function () {
        modal.style.display = "block";
    }, 4000);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.querySelector("#trigger").onclick = function () {
    var flexTour = new FlexTour(tourDesc, actionsList);
    flexTour.run();
};

var random = document.getElementById("randomEle");

var randomNum = Math.round(Math.random() * 1000);
if (randomNum % 2 === 0) {
    random.style.display = "block";
} else {
    random.style.display = "none";
}

function drag(event) {
    localStorage.setItem("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = localStorage.getItem("text");
    event.target.appendChild(document.getElementById(data));
}

function allowDrop(event) {
    event.preventDefault();
}
