// This is a simple JavaScript file
alert("Intro to JavaScript!");
//update my copywrite date
document.getElementById('year').textContent = new Date().getFullYear();
//fake submission for the form
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your message! (This is a demo - form not actually sent)');
    this.reset();
});
