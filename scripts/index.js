let initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editModalBtn = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-profile-modal");
const editCloseBtn = editModal.querySelector(".modal__close-button");
const editForm = editModal.querySelector(".modal__form");

const npModalBtn = document.querySelector(".profile__np-button");
const npModal = document.querySelector("#new-post-modal");
const npCloseBtn = npModal.querySelector(".modal__close-button");

const profileName = document.querySelector(".profile__avatar-content-name");
const profileBio = document.querySelector(".profile__avatar-content-bio");
const editProfileNameInput = editModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editModal.querySelector(
  "#profile-description-input",
);

editModalBtn.addEventListener("click", function () {
  editModal.classList.add("modal_is-opened");
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileBio.textContent;
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

editForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileBio.textContent = editProfileDescriptionInput.value;
  editModal.classList.remove("modal_is-opened");
});

initialCards.forEach(function (card) {
  console.log(card.name);
});
