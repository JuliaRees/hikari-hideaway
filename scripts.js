$(document).ready(function() {
  $('.hamburger-button').click(function() {
      $('.mobile-menu').slideToggle(300);
      $(this).toggleClass('active');
  });
});


const counters = document.querySelectorAll('.counter');
  const countingDuration = 8000; // Set your counting duration here (in milliseconds)

  function update(counter, targetValue, startTime, duration) {
    const currentTime = Date.now() - startTime;
    if (currentTime < duration) {
      const progress = currentTime / duration;
      const newValue = Math.round(progress * targetValue);
      counter.innerText = newValue;
      requestAnimationFrame(() => update(counter, targetValue, startTime, duration));
    } else {
      counter.innerText = targetValue;
    }
  }

  counters.forEach(counter => {
    const targetValue = parseInt(counter.dataset.count, 10);
    const startTime = Date.now();
    update(counter, targetValue, startTime, countingDuration);
  });




  const socialHub = document.querySelector(".social-hub");
  const socialButton = socialHub.querySelector(".social-button");
  console.log(socialButton);
  
  function toggleSocialActive() {
    socialHub.classList.toggle("active");
  }
  
  socialButton.addEventListener("click", toggleSocialActive);


 



  document.addEventListener("DOMContentLoaded", function () {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Netlify form successfully submitted"))
            .catch((error) => alert(error));
    };

    document.querySelector(".netlify").addEventListener("submit", handleFormSubmit);
});