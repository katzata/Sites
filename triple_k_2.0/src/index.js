import "./index.css";
import Intro from "./components/Intro/Intro.js";
import MainPage from "./components/MainPage/MainPage.js";

let intro = new Intro();
let mainPage = new MainPage();

function loop() {
	if (intro.running) {
		intro.render();
	} else {
		mainPage.render();
	}

	window.requestAnimationFrame(loop);
}

loop();