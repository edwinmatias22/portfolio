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
// Shows a message in browser console
console.log('%c Hey there!', 'font-size: 16px; color: #6e8efb;');
console.log('%cThis is JavaScript.', 'color: #777;');
// Makes project tags toggle a highlight
document.querySelectorAll('.badge').forEach(tag => {
    tag.addEventListener('click', function() {
        this.classList.toggle('bg-primary');
        this.classList.toggle('bg-success');
    });
});
