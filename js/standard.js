
window.addEventListener('load', () => { // loaded last





  // loopAbout();

  // function loopAbout() {
  //   let text = document.querySelector('.hero.about .title span');
  //   console.log(text);
  //   let options = ['A Team', 'A Partner', 'Engineers'];
  
  //   let i = 0;
  //   text.style.opacity = 0;
  //   changeText();
  //   let interval = setInterval(changeText, 5000);
  
  //   function changeText() {
  //     if (i === options.length) {
  //       clearInterval(interval);
  //       loopAbout();
  //     } else {
  //       text.textContent = options[i];
  //       text.style.opacity = 1;
  //       setTimeout(function() {
  //         text.style.opacity = 0;
  //       }, 3000);
  
  //       i++;
  //     }
  
  //   }
  // }




  // Update footer date
  let footerDates = document.querySelectorAll('footer .copyright span');
  for (let footerDate of footerDates) {
    let year = new Date().getFullYear();
    footerDate.textContent = year;
  }

  // Client List Floating Logos
  let numberOfLogos = 15;

  // For about page only:
  function createLogo() {
    let lastRandomPosition = null;
    for (let i = 1; i <= numberOfLogos; i++) {
  
      setTimeout(function() {
  
        let randomPosition = Math.floor(Math.random() * 150);
        // half of div height of 500px
        let initialTop = 250;
  
  
        if (lastRandomPosition !== null) {
          if (Math.abs(lastRandomPosition - randomPosition) < 100) {
            randomPosition += 100;
          }
        }
  
        if (lastRandomPosition !== null) {
          if (lastRandomPosition > 0) {
            randomPosition = -randomPosition;
          }
        }
  
        let imageURL = '/assets/images/pages/about/client-list/' + i + '.png';

        let clients = document.querySelector('.clients');
        if (clients) {
          clients.insertAdjacentHTML('afterbegin', `  
          <img src=${imageURL} id='image-${i}' alt='Logos of various companies'>
          `)

     
  
        let timeAcrossScreen = 15000;
        let randomDuration = timeAcrossScreen - Math.random()*2000;
          let options = {
            duration: randomDuration,
            easing: 'linear'
          };
          
          let img = document.getElementById(`image-${i}`);
    
          img.style.position = 'absolute';
          img.style.top = initialTop + randomPosition + 'px';
    
    
          let viewableWindow = window.innerWidth + 200;
          img.style.right = -400 + 'px';
    
          img.animate({
    
              transform: "translateX(-" +  viewableWindow + "px)",
            },
            options
          );
  
  
  
  
          lastRandomPosition = randomPosition;
    
          setTimeout(function() {
            img.remove();
          }, randomDuration - 100);
    
          if (i === 15) {
            createLogo();
            firstLoop = false;
          }
        }
  
      }, (i - 1) * 3000);
  
  
    }

         
  }
  createLogo();


  let isoPrices = false;
  let isoInput = document.querySelector('#non-ISO');
  if (isoInput) {
  isoInput.addEventListener('click', function() {
    let nonISOGroups = document.querySelectorAll('.service-type.non-iso');

    for (let nonISOGroup of nonISOGroups) {
      nonISOGroup.classList.toggle('hide');
    }

    let prices = document.querySelectorAll('.price>p');

    if (!isoPrices) {
      for (let price of prices) {
        price.textContent = '$40 - $80';
        isoPrices = true;
        console.log(price.closest('.item'));
        price.closest('.item').querySelector('.available').style.display = 'block';
      }
    } else {
      for (let price of prices) {
        price.textContent = '$20 - $50';
        isoPrices = false;
        price.closest('.item').querySelector('.available').style.display = 'none';

      }
    }


  });
  }



});






