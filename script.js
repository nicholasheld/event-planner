$(document).ready(function () {
  //function that runs when save btn clicked
  $('.saveBtn').on('click', function () {
    //stores the location of entry and value into local storage
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
  })
  //this function handles when to apply a color coded class for past, present or future
  function hourUpdate() {
    var current = moment().hours()
    $(".time-block").each(function () {
      var blockHour = $(this).attr("id")

      if (blockHour < current) {
        $(this).addClass("past")
      }
      else if (blockHour == current) {
        $(this).removeClass("past")
        $(this).addClass("present")
      }
      else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }

    })
  }
  //This gets the entered item that was stored for the specific time block
  $("#9", ".description").val(localStorage.getItem("9"))
  $("#10", ".description").val(localStorage.getItem("10"))
  $("#11", ".description").val(localStorage.getItem("11"))
  $("#12", ".description").val(localStorage.getItem("12"))
  $("#13", ".description").val(localStorage.getItem("13"))
  $("#14", ".description").val(localStorage.getItem("14"))
  $("#15", ".description").val(localStorage.getItem("15"))
  $("#16", ".description").val(localStorage.getItem("16"))
  $("#17", ".description").val(localStorage.getItem("17"))
  // this runs the function of color coding the time blocks based on the current time if in the present, past or future
  hourUpdate();
  //This sets the day on refresh using moment
  $("#currentDay").text(moment().format('MMM DD, YYYY'));

})