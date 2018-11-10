// // get element for cat1
// let catPic1 = document.querySelector('#cat1');
// let cat1Clicks = document.querySelector('#cat1-click');
//
// // get element fir cat2
// let catPic2 = document.querySelector('#cat2');
// let cat2Clicks = document.querySelector('#cat2-click');
//
// // defind increment cat function
// function incrementCat() {
//   let clicks = 0;
//
//   function increment() {
//     clicks++;
//     return clicks;
//   }
//
//   return increment;
// }
//
// // Define the increment function
// let cat1In = incrementCat();
// let cat2In = incrementCat();
//
//
// catPic1.addEventListener('click', function() {
//   let clicks = cat1In();
//   cat1Clicks.innerText = clicks;
// });
//
// catPic2.addEventListener('click', function() {
//   let clicks = cat2In();
//   cat2Clicks.innerText = clicks;
// })

$(function() {
  var model = {
    data: [{
      name: 'Mang',
      source: 'img/pic-1.jpeg',
      clicks: 0
    },
    {
      name: 'Ruby',
      source: 'img/pic-2.jpeg',
      clicks: 0
    },
    {
      name: 'Tata',
      source: 'img/pic-3.jpeg',
      clicks: 0
    },
    {
      name: 'Judy',
      source: 'img/pic-4.jpeg',
      clicks: 0
    },
    {
      name: 'Koya',
      source: 'img/puc-5.jpeg',
      clicks: 0
    }
  ]

  };

  var octopus = {

  };

  var view = {
    init: function() {
      view.render(model.data[0]);
    },

    render: function(cat) {
      var html = '';
      html += `<div class="cat-container">
      <p class="name">${cat.name}</p>
      <p>You have clicked: ${cat.clicks} clicks</p>
      <img src="${cat.source}" class="cat-image">
      </div>`
      $('.container').append(html);
    }

  };

  view.init();


});
