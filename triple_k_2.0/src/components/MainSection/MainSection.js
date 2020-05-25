import "./MainSection.css";
import Content from "../PageContent/PageContent";
const kkk = require("../../assets/img/kkk.png");

class MainSection {
	constructor() {
		this.sectionDone = false;
		this.text;

		this.content = {
			nav: undefined,
			mainSection: undefined,
			topArticle: undefined,
			topArticleTitle: undefined,
			topArticleSubTitle: undefined,
			topArticleText: undefined,
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
		const mainSection = document.createElement("section");
		mainSection.classList.add("mainSection");
		this.content.mainSection = mainSection;

		this.prepareTopArticle(mainSection);
		this.prepareBottomArticle(mainSection);

		document.querySelector("main").appendChild(mainSection);

		this.content.nav = document.querySelector("nav");
		this.content.topArticle = document.querySelector(".topArticle");

		mainSection.style.backgroundColor = "rgba(0, 0, 0, .5)";
		this.sectionDone = true;
	}

	prepareTopArticle(mainSection) {
		let content = [
			[
				this.text.mainSection.topArticle.name.title,
				this.text.mainSection.topArticle.name.content
			],
			[
				this.text.mainSection.topArticle.age.title,
				this.text.mainSection.topArticle.age.content
			],
			[
				this.text.mainSection.topArticle.location.title,
				this.text.mainSection.topArticle.location.content
			],
			[
				this.text.mainSection.topArticle.education.title,
				this.text.mainSection.topArticle.education.content
			]
		];

		const topArticleContainer = document.createElement("div");
		topArticleContainer.classList.add("topArticleContainer");
		this.content.topArticleContainer = topArticleContainer;

		const topArticle = document.createElement("article");
		topArticle.classList.add("topArticle");
		this.content.topArticle = topArticle;

		const topArticleTitle = document.createElement("div");
		topArticleTitle.classList.add("topArticleTitle");
		topArticle.appendChild(topArticleTitle);
		this.content.topArticleTitle = topArticleTitle;
		
		for (let i = 0; i < 4; i++) {
			let topArticleSubTitle = document.createElement("div");
			topArticleSubTitle.classList.add("topArticleSubTitle", `topArticleSubTitle${i + 1}`);
			
			for (let j = 0; j < content[i][0].length; j++) {
				let titleSpan = document.createElement("span");
				titleSpan.textContent = content[i][0][j];
				titleSpan.classList.add("topArticleLetters");

				topArticleSubTitle.appendChild(titleSpan);
			}

			let topArticleText = document.createElement("div");
			topArticleText.classList.add("topArticleText", `topArticleText${i + 1}`);

			for (let j = 0; j < content[i][1].length; j++) {
				let textSpan = document.createElement("span");
				textSpan.textContent = content[i][1][j];
				textSpan.classList.add("topArticleLetters");

				topArticleText.appendChild(textSpan);
			}

			topArticle.appendChild(topArticleSubTitle);
			topArticle.appendChild(topArticleText);
		}
		for (let i = 0; i < this.text.mainSection.topArticle.title.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.topArticle.title[i];
			span.classList.add("topArticleLetters");

			topArticleTitle.appendChild(span);
		}

		this.content.topArticleSubTitle = document.querySelectorAll(".topArticleSubTitle");
		this.content.topArticleText = document.querySelectorAll(".topArticleText");

		const topArticleImgContainer = document.createElement("div");
		topArticleImgContainer.classList.add("topArticleImgContainer");
		this.content.topArticleImgContainer = topArticleImgContainer;

		const topArticleImg = document.createElement("img");
		topArticleImg.classList.add("topArticleImg");
		topArticleImg.src = kkk.default;
		topArticleImgContainer.appendChild(topArticleImg);
		this.content.topArticleImg = topArticleImg;

		topArticleContainer.appendChild(topArticle);
		topArticleContainer.appendChild(topArticleImgContainer);
		this.content.mainSection.appendChild(topArticleContainer);
	}

	prepareBottomArticle(mainSection) {
		const bottomArticle = document.createElement("section");
		bottomArticle.classList.add("bottomArticle");
		this.content.bottomArticle = bottomArticle;

		const bottomArticleTitle = document.createElement("div");
		bottomArticleTitle.classList.add("bottomArticleTitle");
		this.content.bottomArticleTitle = bottomArticleTitle;

		const bottomArticleText = document.createElement("div");
		bottomArticleText.classList.add("bottomArticleText");
		this.content.bottomArticleText = bottomArticleText;

		for (let i = 0; i < this.text.mainSection.bottomArticle.title.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.bottomArticle.title[i];
			span.classList.add("bottomArticleLetters");

			bottomArticleTitle.appendChild(span);
		}

		for (let i = 0; i < this.text.mainSection.bottomArticle.content.length; i++) {
			let span = document.createElement("span");
			span.textContent = this.text.mainSection.bottomArticle.content[i];
			span.classList.add("bottomArticleLetters");

			bottomArticleText.appendChild(span);
		}

		bottomArticle.appendChild(bottomArticleTitle);
		bottomArticle.appendChild(bottomArticleText);
		this.content.mainSection.appendChild(bottomArticle);
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
			this.setLanguage(languageTemp);
			this.prepare();
		} else {
			document.querySelector(".mainSection").style.opacity = "1";
			// this.content.mainSection.style.transitionDuration = "0";
		}

		this.setLanguage("en");
		window.onclick = () => {
			console.log("x")
			document.querySelector(".mainSection").style.opacity = "1";
		}
		// console.log(this.text.mainSection.topArticle);
	}
}



export default MainSection;