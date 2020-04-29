import "./MainSection.css";
import Content from "../PageContent/PageContent";

let topCanvas;
let topCtx;

let bottomCanvas;
let bottomCtx;

class MainSection {
	constructor() {
		this.prepared = false;
		this.currentContent;

		this.content = {
			mainSection: document.querySelector(".mainSection"),
		}
	}

	setLanguage(lang) {
		if (lang === "en") {
			this.currentContent = Content.en.mainSection.topArticle.title;
		}
	}

	prepare() {
		topCanvas = document.querySelector(".topArticleCanvas");
		topCtx = topCanvas.getContext('2d');
		this.content.mainSection.style.opacity = "1";
	}

	toggleOpacity() {
		this.content.mainSection.style.backgroundColor = "rgba(0, 0, 0, .5)";
		this.content.mainSection.style.opacity = "1";
		this.content.mainSection.style.overflowY = "scroll";
	}

	handleCanvasSizes() {
		topCanvas.width = window.innerWidth / 2.5;
		topCanvas.height = 300/*window.innerWidth * topCanvas.height / topCanvas.width*/;
	}

	handleTopCanvas() {
		topCtx.font = `${topCanvas.width / 10.2}px SpectralSC-Regular`;

		let offsetY = topCtx.measureText(`${this.currentContent}`).actualBoundingBoxAscent;
		let offsetX = topCtx.measureText(`${this.currentContent}`).width;

		topCtx.clearRect(0, 0, topCanvas.width, topCanvas.height)
		topCtx.fillStyle = "white";
		topCtx.transform(1, 0, 0, 1, 0, 0);
		topCtx.fillText(`${this.currentContent}`, 0, offsetY);
		topCtx.strokeStyle = "#ffffff";
	}

	render() {
		if (!this.prepared) {
			this.prepare();
		} else {
			this.content.mainSection.style.transitionDuration = "0";
		}

		this.setLanguage("en");
		this.handleCanvasSizes();
		this.handleTopCanvas();

		
		// console.log(Content)
	}
}

export default MainSection;