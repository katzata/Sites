
import Intro from "./components/intro/intro.js";

let intro = new Intro();

intro.prepare();

function loop() {
	intro.render();

	if (intro.running) {
		window.requestAnimationFrame(loop);
	}
}

loop();