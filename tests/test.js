/**
 * Created by NhatHo on 2016-06-12.
 */

var object = {
    id: "test",
    endOnOverlayClick: true,
    endOnEsc: true,
    canInteract: false,
    steps: [{
        content: "Header level 1",
        position: "right",
        type: "info"
    }, {
        content: "Header level 2",
        position: "bottom",
        type: "info"
    }, {
        content: "Big box of nothing",
        position: "top"
    }]
};

document.querySelector("#trigger").onclick = function () {
    alert("Ready!");
    var flexTour = new FlexTour(object);
    flexTour.run();
};
