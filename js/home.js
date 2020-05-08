
  let header = document.querySelector('header');
  
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header.classList.remove('home-header');
    } else {
      header.classList.add('home-header');
    }
  }

// Form functionality
let inputs = document.querySelectorAll('form input');
let textarea = document.querySelector('form textarea');

for (let input of inputs) {
  input.addEventListener('focusin', function() {
    let label = input.closest('.input').querySelector('.floating-label');
    label.classList.add('floating');
  })

  input.addEventListener('focusout', function() {
    let label = input.closest('.input').querySelector('.floating-label');
    if (input.value === '') {
      label.classList.remove('floating');
    }
  })
}

if (textarea){
  textarea.addEventListener('focusin', function() {
    let label = textarea.closest('.input').querySelector('.floating-label');
    label.classList.add('floating');
  })

  textarea.addEventListener('focusout', function() {
    let label = textarea.closest('.input').querySelector('.floating-label');
    if (textarea.value === '') {
      label.classList.remove('floating');
    }
  })
}



// Loading data if it is in viewport
var isInViewport = function(element) {
  let bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

let stat = document.querySelector('.counter .title');
let viewed = false;


window.addEventListener('scroll', function(event) {

  // number count for stats, using jQuery animate
  if (isInViewport(stat) && !viewed) {
    let i = 1;
    $('.counting').each(function() {

      let $this = $(this);
      let type = $this.attr('data-type');
      let countTo;

      let multiplier = new Date().getFullYear() - 2020;
      let years = 35 + multiplier;
      let clients = 15048 + multiplier * 429;
      let repairs = 2050012 + multiplier * 320452

      switch (type) {
        case 'years':
          countTo = years;
          break;
        case 'clients':
          countTo = clients;
          break;
        case 'repairs':
          countTo = repairs;
          break;

      }
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: i * 500 + 1000,
        easing: 'easeOutSine',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {

          // reversing countTo to add commas
          let digits = countTo.toString().split("").reverse().join("");

          let newNumber = digits[0];
          for (let i = 1; i < digits.length; i++) {
            if (i % 3 === 0) {

              newNumber += ',';
              newNumber += digits[i];
            } else {
              newNumber += digits[i];
            }
          }
          newNumber = newNumber.split("").reverse().join("");
          $this.text(newNumber);


          // let dataTypes = document.querySelectorAll('[data-type]');
          // for (let dataType of dataTypes) {
          //   let digits = dataType.length;
          //   let newNumber;
          //   for (let i = 0; i < digits; i++) {
          //     if (i % 3 === 0) {
          //       newNumber = ',' + digits[i];
          //     } else {
          //       newNumber = digits[i];
          //     }
          //
          //   }
          // }

        }

      });
      i++;
    });


    viewed = true;
  }



}, false);



// while (true) {

loop();

function loop() {

  let text = document.querySelector('.hero.home .title span');
  let options = ['Specialists', 'Technicians', 'Consultants', 'Ninjas'];

  let i = 0;
  text.style.opacity = 0;
  changeText();
  let interval = setInterval(changeText, 5000);

  function changeText() {
    if (i === options.length) {
      clearInterval(interval);
      loop();
    } else {
      text.textContent = options[i];
      text.style.opacity = 1;
      setTimeout(function() {
        text.style.opacity = 0;
      }, 3000);

      i++;
    }

  }
}

