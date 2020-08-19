import "./CertificatesSection.css";
import Content from "../PageContent/PageContent";

class CertificatesSection {
	constructor() {
		this.page = {
			done: false,
			text: undefined,
			opacity: "0"
		}

		this.certificates = [
			[
				"Front End Course",
				require("../../assets/cc/swift.pdf"),
				require("../../assets/cc/swift.jpg")
			],
			[
				"Modern JavaScript Course",
				require("../../assets/cc/mjs.pdf"),
				require("../../assets/cc/mjs.jpg")
			],
			[
				"PHP Course",
				require("../../assets/cc/php.pdf"),
				require("../../assets/cc/php.jpg")
			],
			[
				"Webpack Course",
				require("../../assets/cc/wp.pdf"),
				require("../../assets/cc/wp.jpg")
			]
		];

		this.content = {
			certificatesSection: undefined,
			thumbnailSection: undefined,
			thumbnails: undefined,
			pdfs: undefined,
		};

		this.toggle = {
			pdfVisible: false,
			exitPdfButton: false
		}
	}

	prepare() {
		const certificatesSection = document.createElement("section");
		certificatesSection.classList.add("certificatesSection");
		certificatesSection.style.opacity = `${this.page.opacity}`;
		this.content.certificatesSection = certificatesSection;

		const thumbnailSection = document.createElement("div");
		thumbnailSection.classList.add("thumbnailSection");
		this.content.thumbnailSection = thumbnailSection;

		this.handleThumbNails(certificatesSection, thumbnailSection);

		certificatesSection.appendChild(thumbnailSection);
		document.querySelector("main").appendChild(certificatesSection);
		
		this.page.done = true;

		setTimeout(() => {
			this.toggleOpacity();
		}, 2);
	}

	setLanguage(lang) {
		if (lang === "en") {
			this.page.text = Content.en;
		}

		if (lang === "bg") {
			this.page.text = Content.bg;
		}

		if (lang === "it") {
			this.page.text = Content.it;
		}
	}

	handleThumbNails(certificatesSection, thumbnailSection) {
		for (let i = 0; i < this.certificates.length; i++) {
			let certificateContainer = document.createElement("div");
			certificateContainer.classList.add("certificateContainer");

			let thumbnailContainer = document.createElement("div");
			thumbnailContainer.classList.add("thumbnailContainer");
			certificateContainer.appendChild(thumbnailContainer);

			let thumbnailInnerContainer = document.createElement("div");
			thumbnailInnerContainer.classList.add("thumbnailInnerContainer");
			thumbnailContainer.appendChild(thumbnailInnerContainer);

			let thumbnail = document.createElement("img");
			thumbnail.src = this.certificates[i][2].default;
			thumbnail.classList.add("thumbnail");
			thumbnailInnerContainer.appendChild(thumbnail);

			let thumbnailTitle = document.createElement("p");
			thumbnailTitle.textContent = `${this.page.text.certificatesSection.titles[i]}`;
			thumbnailTitle.classList.add("thumbnailTitle", `thumbnailTitle${i + 1}`);
			thumbnailContainer.appendChild(thumbnailTitle);

			let thumbnailCover = document.createElement("div");
			thumbnailCover.classList.add("thumbnailCover", `thumbnailCover${i}`);
			thumbnailInnerContainer.appendChild(thumbnailCover);

			let pdfContainer = document.createElement("div");
			pdfContainer.classList.add("pdfContainer");
			certificatesSection.appendChild(pdfContainer);

			let pdf = document.createElement("iframe");
			pdf.classList.add("pdf");
			pdf.src = this.certificates[i][1].default;
			pdf.type = "application/pdf";
			pdfContainer.appendChild(pdf);

			if (window.navigator === "iPhone") {
				pdf.width = `${window.innerWidth}px`;
			}

			let exitPdfButton = document.createElement("button");
			exitPdfButton.classList.add("exitPdfButton");
			exitPdfButton.textContent = `${this.page.text.certificatesSection.button}`;
			pdfContainer.appendChild(exitPdfButton);

			thumbnailContainer.addEventListener("mouseenter", () => {
				thumbnailContainer.style.boxShadow = "0 0 13px 12px rgba(0, 0, 0, .85)";
				thumbnailContainer.style.transform = "scale(1, 1)";
				thumbnailCover.style.backgroundColor = "rgba(0, 0, 0, .0)";
				// thumbnail.style.zIndex = "0";
				// thumbnailFlash.style.transform = "rotate(10deg) translateX(300px) translateY(-40px)";
			});

			thumbnailContainer.addEventListener("mouseleave", () => {
				thumbnailContainer.style.boxShadow = "0 0 10px 9px rgba(0, 0, 0, .8)";
				thumbnailContainer.style.transform = "scale(.99, .99)";
				thumbnailCover.style.backgroundColor = "rgba(0, 0, 0, .1)";
				// thumbnail.style.zIndex = "1";
				// thumbnailFlash.style.transform = "rotate(10deg) translateX(-50px) translateY(-40px)";
			});

			thumbnailCover.addEventListener("click", () => {
				pdf.style.opacity = "1";
				this.togglePdf(pdfContainer);
				// document.querySelector(".certificatesSection").style.overflowY = "hidden";
			});

			pdfContainer.addEventListener("mouseenter", () => {
				this.togglePdfExitButton(exitPdfButton);
			});

			pdfContainer.addEventListener("mouseleave", () => {
				this.togglePdfExitButton(exitPdfButton);
			});

			exitPdfButton.addEventListener("click", () => {
				this.togglePdf(pdfContainer);
			});
			
			thumbnailSection.appendChild(certificateContainer);
		}
	}

	handlePdf() {

	}

	handleSizes() {
		// this.content.certificatesSection.style.width = `${window.innerWidth + 17}px`;
	}

	toggleOpacity() {
		if (this.page.opacity === "0") {
			this.page.opacity = "1";
			document.querySelector(".certificatesSection").style.opacity = `${this.page.opacity}`;
			console.log(this.page.opacity)
		} else {
			this.page.opacity = "0";
			document.querySelector(".certificatesSection").style.opacity = `${this.page.opacity}`;
			console.log(this.page.opacity)
		}
	}

	togglePdf(pdf) {
		if (!this.toggle.pdfVisible) {
			pdf.style.transform = "translateY(0%)";
			this.toggle.pdfVisible = true;
		} else {
			pdf.style.transform = "translateY(-100%)";
			this.toggle.pdfVisible = false;
		}
	}

	togglePdfExitButton(button) {
		if (!this.toggle.exitPdfButton) {
			button.style.transform = "translateX(0px)";
			this.toggle.exitPdfButton = true;
		} else {
			button.style.transform = "translateX(-70px)";
			this.toggle.exitPdfButton = false;
		}
	}

	render(language) {
		if (!this.page.done) {
			this.setLanguage(language);
			this.prepare();

			window.onclick = () => {
				// this.toggleOpacity();
				// alert(window.navigator.platform)
				// console.log("x")
			}
		} else {
			this.handleSizes();
		}
	}
}



export default CertificatesSection;