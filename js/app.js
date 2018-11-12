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
      source: 'img/pic-5.jpeg',
      clicks: 0
    }
  ],

  addClick: function(cat) {
    cat.clicks++;
  },

  currentCat: null,

  editCat: function() {
    var name = $('#cat-name').val();
    var source = $('#image-url').val();
    var clicks = $('#cat-clicks').val();
    if (name !== '') {
      this.currentCat.name = name;
    }
    if (source !== '') {
      this.currentCat.source = source;
    }
    if (clicks !== '') {
      this.currentCat.clicks = clicks;
    }
    alert(model.currentCat.name, model.currentCat.source);
  }


  };

  var octopus = {
    init: function() {
      model.currentCat = model.data[0];
      view.init();
      octopus.chooseCat();
      octopus.addClick();
      octopus.adminMode();
    },
    chooseCat: function() {
      var catList = $('.cat-list')
      catList.on('click', 'li', function() {
        var clickElement = $(this);
        model.data.forEach(function(cat, index) {
          if (cat.name === clickElement.text()) {
            model.currentCat = model.data[index];
          }
        });
      });
    },

    addClick: function() {
      $('.container').on('click', '.cat-image', function() {
        var clickElement = $(this);
        model.addClick(model.currentCat);
        $('.number-of-clicks').text(model.currentCat.clicks);
      });
    },

    adminMode: function() {
      $('.admin-button').on('click', function() {
        // $('.edit-form').removeClass('.hide');
        var form = $('.edit-form');
        form.toggleClass('hide');
        $('#save').click(function() {
          model.editCat();
          view.render(this.currentCat);
        });
      });
    }

  };

  var view = {
    init: function() {
      view.render(model.currentCat);
    },

    render: function(cat) {
      if ($('.cat-container')) {
        $('.cat-container').remove();
      }

      var html = '';
      html += `<div class="cat-container">
      <p class="name">${cat.name}</p>
      <p>You have clicked: <span class="number-of-clicks">${cat.clicks}</span> clicks</p>
      <img src="${cat.source}" class="cat-image">
      </div>`
      $(html).insertBefore('.admin-button');
    }

  };


  octopus.init();


});
