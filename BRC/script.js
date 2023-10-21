function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// changes made 20/10/23 //
const dropbtn1 = document.getElementById("dropbtn1");
const content1 = document.getElementById("content1");
const dropbtn2 = document.getElementById("dropbtn2");
const content2 = document.getElementById("content2");
const dropbtn3 = document.getElementById("dropbtn3");
const content3 = document.getElementById("content3");
const dropbtn4 = document.getElementById("dropbtn4");
const content4 = document.getElementById("content4");
const dropbtn5 = document.getElementById("dropbtn5");
const content5 = document.getElementById("content5");
const dropbtn6 = document.getElementById("dropbtn6");
const content6 = document.getElementById("content6");
const dropbtn7 = document.getElementById("dropbtn7");
const content7 = document.getElementById("content7");
const dropbtn8 = document.getElementById("dropbtn8");
const content8 = document.getElementById("content8");
const dropbtn9 = document.getElementById("dropbtn9");
const content9 = document.getElementById("content9");
let contentVisible = false; // Initialize the state to "false" since content is initially hidden

dropbtn1.addEventListener("click", function () {
  // Toggle the "display" property to show or hide the content
  if (contentVisible) {
    content1.style.display = "none"; // Hide the content
  } else {
    content1.style.display = "block"; // Show the content
  }
  contentVisible = !contentVisible; // Toggle the state
});


dropbtn2.addEventListener('click', function () {
     // Toggle the "display" property to show or hide the content
     if (content2.style.display === "none") {
        content2.style.display = "block"; // Show the content
    } else {
        content2.style.display = "none"; // Hide the content
    }
});

dropbtn3.addEventListener('click', () => {
    // Toggle the "display" property to show or hide the content
    if (content3.style.display === "none") {
        content3.style.display = "block"; // Show the content
    } else {
        content3.style.display = "none"; // Hide the content
    }
});
dropbtn4.addEventListener("click", function () {
    // Toggle the "display" property to show or hide the content
    if (content4.style.display === "none") {
        content4.style.display = "block"; // Show the content
    } else {
        content4.style.display = "none"; // Hide the content
    }
});
dropbtn5.addEventListener("click", function () {
    // Toggle the "display" property to show or hide the content
    if (content5.style.display === "none") {
        content5.style.display = "block"; // Show the content
    } else {
        content5.style.display = "none"; // Hide the content
    }
});
dropbtn6.addEventListener("click", function () {
    // Toggle the "display" property to show or hide the content
    if (content6.style.display === "none") {
        content6.style.display = "block"; // Show the content
    } else {
        content6.style.display = "none"; // Hide the content
    }
});
dropbtn7.addEventListener("click", function () {
    // Toggle the "display" property to show or hide the content
    if (content7.style.display === "none") {
        content7.style.display = "block"; // Show the content
    } else {
        content7.style.display = "none"; // Hide the content
    }
});
dropbtn8.addEventListener("click", function () {
    // Toggle the "display" property to show or hide the content
    if (content8.style.display === "none") {
        content8.style.display = "block"; // Show the content
    } else {
        content8.style.display = "none"; // Hide the content
    }
});
dropbtn9.addEventListener("click", function () {
    // Toggle the "display" property to show or hide the content
    if (content9.style.display === "none") {
        content9.style.display = "block"; // Show the content
    } else {
        content9.style.display = "none"; // Hide the content
    }
});

// Get all the dropdown buttons and dropdown contents
const dropbtns = document.querySelectorAll(".dropbtn");
const dropdownContents = document.querySelectorAll(".dropdown-content");

// Add click event listeners to toggle dropdown visibility for each button
dropbtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        dropdownContents[index].classList.toggle("show");
    });
});