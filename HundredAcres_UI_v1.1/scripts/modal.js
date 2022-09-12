"use strict";

const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseModal2 = document.querySelector(".close-modal2");
const submitSubscribe = document.querySelector("#modalForm");
const btnHome = document.querySelector("#btnHome");

const showModal = function () {
  //use local storage
  if (!sessionStorage.getItem("once")) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    sessionStorage.setItem("once", "true");
  }
};

const showModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeModal2 = function () {
  modal.classList.add("hidden2");
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

window.addEventListener("load", showModal);

btnCloseModal.addEventListener("click", closeModal);
btnCloseModal2.addEventListener("click", closeModal);
btnCloseModal2.addEventListener("click", closeModal2);

overlay.addEventListener("click", closeModal);
//overlay.addEventListener("click", closeModal2);

submitSubscribe.addEventListener("submit", function (evt) {
  evt.preventDefault();
  showModal2();
});

btnHome.addEventListener("click", closeModal2);
