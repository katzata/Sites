import "./CvSection1.css";

class CvSection1 {
	constructor() {

	}

	prepare() {
		const cvSection1 = document.createElement("section");
		cvSection1.classList.add("cvSection1");


		document.querySelector("main").appendChild(cvSection1);
	}

	handleThumbnails() {

	}

	render() {
		this.prepare();
		// console.log("x")
	}
}

export default CvSection1;