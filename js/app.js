// get element
let catPic = document.querySelector('#cat1');
let cat1Clicks = document.querySelector('#cat1-click');

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


catPic.addEventListener('click', function() {
  let clicks = cat1In();
  cat1Clicks.innerText = clicks;
});
