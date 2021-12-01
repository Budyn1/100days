var bar1 = document.querySelector(".bar1");
var bar2 = document.querySelector(".bar2");
var bar3 = document.querySelector(".bar3")

var activated = 0;

function myFunction() {
	if(activated === 0){
		activated = 1
		bar1.classList.add("animation1")
		bar2.classList.add("animation3")
		bar3.classList.add("animation2")
		console.log(activated)
	} else {
		activated = 0
		bar1.classList.remove("animation1")
		bar2.classList.remove("animation3")
		bar3.classList.remove("animation2")
		console.log(activated)
	}
};
