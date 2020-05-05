import "./MainSection.css";
import Content from "../PageContent/PageContent";

class MainSection {
	constructor() {
		this.sectionDone = false;
		this.text;

		this.content = {
			mainSection: undefined,
			topArticle: undefined
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
		this.content.topArticle = document.querySelector(".topArticle");
		
		this.content.mainSection.style.backgroundColor = "rgba(0, 0, 0, .5)";
		this.content.mainSection.style.overflowY = "scroll";
		this.content.mainSection.style.opacity = "1";
		this.sectionDone = true;
	}

	prepareText() {
		console.log()
		for (let i = 0; i < this.text.mainSection.topArticle.title.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.title[i];

			document.querySelector(".topArticleTitleContainer").appendChild(span);
		}
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
			this.prepareText();
			
		} else {
			this.content.mainSection.style.transitionDuration = "0";
		}

		this.setLanguage("en");
		
		console.log(this.text.mainSection.topArticle.title);
	}
}

export default MainSection;