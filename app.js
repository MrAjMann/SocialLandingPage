// selcet Dom elements

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const goal = document.getElementById('todaysGoal');

// Set AM or PM
const showAmPm = true;
// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // Set to 12hr Format
  //   hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/kids.jpg')";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Morning ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('../img/family.jpg')";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Afternoon ';
  } else {
    // Evening
    greeting.textContent = 'Good Evening ';
    document.body.style.backgroundImage = "url('../img/ZaneBaby.jpg')";
    document.body.style.backgroundSize = 'cover';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    // Make sure Enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getGoal() {
  if (localStorage.getItem('name') === null) {
    goal.textContent = '[Enter Goal]';
  } else {
    goal.textContent = localStorage.getItem('goal');
  }
}

function setGoal(e) {
  if (e.type === 'keypress') {
    // Make sure Enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('goal', e.target.innerText);
      goal.blur();
    }
  } else {
    localStorage.setItem('goal', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);

// Run
showTime();
setBgGreet();
getName();
getGoal();
