var i = 0;
var txt = 'Lorem ipsum typing effect!';
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


