//
//
//
//////////////////////////////////////////

const introAudio1 = new Audio();
const introAudio2 = new Audio();
const crack = new Audio();
introAudio1.src = "audio/static.mp3";
introAudio2.src = "audio/whisper.mp3";
crack.src = "audio/crack.mp3"

//////////////////////////////////////////

const photo = new Image();
photo.src = "img/kkk2.png";

photo.onload = () => {
	content.photoDiv.appendChild(photo);
	photo.classList.add("photo");
};

//////////////////////////////////////////

const intro = {
	logo: document.querySelector("header"),
	nav: document.querySelector("nav"),
	main: document.querySelector("main"),
	footer: document.querySelector("footer"),
	letter1: document.querySelector(".h1Letter1"), // K
	letter2: document.querySelector(".h1Letter2"), // a
	letter3: document.querySelector(".h1Letter3"), // m
	letter4: document.querySelector(".h1Letter4"), // e
	letter5: document.querySelector(".h1Letter5"), // n
	letter6: document.querySelector(".h1Letter6"), // K
	letter7: document.querySelector(".h1Letter7"), // a
	letter8: document.querySelector(".h1Letter8"), // s
	letter9: document.querySelector(".h1Letter9"), // h
	letter10: document.querySelector(".h1Letter10"), // c
	letter11: document.querySelector(".h1Letter11"), // h
	letter12: document.querySelector(".h1Letter12"), // i
	letter13: document.querySelector(".h1Letter13"), // e
	letter14: document.querySelector(".h1Letter14"), // v
	topCrack: document.querySelector("#topCrack"),
	mainCrack: document.querySelector("#mainCrack"),
	blurrSlide: document.querySelector("#blurrEffect"),
	hrTop: document.querySelector("#mainHrTop"),
	hrBottom: document.querySelector("#mainHrBottom"),
	animationDone: false,
	fadeInSpeed: 0.02,
	logoFadeIn: 0,
	logoSkew: 0,
	audio1Low: 0.1,
	audio1Peak: 0.5,
	audio2Vol: 0.05,
	audio1Fade: 0.06,
	textDelay: 5460,
	textFadeIn1: 0,
	textFadeIn2: 0,
	textFadeIn3: 0,
	textFadeIn4: 0,
	textFadeIn5: 0,
	textFadeIn6: 0,
	textFadeIn7: 0,
	textFadeIn8: 0,
	navFadeIn: 0,
	hrFadeIn: 0,
	footerFadeIn: 0,
	animate: function () {
		this.logoTimer(500, 2100, 10350, 13000);
		this.textTimer(30, this.textDelay + 0, this.textDelay + 200, this.textDelay + 400, this.textDelay + 600, this.textDelay + 800, this.textDelay + 1000, this.textDelay + 1200, this.textDelay + 1400, this.textDelay + 1600, this.textDelay + 1800, this.textDelay + 2000, this.textDelay + 2200, this.textDelay + 2400, this.textDelay + 2600);
		this.contentTimer(13500, 16500);
	},
	logoTimer: function (time1, time2, time3, time4) {
		setTimeout(function () {
			introAudio1.play();
			introAudio1.volume = 0;

			let fadeInTimer = setInterval(function () {
				intro.logoFadeIn += 0.01;
				intro.logo.style.opacity = intro.logoFadeIn.toString();
				
				if (intro.logoFadeIn >= 1) {
					clearInterval(fadeInTimer);
				}

				if (intro.logoFadeIn <= 0.01) {
					introAudio1.volume = 0.03;
				} else if (intro.logoFadeIn >= 0.03 && intro.logoFadeIn < 0.05) {
					introAudio1.volume = 0.02;
				} else if (intro.logoFadeIn >= 0.05 && intro.logoFadeIn < 0.07) {
					introAudio1.volume = 0.03;
				} else if (intro.logoFadeIn >= 0.07 && intro.logoFadeIn < 0.09) {
					introAudio1.volume = 0.04;
				} else if (intro.logoFadeIn >= 0.09 && intro.logoFadeIn < 0.11) {
					introAudio1.volume = 0.05;
				} else if (intro.logoFadeIn >= 0.11 && intro.logoFadeIn < 0.13) {
					introAudio1.volume = intro.audio1Low;
				}
			}, 30);
		}, time1);
		setTimeout(function () {
			let skewTimer1 = setInterval(function () {
				intro.logoSkew += 1;
				
				if (intro.logoSkew > 0 && intro.logoSkew < 2) {
					introAudio1.volume = intro.audio1Peak;
					intro.logo.style.backgroundSize = "60h";
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundPosition = "top";
					intro.logo.style.backgroundPosition = "center -10px";
				} else if (intro.logoSkew >= 2 && intro.logoSkew < 4) {
					intro.logo.style.backgroundSize = "0";
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundPosition = "center";
				} else if (intro.logoSkew >= 4 && intro.logoSkew < 6) {
					intro.logo.style.backgroundSize = "60vh";
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundPosition = "center -10px";
				} else if (intro.logoSkew >= 6 && intro.logoSkew < 8) {
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundSize = "0";
					intro.logo.style.backgroundPosition = "center";
				} else if (intro.logoSkew >= 8 && intro.logoSkew < 10) {
					intro.logo.style.transform = "skewX(0deg)";
					intro.logo.style.backgroundSize = "26vh";
					intro.logo.style.backgroundPosition = "center";
					introAudio1.volume = intro.audio1Low;
				} else if (intro.logoSkew >= 72 && intro.logoSkew < 74) {
					introAudio1.volume = intro.audio1Peak;
					intro.logo.style.transform = "skewX(-20deg)";
					intro.logo.style.backgroundSize = "cover";
					intro.logo.style.backgroundPosition = "center";
				} else if (intro.logoSkew >= 74 && intro.logoSkew < 76) {
					intro.logo.style.transform = "skewX(0deg)";
					intro.logo.style.backgroundSize = "26vh";
					intro.logo.style.backgroundPosition = "center -10px";
				} else if (intro.logoSkew >= 76 && intro.logoSkew < 78) {
					intro.logo.style.transform = "skewX(-25deg)";
					intro.logo.style.backgroundSize = "cover";
					intro.logo.style.backgroundPosition = "center";
				} else if (intro.logoSkew >= 78 && intro.logoSkew < 80) {
					intro.logo.style.transform = "skewX(0deg)";
					intro.logo.style.backgroundSize = "26vh";
					introAudio1.volume = intro.audio1Low;
				}

				if (intro.logoSkew == 80) {
					clearInterval(skewTimer1);
					intro.logoSkew = 0;
				}
			}, 13);
		}, time2);
		setTimeout(function () {
			let skewTimer2 = setInterval(function () {
				introAudio1.volume = intro.audio1Peak;
				intro.logoSkew += 1;
				if (intro.logoSkew > 0 && intro.logoSkew < 2) {
					intro.logo.style.opacity = "0.3";
				} else if (intro.logoSkew >= 2 && intro.logoSkew < 4) {
					intro.logo.style.opacity = "1";
				} else if (intro.logoSkew >= 4 && intro.logoSkew < 6) {
					intro.logo.style.opacity = "0";
				} else if (intro.logoSkew >= 6 && intro.logoSkew < 8) {
					intro.logo.style.opacity = "0.5";
				} else if (intro.logoSkew >= 8 && intro.logoSkew < 10) {
					intro.logo.style.opacity = "0";
				} else if (intro.logoSkew >= 10 && intro.logoSkew < 12) {
					intro.logo.style.opacity = "1";
					intro.logo.style.backgroundSize = "26vh";
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundPosition = "top";
					intro.logo.style.backgroundPosition = "center -10px";
				} else if (intro.logoSkew >= 12 && intro.logoSkew < 14) {
					intro.logo.style.backgroundSize = "0";
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundPosition = "center";
				} else if (intro.logoSkew >= 14 && intro.logoSkew < 16) {
					introAudio1.volume = intro.audio1Peak + 0.1;
					intro.logo.style.backgroundSize = "60vh";
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundPosition = "center -10px";
				} else if (intro.logoSkew >= 16 && intro.logoSkew < 18) {
					intro.logo.style.backgroundSize = "0";
				} else if (intro.logoSkew >= 18 && intro.logoSkew < 20) {
					intro.logo.style.opacity = "0";
				} else if (intro.logoSkew >= 20 && intro.logoSkew < 22) {
					introAudio1.volume = intro.audio1Peak + 0.2;
					intro.logo.style.opacity = "1";
					intro.logo.style.backgroundSize = "60vh";
					intro.logo.style.transform = "skewX(30deg)";
					intro.logo.style.backgroundPosition = "center -10px";
				} else if (intro.logoSkew >= 22 && intro.logoSkew < 24) {
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundSize = "36vh";
					intro.logo.style.backgroundPosition = "center";
				} else if (intro.logoSkew >= 24 && intro.logoSkew < 26) {
					intro.logo.style.opacity = "0";
				} else if (intro.logoSkew >= 26 && intro.logoSkew < 28) {
					introAudio1.volume = intro.audio1Peak + 0.3;
					intro.logo.style.opacity = "1";
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundSize = "26vh";
					intro.logo.style.backgroundPosition = "center";
				} else if (intro.logoSkew >= 28 && intro.logoSkew < 30) {
					intro.logo.style.backgroundSize = "70vh";
					intro.logo.style.transform = "skewX(-30deg)";
					intro.logo.style.backgroundPosition = "center 30px";
				} else if (intro.logoSkew >= 30) {
					crack.play();
					crack.volume = "0.1";
					intro.mainCrack.style.opacity = "1";
					
					introAudio1.pause();
					introAudio2.pause();
					intro.logo.style.opacity = "0";
					intro.logo.style.transform = "skewX(0deg)";
					
					intro.logo.style.backgroundSize = "25vh";
					intro.logo.style.backgroundPosition = "center";
				}

				if (intro.logoSkew == 30) {	
					clearInterval(skewTimer2);
					intro.logoSkew = 0;
					intro.logo.style.transitionTimingFunction = "cubic-bezier(0.5, 1, 1, 1)";
					intro.logo.style.backgroundPosition = "center center";
					intro.logo.style.backgroundSize = "30px auto";
					intro.logo.style.height = "10%";
				}
			}, 12);

		}, time3);
		setTimeout(function () {
			intro.logo.style.transitionDuration = "1.1s";
			intro.logo.style.opacity = "1";
		}, time4);
	},
	textTimer: function (delay, time1, time2, time3, time4, time5, time6, time7, time8, time9, time10, time11, time12, time13, time14) {
		setTimeout(function () {
			let letter1Timer = setInterval(function () {
				introAudio2.play();
				introAudio2.volume = intro.audio2Vol;
				intro.textFadeIn1 += intro.fadeInSpeed;
				intro.letter1.style.opacity = intro.textFadeIn1.toString();
				
				if (intro.letter1.style.opacity >= 1) {
					clearInterval(letter1Timer);
					intro.textFadeIn1 = 0;
				}
			}, delay);
		}, time1);
		setTimeout(function () {
			let letter2Timer = setInterval(function () {
				
				intro.textFadeIn2 += intro.fadeInSpeed;
				intro.letter2.style.opacity = intro.textFadeIn2.toString();
				
				if (intro.letter2.style.opacity >= 1) {
					clearInterval(letter2Timer);
					intro.textFadeIn2 = 0;
				}
			}, delay);
		}, time2);
		setTimeout(function () {
			let letter3Timer = setInterval(function () {
				
				intro.textFadeIn3 += intro.fadeInSpeed;
				intro.letter3.style.opacity = intro.textFadeIn3.toString();
				
				if (intro.letter3.style.opacity >= 1) {
					clearInterval(letter3Timer);
					intro.textFadeIn3 = 0;
				}
			}, delay);
		}, time3);
		setTimeout(function () {
			let letter4Timer = setInterval(function () {
				
				intro.textFadeIn4 += intro.fadeInSpeed;
				intro.letter4.style.opacity = intro.textFadeIn4.toString();
				
				if (intro.letter4.style.opacity >= 1) {
					clearInterval(letter4Timer);
					intro.textFadeIn4 = 0;
				}
			}, delay);
		}, time4);
		setTimeout(function () {
			let letter5Timer = setInterval(function () {
				
				intro.textFadeIn5 += intro.fadeInSpeed;
				intro.letter5.style.opacity = intro.textFadeIn5.toString();
				
				if (intro.letter5.style.opacity >= 1) {
					clearInterval(letter5Timer);
					intro.textFadeIn5 = 0;
				}
			}, delay);
		}, time5);
		setTimeout(function () {
			let letter6Timer = setInterval(function () {
				
				intro.textFadeIn6 += intro.fadeInSpeed;
				intro.letter6.style.opacity = intro.textFadeIn6.toString();
				
				if (intro.letter6.style.opacity >= 1) {
					clearInterval(letter6Timer);
					intro.textFadeIn6 = 0;
				}
			}, delay);
		}, time6);
		setTimeout(function () {
			let letter7Timer = setInterval(function () {
				
				intro.textFadeIn7 += intro.fadeInSpeed;
				intro.letter7.style.opacity = intro.textFadeIn7.toString();
				
				if (intro.letter7.style.opacity >= 1) {
					clearInterval(letter7Timer);
					intro.textFadeIn7 = 0;
				}
			}, delay);
		}, time7);
		setTimeout(function () {
			let letter8Timer = setInterval(function () {
				
				intro.textFadeIn8 += intro.fadeInSpeed;
				intro.letter8.style.opacity = intro.textFadeIn8.toString();
				
				if (intro.letter8.style.opacity >= 1) {
					clearInterval(letter8Timer);
					intro.textFadeIn8 = 0;
				}
			}, delay);
		}, time8);
		setTimeout(function () {
			let letter9Timer = setInterval(function () {
				
				intro.textFadeIn1 += intro.fadeInSpeed;
				intro.letter9.style.opacity = intro.textFadeIn1.toString();
				
				if (intro.letter9.style.opacity >= 1) {
					clearInterval(letter9Timer);
					intro.textFadeIn1 = 0;
				}
			}, delay);
		}, time9);
		setTimeout(function () {
			let letter10Timer = setInterval(function () {
				
				intro.textFadeIn2 += intro.fadeInSpeed;
				intro.letter10.style.opacity = intro.textFadeIn2.toString();
				
				if (intro.letter10.style.opacity >= 1) {
					clearInterval(letter10Timer);
					intro.textFadeIn2 = 0;
				}
			}, delay);
		}, time10);
		setTimeout(function () {
			let letter11Timer = setInterval(function () {
				
				intro.textFadeIn3 += intro.fadeInSpeed;
				intro.letter11.style.opacity = intro.textFadeIn3.toString();
				
				if (intro.letter11.style.opacity >= 1) {
					clearInterval(letter11Timer);
					intro.textFadeIn3 = 0;
				}
			}, delay);
		}, time11);
		setTimeout(function () {
			let letter12Timer = setInterval(function () {
				
				intro.textFadeIn4 += intro.fadeInSpeed;
				intro.letter12.style.opacity = intro.textFadeIn4.toString();
				
				if (intro.letter12.style.opacity >= 1) {
					clearInterval(letter12Timer);
					intro.textFadeIn4 = 0;
				}
			}, delay);
		}, time12);
		setTimeout(function () {
			let letter13Timer = setInterval(function () {
				
				intro.textFadeIn5 += intro.fadeInSpeed;
				intro.letter13.style.opacity = intro.textFadeIn5.toString();
				
				if (intro.letter13.style.opacity >= 1) {
					clearInterval(letter13Timer);
					intro.textFadeIn5 = 0;
				}
			}, delay);
		}, time13);
		setTimeout(function () {
			let letter14Timer = setInterval(function () {
				
				intro.textFadeIn6 += intro.fadeInSpeed;
				intro.letter14.style.opacity = intro.textFadeIn6.toString();
				
				if (intro.letter14.style.opacity >= 1) {
					clearInterval(letter14Timer);
					intro.textFadeIn6 = 0;
					document.querySelector("#cv1Embed1").data = "cv_and_cert/cv.pdf";
				}
			}, delay);
		}, time14);
	},
	contentTimer: function (time1, time2) {
		setTimeout(function () {
			let navfadeIn = setInterval(function () {
				intro.footer.style.height = "4%";
				intro.navFadeIn += 0.02;
				intro.nav.style.opacity = intro.navFadeIn.toString();
				content.languageToggle.style.opacity = intro.navFadeIn.toString();
				intro.hrTop.style.opacity = intro.navFadeIn.toString();
				intro.hrBottom.style.opacity = intro.navFadeIn.toString();
				document.querySelector(".footText").style.opacity = intro.navFadeIn.toString();
				
				if (intro.navFadeIn >= 1) {
					clearInterval(navfadeIn);
					let letters = 0;

					if (navigator.platform == "Win32") {
						content.letterSwitch(4000, 200, 2000);
					}

					intro.main.style.transitionDuration = "1.2s";
					intro.main.style.height = "85%";
					
					let timer = setInterval(function () {
						letters++;

						if (navigator.platform == "Win32") {
							content.letterSwitch(4000, 200, 2000);
						}
						
						if (letters == 3) {
							clearInterval(timer);
						}
					}, 1000);
				}
			}, 38);
		}, time1);
		setTimeout(function () {
			intro.main.style.transitionDuration = "2s";
			intro.logo.style.userSelect = "auto";
			content.initialSection.style.opacity = "1";
			intro.logo.style.zIndex = "1";
			intro.footer.style.zIndex = "0";
			
			setTimeout(function () {
				intro.animationDone = true;
				intro.main.style.transitionDuration = "0s";
				document.querySelector("#initialSection").style.transitionDuration = "0s";
			}, 2000);
		}, time2);
	}
};

const content = {
	letterSwitchToggle: document.querySelector("#letterSwitchToggle"),
	languageToggle: document.querySelector("#languageToggle"),
	languageFlags: document.querySelectorAll(".languageFlags"),
	languagesText: document.querySelector("#languagesText"),
	navItems: document.querySelectorAll(".navItems"),
	navSubLinks: document.querySelectorAll(".subLinks"),
	initialSection: document.querySelector("#initialSection"),
	cvSection1: document.querySelector("#cvSection1"),
	cvSection2: document.querySelector("#cvSection2"),
	certificateSection: document.querySelector("#certificateSection"),
	hiddenPdf: document.querySelectorAll(".hiddenPdf"),
	articleDiv: document.querySelectorAll(".articleDiv"),
	subTitles: document.querySelectorAll(".subTitles"),
	paragraphs: document.querySelectorAll(".initialParagraphs"),
	photoDiv: document.querySelector("#photoDiv"),
	cv2Embed: document.querySelector("#cv2iframe"),
	leftKey: document.querySelector(".leftKey"),
	rightKey: document.querySelector(".rightKey"),
	upSkull: document.querySelector("#up"),
	flake1: document.querySelector("#flake1"),
	flake2: document.querySelector("#flake2"),
	initialSectionVisible: true,
	cvSection1Visible: false,
	cvSection2Visible: false,
	certificateSectionVisible: false,
	textBg: [
		[
			"Генерална Информация", "Име", "Години", "Местоположение", "Oбразование", "За мен"
		],
		[
			"Камен Каменов Кашчиев",
			"София, България",
			"Средно образование",
			'От тийнейджърските си години се интересувам от компютри - хардуер и софтуер. Преди няколко години взех решение да се преквалифицирам и започнах да се обучавам първоначално самостоятелно и в последствие посещавайки курсове за front-end developer. Започнах да работя по самостоятелни проекти с цел да приложа наученото до момента и в процеса на работа, базирайки се на модела "проба - грешка", да доразвия уменията си. Създадох този уебсайт като различно от GitHub пространство, в което да поместя завършените си проекти и да ги тествам как работят в действителност.'
		]
	],
	textEn: [
		[
			"General Info", "Name", "Age", "Location", "Education", "About me"
		],
		[
		"Kamen Kamenov Kashchiev",
		"Sofia, Bulgaria",
		"Highschool",
		'Ever since my teenage years I have been interested in computers - hardware and software. A few years ago I decided to requalify myself as a developer and thus I began learning first on my own and subsequently via courses. I started doing my own projects so that I can apply what I have learned and in the course of doing so with some "trial and error" to futher enhance my skills.I created this website as a space different than GitHub where I can publish my finished projects and test how they really perform.'
		]
	],
	textIt: [
		[
			"Informazioni Generali", "Nome", "Età", "Luogo", "Titolo di studio", "Su di me"
		],
		[
		"Kamen Kamenov Kashchiev",
		"Sofia, Bulgaria",
		"Diploma di scuola secondaria superiore",
		"Fin da quando ero un adolescente sono stato appassionato dei computer - hardware e software. Un po di anni fa ho deciso di riqualificarmi come developer e ho cominciato di studiare prima da solo e poi tramite corsi. Ho iniziato a lavorare su progetti miei con l'obiettivo di applicare quello che ho imparato e basando mi un po sul modello \"tentativi ed errori\" per sviluppare la mia capacità. Ho creato questo sito come un spazio diverso da GitHub dove posso pubblicare e testare i miei progetti finiti."
		]
	],
	subTitleContent: [],
	paragraphContent: [],
	languageBg: true,
	languageEn: false,
	languageIt: false,
	languageCovering: false,
	iphoneText: [
		'Поради политиката за предварително зареждане на аудио и видео фаилове на "Safari mobile", съдържанието не може да бъде възпроизведено на "iOS" уреди.',
		"Due to Safari mobile's ploicy on preloading audio and video files the content can not be viewed on an iOS devices.",
		"A causa della politica di caricamento automatico di audio e video file di Safari mobile, il contenuto non puo essere visualizzato."
	],
	spanTotal: 0,
	runes: ["ᚱ","ᚠ","ᚬ","ᚸ","ᚹ","ᚻ","ᚾ","ᛄ","ᛇ","ᛈ","ᛉ","ᛒ","ᛗ","ᛝ","ᛞ","ᛟ","ᛠ","ᛯ","᛭"],
	thinSubstitute: ["᛬","ᚨ","ᛆ","ᛛ"],
	moveCount: 0,
	flake1X: 0,
	flake1Y: 0,
	flake2X: 0,
	flake2Y: 0,
	flakesYSpeed: 1,
	flake1XToggle: true,
	flake2XToggle: true,
	flake1Running: false,
	flake2Running: false,
	noiseEffect: 0,
	noiseDelay: 10,
	scrollSpeed: 25,
	scrollTime: 10,
	textLanguageSelect: function () {
		for (let x = 0; x < this.subTitles.length; x++){
			content.subTitles[x].innerHTML = "";
		}

		for (let y = 0; y < this.paragraphs.length; y++){
			content.paragraphs[y].innerHTML = "";
		}

		if (this.languageEn == true) {
			this.subTitleContent = this.textEn[0];
			this.paragraphContent = this.textEn[1];
			intro.main.style.fontFamily = "Cinzel";
			intro.main.style.fontSize = "1em";
			intro.main.style.letterSpacing = "1px";
		} else if (this.languageBg == true) {
			this.subTitleContent = this.textBg[0];
			content.paragraphContent = this.textBg[1];
			intro.main.style.fontFamily = "Palatino";
			intro.main.style.fontSize = "1em";
			intro.main.style.letterSpacing = "1px";
		} else if (this.languageIt == true) {
			this.subTitleContent = this.textIt[0];
			this.paragraphContent = this.textIt[1];
			intro.main.style.fontFamily = "Cinzel";
			intro.main.style.fontSize = "1em";
			intro.main.style.letterSpacing = "1px";
		}
	},
	loadText: function () {
		let spanIndex = -1;
		
		for (let i = 0; i < this.subTitles.length; i++) {
			this.subTitles[i].innerHTML = this.subTitleContent[i];
		}

		for (let x = 0; x < this.paragraphs.length; x++) {
			let text = document.createTextNode(`${this.paragraphContent[x]}`)
			
			for (let y = 0; y < this.paragraphContent[x].length; y++) {
				spanIndex ++;
				let span1 = document.createElement("span");
				let span2 = document.createElement("span");
				span1.classList.add(`letterSpan`);
				span2.classList.add(`coverSpan`);
				span1.classList.add(`letterSpan${spanIndex}`);
				span2.classList.add(`coverSpan${spanIndex}`);
				span1.innerHTML = content.paragraphContent[x][y];
				span2.innerHTML = "";
				content.paragraphs[x].appendChild(span2);
				content.paragraphs[x].appendChild(span1);
				let lSpanRect = span1.getBoundingClientRect();
				span2.style.left = span1.style.left;
				span2.style.top = span1.style.top;
				span2.style.width = `${lSpanRect.width.toFixed(2)}px`;
				span2.style.height = `${lSpanRect.height.toFixed(2)}px`;
				content.spanTotal = spanIndex;
			}
		}
	},
	languageCoverSlide: function () {
		let topOffset = intro.main.scrollTop;
		let count1 = -window.innerWidth;
		intro.blurrSlide.style.left = `${-window.innerWidth}px`;
		intro.blurrSlide.style.opacity = "1";
		intro.blurrSlide.style.display = "block";
		this.languageCovering = true;

		let blurrInInterval = setInterval(function () {
			count1 += 5;
			
			intro.blurrSlide.style.left = count1.toString() + "px";
			intro.blurrSlide.style.width = "98%";
			intro.blurrSlide.style.height = `${document.querySelector("#initialSection").offsetHeight + 100}px`;
			if (count1 >= 31 && count1 <= 35) {
				content.textLanguageSelect();
				content.loadText();
				intro.main.scrollTo(0, topOffset);
			} 
			if (count1 > window.innerWidth) {
				clearInterval(blurrInInterval);
				intro.blurrSlide.style.opacity = "0";
				intro.blurrSlide.style.boxShadow = "none";
				intro.blurrSlide.style.display = "none";
				count1 = 0;
				content.languageCovering = false;
			}
		}, 7);
	},
	rotateFlags: function (flag) {
		this.initialSection.style.transitionDuration = "0s";
		let bg = document.querySelector(".languageFlagBg");
		let en = document.querySelector(".languageFlagEn");
		let it = document.querySelector(".languageFlagIt");

		if (flag.getAttribute("class") == "languageFlags languageFlagBg" && this.languageBg != true && content.initialSectionVisible == true) {
			this.languageBg = true;
			this.languageEn = false;
			this.languageIt = false;
			this.languageCoverSlide();
			bg.style.left = "23px";
			bg.style.top = "9px";
			en.style.left = "1px";
			en.style.top = "-14px";
			it.style.right = "1px";
			it.style.top = "-14px";
		}
		
		if (flag.getAttribute("class") == "languageFlags languageFlagEn" && this.languageEn != true && content.initialSectionVisible == true) {
			this.languageBg = false;
			this.languageEn = true;
			this.languageIt = false;
			this.languageCoverSlide();
			bg.style.left = "1px";
			bg.style.top = "-14px";
			en.style.left = "23px";
			en.style.top = "9px";
			it.style.right = "1px";
			it.style.top = "-14px";
		}

		if (flag.getAttribute("class") == "languageFlags languageFlagIt" && this.languageIt != true && content.initialSectionVisible == true) {
			this.languageBg = false;
			this.languageEn = false;
			this.languageIt = true;
			this.languageCoverSlide();
			bg.style.left = "1px";
			bg.style.top = "-14px";
			en.style.left = "44px";
			en.style.top = "-14px";
			it.style.right = "23px";
			it.style.top = "9px";
		}
		this.initialSection.style.transitionDuration = "1.8s";
	},
	getAge: function () {
		let ageDifMs = Date.now() - new Date(1985, 4, 3).getTime();
	    let ageDate = new Date(ageDifMs); // miliseconds from epoch
	    document.querySelector("#age").innerHTML = Math.abs(ageDate.getUTCFullYear() - 1970).toString();
	},
	changeSections: function (link, delay) {
		this.changingSections = true;
		this.initialSection.style.transitionDuration = "1.8s";

		if (link.getAttribute("class") == "subLinks subLinksMain" && this.initialSectionVisible != true) {
			let count = 0;
			this.initialSectionVisible = true;
			this.cvSection1Visible = false;
			this.cvSection2Visible = false;
			this.certificateSectionVisible = false;
			this.initialSection.style.display = "flex";
			this.cvSection1.style.opacity = "0";
			this.cvSection2.style.opacity = "0";
			this.certificateSection.style.opacity = "0";
			
			setTimeout(function () {
				content.cv2Embed.src = "";
				this.initialSection.style.opacity = "1";
				this.cvSection1.style.display = "none";
				this.cvSection2.style.display = "none";
				this.certificateSection.style.display = "none";

				if (this.cvSection2.children.length > 1) {
					this.cvSection2.removeChild(this.cvSection2.lastChild);
				}
			}, delay);
		}

		if (link.getAttribute("class") == "subLinks subLinksL1" && this.cvSection1Visible != true) {
			this.initialSectionVisible = false;
			this.cvSection1Visible = true;
			this.cvSection2Visible = false;
			this.certificateSectionVisible = false;
			this.initialSection.style.opacity = "0";
			this.cvSection1.style.display = "flex";
			this.cvSection2.style.opacity = "0";
			this.certificateSection.style.opacity = "0";
			
			setTimeout(function () {
				content.cv2Embed.src = "";
				this.initialSection.style.display = "none";
				this.cvSection1.style.opacity = "1";
				this.cvSection2.style.display = "none";
				this.certificateSection.style.display = "none";
			}, delay);
		}

		if (link.getAttribute("class") == "subLinks subLinksL2" && this.cvSection2Visible != true) {
			this.initialSectionVisible = false;
			this.cvSection1Visible = false;
			this.cvSection2Visible = true;
			this.certificateSectionVisible = false;
			this.initialSection.style.opacity = "0";
			this.cvSection1.style.opacity = "0";
			this.cvSection2.style.display = "flex";
			this.certificateSection.style.opacity = "0";

			if (navigator.platform == "") {
				let text = document.createElement("p");
				text.classList.add("cv2Substitute");
					if (content.languageBg == true) {
						text.innerHTML = content.iphoneText[0];
					} else if (content.languageEn == true) {
						text.innerHTML = content.iphoneText[1];
					} else {
						text.innerHTML = content.iphoneText[2];
					}
				content.cvSection2.appendChild(text);
			} else {
				content.cv2Embed.src = "Doom CV/cv.html";
			}
						
			setTimeout(function () {
				this.initialSection.style.display = "none";
				this.cvSection1.style.display = "none";
				this.cvSection2.style.opacity = "1";
				//this.cvSection2.style.height = `${content.cv2Embed.contentWindow.document.querySelector("html").offsetHeight + 1}px`
				this.certificateSection.style.display = "none";
			}, delay);


		}

		if (link.getAttribute("class") == "subLinks subLinksR1" && this.certificateSectionVisible != true) {
			this.initialSectionVisible = false;
			this.cvSection1Visible = false;
			this.cvSection2Visible = false;
			this.certificateSectionVisible = true;
			this.initialSection.style.opacity = "0";
			this.cvSection1.style.opacity = "0";
			this.cvSection2.style.opacity = "0";
			this.certificateSection.style.display = "flex";
			content.cv2Embed.src = "";
			
			setTimeout(function () {
				this.initialSection.style.display = "none";
				this.cvSection1.style.opacity = "0";
				this.cvSection2.style.display = "none";
				this.certificateSection.style.opacity = "1";
			}, delay);


		}

		if (this.initialSectionVisible != true) {
			document.querySelector("#navMain").style.opacity = "1";
		} else {
			document.querySelector("#navMain").style.opacity = "0";
		}
	},
	exitPdf: function (pdf) {
		pdf.style.opacity = "0";
		pdf.style.zIndex = "-1";
	},
	upFadeIn: function () {
		if (intro.main.scrollTop > 160) {
			this.upSkull.style.transitionDuration = ".7s";
			this.upSkull.style.opacity = "1";
		} else {
			this.upSkull.style.opacity = "0";
		}
	},
	smoothScroll: function () {
		let mainScroll = setInterval(function () {
			intro.main.scrollTop -= content.scrollSpeed;
			if (intro.main.scrollTop <= 4) {
				content.scrollSpeed = 0.5;
			} else if (intro.main.scrollTop <= 24) {
				content.scrollSpeed = 2;
				content.scrollTime = 20;
			} else if (intro.main.scrollTop <= 28) {
				content.scrollSpeed = 5;
			} else if (intro.main.scrollTop <= 30) {
				content.scrollSpeed = 10;
			} else if (intro.main.scrollTop <= 34) {
				content.scrollSpeed = 15;
			} else if (intro.main.scrollTop <= 38) {
				content.scrollSpeed = 20;
			}

			if (intro.main.scrollTop === 0) {
				clearInterval(mainScroll);
				content.scrollSpeed = 25;
				content.scrollTime = 10;
			}
		}, this.scrollTime);
	},
	letterSwitch: function (delay1, delay2, delay3) {
		setInterval(function () {
			let spanRandom = Math.floor(Math.random() * content.spanTotal);
			let runeRandom = Math.floor(Math.random() * content.runes.length);
			let substituteRandom = Math.floor(Math.random() * content.thinSubstitute.length);
			let temp = document.querySelector(`.letterSpan${spanRandom}`);
			
			if (content.languageBg == true) {
				document.querySelectorAll(".coverSpan").forEach(function (span) {
					span.style.fontSize = ".8em";
					span.style.paddingTop = "2.5px";
				})
			} else {
				document.querySelectorAll(".coverSpan").forEach(function (span) {
					span.style.fontSize = ".9em";
					span.style.paddingTop = "1px";
				})
			}

			if (temp.innerHTML == " ") {
				document.querySelector(`.letterSpan${spanRandom + 1}`).style.opacity = 0;
				document.querySelector(`.coverSpan${spanRandom + 1}`).innerHTML = content.runes[runeRandom];
				
				setTimeout(function () {
					document.querySelector(`.coverSpan${spanRandom + 1}`).style.opacity = 1;
					
					setTimeout(function () {
						document.querySelector(`.letterSpan${spanRandom + 1}`).style.opacity = 1;
						document.querySelector(`.coverSpan${spanRandom + 1}`).style.opacity = 0;
					}, delay3);
				}, delay2)
			} else if (temp.innerHTML == ",") {
				document.querySelector(`.letterSpan${spanRandom - 1}`).style.opacity = 0;
				document.querySelector(`.coverSpan${spanRandom - 1}`).innerHTML = content.runes[runeRandom];
				
				setTimeout(function () {
					document.querySelector(`.coverSpan${spanRandom - 1}`).style.opacity = 1;
					
					setTimeout(function () {
						document.querySelector(`.letterSpan${spanRandom - 1}`).style.opacity = 1;
						document.querySelector(`.coverSpan${spanRandom - 1}`).style.opacity = 0;
					}, delay3);
				}, delay2)
			} else if (temp.innerHTML == ".") {
				document.querySelector(`.letterSpan${spanRandom - 1}`).style.opacity = 0;
				document.querySelector(`.coverSpan${spanRandom - 1}`).innerHTML = content.runes[runeRandom];
				
				setTimeout(function () {
					document.querySelector(`.coverSpan${spanRandom - 1}`).style.opacity = 1;
					
					setTimeout(function () {
						document.querySelector(`.letterSpan${spanRandom - 1}`).style.opacity = 1;
						document.querySelector(`.coverSpan${spanRandom - 1}`).style.opacity = 0;
					}, delay3);
				}, delay2)
			} else if (temp.innerHTML.toLowerCase() == "i") {
				document.querySelector(`.letterSpan${spanRandom}`).style.opacity = 0;
				document.querySelector(`.coverSpan${spanRandom}`).innerHTML = content.thinSubstitute[substituteRandom];
				
				setTimeout(function () {
					document.querySelector(`.coverSpan${spanRandom}`).style.opacity = 1;
					
					setTimeout(function () {
						document.querySelector(`.letterSpan${spanRandom}`).style.opacity = 1;
						document.querySelector(`.coverSpan${spanRandom}`).style.opacity = 0;
					}, delay3);
				}, delay2)
			} else if (temp.innerHTML.toLowerCase() == "l") {
				document.querySelector(`.letterSpan${spanRandom}`).style.opacity = 0;
				document.querySelector(`.coverSpan${spanRandom}`).innerHTML = content.thinSubstitute[substituteRandom];
				
				setTimeout(function () {
					document.querySelector(`.coverSpan${spanRandom}`).style.opacity = 1;
					
					setTimeout(function () {
						document.querySelector(`.letterSpan${spanRandom}`).style.opacity = 1;
						document.querySelector(`.coverSpan${spanRandom}`).style.opacity = 0;
					}, delay3);
				}, delay2)
			} else if (temp.innerHTML.toLowerCase() == "t") {
				document.querySelector(`.letterSpan${spanRandom}`).style.opacity = 0;
				document.querySelector(`.coverSpan${spanRandom}`).innerHTML = content.thinSubstitute[substituteRandom];
				
				setTimeout(function () {
					document.querySelector(`.coverSpan${spanRandom}`).style.opacity = 1;
					
					setTimeout(function () {
						document.querySelector(`.letterSpan${spanRandom}`).style.opacity = 1;
						document.querySelector(`.coverSpan${spanRandom}`).style.opacity = 0;
					}, delay3);
				}, delay2)
			} else {
				document.querySelector(`.letterSpan${spanRandom}`).style.opacity = 0;
				document.querySelector(`.coverSpan${spanRandom}`).innerHTML = content.runes[runeRandom];
				
				setTimeout(function () {
					document.querySelector(`.coverSpan${spanRandom}`).style.opacity = 1;
					
					setTimeout(function () {
						document.querySelector(`.letterSpan${spanRandom}`).style.opacity = 1;
						document.querySelector(`.coverSpan${spanRandom}`).style.opacity = 0;
					}, delay3);
				}, delay2)
			}
		}, delay1);
	},
	cursorMove: function (mouse) {
		this.moveCount += 1;
		if (this.moveCount == 250) {
			if (this.flake1Running != true) {
				this.flake1.style.opacity = "1";
				this.animateFlake1(12, mouse);
			}
			if (this.flake2Running != true) {
				this.flake2.style.opacity = "1";
				this.animateFlake2(12, mouse);
			}
			this.moveCount = 0;
		}
	},
	animateFlake1: function (delay, mouse) {
		let xPos = mouse.clientX + 3;
		let yPos = mouse.clientY + 8;
		this.flake1Running = true;
		this.flake1.style.left = (mouse.clientX + 3).toString() + "px";
		this.flake1.style.top = (mouse.clientY + 8).toString() + "px";
		let flake1Fall = setInterval(function (mouse) {
			content.flake1.style.transform = "translate(" + content.flake1X + "px," + content.flake1Y + "px)";
			content.flake1Y += content.flakesYSpeed;
			if (content.flake1XToggle == true) {
				content.flake1X += 0.01 + (Math.random() / 4);
				if (content.flake1X >= Math.random() * 130) {
					content.flake1XToggle = false;
				}
			} else if (content.flake1XToggle == false) {
				content.flake1X -= 0.01 + (Math.random() / 4);
				if (content.flake1X <= -Math.random() * 60) {
					content.flake1XToggle = true;
				}
			}
			if (content.flake1Y == window.innerHeight - yPos) {
				clearInterval(flake1Fall);
				content.flake1X = 0;
				content.flake1Y = 0;
				content.flake1Running = false;
				entryCount = 0;
				this.flake1.style.opacity = "0";
			}
		}, delay);
	},
	animateFlake2: function (delay, mouse) {
		let xPos = mouse.clientX + 7;
		let yPos = mouse.clientY + 13;
		this.flake2Running = true;
		this.flake2.style.left = (mouse.clientX + 7).toString() + "px";
		this.flake2.style.top = (mouse.clientY + 13).toString() + "px";
		let flake2Fall = setInterval(function (mouse) {
			content.flake2.style.transform = "translate(" + content.flake2X + "px," + content.flake2Y + "px)";
			content.flake2Y += content.flakesYSpeed;
			if (content.flake2XToggle == true) {
				content.flake2X -= 0.01 + (Math.random() / 5);
				if (content.flake2X <= -Math.random() * 140) {
					content.flake2XToggle = false;
				}
			} else if (content.flake2XToggle == false) {
				content.flake2X += 0.01 + (Math.random() / 5);
				if (content.flake2X >= Math.random() * 60) {
					content.flake2XToggle = true;
				}
			}
			if (content.flake2Y == window.innerHeight - yPos) {
				clearInterval(flake2Fall);
				content.flake2X = 0;
				content.flake2Y = 0;
				content.flake2Running = false;
				entryCount = 0;
				this.flake2.style.opacity = "0";
			}
		}, delay);
	},
	resize: function () {
		intro.main.style.width = window.innerWidth + 17 + "px";
	}
};

//////////////////////////////////////////

intro.main.addEventListener("scroll", function () {
	content.upFadeIn();
});

document.querySelector(".subItemsR2").onmouseenter = () => {
	document.querySelector("#github").style.opacity = "1";
	document.querySelector("#linkedin").style.opacity = "1";
}
document.querySelector(".subItemsR2").onmouseleave = () => {
	document.querySelector("#github").style.opacity = "0";
	document.querySelector("#linkedin").style.opacity = "0";
}

content.upSkull.addEventListener("click", content.smoothScroll);

window.onmousemove = (mouse) => {
	if (intro.animationDone == true) {
		content.cursorMove(mouse);
	}
};

window.onresize = function(){
	content.resize();
};

window.onload = () => {
	content.textLanguageSelect();
	content.getAge();
	content.loadText();
	content.resize();
	intro.animate();

	for (let x = 0; x < content.languageFlags.length; x++) {
		content.languageFlags[x].addEventListener("click", function () {
			if (content.languageCovering != true) { 
				intro.blurrSlide.style.boxShadow = "-2px 1px 100px 40px black";
				content.rotateFlags(content.languageFlags[x]);
			}
		});
	}

	for (let x = 0; x < content.navSubLinks.length; x++) {
		if (content.navSubLinks[x].innerHTML != "Links") {
			content.navSubLinks[x].addEventListener("click", function () {
				content.changeSections(content.navSubLinks[x], 700);
			});
		}
	}

	for (let x = 0; x < document.querySelectorAll(".certificateHover").length; x++) {
		document.querySelectorAll(".certificateHover")[x].addEventListener("mouseenter", function () {
			document.querySelectorAll(".certificateHover")[x].children[1].style.opacity = "1";
		});
	}

	for (let x = 0; x < document.querySelectorAll(".certificateHover").length; x++) {
		document.querySelectorAll(".certificateHover")[x].addEventListener("mouseleave", function () {
			document.querySelectorAll(".certificateHover")[x].children[1].style.opacity = "0";
		});
	}

	for (let x = 0; x < document.querySelectorAll(".certificateHover").length; x++) {
		document.querySelectorAll(".certificateHover")[x].addEventListener("click", function () {
			if (x == 0) {
				document.querySelector(".hiddenPdf").data = "cv_and_cert/itacademy.pdf";
			} else if (x == 1) {
				document.querySelector(".hiddenPdf").data = "cv_and_cert/swift.pdf";
			} else if (x == 2) {
				document.querySelector(".hiddenPdf").data = "cv_and_cert/modernJs.pdf";
			} else if (x == 3) {
				document.querySelector(".hiddenPdf").data = "cv_and_cert/php.pdf";
			}

			document.querySelector(".pdfContainer").style.opacity = "1";
			document.querySelector(".pdfContainer").style.zIndex = "0";
		});
	}

	for (let x = 0; x < document.querySelectorAll(".pdfContainer").length; x++) {
		document.querySelectorAll(".pdfContainer")[x].addEventListener("mouseenter", function () {
			document.querySelectorAll(".pdfContainer")[x].children[1].style.height = "45px";
			document.querySelectorAll(".pdfContainer")[x].children[1].children[0].style.opacity = "1";
		});
	}

	for (let x = 0; x < document.querySelectorAll(".pdfContainer").length; x++) {
		document.querySelectorAll(".pdfContainer")[x].addEventListener("mouseleave", function () {
			document.querySelectorAll(".pdfContainer")[x].children[1].style.height = "0px";
			document.querySelectorAll(".pdfContainer")[x].children[1].children[0].style.opacity = "0";
		});
	}

	for (let x = 0; x < document.querySelectorAll(".exitText").length; x++) {
		document.querySelectorAll(".exitText")[x].addEventListener("click", function () {
			content.exitPdf(document.querySelectorAll(".pdfContainer")[x]);
		});
	}

	for (let x = 0; x < content.navItems.length; x++) {
		let event1 = "";
		let event2 = "";
		
		if (navigator.platform == "iPhone") {
			event1 = "click";
			intro.main.addEventListener("click", function () {
				content.navItems[x].style.height = "30px";
				//content.navItems[x].children[0].style.bottom = "0px";
				for (let i = 0; i < content.navItems[x].children.length; i++) {
					content.navItems[x].children[i].style.opacity = "0";
					content.navItems[x].children[i].style.opacity = "0";
				}

				setTimeout(function () {					
					for (let i = 0; i < content.navItems[x].children.length; i++) {
						content.navItems[x].children[i].style.display = "none";
						content.navItems[x].children[i].style.pointerEvents = "none";
					}	
				}, 400)
			});
		} else {
			event1 = "mouseenter";
			event2 = "mouseleave";
		}

		content.navItems[x].addEventListener(event1, function () {
			let height = "88px";

			if (x == 0) {
				height = "100px";
			} else {
				height = "88px";
			}

			for (let i = 0; i < content.navItems[x].children.length; i++) {
				content.navItems[x].children[i].style.display = "inline-block";
			}

			content.navItems[x].style.height = height;

			setTimeout(function () {
				content.navItems[x].children[0].style.opacity = "1";
				
				if (x == 0) {
					content.navItems[x].children[0].style.bottom = "50px";
					content.navItems[x].children[1].style.bottom = "28px";
				} else {
					content.navItems[x].children[0].style.bottom = "40px";
					content.navItems[x].children[1].style.bottom = "20px";
				}
			}, 5);

			setTimeout(function () {
				content.navItems[x].children[1].style.opacity = "1";
				content.navItems[x].children[0].style.pointerEvents = "auto";
				content.navItems[x].children[1].style.pointerEvents = "auto";

				if (x == 0) {
					content.navItems[x].children[2].style.opacity = "1";
					content.navItems[x].children[2].style.pointerEvents = "auto";
				}
			}, 15);
		})

		content.navItems[x].addEventListener(event2, function () {
			content.navItems[x].style.height = "30px";
			content.navItems[x].children[0].style.bottom = "12px";
			content.navItems[x].children[1].style.bottom = "6px";
			content.navItems[x].children[0].style.opacity = "0";
			content.navItems[x].children[1].style.opacity = "0";

			if (x == 0) {
				content.navItems[x].children[2].style.opacity = "0";
			}

			setTimeout(function () {
				for (let i = 0; i < (content.navItems[x].children.length); i++) {
					content.navItems[x].children[i].style.display = "none";
					content.navItems[x].children[i].style.pointerEvents = "none";
				}
			}, 400)
		})
	}

	document.querySelector(".externalLinksContainer").addEventListener("mouseenter", () => {
		document.querySelector(".externalLinksContainer").style.height = "48px";
		document.querySelector(".externalLinks").style.opacity = "1";
		document.querySelector(".externalLinks").style.zIndex = "1";
	})

	document.querySelector(".externalLinksContainer").addEventListener("mouseleave", () => {
		document.querySelector(".externalLinksContainer").style.height = "22px";
		document.querySelector(".externalLinks").style.opacity = "0";
		document.querySelector(".externalLinks").style.zIndex = "-1";
	})

	if (navigator.platform == "iPhone") {
		content.languageToggle.onclick = () => {
			content.languagesText.style.opacity = "0";
			content.languagesText.style.marginTop = "0";
			
			if (content.languageBg == true) {
				content.languageFlags[0].style.top = "8px";
			} else if (content.languageEn == true) {
				content.languageFlags[1].style.top = "8px";
			} else {
				content.languageFlags[2].style.top = "8px";
			}
		};

		content.languageToggle.onblur = () => {
			content.languageToggle.style.paddingBottom = "25px";
			content.languagesText.style.opacity = "1";
			
			for (let x = 0; x < content.languageFlags.length; x++) {
				content.languageFlags[x].style.top = "-14px";
			}
		};
	} else {
		content.languageToggle.onmouseenter = () => {
			content.languagesText.style.opacity = "0";
			content.languagesText.style.marginTop = "0";
			
			if (content.languageBg == true) {
				content.languageFlags[0].style.top = "8px";
			} else if (content.languageEn == true) {
				content.languageFlags[1].style.top = "8px";
			} else {
				content.languageFlags[2].style.top = "8px";
			}
		};
		content.languageToggle.onmouseleave = () => {
			content.languageToggle.style.paddingBottom = "25px";
			content.languagesText.style.opacity = "1";
			
			for (let x = 0; x < content.languageFlags.length; x++) {
				content.languageFlags[x].style.top = "-14px";
			}
		};
	}

	document.querySelector(".footText").innerHTML = `Copywright © ${new Date().getFullYear()}`
};

window.onclick = function () {
	//console.log(document.querySelectorAll(".subItemsL")[2])
};