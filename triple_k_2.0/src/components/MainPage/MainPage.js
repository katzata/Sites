import "./MainPage.css";
import Content from "../PageContent/PageContent";
import MainSection from "../MainSection/MainSection";
import CvSection1 from "../CvSection1/CvSection1";

let canvas;
let ctx;

const crack = new Image();
crack.src = "../assets/img/crack.png"

const whiteNoise = document.createElement("audio");
whiteNoise.src = "../assets/audio/static.mp3";

const mainSection = new MainSection();

class MainPage {
	constructor() {
		this.counters = {
			main: 0,
			navL: 0,
			navR: 0,
			test: 0
		}

		this.pagePrepared = false;
		this.renderSection = false;

		this.language = {
			en: true,
			bg: false,
			it: false
		}

		this.content = {
			pageContainer: document.querySelector(".pageContainer"),
			header: document.querySelector("header"),
			logo: document.querySelector(".logo"),
			title1: document.querySelector(".headerTitle"),
			title2: document.querySelector(".headerTitle2"),
			main: document.querySelector("main"),
			nav: document.querySelector("nav"),
			navSections: document.querySelectorAll(".navSections"),
			navSectionL: document.querySelector(".navSectionL"),
			navSectionR: document.querySelector(".navSectionR"),
			hrTop: document.querySelector(".hrTop"),
			mainSection: document.querySelector(".mainSection"),
			hrBottom: document.querySelector(".hrBottom"),
			footer: document.querySelector("footer"),
			footerText: document.querySelector(".footerText")
		}

		this.navOver = {
			left: false,
			right: false
		}

		this.navHeights = {
			left: 20,
			right: 20
		}
		
		this.crack = {
			width: 0,
			height: 0,
			cover: window.innerWidth
		}

		this.stages = {
			first: 22,
			second: 100,
			third: 154,
			fourth: 200
		}
		
		this.opacity = {
			increment: .015,
			header: 0,
			main: 0,
			footer: 0
		}

		this.viewing = {
			mainSection: true,
			cv1Section: false,
			cv2Section: false,
			certificatesSection: false
		}
	}

	prepare() {
		canvas = document.querySelector("canvas");
		ctx = canvas.getContext('2d');



		this.content.footerText.appendChild(document.createTextNode(`Copywright © ${new Date().getFullYear()}`));
	}

	// handlePageWidth() {
	// 	document.querySelector(".mainSection").style.width = `${window.innerWidth + 17}px`
	// }

	prepareNavButtons() {
		for (let i = 0; i < document.querySelectorAll(".navSectionLButton").length; i++) {
			document.querySelectorAll(".navSectionLButton").addEventListener("transitionend", () => {
				// if () {

				// }
			})
		}
	}

	handleCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		this.crack.width = canvas.height * crack.height / crack.width;
		this.crack.height = canvas.width * crack.height / crack.width;
	}

	handleCrack() {
		if (this.crack.cover > 0) {
			this.crack.cover -= canvas.width / 2;
		}

		ctx.save();
		ctx.globalAlpha = .8;
		ctx.translate(-canvas.width / 2, -this.crack.height / 2);
		ctx.drawImage(crack, canvas.width / 2, canvas.height / 2, canvas.width, this.crack.height);
		ctx.restore();

		ctx.beginPath();
		ctx.rect(0, 0, this.crack.cover, canvas.height);
		ctx.fillRect(0, 0, this.crack.cover, canvas.height);
		ctx.stroke();
	}

	handleEntryStage(stage) {
		if (this.opacity.header < 1 && this.counters.main >= this.stages.first) {
			this.content.pageContainer.style.opacity = "1";
		}

		if (stage === 2) {
			this.content.pageContainer.style.height = "100vh";
			this.content.mainSection.style.height = "80vh";
		}

		if (stage === 3) {
			this.content.footer.style.boxShadow = "0 0 28px 25px black";
			this.content.footer.style.backgroundColor = `rgba(0, 0, 0, .8)`;
			this.content.footerText.style.transform = `translateY(0vh)`;
		}

		if (stage === 4) {
			this.content.pageContainer.style.transitionDuration = "0s";
			this.pageDone = true;
		}
	}

	handleMiniIntro() {
		if (this.opacity.header < 1 && this.counters.main >= this.stages.first) {
			this.handleEntryStage(1);
		}

		if (this.content.pageContainer.style.height !== "100%" && this.counters.main >= this.stages.second) {
			this.handleEntryStage(2);
		}

		if (this.counters.main === this.stages.third) {
			this.handleEntryStage(3);
		}

		if (this.counters.main === this.stages.fourth) {
			this.handleEntryStage(4);
		}
	}

	handleInitialPage() {
		let languageTemp;

		if (this.language.en === true) {
			languageTemp = "en";
		} else if (this.language.bg === true) {
			languageTemp = "bg";
		} else {
			languageTemp = "it";
		}

		if (this.viewing.mainSection === true) {
			mainSection.render(languageTemp);
		}

		if (this.viewing.cv1Section === true) {
			CvSection1.render(languageTemp);
		}

		if (this.viewing.cv2Section === true) {
			CvSection2.render(languageTemp);
		}

		if (this.viewing.certificatesSection === true) {
			CertificatesSection.render(languageTemp);
		}
	}

	handleNavHover() {
		for (let i = this.content.navSections.length - 1; i >= 0; i--) {
			this.content.navSections[i].addEventListener("mouseenter", () => {
				if (this.content.navSections[i].className === "navSections navSectionL") {
					if (!this.navOver.left) {
						this.navOver.left = true;
						this.toggleNavSectionL(this.navOver.left);
					}
					// document.querySelector(".navSectionLButton1").style.transform = "translateY(22px)";
					// document.querySelector(".navSectionLButton2").style.transform = "translateY(42px)";
					// document.querySelector(".navSectionLButton3").style.transform = "translateY(62px)";
				} else {
					
					// console.log(this.content.navSections[i].className)
				}
			})

			this.content.navSections[i].addEventListener("mouseleave", () => {
				if (this.content.navSections[i].className === "navSections navSectionL") {
					if (this.navOver.left) {
						this.navOver.left = false;
						this.toggleNavSectionL(this.navOver.left);
					}
					// document.querySelector(".navSectionLButton1").style.transform = "translateY(0px)";
					// document.querySelector(".navSectionLButton2").style.transform = "translateY(0px)";
					// document.querySelector(".navSectionLButton3").style.transform = "translateY(0px)";
				} else {
					
					// console.log(this.content.navSections[i].className)
				}
			})
		}
	}

	toggleNavSectionL(hovering) {
		if (hovering) {
			document.querySelector(".navSectionLButton1").style.transform = "translateY(22px)";
			document.querySelector(".navSectionLButton2").style.transform = "translateY(42px)";
			document.querySelector(".navSectionLButton3").style.transform = "translateY(62px)";
		}

		if (!hovering) {
			document.querySelector(".navSectionLButton1").style.transform = "translateY(0px)";
			document.querySelector(".navSectionLButton2").style.transform = "translateY(0px)";
			document.querySelector(".navSectionLButton3").style.transform = "translateY(0px)";
		}
	}

	render() {
		if (!this.pagePrepared) {
			this.prepare();

			this.pagePrepared = true;
		} else {
			this.counters.main++;
			// this.handlePageWidth();
		}

		this.handleCanvas();
		this.handleCrack();

		if (!this.pageDone) {
			this.handleMiniIntro();
		} else {
			this.handleNavHover();
			this.handleInitialPage();
		}
	}
}

// window.onwheel = (e) => {
// 	console.log(e.deltaY)
// }

window.ontouchstart = (e) => {
	// alert(document.querySelector("footer").style.opacity)
}

window.onclick = () => {

}

export default MainPage;