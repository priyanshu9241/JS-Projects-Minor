/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

let openBtn = document.querySelector("#open-modal-btn");
let closeBtn = document.querySelector("#close-modal-btn");
let overlay = document.querySelector("#overlay");
let modal = document.querySelector("#modal");

openBtn.addEventListener("click", () => {
  overlay.classList.toggle("open");
  modal.classList.toggle("open");
});
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  overlay.classList.toggle("open");
  modal.classList.toggle("open");
}
