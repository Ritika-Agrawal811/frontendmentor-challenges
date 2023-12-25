const feedbackForm = document.getElementById('feedback-form');
const thankYouMessage = document.getElementById('thank-you-message');
const userRating = document.getElementById("user-rating");


feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const ratings = document.getElementsByName('rating');
    const selectedRating = Array.from(ratings).find(radio => radio.checked).value;

    feedbackForm.parentElement.classList.add("hidden");
    thankYouMessage.classList.replace("hidden", "flex")
    userRating.innerHTML = selectedRating;
})