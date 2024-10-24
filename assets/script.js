document.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.gall img');

  function handleScroll() {
    var windowHeight = window.innerHeight;

    images.forEach(function(image) {
      var imageTop = image.getBoundingClientRect().top;
      var imageHeight = image.offsetHeight;
      
      if (imageTop < windowHeight && imageTop + imageHeight > 0) {
        // Sprawdzamy, czy obrazek jest w obrębie okna przeglądarki
        if (image.classList.contains('scroll-in-left') || image.classList.contains('scroll-in-right')) {
          image.classList.add('visible');
        }
      } else {
        // Jeżeli obrazek jest poza oknem przeglądarki, ukrywamy go
        if (image.classList.contains('scroll-in-left') || image.classList.contains('scroll-in-right')) {
          image.classList.remove('visible');
        }
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Wywołaj funkcję na początku, aby zdjęcia, które są już w widoku, zostały pokazane
});


// --------------------

document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault(); // Zablokowanie przeciągania obrazków
    }
});

// --------------------


var bodyid = document.getElementById('body');

function showFullscreen(imageSrc) {
  var fullscreenContainer = document.getElementById('fullscreenContainer');
  var fullscreenImage = document.getElementById('fullscreenImage');
  
  fullscreenImage.src = imageSrc;
  fullscreenContainer.style.display = 'block';

  
  body.style.overflow = 'hidden';

}

function hideFullscreen() {
  var fullscreenContainer = document.getElementById('fullscreenContainer');
  
  fullscreenContainer.style.display = 'none';
  body.style.overflow = 'scroll';
  body.style.overflowX = 'hidden';
}






var i = 0;
var txt = 'Mateusz Tomaszek';
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function menuon()
{
  document.getElementById('l1').style.backgroundColor = "gray";
  document.getElementById('l2').style.backgroundColor = "gray";
  document.getElementById('l3').style.backgroundColor = "gray";
  
}

function menuoff()
{
  document.getElementById('l1').style.backgroundColor = "white";
  document.getElementById('l2').style.backgroundColor = "white";
  document.getElementById('l3').style.backgroundColor = "white";

}



function turnoffmenu() {
  var checkbox = document.getElementById("myCheckbox");
  checkbox.checked = !checkbox.checked;
}


