//nav toggle event
function navToggle() {
  var element = document.getElementById("nav");
  element.classList.toggle("off");

  var element2 = document.getElementById("navBtn");
  element2.classList.toggle("on");

  var element3 = document.getElementById("wrap_contents");
  element3.classList.toggle("on");
}
