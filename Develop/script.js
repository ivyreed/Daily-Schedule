// var hour9 = $('#h9')
// // var try2 = $('#svbtn')
// var save = $('#hour-9')
var datesnstuf = document.querySelector('#dates')
var saveButton9 = document.querySelector('#hour-9 > button')
var saveButton10 = document.querySelector('#hour-10 > button')
var saveButton11 = document.querySelector('#hour-11 > button')
var h9txt = document.querySelector('#hour-9 > textarea')
var h10txt = document.querySelector('#hour-10 > textarea')
var h11txt = document.querySelector('#hour-11 > textarea')

h9txt.value = localStorage.getItem('hour-9')
h10txt.value = localStorage.getItem('hour-10')
h11txt.value = localStorage.getItem('hour-11')
var dt = new Date();
document.querySelector('#dates').innerHTML=dt.toLocaleString('en-us', {  weekday: 'long' });
console.log(datesnstuf)
var saveFunction = function(event) {
  event.preventDefault();
  var clickedRow = event.target.parentElement.id
  var htxt = document.querySelector(`#${clickedRow} > textarea`)
console.log('button clicked')
// save to local Storage
localStorage.setItem(clickedRow, htxt.value)
console.log('item set')
// display local storage on load 
console.log(event.target.parentElement.id)
}

saveButton9.addEventListener('click', saveFunction);
saveButton10.addEventListener('click', saveFunction);
saveButton11.addEventListener('click', saveFunction);



var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
console.log(dt.getDay);

console.log(dt.toLocaleString('en-us', {  weekday: 'long' }));

// in dates put ^
// 



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

