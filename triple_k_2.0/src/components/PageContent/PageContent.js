let getAge = () => {
	let age = Date.now() - new Date(1985, 4, 3).getTime();
	let ageDate = new Date(age);

	return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
};

module.exports = {
	en: {
		index: {
			header: {
				title: "KAMEN KASHCHIEV"
			},
			buttons: {
				languageButton: "LANGUAGES",
				navL: "ADDITIONAL",
				navMiddle: "MAIN",
				navR: "CERTIFICATES",
			},
			subButtons: {

			}
		},
		mainSection: {
			topArticle: {
				title: "General Info",
				name: {
					title: "Name",
					content: "Kamen Kamenov Kashchiev"
				},
				age: {
					title: "Age",
					content: `${getAge()}`
				},
				location: {
					title: "Location",
					content: "Sofia, Bulgaria"
				},
				education: {
					title: "Education",
					content: "Highschool"
				}
			},
			bottomArticle: {
				title: "About me",
				content: `
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci porro debitis earum molestias obcaecati 
					eos quos labore at, ducimus. Debitis quis perspiciatis doloremque qui reprehenderit consectetur quae, accusantium laborum illum!
				`
			}
		},
		certificatesSection: {
			titles: [
				"Front End Course",
				"Modern JavaScript Course",
				"PHP Course",
				"Webpack Course"
			],
			button: "EXIT"
		}
	},
	bg: {
		index: {
			header: {
				title: "КАМЕН КАШЧИЕВ"
			},
			buttons: {
				languageButton: "",
				navL: "ДОПЪЛНИТЕЛНО",
				navMiddle: "НАЧАЛО",
				navR: "СЕРТИФИКАТИ",
			},
			subButtons: {

			}
		},
		mainSection: {
			topArticle: {
				title: "Генерална Информация",
				name: {
					title: "Име",
					content: "Камен Каменов Кашчиев"
				},
				age: {
					title: "Години",
					content: `${getAge()}`
				},
				location: {
					title: "Местоположение",
					content: "София, България"
				},
				education: {
					title: "Oбразование",
					content: "Средно образование"
				}
			},
			bottomArticle: {
				title: "За мен",
				content: `
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci porro debitis earum molestias obcaecati 
					eos quos labore at, ducimus. Debitis quis perspiciatis doloremque qui reprehenderit consectetur quae, accusantium laborum illum!
				`
			}
		},
		certificatesSection: {
			titles: [
				"Front End Курс",
				"Modern JavaScript Курс",
				"PHP Курс",
				"Webpack Курс"
			],
			button: "ИЗХОД"
		}
	},
	it: {
		index: {
			header: {
				title: "KAMEN KASHCHIEV"
			},
			buttons: {
				languageButton: "",
				navL: "ADDIZIONALE",
				navMiddle: "INIZIO",
				navR: "CERTIFICATI",
			},
			subButtons: {

			}
		},
		mainSection: {
			topArticle: {
				title: "Informazioni Generali",
				name: {
					title: "Nome",
					content: "Kamen Kamenov Kashchiev"
				},
				age: {
					title: "Età",
					content: `${getAge()}`
				},
				location: {
					title: "Località",
					content: "Sofia, Bulgaria"
				},
				education: {
					title: "Titolo di studio",
					content: "Diploma di scuola secondaria superiore"
				}
			},
			bottomArticle: {
				title: "Su di me",
				content: `
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci porro debitis earum molestias obcaecati 
					eos quos labore at, ducimus. Debitis quis perspiciatis doloremque qui reprehenderit consectetur quae, accusantium laborum illum!
				`
			}
		},
		certificatesSection: {
			titles: [
				"Corso di Front End",
				"Corso di Modern JavaScript",
				"Corso di PHP",
				"Corso di Webpack"
			],
			button: "ESCI"
		}
	},
	icons: {
		titles: [
			"HTML",
			"CSS",
			"Sass",
			"Bootstrap",
			"JavaScript",
			"jQuery",
			"Pixi.js",
			"React",
			"webpack",
			"Node.js",
			"Git",
		],
		src: [
			"../assets/icons/html.svg", 
			"../assets/icons/css.svg",
			"../assets/icons/sass.svg",
			"../assets/icons/bootstrap.svg",
			"../assets/icons/js.svg",
			"../assets/icons/jquery.svg",
			"../assets/icons/pixi.svg", 
			"../assets/icons/react.svg",
			"../assets/icons/webpack.svg",
			"../assets/icons/nodejs.svg",
			"../assets/icons/git.svg"
		]
	}
}