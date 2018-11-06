// get element
let catPic = document.querySelector('#cat1');

// defind increment cat function
function incrementCat() {
  let clicks = 0;

  function increment() {
    clicks++;
    console.log(clicks);
    return clicks;
  }

  return increment;
}
