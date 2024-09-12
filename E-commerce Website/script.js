// JavaScript for the Furniture Website

document.addEventListener("DOMContentLoaded", () => {
    // View More Button - Home Section
    document.getElementById("btn").addEventListener("click", () => {
        document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
    });
    // Select all the navigation links
const navLinks = document.querySelectorAll('.content .links li a');

// Function to close the menu
function closeMenu() {
    document.getElementById('show-menu').checked = false;
}

         // Add event listener to each link
         navLinks.forEach(link => {
         link.addEventListener('click', closeMenu);
          });

    // Read More Button - About Section
    document.getElementById("about-btn").addEventListener("click", () => {
        // For demonstration, scroll to the products section
        document.getElementById("product").scrollIntoView({ behavior: 'smooth' });
    });

    // Order Now Buttons - Product Section
    document.querySelectorAll(".product button").forEach(button => {
        button.addEventListener("click", () => {
            alert("Product added to cart!");
            alert("Thank you for your order! We will get in touch with you soon.")
            // You can replace this with actual add-to-cart functionality
        });
    });

    // Send Button - Contact Form
    document.querySelector(".contact-form form").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        alert("Your message has been sent!");
        // Here you would usually handle form submission to a server
        event.target.reset(); // Optionally reset the form fields
    });

    // Scroll to Top Button
    document.querySelector(".arrow").addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
