function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Add greeting animation
window.onload = () => {
    const welcomeText = document.querySelector('.welcome');
    welcomeText.style.opacity = "1";
};
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        // Remove 'active' class from all links
        document.querySelectorAll("nav ul li a").forEach(item => item.classList.remove("active"));

        // Add 'active' class to the clicked link
        link.classList.add("active");
    });
});


function showSection(sectionId) {
    // Show the section
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    // If it's the posts section, fetch data
    if (sectionId === 'posts_tag') {
        fetchPosts();
    }
}

function fetchPosts() {
    console.log('Fetching posts...');

    fetch('http://127.0.0.1:5000/api/posts')
        .then(response => response.json())
        .then(posts => {
            console.log('Fetched Posts:', posts);

            let postContainer = document.getElementById("posts_section");
            postContainer.innerHTML = "<h2>Posts</h2>"; // Reset content

            if (Array.isArray(posts)) {
                posts.forEach(post => {
                    let postElement = document.createElement("div");
    postElement.classList.add("post1"); // Use the CSS class
    postElement.innerHTML = `<strong>Post #${post.post_id}</strong> <br> Likes: ${post.likes} <br> Comments: ${post.comments}`;
    postContainer.appendChild(postElement);
                });
            } else {
                console.error("Expected an array but got:", posts);
            }
        })
        .catch(error => console.error("Error fetching posts:", error));
};

// document.getElementById("searchBox").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {  // When user presses Enter
//         let query = event.target.value.trim();

//         if (query === "") {
//             alert("Please enter a username!");
//             return;
//         }

//         fetch(`http://127.0.0.1:5000/api/search/users/${query}`)
//           .then(response => response.json())
//           .then(users => {
//             let resultList = document.getElementById("searchsection");
//             resultList.innerHTML = ""; // Clear previous results

//             if (users.length === 0) {
//                 resultList.innerHTML = "<li>No users found.</li>";
//             } else {
//                 users.forEach(user => {
//                     let item = document.createElement("div");
//                     item.classList.add('search');
//                     item.innerHTML = `<strong>${user.username}</strong> <br><br><strong>${user.role}</strong> <br> <strong>Followers:</strong> ${user.followers_count} <br> <strong>Following:</strong>${user.following_count}<br> <strong>Posts:</strong>${user.post_count}`;
//                     resultList.appendChild(item);
//                 });
//             }
//           })
//           .catch(error => console.error("Error fetching search results:", error));
//    }
// });

function fetchFilteredUsers() {
    let role = document.getElementById("userFilter").value;
    let query = document.getElementById("searchBox").value.trim();

    fetch(`http://127.0.0.1:5000/api/filter/users/${encodeURIComponent(query)}/${encodeURIComponent(role)}`)
        .then(response => response.json())
        .then(users => {
            let userList = document.getElementById("searchsection");
            userList.innerHTML = "";

            if (users.length === 0) {
                userList.innerHTML = "<li>No users found for this role.</li>";
            } else {
                users.forEach(user => {
                    let item = document.createElement("div");
                 item.classList.add('search');
                item.innerHTML = `<strong>${user.username}</strong> <br><br><strong>${user.role}</strong> <br> <strong>Followers:</strong> ${user.followers_count} <br> <strong>Following:</strong>${user.following_count}<br> <strong>Posts:</strong>${user.post_count}`;
                 userList.appendChild(item);
                });
            }
        })
        .catch(error => console.error("Error fetching filtered users:", error));
}

// Listen for dropdown changes
document.getElementById("userFilter").addEventListener("change", fetchFilteredUsers);

// ✅ Also listen for typing in the search box
document.getElementById("searchBox").addEventListener("input", fetchFilteredUsers);

