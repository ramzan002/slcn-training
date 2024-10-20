// Form submission alert
const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for submitting!');
  });
});
