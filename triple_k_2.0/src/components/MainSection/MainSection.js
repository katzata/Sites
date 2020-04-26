import "./MainSection.css";
import Content from "../PageContent/PageContent";

let topCanvas;
let topCtx;

let bottomCanvas;
let bottomCtx;

class MainSection {
	constructor() {
		this.prepared = false;

		this.content = {
			mainSection: document.querySelector(".mainSection"),
			topCanvas: document.querySelector(".topArticleCanvas"),
		}
	}

	prepare() {
		topCanvas = document.querySelector(".topArticleCanvas");
		topCtx = topCanvas.getContext('2d');
		

		this.content.mainSection.style.backgroundColor = "rgba(0, 0, 0, .5)";
		this.content.mainSection.style.opacity = "1";
		this.content.mainSection.style.overflowY = "scroll";
	}

	handleOpacity() {
		
	}

	handleTopCanvas() {

	}

	render() {
		if (!this.prepared) {
			this.prepare();
		}

		topCtx.font = `${topCanvas.width / 20}px SpectralSC-Regular`;
		topCtx.fillStyle = "white";
		topCtx.fillText("KAMEN KASHCHIEV", 10, 10);
		topCtx.strokeStyle = "#ffffff";
console.log(topCtx)
	}
}

export default MainSection;