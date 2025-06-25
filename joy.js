const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
const buyButtons = document.querySelectorAll('.buy-btn');

// buyButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     alert("Thank you for showing interest! We'll contact you soon.");
//   });
// });
function scrollProducts(direction) {
  const slider = document.getElementById('productSlider');
  const scrollAmount = 250;
  slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

  // Get all buy buttons
  const buyButtons1 = document.querySelectorAll('.buy-btn');

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const amazonLink = button.getAttribute('data-link');
      if (amazonLink) {
        window.open(amazonLink, '_blank'); // Open in new tab
      } else {
        alert('No link provided!');
      }
    });
  });

//   function showMoreProducts() {
//   document.getElementById("extra-products").style.display = "flex";
//   document.querySelector(".see-more-wrapper").style.display = "none";
// }
