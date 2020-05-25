import "./CertificatesSection.css";

class CertificatesSection {
	constructor() {
		this.pageDone = false;

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
		};
	}

	prepare() {
		const certificatesSection = document.createElement("section");
		certificatesSection.classList.add("certificatesSection");
		this.content.certificatesSection = certificatesSection;

		this.handleCertificates();

		document.querySelector("main").appendChild(certificatesSection);
		this.pageDone = true;
	}

	handleCertificates() {
		for (let i = 0; i < this.certificates.length; i++) {
			let certificateContainer = document.createElement("div");
			certificateContainer.classList.add("certificateContainer");

			let thumbnailContainer = document.createElement("div");
			thumbnailContainer.classList.add("thumbnailContainer");
			certificateContainer.appendChild(thumbnailContainer);

			let thumbnailSubContainer = document.createElement("div");
			thumbnailSubContainer.classList.add("thumbnailSubContainer");
			thumbnailContainer.appendChild(thumbnailSubContainer);

			let thumbnail = document.createElement("img");
			thumbnail.src = this.certificates[i][2].default;
			thumbnail.classList.add("certificateThumbnail");
			thumbnailSubContainer.appendChild(thumbnail);

			let thumbnailFlash = document.createElement("div");
			thumbnailFlash.classList.add("thumbnailFlash");
			thumbnailSubContainer.appendChild(thumbnailFlash);

			let thumbnailTitle = document.createElement("p");
			thumbnailTitle.textContent = `${this.certificates[i][0]}`;
			thumbnailTitle.classList.add("thumbnailTitle", `thumbnailTitle${i + 1}`);
			thumbnailContainer.appendChild(thumbnailTitle);

			let thumbnailCover = document.createElement("div");
			thumbnailCover.classList.add("thumbnailCover");
			thumbnailContainer.appendChild(thumbnailCover);

			let pdfContainer = document.createElement("div");
			pdfContainer.classList.add("pdfContainer");

			let pdf = document.createElement("object");
			pdf.classList.add("pdf");
			pdf.data = this.certificates[i][1].default;
			pdfContainer.appendChild(pdf);

			let pdfButtonExit = document.createElement("button");
			pdfButtonExit.classList.add("pdfButtonExit");
			pdfButtonExit.value = "EXIT";
			pdfContainer.appendChild(pdfButtonExit);
			
			if (pdf.offsetWidth > pdf.offsetHeight) {
				thumbnailTitle.style.transform = "translateY(100%)";
			}

			thumbnailContainer.addEventListener("mouseenter", () => {
				thumbnailContainer.style.boxShadow = "0 0 14px 13px";
				thumbnailCover.style.backgroundColor = "rgba(0, 0, 0, .0)";
				// thumbnailFlash.style.zIndex = "0";
				thumbnailFlash.style.transform = "rotate(10deg) translateX(300px) translateY(-40px)";
			});

			thumbnailContainer.addEventListener("mouseleave", () => {
				thumbnailContainer.style.boxShadow = "0 0 10px 9px";
				thumbnailCover.style.backgroundColor = "rgba(0, 0, 0, .1)";
				// thumbnailFlash.style.zIndex = "-1";
				thumbnailFlash.style.transform = "rotate(10deg) translateX(-50px) translateY(-40px)";
			});

			// certificateContainer.appendChild(thumbnailTitle);
			certificateContainer.appendChild(pdfContainer);
			this.content.certificatesSection.appendChild(certificateContainer);
		}
	}

	handleHover() {

	}

	render() {
		if (!this.pageDone) {
			this.prepare();
		} else {

		}
	}
}

export default CertificatesSection;