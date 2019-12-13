function respondBar() {
  var x = document.getElementById("navBar");
  if (x.className === "normal") {
    x.className += " responsive";
  } else {
    x.className = "normal";
  }
}

