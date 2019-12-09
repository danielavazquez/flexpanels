const panels = document.querySelectorAll('.panel'); //grab all the panels
function toggleOpen() { //will toggle on and open
  console.log('Hello');
  this.classList.toggle('open');
}
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) { //when open-active class gets added we only grow that flex-grow is fired so we listen for any event that include flex
    this.classList.toggle('open-active'); //we use flex to cover both of our bases because of browser compatability
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //on each of the panels we loop over each and listen for a click then run the toggle function
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); //once it toggles open we want the top and bottom text to appear to it will first listen for click event and once ends will fire transition event


//summary
//listening for a click on each panel with event listener
//when someone clicks we are going to open it and that triggers CSS open
//when that finishes the second event listener transition end will fire
//that's when we toggle open-active
//you don't need to specify a specic width, with flex 5 the rest will just take a bit less room