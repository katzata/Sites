import "./MainSection.css";
import Content from "../PageContent/PageContent";

let topCanvas;
let topCtx;

let bottomCanvas;
let bottomCtx;

class MainSection {
	constructor() {
		this.prepared = false;
		this.currentLanguage;
		this.temp;

		this.content = {
			mainSection: document.querySelector(".mainSection"),
			topCanvas: document.querySelector(".topArticleCanvas"),
		}
	}

	setLanguage(lang) {
		if (lang === "en") {
			this.currentLanguage = Content.mainSection.topArticle.en.title;
		}
	}

	prepare() {
		topCanvas = document.querySelector(".topArticleCanvas");
		topCtx = topCanvas.getContext('2d');

		this.content.mainSection.style.backgroundColor = "rgba(0, 0, 0, .5)";
		this.content.mainSection.style.opacity = "1";
		this.content.mainSection.style.overflowY = "scroll";
	}

	toggleOpacity() {

	}

	handleCanvasSizes() {
		topCanvas.width = window.innerWidth / 3;
	}

	handleTopCanvas() {
		topCtx.font = `${topCanvas.width / 6}px SpectralSC-Regular`;

		let offsetY = topCtx.measureText(`${this.currentLanguage}`).actualBoundingBoxAscent;
		let offsetX = topCtx.measureText(`${this.currentLanguage}`).width;

console.log(offsetX)
		topCtx.clearRect(0, 0, topCanvas.width, topCanvas.height)
		topCtx.fillStyle = "white";
		topCtx.transform(1, 0, 0, 1, 0, 0);
		// topCtx.fillText(`${this.currentLanguage}`, 0, offset);
		topCtx.fillText(`${this.currentLanguage}`, topCanvas.width / 2 - offsetX / 2, offsetY * 1.5);
		topCtx.strokeStyle = "#ffffff";
	}

	render() {
		if (!this.prepared) {
			this.prepare();
		}
		this.setLanguage("en");
		this.handleCanvasSizes();
		this.handleTopCanvas();

		
		// console.log(Content)
	}
}

export default MainSection;