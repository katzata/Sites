import "./MainSection.css";
import Content from "../PageContent/PageContent";

class MainSection {
	constructor() {
		this.sectionDone = false;
		this.text;

		this.content = {
			mainSection: undefined,
		}
	}

	setLanguage(lang) {
		if (lang === "en") {
			this.text = Content.en;
		}

		if (lang === "bg") {
			this.text = Content.bg;
		}

		if (lang === "it") {
			this.text = Content.it;
		}
	}

	prepare() {
		this.content.mainSection = document.querySelector(".mainSection");
		
		this.content.mainSection.style.backgroundColor = "rgba(0, 0, 0, .5)";
		this.content.mainSection.style.overflowY = "scroll";
		this.content.mainSection.style.opacity = "1";
		this.sectionDone = true;
	}

	toggleOpacity() {
		if (this.content.mainSection.style.opacity === "0") {
			this.content.mainSection.style.opacity = "1";
		} else {
			this.content.mainSection.style.opacity = "0";
		}
	}

	handleCanvasSizes() {
		
	}

	handleTopArticle() {
		// for (let i = 0; i < ) {

		// }
	}

	handletopCanvasLetterSwap() {
		// setInterval(() => {
		// 	this.test.charAt(Math.floor(Math.random() * 4)) = "ᚱ";
		// }, 1000)
	}

	handleTopCanvas() {
		
	}

	handleBottomCanvas() {
		
	}

	render(languageTemp) {
		if (!this.sectionDone) {
			this.prepare();
			this.setLanguage(languageTemp);
			
		} else {
			this.content.mainSection.style.transitionDuration = "0";
		}

		this.setLanguage("en");
		
		// console.log(Content);
	}
}

export default MainSection;