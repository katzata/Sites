import "./MainSection.css";
import Content from "../PageContent/PageContent";

class MainSection {
	constructor() {
		this.sectionDone = false;
		this.text;

		this.content = {
			nav: undefined,
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
		this.content.nav = document.querySelector("nav");
		this.content.mainSection = document.querySelector(".mainSection");
		this.content.topArticle = document.querySelector(".topArticle");
		
		this.content.nav.style.opacity = "1";
		this.content.mainSection.style.backgroundColor = "rgba(0, 0, 0, .5)";
		this.content.mainSection.style.overflowY = "auto";
		this.content.mainSection.style.opacity = "1";
		this.sectionDone = true;
	}

	prepareTopArticle() {
		for (let i = 0; i < this.text.mainSection.topArticle.title.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.title[i];
			span.classList.add("topArticleLetters");

			document.querySelector(".topArticleTitle").appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.topArticle.name.title.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.name.title[i];
			span.classList.add("topArticleLetters");

			document.querySelector(".topArticleSubTitle1").appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.topArticle.name.content.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.name.content[i];
			span.classList.add("topArticleLetters");

			document.querySelector(".topArticleText1").appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.topArticle.age.title.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.age.title[i];
			span.classList.add("topArticleLetters");

			document.querySelector(".topArticleSubTitle2").appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.topArticle.age.content.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.age.content[i];
			span.classList.add("topArticleLetters");

			document.querySelector(".topArticleText2").appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.topArticle.location.title.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.location.title[i];
			span.classList.add("topArticleLetters");

			document.querySelector(".topArticleSubTitle3").appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.topArticle.location.content.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.location.content[i];
			span.classList.add("topArticleLetters");

			document.querySelector(".topArticleText3").appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.topArticle.education.title.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.education.title[i];
			span.classList.add("topArticleLetters");

			document.querySelector(".topArticleSubTitle4").appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.topArticle.education.content.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.education.content[i];
			span.classList.add("topArticleLetters");

			document.querySelector(".topArticleText4").appendChild(span);
		}
	}

	prepareBottomArticle() {
		for (let i = 0; i < this.text.mainSection.bottomArticle.title.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.bottomArticle.title[i];
			span.classList.add("bottomArticleLetters");

			document.querySelector(".bottomArticleTitle").appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.bottomArticle.content.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.bottomArticle.content[i];
			span.classList.add("bottomArticleLetters");

			document.querySelector(".bottomArticleText").appendChild(span);
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

	handleBottomArticle() {

	}

	render(languageTemp) {
		if (!this.sectionDone) {
			this.prepare();
			this.setLanguage(languageTemp);
			this.prepareTopArticle();
			this.prepareBottomArticle();
			
		} else {
			this.content.mainSection.style.transitionDuration = "0";
		}

		this.setLanguage("en");
		
		// console.log(this.text.mainSection.topArticle);
	}
}

export default MainSection;