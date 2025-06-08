
window.onload = () => {
  console.log("Website Loaded");
};
window.onload = () => {
  const welcome =document.getElementById("welcome");
  setTimeout(() => {
    welcome.classList.add("fade-out");
  },3000);
  setTimeout(() => {
    welcome.style.display = "none";
  },4000);
};