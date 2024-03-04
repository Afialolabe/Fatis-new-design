const navDiv = document.querySelector(".mobile-nav-container");
console.log(navDiv);

let navDivValue = navDiv.getAttribute("data-show");

function handleShowNav() {
  navDiv.setAttribute("data-show", "true");
}

function hideNav() {
  navDiv.setAttribute("data-show", "false");
}

function handleModalClick() {
  event.stopPropagation();
}
