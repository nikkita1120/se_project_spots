const editModalBtn = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-profile-modal");
const editCloseBtn = editModal.querySelector(".modal__close-button");
const npModalBtn = document.querySelector(".profile__np-button");
const npModal = document.querySelector("#new-post-modal");
const npCloseBtn = npModal.querySelector(".modal__close-button");

editModalBtn.addEventListener("click", function () {
  editModal.classList.add("modal_is-opened");
});

npModalBtn.addEventListener("click", function () {
  npModal.classList.add("modal_is-opened");
});

editCloseBtn.addEventListener("click", function () {
  editModal.classList.remove("modal_is-opened");
});

npCloseBtn.addEventListener("click", function () {
  npModal.classList.remove("modal_is-opened");
});
