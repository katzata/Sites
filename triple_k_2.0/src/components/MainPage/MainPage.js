import "./MainPage.css";
import Content from "../PageContent/PageContent";
import MainSection from "../MainSection/MainSection";
import CvSection1 from "../CvSection1/CvSection1";
import CertificatesSection from "../CertificatesSection/CertificatesSection";

let canvas;
let ctx;

const crack = new Image();
crack.src = "../assets/img/crack.png"

const whiteNoise = document.createElement("audio");
whiteNoise.src = "../assets/audio/static.mp3";

const mainSection = new MainSection();
const cvSection1 = new CvSection1();
const certificatesSection = new CertificatesSection();

class MainPage {
	constructor() {
		this.counters = {
			main: 0,
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
			navSectionButtonsL: document.querySelectorAll(".navSectionLButton"),
			navSectionButtonsR: document.querySelectorAll(".navSectionRButton"),
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
			mainSection: false,
			cvSection1: false,
			cvSection2: false,
			certificatesSection: true
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
		}

		if (stage === 3) {
			this.content.footer.style.boxShadow = "0 0 28px 25px black";
			this.content.footer.style.backgroundColor = `rgba(0, 0, 0, .8)`;
			this.content.footerText.style.transform = `translateY(0vh)`;
		}

		if (stage === 4) {
			this.content.pageContainer.style.transitionDuration = "0s";
			this.content.nav.style.opacity = "1";
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

		if (this.viewing.cvSection1 === true) {
			cvSection1.render(languageTemp);
		}

		if (this.viewing.cvSection === true) {
			// CvSection2.render(languageTemp);
		}

		if (this.viewing.certificatesSection === true) {
			certificatesSection.render(languageTemp);
		}
	}

	handleNavHover() {
		for (let i = this.content.navSections.length - 1; i >= 0; i--) {
			this.content.navSections[i].addEventListener("mouseenter", () => {
				if (this.content.navSections[i].className === "navSections navSectionL") {
					this.content.navSections[i].style.height = "82px";
					
					if (!this.navOver.left) {
						this.navOver.left = true;
						this.toggleNavSectionL(this.navOver.left);
					}
					
				} else {
					this.content.navSections[i].style.height = "62px";
					if (!this.navOver.right) {
						this.navOver.right = true;
						this.toggleNavSectionR(this.navOver.right);
					}
				}
			})
			this.content.navSections[i].addEventListener("mouseleave", () => {
				if (this.content.navSections[i].className === "navSections navSectionL") {
					this.content.navSections[i].style.height = "18px";

					if (this.navOver.left) {
						this.navOver.left = false;
						this.toggleNavSectionL(this.navOver.left);
					}
				} else {
					if (this.navOver.right) {
						this.navOver.right = false;
						this.toggleNavSectionR(this.navOver.right);
					}
				}
			})

			this.content.navSections[i].addEventListener("touchend", () => {
				if (this.content.navSections[i].className === "navSections navSectionL") {
					if (!this.navOver.left) {
						this.navOver.left = true;
						this.toggleNavSectionL(this.navOver.left);
					} else {
						this.navOver.left = false;
						this.toggleNavSectionL(this.navOver.left);
					}
				} else {
					if (!this.navOver.right) {
						this.navOver.right = true;
						this.toggleNavSectionR(this.navOver.right);
					} else {
						this.navOver.right = false;
						this.toggleNavSectionR(this.navOver.right);
					}
				}
			})
		}
	}

	toggleNavSectionL(hovering) {
		if (hovering) {
			document.querySelector(".navSectionLButton1").style.transform = "translateY(22px)";
			document.querySelector(".navSectionLButton2").style.transform = "translateY(42px)";
			document.querySelector(".navSectionLButton3").style.transform = "translateY(62px)";

			for (let i = 0; i < document.querySelectorAll(".navSectionLButton").length; i++) {
				document.querySelectorAll(".navSectionLButton")[i].style.boxShadow = "0 0 4px 3px black";
			}
		}

		if (!hovering) {
			document.querySelector(".navSectionLButton1").style.transform = "translateY(0px)";
			document.querySelector(".navSectionLButton2").style.transform = "translateY(0px)";
			document.querySelector(".navSectionLButton3").style.transform = "translateY(0px)";

			for (let i = 0; i < document.querySelectorAll(".navSectionLButton").length; i++) {
				document.querySelectorAll(".navSectionLButton")[i].style.boxShadow = "none";
			}
		}
	}

	toggleNavSectionR(hovering) {
		if (hovering) {
			document.querySelector(".navSectionRButton1").style.transform = "translateY(22px)";
			document.querySelector(".navSectionRButton2").style.transform = "translateY(42px)";

			for (let i = 0; i < document.querySelectorAll(".navSectionRButton").length; i++) {
				document.querySelectorAll(".navSectionRButton")[i].style.boxShadow = "0 0 4px 3px black";
			}
		}

		if (!hovering) {
			document.querySelector(".navSectionRButton1").style.transform = "translateY(0px)";
			document.querySelector(".navSectionRButton2").style.transform = "translateY(0px)";

			for (let i = 0; i < document.querySelectorAll(".navSectionRButton").length; i++) {
				document.querySelectorAll(".navSectionRButton")[i].style.boxShadow = "none";
			}
		}
	}

	handleNavButtonsHover() {
		for (let i = 0; i < this.content.navSectionButtonsL.length; i++) {
			this.content.navSectionButtonsL[i].addEventListener("mouseenter", () => {
				this.content.navSectionButtonsL[i].style.textShadow = "0 0 8px white";
				this.content.navSectionButtonsL[i].style.color = "white";
				this.content.navSectionButtonsL[i].style.fontSize = "14px";
				this.content.navSectionButtonsL[i].style.lineHeight = "14px";
			});
		}

		for (let i = 0; i < this.content.navSectionButtonsL.length; i++) {
			this.content.navSectionButtonsL[i].addEventListener("mouseleave", () => {
				this.content.navSectionButtonsL[i].style.textShadow = "none";
				this.content.navSectionButtonsL[i].style.color = "#EEEEEE";
				this.content.navSectionButtonsL[i].style.fontSize = "13px";
				this.content.navSectionButtonsL[i].style.lineHeight = "13px";
			});
		}

		for (let i = 0; i < this.content.navSectionButtonsR.length; i++) {
			this.content.navSectionButtonsR[i].addEventListener("mouseenter", () => {
				this.content.navSectionButtonsR[i].style.textShadow = "0 0 8px white";
				this.content.navSectionButtonsR[i].style.color = "white";
				this.content.navSectionButtonsR[i].style.fontSize = "14px";
				this.content.navSectionButtonsR[i].style.lineHeight = "14px";
			});
		}

		for (let i = 0; i < this.content.navSectionButtonsR.length; i++) {
			this.content.navSectionButtonsR[i].addEventListener("mouseleave", () => {
				this.content.navSectionButtonsR[i].style.textShadow = "none";
				this.content.navSectionButtonsR[i].style.color = "#EEEEEE";
				this.content.navSectionButtonsR[i].style.fontSize = "13px";
				this.content.navSectionButtonsR[i].style.lineHeight = "13px";
			});
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
			this.handleNavHover();
			this.handleNavButtonsHover();
		} else {
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