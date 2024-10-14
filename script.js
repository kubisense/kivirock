// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Kivirock Group Limited!");
});

// Function to toggle the visibility of the collapsible menu
function toggleMenu() {
  const menu = document.getElementById("collapsibleMenu");
  const btnStatus = document.getElementById("btnVisibility");
  const btnClose = document.getElementById("btnClose");
  // Toggle between showing and hiding the close button
  // Toggle between showing and hiding the menu
  if (menu.style.display === "block") {
    menu.style.display = "none";
    btnClose.style.display = "none";
  } else {
    menu.style.display = "block";
    btnStatus.style.display = "none";
    btnClose.style.display = "block";
  }
}
/*
Kivirock is a real estate investment platform It is a subsidiary of the kivirock Group Limited, that is focused mainly on infracturural investments and managing of underlying assets
*/
