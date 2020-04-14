import "./intro.css";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');

const logo = new Image();
logo.src = "../assets/img/roza2.png";

let whiteNoise = document.createElement("audio");
whiteNoise.src = "../assets/audio/static.mp3";

class Intro {
	constructor() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.logoSize = window.innerHeight / 4;
		this.running = true;
		this.mainCounter = 0;
		this.offsetX = 0;
		this.offsetY = 0;
		this.logoAlpha = 0;
		this.logoAlphaIncrement = 0.005;
		this.textAlphaIncrement = 0.01;
		this.volume = 0;
		this.volumeIncrement = 0.005;
		this.distortionStartFrame1 = 230;
		this.distortionStartFrame2 = 300;
		this.lettersStartFrame = 400;
		this.lettersDelay = 14;
		this.shadowBlur = 11;
		this.letterAlpha = [
			0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0,
		];
	}

	prepare() {
		document.querySelector("body").appendChild(canvas);
		canvas.width = this.width;
		canvas.height = this.height;

		logo.onload = () => {
			ctx.imageSmoothingEnabled = false;
			ctx.save();
			// ctx.drawImage(logo, canvas.width / 2, canvas.height / 2, this.logoSize, this.logoSize * logo.height / logo.width);
			ctx.restore();
		}
	}

	render() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		this.logoSize = canvas.height / 4;

		this.mainCounter++;

		let offsetX = -Math.random();
		let offsetY = -Math.random();
		
		if (this.mainCounter % 2 === 0) {
			offsetX = -Math.random();
			offsetY = -Math.random();
		} else {
			offsetX = Math.random();
			offsetY = Math.random();
		}

		// whiteNoise.play();
		whiteNoise.volume = this.volume;

		this.volume < 0.22 ? this.volume += this.volumeIncrement : null;

		if (this.logoAlpha <= 1 && this.mainCounter <= 200) {
			this.logoAlpha += this.logoAlphaIncrement;
		}

		if (this.mainCounter >= this.distortionStartFrame1 && this.mainCounter < this.distortionStartFrame1 + 8) {
			offsetX = offsetX * 100;
			offsetY = offsetY * 100;
			whiteNoise.volume = 0.5;
			this.logoAlpha = Math.random();
			ctx.save();

			switch (this.mainCounter) {
				case this.distortionStartFrame1:
					ctx.transform(1, 0, -.1, 1, 40 + offsetX, 0 + offsetY);
				break;

				case this.distortionStartFrame1 + 1:
					// ctx.transform(1, 0, -.2, 1, 79 + offsetX, 0 + offsetY);
				break;

				case this.distortionStartFrame1 + 2:
					ctx.transform(1, 0, -.3, 1, 119 + offsetX, 0 + offsetY);
				break;

				case this.distortionStartFrame1 + 3:
					// ctx.transform(1, 0, -.4, 1, 158 + offsetX, 0 + offsetY);
				break;

				case this.distortionStartFrame1 + 4:
					ctx.transform(1, 0, -.5, 1, 200 + offsetX, 0 + offsetY);
				break;

				case this.distortionStartFrame1 + 5:
					ctx.transform(1, 0, -.6, 1, 238 + offsetX, 0 + offsetY);
				break;

				case this.distortionStartFrame1 + 6:
					// ctx.transform(1, 0, -.5, 1, 200 + offsetX, 0 + offsetY);
				break;

				case this.distortionStartFrame1 + 7:
					ctx.transform(1, 0, -.4, 1, 158 + offsetX, 0 + offsetY);
					this.logoAlpha = 1;
				break;
			}
		}

		if (this.mainCounter >= this.distortionStartFrame2 && this.mainCounter <= this.distortionStartFrame2 + 17) {
	
			this.logoAlpha = Math.random();
			whiteNoise.volume = 0.5;

			if (this.mainCounter >= this.distortionStartFrame2 + 3 && this.mainCounter < this.distortionStartFrame2 + 5) {
				ctx.rotate(22 * Math.PI / 180);
				ctx.transform(1, 0, .5, 1.3, -200 + offsetX * 5, -220 + offsetY * 5);
			} else if (this.mainCounter >= this.distortionStartFrame2 + 5 && this.mainCounter < this.distortionStartFrame2 + 7) {
				ctx.rotate(22 * Math.PI / 180);
				ctx.transform(1, 0, .5, 1.3, -55 + offsetX * 5, -220 + offsetY * 5);
			} else if (this.mainCounter >= this.distortionStartFrame2 + 7 && this.mainCounter < this.distortionStartFrame2 + 9) {
				ctx.rotate(22 * Math.PI / 180);
				ctx.transform(1, 0, .5, 1.3, -77 + offsetX * 5, -268 + offsetY * 5);
			} else if (this.mainCounter >= this.distortionStartFrame2 + 9 && this.mainCounter < this.distortionStartFrame2 + 11) {
				ctx.rotate(0 * Math.PI / 180);
				ctx.transform(1, 0, 0, 1, 0 + offsetX * 5, 0 + offsetY * 5);
			} else if (this.mainCounter >= this.distortionStartFrame2 + 11 && this.mainCounter < this.distortionStartFrame2 + 13) {
				ctx.rotate(25 * Math.PI / 180);
				ctx.transform(1.2, -1, .9, 2, -277 + offsetX * 5, -268 + offsetY * 5);
			} else if (this.mainCounter >= this.distortionStartFrame2 + 13 && this.mainCounter < this.distortionStartFrame2 + 15) {
				ctx.rotate(22 * Math.PI / 180);
				ctx.transform(1, 0, .5, 1.3, -77 + offsetX * 5, -268 + offsetY * 5);
			} else if (this.mainCounter >= this.distortionStartFrame2 + 15 && this.mainCounter < this.distortionStartFrame2 + 17) {
				ctx.rotate(0 * Math.PI / 180);
				ctx.transform(1, 0, 0, 1, 0 + offsetX * 5, 0 + offsetY * 5);
			}

			ctx.restore();
		} else if (this.mainCounter === this.distortionStartFrame2 + 18) {
			this.logoAlpha = 1;
		}

		ctx.globalAlpha = this.logoAlpha;
		ctx.save();
		ctx.translate(-this.logoSize / 2, -((this.logoSize * logo.height) / logo.width) / 2);
		ctx.drawImage(logo, canvas.width / 2, canvas.height / 2, this.logoSize, this.logoSize * logo.height / logo.width);
		ctx.restore();

		this.handleText();
	}

	handleText() {
		if (this.mainCounter >= this.lettersStartFrame) {
			ctx.save();
			
			ctx.font = `${canvas.height / 15}px Rune`;
			ctx.fillStyle = "black";
			ctx.textAligh = "center";
			ctx.textBaseline = "center";
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowColor = "rgba(255, 255, 255, 1)";
			ctx.strokeStyle = "#ffffff";

			let letterWidth = ctx.measureText("M").width;
			let letterWidth2 = ctx.measureText("K").width;
			let letterWidth3 = ctx.measureText("A").width;
			let letterWidth4 = ctx.measureText("E").width;
			let letterWidth5 = ctx.measureText("N").width;
			let letterWidth6 = ctx.measureText("S").width;
			let letterWidth7 = ctx.measureText("H").width;
			let letterWidth8 = ctx.measureText("C").width;
			let letterWidth9 = ctx.measureText("I").width;
			let letterWidth10 = ctx.measureText("V").width;

			let differences = [
				letterWidth - letterWidth2, //0 K
				letterWidth - letterWidth3, //1 A
				letterWidth - letterWidth4, //2 E
				letterWidth - letterWidth5, //3 N
				letterWidth - letterWidth6, //4 S
				letterWidth - letterWidth7, //5 H
				letterWidth - letterWidth8, //6 C
				letterWidth - letterWidth9, //7 I
				letterWidth - letterWidth10 //8 V
			]

			let difference = letterWidth - letterWidth2;

			if (this.mainCounter > this.lettersStartFrame) {
				if (this.letterAlpha[0] <= 1) {
					ctx.globalAlpha = this.letterAlpha[0];
					this.letterAlpha[0] += this.textAlphaIncrement;
				}

				ctx.fillText('K', canvas.width / 2 - (letterWidth * 7 - differences[0] * 7), canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay) {
				if (this.letterAlpha[1] <= 1) {
					ctx.globalAlpha = this.letterAlpha[1];
					this.letterAlpha[1] += this.textAlphaIncrement;
				}

				ctx.fillText('A', canvas.width / 2 - (letterWidth * 6 - differences[1] * 6), canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 2) {
				if (this.letterAlpha[2] <= 1) {
					ctx.globalAlpha = this.letterAlpha[2];
					this.letterAlpha[2] += this.textAlphaIncrement;
				}
				
				ctx.fillText('M', canvas.width / 2 - (letterWidth2 * 5), canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 3) {
				if (this.letterAlpha[3] <= 1) {
					ctx.globalAlpha = this.letterAlpha[3];
					this.letterAlpha[3] += this.textAlphaIncrement;
				}
				
				ctx.fillText('E', canvas.width / 2 - (letterWidth * 4 - differences[2] * 4) - differences[2], canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 4) {
				if (this.letterAlpha[4] <= 1) {
					ctx.globalAlpha = this.letterAlpha[4];
					this.letterAlpha[4] += this.textAlphaIncrement;
				}
				
				ctx.fillText('N', canvas.width / 2 - (letterWidth * 3 - difference * 3), canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 5) {
				if (this.letterAlpha[5] <= 1) {
					ctx.globalAlpha = this.letterAlpha[5];
					this.letterAlpha[5] += this.textAlphaIncrement;
				}
				
				ctx.fillText('K', canvas.width / 2 - (letterWidth - difference), canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 6) {
				if (this.letterAlpha[6] <= 1) {
					ctx.globalAlpha = this.letterAlpha[6];
					this.letterAlpha[6] += this.textAlphaIncrement;
				}
				
				ctx.fillText('A', canvas.width / 2 - (letterWidth - difference) / 2 + differences[4], canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 7) {
				if (this.letterAlpha[7] <= 1) {
					ctx.globalAlpha = this.letterAlpha[7];
					this.letterAlpha[7] += this.textAlphaIncrement;
				}
				
				ctx.fillText('S', canvas.width / 2 + (letterWidth - differences[6]), canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 8) {
				if (this.letterAlpha[8] <= 1) {
					ctx.globalAlpha = this.letterAlpha[8];
					this.letterAlpha[8] += this.textAlphaIncrement;
				}
				
				ctx.fillText('H', canvas.width / 2 + (letterWidth - differences[2]) * 2 - 1, canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 9) {
				if (this.letterAlpha[9] <= 1) {
					ctx.globalAlpha = this.letterAlpha[9];
					this.letterAlpha[9] += this.textAlphaIncrement;
				}
				
				ctx.fillText('C', canvas.width / 2 + (letterWidth - differences[2]) * 3 + 2, canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 10) {
				if (this.letterAlpha[10] <= 1) {
					ctx.globalAlpha = this.letterAlpha[10];
					this.letterAlpha[10] += this.textAlphaIncrement;
				}
				
				ctx.fillText('H', canvas.width / 2 + (letterWidth - difference) * 4 - (differences[6] + differences[1]), canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 11) {
				if (this.letterAlpha[11] <= 1) {
					ctx.globalAlpha = this.letterAlpha[11];
					this.letterAlpha[11] += this.textAlphaIncrement;
				}
				
				ctx.fillText('I', canvas.width / 2 + (letterWidth - difference) * 5 - (differences[6] + differences[5]), canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 12) {
				if (this.letterAlpha[12] <= 1) {
					ctx.globalAlpha = this.letterAlpha[12];
					this.letterAlpha[12] += this.textAlphaIncrement;
				}
				
				ctx.fillText('E', canvas.width / 2 + (letterWidth - differences[4]) * 6 + differences[6], canvas.height / 2 + differences[7]);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 13) {
				if (this.letterAlpha[13] <= 1) {
					ctx.globalAlpha = this.letterAlpha[13];
					this.letterAlpha[13] += this.textAlphaIncrement;
				}
				
				ctx.fillText('V', canvas.width / 2 + (letterWidth - differences[6]) * 7 - differences[7], canvas.height / 2 + differences[7]);
			}
			
			ctx.restore();
		}
	}
}

window.onclick = () => {
	// intro.running = !intro.running;
	// console.log(ctx)
}

window.onload = () => {

}

export default Intro;