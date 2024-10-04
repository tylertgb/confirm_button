const confirmSection = document.querySelector('.row');

function submitAnother(){
    const submitAnother = document.querySelector('.submitAnother');
    submitAnother.addEventListener('click', (e) => {
        e.preventDefault();
        confirmSection.style.display = "none";
        btn.classList.toggle('hide')

        submitAnother.style.display = "none";
        formStatus.style.opacity = 1;
    });
}


function confirmNote(){
    const check = document.getElementById('check');
    const btn = document.getElementById('btn');
    const message = document.getElementById('message');
    const form = document.getElementById('form');

    btn.addEventListener('click', (e) => {
    // Prevent the default form submission action
    e.preventDefault();

    // Get form data values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    function confirmed(){
        confirmSection.style.display = "flex";
        message.innerHTML = "Successfull!";
        btn.classList.add('hide');
        check.classList.add('rotateIn');
        message.classList.add('fadeIn');
    }

    //Clear input data field
    function clearField(){
        form.addEventListener('click', (e) => {
            e.preventDefault();
            form.reset();
        })
    }

        // Check if any of the input fields are empty
    if (name === '' || email === '' || password === '') {
        document.getElementById('formStatus').innerHTML = "Please fill in all the fields!";
        formStatus.style.color = "red";
        } else {
            formStatus.style.opacity = 0;

            // Show confirmation button and checkmark section
            confirmed();
            clearField();

            document.querySelector('.submitAnother').style.display = "flex";
        }
    });

}
confirmNote();
submitAnother();