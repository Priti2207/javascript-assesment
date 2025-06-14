const btn = document.getElementById("toggleBtn");
const aboutPara = document.getElementById("about");

btn.onclick = function() {
  if (aboutPara.style.display === "none") {
    aboutPara.style.display = "block";
    btn.textContent = "Hide About Me";
  } else {
    aboutPara.style.display = "none";
    btn.textContent = "Show About Me";
  }
};
