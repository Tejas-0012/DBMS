// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (email === "" || password === "") {
//         alert("Please enter both email and password.");
//     } else {
//         alert("Login Successful!"); // Later, integrate with backend authentication
//     }
// });

// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (email === "" || password === "") {
//         alert("Please enter both email and password.");
//     } else {
//         function loginUser() {
//             localStorage.setItem("loggedIn", "true"); // Step 1: Store login state
//             alert("Login Successful!");
//             location.reload(); // Reload page to reflect changes
//         }
//         alert(`Logging in as ${email}...`); 
//         // You can later replace this alert with actual backend authentication
//         window.location.href = "../Demo/demo.html"; // Redirect user after login
//     }
// });


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter both email and password.");
    } else {
        localStorage.setItem("loggedIn", "true"); // Step 1: Store login state
        alert("Login Successful!");
        window.location.href = "../Demo/demo.html"; // Redirect to main frontpage
    }
});