window.onload = function(){
var sentence = document.getElementById("typewriter");

function typewriter(text) {

  var letterArray = text.innerHTML.split('');
  text.innerHTML = '';
  letterArray.forEach(
    (letter, index) => {
      setTimeout(function() {
        text.innerHTML += letter;
      }, 60 * index)
    }
  )
}

typewriter(sentence);

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var toggleButton = document.getElementById('menutoggle');
toggleButton.addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('open');
})

}
