

(function () {
	//setInterval(function(){ document.querySelector("header").style.opacity = 1; }, 350);
    setTimeout(function(){
    	let header = document.querySelector("header");
    	let main = document.querySelector("main");
    	let footer = document.querySelector("footer");
    	header.style.opacity = 1;
    	header.style.transitionDuration = ".3s";
    	footer.style.opacity = 1;
    	footer.style.transitionDuration = ".3s";
    	main.style.opacity = 1;
    	main.style.transitionDuration = ".8s";
    	setTimeout(function(){
    		header.style.transitionDuration = ".15s";
    		footer.style.transitionDuration = ".15s";
    		main.style.transitionDuration = ".15s";
    	}, 500);
    }, 100);
})();

document.querySelector("main").onscroll = function(){
	let images = Array.from(document.querySelectorAll(".menuFiligree"));
	let text = Array.from(document.querySelectorAll(".linkText"));
	scrollBtnReveal();
		if (document.querySelector("main").scrollTop > 70) {
			document.querySelector("header").style.height = "9%";
			document.querySelector("main").style.height = "82%";
			document.querySelector("main").style.top = "77px";
			for (let x=0; x < images.length; ++x) {
				images[x].style.transitionDuration = ".15s";
				images[x].style.transform = "rotate(140deg)";
				images[x].style.left = "7px";
			}
			for (let x=0; x<text.length; ++x) {
				text[x].style.transitionDuration = ".15s";
				text[x].style.fontSize = ".7em";
				text[x].style.right = "14px";
			}
		} else {
			document.querySelector("header").style.height = "110px";
			document.querySelector("main").style.height = "78%";
			document.querySelector("main").style.top = "110px";
			for (let x=0; x < images.length; ++x) {
				images[x].style.transform = "rotate(90deg)";
				images[x].style.left = "2px";
			}
			for (let x=0; x<text.length; ++x) {
				text[x].style.transitionDuration = ".15s";
				text[x].style.fontSize = "1em";
				//text[x].style.right = "7px";
			}
		}
};

function scrollBtnReveal() {
	let scrollSection = document.querySelector("main");
	let upFiligree = document.querySelector("#upFiligree");
	let upArrow = document.querySelector("#upArrow");
	upFiligree.style.transitionDuration = ".2s";
	upArrow.style.transitionDuration = ".2s";
	if (scrollSection.scrollTop > 150) {
		upFiligree.style.opacity = "1";
		upArrow.style.opacity = "1";
	} else {
		upFiligree.style.opacity = "0";
		upArrow.style.opacity = "0";
	}
};