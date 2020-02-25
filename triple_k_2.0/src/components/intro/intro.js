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
		this.alphaIncrement = 0.005;
		this.volume = 0;
		this.volumeIncrement = 0.005;
		this.distortionStartFrame1 = 230;
		this.distortionStartFrame2 = 300;
		this.lettersStartFrame = 400;
		this.lettersDelay = 14;
		this.shadowBlur = 10;
		this.shadowBlurLimiter = 6;
		this.shadowBlurIncrement = 0.2;
		this.shadowBlurDone = false;
		this.shadowBlurToggle = true;
	 	this.shadowOffsetIncrement = 0.1;
		this.shadowOffsetLimiter = 2;
		this.shadowOffsetAllX = 0;
		this.shadowOffsetAllY = 0;
		this.shadowOffsetToggleAllX = false;
		this.shadowOffsetToggleAllY = false;
		this.shadowOffsetToggleX = [
			false, true, false, true, false, true, false,
			true, false, true, false, true, false, true,
		];
		this.shadowOffsetToggleY = [
			true, false, true, false, true, false, true,
			false, true, false, true, false, true, false,
		];
		this.letterAlpha = [
			0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0,
		];
		this.shadowOffsetX = [
			1, 2, 3, 4, 5, 1, 2,
			3, 4, 5, 1, 2, 3, 4,
		];
	 	this.shadowOffsetY = [
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
			// ctx.translate(-this.logoSize / 2, -((this.logoSize * logo.height) / logo.width) / 2);
			ctx.drawImage(logo, canvas.width / 2, canvas.height / 2, this.logoSize, this.logoSize * logo.height / logo.width);
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
			this.logoAlpha += this.alphaIncrement;
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

		if (this.mainCounter >= this.lettersStartFrame) {
			ctx.save();
			
			ctx.font = `${canvas.height / 15}px Rune`;
			ctx.fillStyle = "black";
			ctx.textAligh = "center";
			ctx.textBaseline = "center";
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowColor = "rgba(255, 255, 255, 1)";
			ctx.strokeStyle = "#ffffff";

			ctx.shadowOffsetX = this.shadowOffsetAllX;
			ctx.shadowOffsetY = this.shadowOffsetAllY;

			if (this.mainCounter > this.lettersStartFrame) {
				if (this.letterAlpha[0] <= 1) {
					ctx.globalAlpha = this.letterAlpha[0];
					this.letterAlpha[0] += this.alphaIncrement;
				}

				ctx.fillText('K', canvas.width / 2 /*+ this.offsetX */- 194, canvas.height / 2 /*+ this.offsetY*/ + 20);
				console.log(ctx.measureText("K").width)
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay) {
				if (this.letterAlpha[1] <= 1) {
					ctx.globalAlpha = this.letterAlpha[1];
					this.letterAlpha[1] += this.alphaIncrement;
				}
				ctx.fillText('A', canvas.width / 2 /*+ this.offsetX */- 165, canvas.height / 2 /*+ this.offsetY*/ + 20);
				console.log(ctx.measureText("A").width)
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 2) {
				if (this.letterAlpha[2] <= 1) {
					ctx.globalAlpha = this.letterAlpha[2];
					this.letterAlpha[2] += this.alphaIncrement;
				}
				
				ctx.fillText('M', canvas.width / 2 /*+ this.offsetX */- 136, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 3) {
				if (this.letterAlpha[3] <= 1) {
					ctx.globalAlpha = this.letterAlpha[3];
					this.letterAlpha[3] += this.alphaIncrement;
				}
				
				ctx.fillText('E', canvas.width / 2 /*+ this.offsetX */- 100, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 4) {
				if (this.letterAlpha[4] <= 1) {
					ctx.globalAlpha = this.letterAlpha[4];
					this.letterAlpha[4] += this.alphaIncrement;
				}
				
				ctx.fillText('N', canvas.width / 2 /*+ this.offsetX */- 76, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 5) {
				if (this.letterAlpha[5] <= 1) {
					ctx.globalAlpha = this.letterAlpha[5];
					this.letterAlpha[5] += this.alphaIncrement;
				}
				
				ctx.fillText('K', canvas.width / 2 /*+ this.offsetX */- 37, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 6) {
				if (this.letterAlpha[6] <= 1) {
					ctx.globalAlpha = this.letterAlpha[6];
					this.letterAlpha[6] += this.alphaIncrement;
				}
				
				ctx.fillText('A', canvas.width / 2 /*+ this.offsetX */- 7, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 7) {
				if (this.letterAlpha[7] <= 1) {
					ctx.globalAlpha = this.letterAlpha[7];
					this.letterAlpha[7] += this.alphaIncrement;
				}
				
				ctx.fillText('S', canvas.width / 2 /*+ this.offsetX */+ 21, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 8) {
				if (this.letterAlpha[8] <= 1) {
					ctx.globalAlpha = this.letterAlpha[8];
					this.letterAlpha[8] += this.alphaIncrement;
				}
				
				ctx.fillText('H', canvas.width / 2 /*+ this.offsetX */+ 43, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 9) {
				if (this.letterAlpha[9] <= 1) {
					ctx.globalAlpha = this.letterAlpha[9];
					this.letterAlpha[9] += this.alphaIncrement;
				}
				
				ctx.fillText('C', canvas.width / 2 /*+ this.offsetX */+ 71, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 10) {
				if (this.letterAlpha[10] <= 1) {
					ctx.globalAlpha = this.letterAlpha[10];
					this.letterAlpha[10] += this.alphaIncrement;
				}
				
				ctx.fillText('H', canvas.width / 2 /*+ this.offsetX */+ 98, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 11) {
				if (this.letterAlpha[11] <= 1) {
					ctx.globalAlpha = this.letterAlpha[11];
					this.letterAlpha[11] += this.alphaIncrement;
				}
				
				ctx.fillText('I', canvas.width / 2 /*+ this.offsetX */+ 127, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 12) {
				if (this.letterAlpha[12] <= 1) {
					ctx.globalAlpha = this.letterAlpha[12];
					this.letterAlpha[12] += this.alphaIncrement;
				}
				
				ctx.fillText('E', canvas.width / 2 /*+ this.offsetX */+ 141, canvas.height / 2 /*+ this.offsetY*/ + 20);
			}

			if (this.mainCounter >= this.lettersStartFrame + this.lettersDelay * 13) {
				if (this.letterAlpha[13] <= 1) {
					ctx.globalAlpha = this.letterAlpha[13];
					this.letterAlpha[13] += this.alphaIncrement;
				}
				
				ctx.fillText('V', canvas.width / 2 /*+ intro.offsetX */+ 164, canvas.height / 2 /*+ intro.offsetY*/ + 20);
			}
			
			ctx.restore();
		}
	}
}

// window.onresize = () => {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// }

window.onclick = () => {
	// intro.running = !intro.running;
	// console.log(ctx)
}

export default Intro;

// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext('2d');

// let logo = document.createElement("img");
// logo.src = "img/roza2.png";
// let name = document.createElement("img");
// name.src = "img/name.svg";

// let whiteNoise = document.createElement("audio");
// whiteNoise.src = "audio/static.mp3";

// const intro = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// 	running: true,
// 	mainCounter: 0,
// 	offsetX: 0,
// 	offsetY: 0,
// 	logoAlpha: 0,
// 	alphaIncrement: 0.005,
// 	volume: 0,
// 	volumeIncrement: 0.005,
// 	distortionStartFrame1: 100,
// 	distortionStartFrame2: 170,
// 	lettersStartFrame: 220,
// 	lettersDelay: 12,
// 	shadowBlur: 10,
// 	shadowBlurLimiter: 6,
// 	shadowBlurIncrement: 0.2,
// 	shadowBlurDone: false,
// 	shadowBlurToggle: true,
//  	shadowOffsetIncrement: 0.1,
// 	shadowOffsetLimiter: 2,
// 	shadowOffsetAllX: 0,
// 	shadowOffsetAllY: 0,
// 	shadowOffsetToggleAllX: false,
// 	shadowOffsetToggleAllY: false,
// 	shadowOffsetToggleX: [
// 		false, true, false, true, false, true, false,
// 		true, false, true, false, true, false, true,
// 	],
// 	shadowOffsetToggleY: [
// 		true, false, true, false, true, false, true,
// 		false, true, false, true, false, true, false,
// 	],
// 	letterAlpha: [
// 		0, 0, 0, 0, 0, 0, 0,
// 		0, 0, 0, 0, 0, 0, 0,
// 	],
// 	shadowOffsetX: [
// 		1, 2, 3, 4, 5, 1, 2,
// 		3, 4, 5, 1, 2, 3, 4,
// 	],
//  	shadowOffsetY: [
// 		0, 0, 0, 0, 0, 0, 0,
// 		0, 0, 0, 0, 0, 0, 0,
// 	],
// 	randomiseOffset () {
// 		intro.offsetX = -Math.random();
// 		intro.offsetY = -Math.random();
		
// 		if (intro.mainCounter % 2 === 0) {
// 			offsetX = -Math.random();
// 			offsetY = -Math.random();
// 		} else {
// 			offsetX = Math.random();
// 			offsetY = Math.random();
// 		}
// 	},
// 	drawRose: () => {
// 		ctx.save();
// 		ctx.translate(-112, -300);
// 		ctx.drawImage(logo, canvas.width / 2, canvas.height / 2);
// 		ctx.restore();
		
// 		return ctx;
// 	},
// 	drawText: () => {
// 		if (intro.mainCounter >= intro.lettersStartFrame) {
// 			ctx.save();

// 			if (!intro.shadowBlurDone) {

// 			}
			
// 			ctx.font = '40px Rune';
// 			ctx.fillStyle = 'black';
// 			ctx.textAligh = 'center';
// 			ctx.textBaseline = 'center';
// 			ctx.shadowBlur = intro.shadowBlur;
// 			// ctx.translate(intro.offsetX, intro.offsetY);
// 			ctx.shadowColor = "rgba(255, 255, 255, 1)";
// 			ctx.strokeStyle = "#ffffff";

// 			// for (let i = 0; i < intro.shadowOffsetX.length; i++) {
// 			// 	if (intro.shadowOffsetToggleX[i] === true) {
// 			// 		intro.shadowOffsetX[i] += intro.shadowOffsetIncrement;
					
// 			// 		if (intro.shadowOffsetX[i] >= intro.shadowOffsetLimiter) {
// 			// 			intro.shadowOffsetToggleX[i] = false;
// 			// 		}
// 			// 	} else {
// 			// 		intro.shadowOffsetX[i] -= intro.shadowOffsetIncrement;
					
// 			// 		if (intro.shadowOffsetX[i] <= -intro.shadowOffsetLimiter) {
// 			// 			intro.shadowOffsetToggleX[i] = !intro.shadowOffsetToggleX[i];
// 			// 		}
// 			// 	}

// 			// 	if (intro.shadowOffsetToggleY[i] === true) {
// 			// 		intro.shadowOffsetY[i] += intro.shadowOffsetIncrement;
					
// 			// 		if (intro.shadowOffsetY[i] >= intro.shadowOffsetLimiter) {
// 			// 			intro.shadowOffsetToggleY[i] = false;
// 			// 		}
// 			// 	} else {
// 			// 		intro.shadowOffsetY[i] -= intro.shadowOffsetIncrement;
					
// 			// 		if (intro.shadowOffsetY[i] <= -intro.shadowOffsetLimiter) {
// 			// 			intro.shadowOffsetToggleY[i] = !intro.shadowOffsetToggleY[i];
// 			// 		}
// 			// 	}
// 			// }

// 			intro.mainCounter++;

// 			ctx.shadowOffsetX = intro.shadowOffsetAllX;
// 			ctx.shadowOffsetY = intro.shadowOffsetAllY;

// 			if (intro.mainCounter > intro.lettersStartFrame) {
// 				if (intro.letterAlpha[0] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[0];
// 					intro.letterAlpha[0] += intro.alphaIncrement;
// 				}

// 				ctx.fillText('K', canvas.width / 2 /*+ intro.offsetX */- 194, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay) {
// 				if (intro.letterAlpha[1] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[1];
// 					intro.letterAlpha[1] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('A', canvas.width / 2 /*+ intro.offsetX */- 165, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 2) {
// 				if (intro.letterAlpha[2] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[2];
// 					intro.letterAlpha[2] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('M', canvas.width / 2 /*+ intro.offsetX */- 136, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 3) {
// 				if (intro.letterAlpha[3] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[3];
// 					intro.letterAlpha[3] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('E', canvas.width / 2 /*+ intro.offsetX */- 100, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 4) {
// 				if (intro.letterAlpha[4] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[4];
// 					intro.letterAlpha[4] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('N', canvas.width / 2 /*+ intro.offsetX */- 76, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 5) {
// 				if (intro.letterAlpha[5] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[5];
// 					intro.letterAlpha[5] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('K', canvas.width / 2 /*+ intro.offsetX */- 37, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 6) {
// 				if (intro.letterAlpha[6] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[6];
// 					intro.letterAlpha[6] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('A', canvas.width / 2 /*+ intro.offsetX */- 7, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 7) {
// 				if (intro.letterAlpha[7] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[7];
// 					intro.letterAlpha[7] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('S', canvas.width / 2 /*+ intro.offsetX */+ 21, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 8) {
// 				if (intro.letterAlpha[8] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[8];
// 					intro.letterAlpha[8] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('H', canvas.width / 2 /*+ intro.offsetX */+ 43, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 9) {
// 				if (intro.letterAlpha[9] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[9];
// 					intro.letterAlpha[9] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('C', canvas.width / 2 /*+ intro.offsetX */+ 71, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 10) {
// 				if (intro.letterAlpha[10] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[10];
// 					intro.letterAlpha[10] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('H', canvas.width / 2 /*+ intro.offsetX */+ 98, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 11) {
// 				if (intro.letterAlpha[11] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[11];
// 					intro.letterAlpha[11] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('I', canvas.width / 2 /*+ intro.offsetX */+ 127, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 12) {
// 				if (intro.letterAlpha[12] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[12];
// 					intro.letterAlpha[12] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('E', canvas.width / 2 /*+ intro.offsetX */+ 141, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}

// 			if (intro.mainCounter >= intro.lettersStartFrame + intro.lettersDelay * 13) {
// 				if (intro.letterAlpha[13] <= 1) {
// 					ctx.globalAlpha = intro.letterAlpha[13];
// 					intro.letterAlpha[13] += intro.alphaIncrement;
// 				}
				
// 				ctx.fillText('V', canvas.width / 2 /*+ intro.offsetX */+ 164, canvas.height / 2 /*+ intro.offsetY*/ + 20);
// 			}
			
// 			ctx.restore();
// 		}
// 	},
// 	animate: () => {
// 		intro.mainCounter++;

// 		// let offsetX = -Math.random();
// 		// let offsetY = -Math.random();
		
// 		// if (intro.mainCounter % 2 === 0) {
// 		// 	offsetX = -Math.random();
// 		// 	offsetY = -Math.random();
// 		// } else {
// 		// 	offsetX = Math.random();
// 		// 	offsetY = Math.random();
// 		// }

// 		whiteNoise.play();
// 		whiteNoise.volume = intro.volume;

// 		intro.volume < 0.22 ? intro.volume += intro.volumeIncrement : null;

// 		if (intro.logoAlpha <= 1 && intro.mainCounter <= 100) {
// 			intro.logoAlpha += intro.alphaIncrement
// 		}

// 		// if (intro.logoAlpha <= 1) {
// 		// 	console.log(intro.mainCounter)
// 		// }

// 		if (intro.mainCounter >= intro.distortionStartFrame1 && intro.mainCounter < intro.distortionStartFrame1 + 8) {
// 			offsetX = offsetX * 100;
// 			offsetY = offsetY * 100;
// 			whiteNoise.volume = 0.5;
// 			intro.logoAlpha = Math.random();

// 			switch (intro.mainCounter) {
// 				case intro.distortionStartFrame1:
// 					ctx.transform(1, 0, -.1, 1, 40 + offsetX, 0 + offsetY);
// 				break;

// 				case intro.distortionStartFrame1 + 1:
// 					// ctx.transform(1, 0, -.2, 1, 79 + offsetX, 0 + offsetY);
// 				break;

// 				case intro.distortionStartFrame1 + 2:
// 					ctx.transform(1, 0, -.3, 1, 119 + offsetX, 0 + offsetY);
// 				break;

// 				case intro.distortionStartFrame1 + 3:
// 					// ctx.transform(1, 0, -.4, 1, 158 + offsetX, 0 + offsetY);
// 				break;

// 				case intro.distortionStartFrame1 + 4:
// 					ctx.transform(1, 0, -.5, 1, 200 + offsetX, 0 + offsetY);
// 				break;

// 				case intro.distortionStartFrame1 + 5:
// 					ctx.transform(1, 0, -.6, 1, 238 + offsetX, 0 + offsetY);
// 				break;

// 				case intro.distortionStartFrame1 + 6:
// 					// ctx.transform(1, 0, -.5, 1, 200 + offsetX, 0 + offsetY);
// 				break;

// 				case intro.distortionStartFrame1 + 7:
// 					ctx.transform(1, 0, -.4, 1, 158 + offsetX, 0 + offsetY);
// 					intro.logoAlpha = 1;
// 				break;
// 			}
// 		}

// 		if (intro.mainCounter >= intro.distortionStartFrame2 && intro.mainCounter <= intro.distortionStartFrame2 + 17) {
	
// 			intro.logoAlpha = Math.random();
// 			whiteNoise.volume = 0.5;

// 			if (intro.mainCounter >= intro.distortionStartFrame2 + 3 && intro.mainCounter < intro.distortionStartFrame2 + 5) {
// 				ctx.rotate(22 * Math.PI / 180);
// 				ctx.transform(1, 0, .5, 1.3, -200 + offsetX * 5, -220 + offsetY * 5);
// 			} else if (intro.mainCounter >= intro.distortionStartFrame2 + 5 && intro.mainCounter < intro.distortionStartFrame2 + 7) {
// 				ctx.rotate(22 * Math.PI / 180);
// 				ctx.transform(1, 0, .5, 1.3, -55 + offsetX * 5, -220 + offsetY * 5);
// 			} else if (intro.mainCounter >= intro.distortionStartFrame2 + 7 && intro.mainCounter < intro.distortionStartFrame2 + 9) {
// 				ctx.rotate(22 * Math.PI / 180);
// 				ctx.transform(1, 0, .5, 1.3, -77 + offsetX * 5, -268 + offsetY * 5);
// 			} else if (intro.mainCounter >= intro.distortionStartFrame2 + 9 && intro.mainCounter < intro.distortionStartFrame2 + 11) {
// 				ctx.rotate(0 * Math.PI / 180);
// 				ctx.transform(1, 0, 0, 1, 0 + offsetX * 5, 0 + offsetY * 5);
// 			} else if (intro.mainCounter >= intro.distortionStartFrame2 + 11 && intro.mainCounter < intro.distortionStartFrame2 + 13) {
// 				ctx.rotate(25 * Math.PI / 180);
// 				ctx.transform(1.2, -1, .9, 2, -277 + offsetX * 5, -268 + offsetY * 5);
// 			} else if (intro.mainCounter >= intro.distortionStartFrame2 + 13 && intro.mainCounter < intro.distortionStartFrame2 + 15) {
// 				ctx.rotate(22 * Math.PI / 180);
// 				ctx.transform(1, 0, .5, 1.3, -77 + offsetX * 5, -268 + offsetY * 5);
// 			} else if (intro.mainCounter >= intro.distortionStartFrame2 + 15 && intro.mainCounter < intro.distortionStartFrame2 + 17) {
// 				ctx.rotate(0 * Math.PI / 180);
// 				ctx.transform(1, 0, 0, 1, 0 + offsetX * 5, 0 + offsetY * 5);
// 			}


// //////////////////////////////////////////////////////////////////////////////////////////////////
			
// 			if (intro.mainCounter === 400) {
// 				intro.mainCounter = 0;
// 				whiteNoise.volume = 0.25;
// 				intro.logoAlpha = 1;
// 			}

// //////////////////////////////////////////////////////////////////////////////////////////////////
// 		} else if (intro.mainCounter === intro.distortionStartFrame2 + 18) {
// 			intro.logoAlpha = 1;
// 		}
// 	}
// }

/*const loop = () => {
	canvas.width = intro.width;
	canvas.height = intro.height;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.drawRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	
	ctx.rotate(25 * Math.PI / 180);
	ctx.transform(1.3,0,.5,1.1,-170,-230);
	

	if (intro.running) {
		offsetX = Math.random();
		offsetY = Math.random();
		// ctx.rotate(25 * Math.PI / 180);
		// ctx.transform(1.2, -1, .9, 2, -277 + offsetX, -268 + offsetY);
		ctx.rotate(0 * Math.PI / 180);
		ctx.transform(1, 0, -.1, 1, 40 + offsetX, 0 + offsetY);
	} else {
		offsetX = Math.random();
		offsetY = Math.random();
		ctx.rotate(22 * Math.PI / 180);
		ctx.transform(1, 0, .5, 1.3, -77 + offsetX, -268 + offsetY);
		offsetX = Math.random() / 2;
		offsetY = Math.random() / 2;

		intro.running ? intro.animate() : null;

		ctx.rotate(0 * Math.PI / 180);
		ctx.transform(1, 0, 0, 1, 0 + offsetX, 0 + offsetY);
	}
	
	ctx.globalAlpha = intro.logoAlpha;
	intro.randomiseOffset();
	intro.drawRose();

	intro.drawText();

	window.requestAnimationFrame(loop);
}

window.onresize = () => {
	intro.width = window.innerWidth;
	intro.height = window.innerHeight;
}*/

// window.onload = () => {
// 	loop();
// }