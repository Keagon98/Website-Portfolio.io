window.sr = ScrollReveal();
sr.reveal('#landing-text', {
    duration: 2500,
    origin: 'bottom'
});
sr.reveal('.btn', {
    duration: 1500,
    delay: 2500,
    origin: 'bottom'
});
sr.reveal('#landing-image', {
    duration: 2500,
    origin: 'right',
    distance: '700px'
});
sr.reveal('.about-me', {
    duration: 3500,
    origin: 'left',
    viewFactor: 0.2,
    distance: '100px'
});
sr.reveal('.cert', {
    duration: 3500,
    origin: 'right',
    viewFactor: 0.2,
    distance: '100px'
});
sr.reveal('#header h2', {
    duration: 3500,
    origin: 'bottom',
    viewFactor: 0.2
});
sr.reveal('.work img', {
    duration: 3500,
    viewFactor: 0.2,
});
sr.reveal('.content', {
    duration: 2500,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('footer', {
    duration: 2500,
    delay: 500,
    origin: 'left',
    distance: '400px'
});



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
