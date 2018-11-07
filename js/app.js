// get element for cat1
let catPic1 = document.querySelector('#cat1');
let cat1Clicks = document.querySelector('#cat1-click');

// get element fir cat2
let catPic2 = document.querySelector('#cat2');
let cat2Clicks = document.querySelector('#cat2-click');

// defind increment cat function
function incrementCat() {
  let clicks = 0;

  function increment() {
    clicks++;
    return clicks;
  }

  return increment;
}

// Define the increment function
let cat1In = incrementCat();
let cat2In = incrementCat();


catPic1.addEventListener('click', function() {
  let clicks = cat1In();
  cat1Clicks.innerText = clicks;
});

catPic2.addEventListener('click', function() {
  let clicks = cat2In();
  cat2Clicks.innerText = clicks;
})
