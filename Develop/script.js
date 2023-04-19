// var hour9 = $('#h9')
// // var try2 = $('#svbtn')
// var save = $('#hour-9')
var hour9 = localStorage.getItem('9th')
var saveButton = document.querySelector('#hour-9 > button')
var h9txt = document.querySelector('#hour-9 > textarea')

h9txt.value = localStorage.getItem('hour9')


saveButton.addEventListener('click', function(event) {
  event.preventDefault();
  var h9txt = document.querySelector('#hour-9 > textarea')
console.log('button clicked')
// save to local Storage
localStorage.setItem('hour9', h9txt.value)
console.log('item set')
// display local storage on load 
console.log(localStorage)
});




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// function SaveAndPlace(event) {
//   event.preventDefault();
//     console.log('function running')


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


// var stufftodo = $('input[name="h9"]').val();

// if (!stufftodo) {
//   console.log('Nothing here!');
//   return;
// }

// hour9.append('<li>' + stufftodo + '</li>')
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// };
// try2.on('click', SaveAndPlace(), console.log('button also exists'));
// save.on('click', SaveAndPlace, console.log('button exists'));

