document.getElementById("contactForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter valid email address!");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    alert("Message Sent Successfully & Data Saved!");

    this.reset();
});

/* Load saved data on refresh */

window.onload = function() {

    let savedName = localStorage.getItem("userName");
    let savedEmail = localStorage.getItem("userEmail");

    if (savedName) {
        document.getElementById("name").value = savedName;
    }

    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
    }
};