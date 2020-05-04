import "./MainSection.css";
import Content from "../PageContent/PageContent";

let topCanvas;
let topCtx;

let bottomCanvas;
let bottomCtx;

class MainSection {
	constructor() {
		this.prepared = false;
		this.content;

		this.content = {
			mainSection: document.querySelector(".mainSection"),
		}

		this.test = "asd";
	}

	setLanguage(lang) {
		if (lang === "en") {
			this.content = Content.en;
		}

		if (lang === "bg") {
			this.content = Content.bg;
		}

		if (lang === "it") {
			this.content = Content.it;
		}
	}

	prepare() {
		topCanvas = document.querySelector(".topArticleCanvas");
		topCtx = topCanvas.getContext('2d');

		bottomCanvas = document.querySelector(".bottomArticleCanvas");
		bottomCtx = bottomCanvas.getContext('2d');

		document.querySelector(".mainSection").style.opacity = "1";
	}

	toggleOpacity() {
		this.content.mainSection.style.backgroundColor = "rgba(0, 0, 0, .5)";
		this.content.mainSection.style.opacity = "1";
		this.content.mainSection.style.overflowY = "scroll";
	}

	handleCanvasSizes() {
		topCanvas.width = 280;
		topCanvas.height = 300/*window.innerWidth * topCanvas.height / topCanvas.width*/;

		bottomCanvas.width = window.innerWidth - 20;
	}

	handletopCanvasLetterSwap() {
		setInterval(() => {
			this.test.charAt(Math.floor(Math.random() * 4)) = "ᚱ";
		}, 1000)
	}

	handleTopCanvas() {
		topCtx.clearRect(0, 0, topCanvas.width, topCanvas.height)

		topCtx.fillStyle = "white";
		topCtx.transform(1, 0, 0, 1, 0, 0);
		
		topCtx.font = `${topCanvas.width / 9.5}px SpectralSC-Regular`;
		let offsetY = topCtx.measureText(`${this.content.mainSection.topArticle.title}`).actualBoundingBoxAscent;
		let offsetX = 20;

		topCtx.fillText(`${this.content.mainSection.topArticle.title}`, 0, offsetY);
		topCtx.shadowColor = "white";
		topCtx.shadowBlur = 8;

		topCtx.font = `${topCanvas.width / 10.6}px SpectralSC-Regular`;
		topCtx.fillText(`${this.content.mainSection.topArticle.name.title}`, 0, offsetY + 45);
		topCtx.fillText(`${this.content.mainSection.topArticle.age.title}`, 0, offsetY + 105);
		topCtx.fillText(`${this.content.mainSection.topArticle.location.title}`, 0, offsetY + 165);
		topCtx.fillText(`${this.content.mainSection.topArticle.education.title}`, 0, offsetY + 225);

		topCtx.font = `${topCanvas.width / 12.6}px SpectralSC-Regular`;
		topCtx.fillText(`${this.content.mainSection.topArticle.name.content}`, offsetX, offsetY + 65);
		topCtx.fillText(`${this.content.mainSection.topArticle.age.content}`, offsetX, offsetY + 126);
		topCtx.fillText(`${this.content.mainSection.topArticle.location.content}`, offsetX, offsetY + 185);
		topCtx.fillText(`${this.content.mainSection.topArticle.education.content}`, offsetX, offsetY + 245);

		topCtx.font = `${topCanvas.width / 12.6}px rune`;
		topCtx.fillText(`${this.content.mainSection.topArticle.name.content}`, offsetX, offsetY + 85);
	}

	handleBottomCanvas() {
		bottomCtx.clearRect(0, 0, bottomCanvas.width, bottomCanvas.height)

		bottomCtx.fillStyle = "white";
		bottomCtx.transform(1, 0, 0, 1, 0, 0);
		
		bottomCtx.font = `${bottomCanvas.height / 10.5}px SpectralSC-Regular`;
		let offsetY = bottomCtx.measureText(`${this.content.mainSection.bottomArticle.title}`).actualBoundingBoxAscent;
		let offsetX = 20;

		bottomCtx.fillText(`${this.content.mainSection.bottomArticle.title}`, 0, offsetY);
		bottomCtx.shadowColor = "white";
		bottomCtx.shadowBlur = 8;

		bottomCtx.font = `${bottomCanvas.height / 10.6}px SpectralSC-Regular`;
		bottomCtx.fillText(`${this.content.mainSection.bottomArticle.content}`, -10, offsetY + offsetY);
	}

	render(languageTemp) {
		if (!this.prepared) {
			this.prepare();
			this.setLanguage(languageTemp);
		} else {
			this.content.mainSection.style.transitionDuration = "0";
		}

		this.setLanguage("en");
		this.handleCanvasSizes();

		this.handleTopCanvas();
		this.handleBottomCanvas();
		
		console.log(Content);
	}
}

export default MainSection;