import "./MainPage.css";
import content from "./PageContent";

let canvas;
let ctx;

const crack = new Image();
crack.src = "../assets/img/crack.png";

let whiteNoise = document.createElement("audio");
whiteNoise.src = "../assets/audio/static.mp3";

class MainPage {
	constructor() {
		this.crackWidth;
		this.crackHeight;
		this.initialY
	}

	prepare() {
		canvas = document.querySelector("canvas");
		ctx = canvas.getContext('2d');
	}

	handleCanvasAndSizes() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		this.crackWidth = canvas.height * crack.height / crack.width;
		this.crackHeight = canvas.width * crack.height / crack.width;

		// this.logoSize = canvas.height / this.logoSizeDivider;
		// this.logoX = canvas.width / 2;
		// this.logoY = canvas.height / 2;
		// this.logoCenterX = -this.logoSize / 2;
		// this.logoCenterY = -((this.logoSize * logo.height) / logo.width) / 2;
	}

	handleCrack() {
		ctx.save();
		ctx.translate(-canvas.width / 2, -this.crackHeight / 2);
		ctx.drawImage(crack, canvas.width / 2, canvas.height / 2, canvas.width, this.crackHeight);
		ctx.restore();
	}

	handleEntry() {
		ctx.beginPath();
		ctx.moveTo(25, 100);
		ctx.lineTo(canvas.width - 25, 100);
		ctx.strokeStyle = "#FFFFFF";
		ctx.stroke();
	}

	handleContent() {

	}

	render() {
		this.prepare();
		this.handleCanvasAndSizes();
		this.handleCrack();
		this.handleEntry();
	}
}

window.onwheel = (e) => {
	console.log(e.deltaY)
}

export default MainPage;