$(document).ready(function() {
    $('map').imageMapResize();
});

$(function () {
  $(document).mousemove(function(e) {
    $(".cursor").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function() {
    $(".cursor").hide();
  });
});

function clickEffect(e) {
	var d = document.createElement("div");
	d.className="clickEffect";
	d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
	document.body.appendChild(d);
	d.addEventListener('animationend', function() {
		d.parentElement.removeChild(d);
	}.bind(this));
}

function playSound(id) {
	var boom = document.getElementById(id); // I have no idea why jQuery does not work with this
	boom.currentTime = 0;
	boom.play();
};

document.addEventListener('mousedown', function(e) { 
	e.preventDefault(); 
}, false);

$("body").css("overflow", "hidden");