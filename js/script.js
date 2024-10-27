const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown-toggle-1');

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open'); // Toggle the 'open' class

    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.classList.toggle('fa-xmark', isOpen); // Toggle cross icon
    toggleBtnIcon.classList.toggle('fa-bars', !isOpen); // Toggle bars icon
};


window.addEventListener('resize', function () {
    if (window.innerWidth > 894 && dropdownMenu.classList.contains('open')) {
        dropdownMenu.classList.remove('open'); // Close the menu
        toggleBtnIcon.classList.remove('fa-xmark'); // Reset to bars icon
        toggleBtnIcon.classList.add('fa-bars');
    }
});


window.addEventListener('load', function () {
    const heading = document.querySelector('.container-desc h1');
    heading.classList.add('show-heading'); // Add the class to trigger the animation
});


// Show the back-to-top button when scrolling down

window.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > 300) { // Adjust the scroll value as needed
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Smooth scroll to top on click
document.getElementById("backToTop").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



//change mode dark and light 

const btn = document.querySelector("#mode");
const body = document.body;
let isDarkMode = true; 

btn.addEventListener("click", () => {
    if (isDarkMode) {
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
    }
    isDarkMode = !isDarkMode;  
});
