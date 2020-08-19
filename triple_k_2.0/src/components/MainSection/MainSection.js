import "./MainSection.css";
import Content from "../PageContent/PageContent";

const textEn = require("../PageContent/textEn.JSON");
const kkk = require("../../assets/img/kkk.png");

class MainSection {
	constructor() {
		this.sectionDone = false;
		this.text;

		this.icons = {
			html: undefined,
			css: undefined,
			sass: undefined,
			bootstrap: undefined,
			js: undefined,
			jquery: undefined,
			pixi: undefined,
			react: undefined,
			webpack: undefined,
			node: undefined,
			git: undefined
		}

		this.content = {
			nav: undefined,
			mainSection: undefined,
			topArticle: undefined,
			topArticleSubTitle: undefined,
			topArticleText: undefined,
		}
	}

	setLanguage(lang) {
		if (lang === "en") {
			this.text = textEn;
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
		this.prepareMiddleArticle(mainSection);
		this.prepareBottomArticle(mainSection);

		document.querySelector("main").appendChild(mainSection);

		this.handleWidths();

		this.content.nav = document.querySelector("nav");
		this.content.topArticle = document.querySelector(".topArticle");

		mainSection.style.backgroundColor = "rgba(0, 0, 0, .5)";
		this.sectionDone = true;

		console.log(textEn.en)
	}

	handleWidths() {
		for (let i = 0; i < document.querySelectorAll(".skillThemeBText").length; i++) {
			document.querySelectorAll(".skillThemeA")[i].style.width = "60px";
			document.querySelectorAll(".skillThemeBText")[i].style.width = `${document.querySelectorAll(".skillThemeA")[i].offsetWidth}px`;
		}
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

		for (let i = 0; i < 4; i++) {
			let topArticleSubTitle = document.createElement("div");
			topArticleSubTitle.classList.add("topArticleSubTitle");
			
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

			const topArticleHr = document.createElement("hr");
			topArticleHr.classList.add("topArticleHr");
			topArticleSubTitle.appendChild(topArticleHr);

			topArticle.appendChild(topArticleSubTitle);
			topArticle.appendChild(topArticleText);
		}

		this.content.topArticleSubTitle = document.querySelectorAll(".topArticleSubTitle");
		this.content.topArticleText = document.querySelectorAll(".topArticleText");

		const topArticleImg = document.createElement("img");
		topArticleImg.classList.add("topArticleImg");
		topArticleImg.src = kkk.default;
		this.content.topArticleImg = topArticleImg;

		topArticleContainer.appendChild(topArticle);
		topArticleContainer.appendChild(topArticleImg);
		this.content.mainSection.appendChild(topArticleContainer);
	}

	prepareMiddleArticle(mainSection) {
		const middleArticle = document.createElement("div");
		middleArticle.classList.add("middleArticle");

		const articleTitle = document.createElement("h2");
		articleTitle.classList.add("articleTitle");
		articleTitle.textContent = "Acquired Skills";
		middleArticle.appendChild(articleTitle);

		const skillsContainer = document.createElement("div");
		skillsContainer.classList.add("skillsContainer");
		middleArticle.appendChild(skillsContainer);

		for (let i = 0; i < Content.icons.src.length; i++) {
			const container = document.createElement("div");
			container.classList.add("iconContainer");

			const icon = document.createElement("img");
			icon.classList.add("icon", `icon-${i}`);
			icon.src = Content.icons.src[i];
			icon.alt = `${Content.icons.titles[i]}`;
			container.appendChild(icon);

			const iconOverlay = document.createElement("div");
			iconOverlay.classList.add("iconOverlay");
			container.appendChild(iconOverlay);

			const iconTitle = document.createElement("p");
			iconTitle.classList.add("iconTitle", `iconTitle-${i}`);
			iconTitle.textContent = `${Content.icons.titles[i]}`;
			iconTitle.dataset.index = `${i}`;
			container.appendChild(iconTitle);

			skillsContainer.appendChild(container);

			container.addEventListener("mouseover", () => {
				this.iconsHoverEnter(iconTitle, iconOverlay);
			})

			container.addEventListener("mouseleave", () => {
				this.iconsHoverLeave(iconTitle, iconOverlay);
			})
		}

		mainSection.appendChild(middleArticle);
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

		const bottomArticleHr = document.createElement("hr");
		bottomArticleHr.classList.add("bottomArticleHr");
		bottomArticleTitle.appendChild(bottomArticleHr);

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

	iconsHoverEnter(iconTitle, iconOverlay) {
		iconTitle.style.transform = "scale(1, 1) translateY(0%)";
		iconTitle.style.zIndex = "1";
		iconOverlay.style.opacity = "1";
	}

	iconsHoverLeave(iconTitle, iconOverlay) {
		if (Number(iconTitle.dataset.index) < 5) {
			iconTitle.style.transform = "scale(0, 0) translateY(-120%)";
			iconTitle.style.zIndex = "-1";
		} else if (Number(iconTitle.dataset.index) === 5) {
			iconTitle.style.transform = "scale(0, 0) translateX(-120%)";
		} else {
			iconTitle.style.transform = "scale(0, 0) translateY(120%)";
			iconTitle.style.zIndex = "-1";
		}
		iconOverlay.style.opacity = "0";
	}

	render(language) {
		if (!this.sectionDone) {
			this.setLanguage(language);
			this.prepare();
		} else {
			document.querySelector(".mainSection").style.opacity = "1";
		}

		// this.setLanguage("en");
		// console.log(this.text.mainSection.topArticle);
	}
}

window.ontouchend = () => {
	// alert(window.innerWidth);
}

export default MainSection;