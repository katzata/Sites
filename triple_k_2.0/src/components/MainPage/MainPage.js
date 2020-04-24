import "./MainPage.css";
import content from "./PageContent";

let canvas;
let ctx;

const crack = new Image();
crack.src = "../assets/img/crack.png";
const logo = new Image();
logo.src = "../assets/img/roza2.png";


let whiteNoise = document.createElement("audio");
whiteNoise.src = "../assets/audio/static.mp3";

class MainPage {
	constructor() {
		this.crackWidth;
		this.crackHeight;
		this.crackCoverWidth = window.innerWidth;
		this.pageDone = false;
		this.startHrCount = false;
		this.hrCount = 0;
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
	}

	handleCrack() {
		if (this.crackCoverWidth > 0) {
			this.crackCoverWidth -= canvas.width / 2;
		}

		ctx.save();
		ctx.globalAlpha = .9;
		ctx.translate(-canvas.width / 2, -this.crackHeight / 2);
		ctx.drawImage(crack, canvas.width / 2, canvas.height / 2, canvas.width, this.crackHeight);
		ctx.restore();

		ctx.beginPath();
		ctx.rect(0, 0, this.crackCoverWidth, canvas.height);
		ctx.fillRect(0, 0, this.crackCoverWidth, canvas.height);
		ctx.stroke();
	}

	handleHeader() {
		let body = document.querySelector("body");

		const header = document.createElement("header");
		
		logo.classList.add("logo");
		header.appendChild(logo);

		const headerTitle = document.createElement("h1");
		headerTitle.classList.add("headerTitle");
		headerTitle.appendChild(document.createTextNode("KAMEN KASHCHIEV"))
		header.appendChild(headerTitle);

		const headerTitle2 = document.createElement("h1");
		headerTitle2.classList.add("headerTitle2");
		headerTitle2.appendChild(document.createTextNode("KAMEN KASHCHIEV"))
		header.appendChild(headerTitle2);

		body.appendChild(header);
	}

	handleContent() {
		let body = document.querySelector("body");
		
		const main = document.createElement("main");
		// main.innerHTML = `
		// 	<hr class="hrTop">

		// 	<section class="mainInternalSection">

		// 	</section>

		// 	<hr class="hrBottom">
		// `;
		const hrTop = document.createElement("hrTop");
		hrTop.classList.add("hrTop");
		main.appendChild(hrTop);

		const section = document.createElement("section");
		section.classList.add("mainInternalSection");
		main.appendChild(section);

		const hrBottom = document.createElement("hrBottom");
		hrBottom.classList.add("hrBottom");
		main.appendChild(hrBottom);

		body.appendChild(main);
	}

	handleFooter() {
		let body = document.querySelector("body");

		const footer = document.createElement("footer");
		
		const footerText = document.createElement("p");
		footerText.classList.add("footerText");
		footerText.appendChild(document.createTextNode(`Copywright © ${new Date().getFullYear()}`));
		footer.appendChild(footerText);

		body.appendChild(footer);
	}

	handleEntry() {
		setTimeout(() => {
			document.querySelector(".headerTitle").style.opacity = "1";
			document.querySelector(".headerTitle2").style.opacity = "1";
			document.querySelector(".logo").style.opacity = "1";
			document.querySelector(".hrTop").style.opacity = "1";
			document.querySelector(".hrBottom").style.opacity = "1";

			setTimeout(() => {
				document.querySelector(".hrBottom").style.bottom -= this.hrCount;
			}, 1500)
		}, 380)
	}

	render() {
		this.prepare();
		this.handleCanvasAndSizes();
		this.handleCrack();

		if (!this.pageDone) {
			this.handleHeader();
			this.handleContent();
			this.handleFooter();

			this.pageDone = true;
			this.handleEntry();
		}

		if () {
			this.hrCount -= 20;
		}
	}
}

window.onwheel = (e) => {
	console.log(e.deltaY)
}

export default MainPage;