import "./CvSection2.css";

class CvSection2 {
	constructor() {
		this.page = {
			done: false
		}
	}

	prepare() {
		const doomContainer = document.createElement("section");
		doomContainer.classList.add("doom");

		const doom = document.createElement("iframe");
		doom.src = "";
		doom.classList.add("doomIframe");
		doomContainer.appendChild(doomContainer);
		
		document.querySelector("main").appendChild(doomContainer);
	}

	render() {
		if (!this.page.done) {
			this.prepare();
		} else {

		}
	}
}

export default CvSection2;