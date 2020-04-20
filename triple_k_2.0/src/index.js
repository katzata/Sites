
import Intro from "./components/intro/intro.js";
import MainContainer from "./components/MainContainer/MainContainer.js";
import MainPage from "./components/MainPage/MainPage.js";

let intro = new Intro();
let mainPage = new MainPage();

intro.prepareCanvas();

function loop() {
	if (intro.running) {
		intro.render();
	} else {
		// document.querySelector(".introCanvas").remove();
		mainPage.render();
	}

	window.requestAnimationFrame(loop);
}

loop();