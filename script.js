
function success() {
const check = document.getElementById('check');
const btn = document.getElementById('btn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
    btn.classList.add('hide');
    check.classList.add('rotateIn');
    message.classList.add('fadeIn');
});
}
success();

form.addEventListener('submit', function(event) {
    // Prevent the default form submission action
    event.preventDefault();

    // Get form data values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Check if any of the input fields are empty
    if (name === '' || email === '' || age === '') {
        formStatus.innerHTML = "Please fill in all the fields!";
        formStatus.style.color = "red";
    } else {
        formStatus.innerHTML = "Form submitted successfully!";
        formStatus.style.color = "green";
    }
});