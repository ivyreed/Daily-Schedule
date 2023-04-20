//time variables
var datesnstuf = document.querySelector('#dates')
var dt = new Date();
//save variables
var saveButton9 = document.querySelector('#hour-9 > button')
var saveButton10 = document.querySelector('#hour-10 > button')
var saveButton11 = document.querySelector('#hour-11 > button')
var saveButton12 = document.querySelector('#hour-12 > button')
var saveButton13 = document.querySelector('#hour-13 > button')
var saveButton14 = document.querySelector('#hour-14 > button')
var saveButton15 = document.querySelector('#hour-15 > button')
var saveButton16 = document.querySelector('#hour-16 > button')
var saveButton17 = document.querySelector('#hour-17 > button')
//text-box variables
var h9txt = document.querySelector('#hour-9 > textarea')
var h10txt = document.querySelector('#hour-10 > textarea')
var h11txt = document.querySelector('#hour-11 > textarea')
var h12txt = document.querySelector('#hour-12 > textarea')
var h13txt = document.querySelector('#hour-13 > textarea')
var h14txt = document.querySelector('#hour-14 > textarea')
var h15txt = document.querySelector('#hour-15 > textarea')
var h16txt = document.querySelector('#hour-16 > textarea')
var h17txt = document.querySelector('#hour-17 > textarea')
//Loads local storage of text-boxes on startup or refresh
h9txt.value = localStorage.getItem('hour-9')
h10txt.value = localStorage.getItem('hour-10')
h11txt.value = localStorage.getItem('hour-11')
h12txt.value = localStorage.getItem('hour-12')
h13txt.value = localStorage.getItem('hour-13')
h14txt.value = localStorage.getItem('hour-14')
h15txt.value = localStorage.getItem('hour-15')
h16txt.value = localStorage.getItem('hour-16')
h17txt.value = localStorage.getItem('hour-17')
//function that saves text-box content
var saveFunction = function(event) {
  event.preventDefault();
  var clickedRow = $(this).parent().attr('id')
  var htxt = document.querySelector(`#${clickedRow} > textarea`)
localStorage.setItem(clickedRow, htxt.value)
document.querySelector('#storage-alert').innerHTML=('✔️ Saved to local storage!')
}
//runs function upon hitting save button
saveButton9.addEventListener('click', saveFunction);
saveButton10.addEventListener('click', saveFunction);
saveButton11.addEventListener('click', saveFunction);
saveButton12.addEventListener('click', saveFunction);
saveButton13.addEventListener('click', saveFunction);
saveButton14.addEventListener('click', saveFunction);
saveButton15.addEventListener('click', saveFunction);
saveButton16.addEventListener('click', saveFunction);
saveButton17.addEventListener('click', saveFunction);
//date is displayed on screen
document.querySelector('#dates').innerHTML=(dt.toLocaleString('en-us', {  weekday: 'long' })) + ', ' + (dt.toLocaleString('default', { month: 'long' }) + ' ' + (dt.toLocaleString('default', { day: "numeric" })));


//change class based on time
var checktime =function(str) {
  var time = dt.getHours()
  var rowHour = Number(str.substring(5))
  if(rowHour < time)
    document.getElementById(str).classList.add('past');
  else if(rowHour === time)
    document.getElementById(str).classList.add('present');
  else if(rowHour > time)
    document.getElementById(str).classList.add('future');
}
//runs function on startup or refresh
checktime('hour-9');
checktime('hour-10');
checktime('hour-11');
checktime('hour-12');
checktime('hour-13');
checktime('hour-14');
checktime('hour-15');
checktime('hour-16');
checktime('hour-17');