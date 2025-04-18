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



//function for future assignment


// function to validate form inputs
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (!name || !email) {
      alert('Please fill all required fields!');
      return false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email!');
      return false;
    }
    
    alert('Form is valid! (This is a demo - no data is sent)');
    return true;
}
//like counter
let likeCount = 0;

function addLike() {
  likeCount++;
  document.getElementById('like-counter').textContent = `${likeCount} likes`;
  return likeCount;
}

//night mode toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    const themeBtn = document.getElementById('theme-btn');
    if (document.body.classList.contains('dark-theme')) {
      themeBtn.textContent = ' Light Mode';
    } else {
      themeBtn.textContent = ' Dark Mode';
    }
  }
