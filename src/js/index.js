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

//CSS heavy and not JS focused
//We have a div called panels and a div called panel singualr and inside is going to various words
 //When words are clicked they are going to grow inside and words will fall from top and come from bottom
 //We add flex 1 to our CSS meaning each panel will evenly distribute extra space among each other

 //We nest felxbox in this example and take the flex container (panels)
 // flex item is panel but we are also going to make panel a flex container
//In CSS an item can be a flex container and item by making it display:flex

//We do that by stacking them left to right and add flex-direction: column and that will center them in the middle
//We also want each of the items to take up one-third
//go to our flex item .panel and add 
//flex: 1 0 auto; and add display:flex

//We want to hide the first and last words in the top and bottom
//We use our first child .panel and insert transform: translateY(-100%); this puts them off screen
// last childe is 100% transform: translateX(100%);

//We add a class of open-active and it will animate itself and get bigger
//We give it a flex of 5 it takes up 5X the amount of extra room and the rest of them

//We write a function that's going to toggleOpen so this class list changes to open
//On each of the panels we listen for a click

//Once it opens we want to bring in word from top and word from bottom
//panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //on each of the panels we loop over each and listen for a click then run the toggle function
//panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); //once it toggles open we want the top and bottom text to appear to it will first listen for click event and once ends will fire transition event
