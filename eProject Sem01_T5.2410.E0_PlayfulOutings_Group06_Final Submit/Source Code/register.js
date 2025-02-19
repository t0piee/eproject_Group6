document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!fullname || !email || !dob || !gender) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Registration successful!");
});

function subscribeNewsletter() {
    let email = document.getElementById("newsletterEmail").value;
    if (!email) {
        alert("Please enter your email to subscribe.");
        return;
    }
    alert("Subscribed successfully!");
}
