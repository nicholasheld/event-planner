// save reference to important DOM elements
var timeDisplayEl = $('#currentDay');
var eventDisplayEl = $('#container');


// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}



// handle event submission


//add event listener on click to add event
//

setInterval(displayTime, 1000);