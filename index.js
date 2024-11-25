const stars = document.querySelectorAll("#starRating span");
const form = document.getElementById("feedbackForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const closeModalButton = document.querySelector(".close-modal");
let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = star.dataset.value;
    stars.forEach((s) => s.classList.remove("active"));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add("active");
    }
    document.querySelector("button[type='submit']").disabled = false;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  confirmationMessage.style.display = "flex";
  // document.body.classList.add("blurred"); 
});


closeModalButton.addEventListener("click", () => {
  confirmationMessage.style.display = "none";
  // document.body.classList.remove("blurred");
  form.reset();
  stars.forEach((s) => s.classList.remove("active"));
  document.querySelector("button[type='submit']").disabled = true; 
  selectedRating = 0;
});