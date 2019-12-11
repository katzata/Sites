//
//		Written by Katzata
//

const Player = function (x, y) {
	this.x = x;
	this.y = y;
};

Player.prototype = {
	animCounter: 0,
	animDelay: 17,
	deathCounter: 0,
	deathDelay: 15,
	fireCounter: 0,
	fireDelay: 5,
	shotCount: 1,
	dead: false,
	animate: function () {
		if (this.dead != true) {
			if (controlls.left == true && controlls.right != true) {
				this.animCounter ++;
				if (this.animCounter <= this.animDelay) {
					context.drawImage(tileSet, 
						118, 0, 35, 54, 
						player.x, player.y - 110, 42 * level.scaledSize - 6, 55 * level.scaledSize);
				} else if (this.animCounter > this.animDelay && this.animCounter <= this.animDelay * 2) {
					context.drawImage(tileSet, 
						79, 0, 39, 55, 
						player.x, player.y - 110, 42 * level.scaledSize, 55 * level.scaledSize);
				} else if (this.animCounter > this.animDelay * 2 && this.animCounter <= this.animDelay * 3) {
					context.drawImage(tileSet, 
						42, 0, 37, 55, 
						player.x, player.y - 110, 42 * level.scaledSize, 55 * level.scaledSize);
				} else if (this.animCounter > this.animDelay * 3 && this.animCounter <= this.animDelay * 4) {
					context.drawImage(tileSet, 
						0, 0, 42, 55, 
						player.x, player.y - 110, 42 * level.scaledSize + 5, 55 * level.scaledSize + 5);
				}
			}
		}

		if (this.dead != true) {
			if (controlls.right == true && controlls.left != true) {
				this.animCounter ++;
				if (this.animCounter <= this.animDelay) {
					context.drawImage(tileSet, 
						153, 0, 42, 54, 
						player.x, player.y - 110, 42 * level.scaledSize, 55 * level.scaledSize);
				} else if (this.animCounter > this.animDelay && this.animCounter <= this.animDelay * 2) {
					context.drawImage(tileSet, 
						196, 0, 42, 55,
						player.x, player.y - 110, 42 * level.scaledSize, 55 * level.scaledSize + 5);
				} else if (this.animCounter > this.animDelay * 2 && this.animCounter <= this.animDelay * 3) {
					context.drawImage(tileSet, 
						239, 0, 42, 55, 
						player.x, player.y - 110, 42 * level.scaledSize, 55 * level.scaledSize);
				} else if (this.animCounter > this.animDelay * 3 && this.animCounter <= this.animDelay * 4) {
					context.drawImage(tileSet, 
						282, 0, 42, 55, 
						player.x, player.y - 110, 42 * level.scaledSize, 55 * level.scaledSize);
				} else if (controlls.left == true) {
					context.drawImage(tileSet, 
						325, 0, 42, 55, 
						player.x, player.y - 110, 39 * level.scaledSize, 55 * level.scaledSize + 2);
				}
			};
		}

		if (controlls.fire == true && this.dead != true) {
			this.fireCounter ++;
			controlls.left = false;
			controlls.right = false;
			if (this.fireCounter <= this.fireDelay) {
				shoot.play();
				context.drawImage(tileSet, 
					161, 55, 55, 54, 
					player.x, player.y - 110, 45 * level.scaledSize, 55 * level.scaledSize);
			} else if (this.fireCounter > this.fireDelay && this.fireCounter <= this.fireDelay * 24) {
				context.drawImage(tileSet, 
					105, 55, 53, 54, 
					player.x, player.y - 110, 45 * level.scaledSize, 55 * level.scaledSize);
			}
		}

		if (this.dead == true) {
			if (this.deathCounter < this.deathDelay * 8) {
				this.deathCounter += 1;
			} else if (this.deathCounter == this.deathDelay * 8) {
				this.deathCounter += 0
			}
			if (this.deathCounter <= this.deathDelay) {
				playerDeath.play();
				context.drawImage(tileSet, 
					0, 113, 38, 56, 
					player.x, player.y - 110, 38 * level.scaledSize, 56 * level.scaledSize);
			} else if (this.deathCounter > this.deathDelay && this.deathCounter <= this.deathDelay * 2) {
				context.drawImage(tileSet, 
					39, 113, 44, 59, 
					player.x +1, player.y - 117, 44 * level.scaledSize, 59 * level.scaledSize);
			} else if (this.deathCounter > this.deathDelay * 2 && this.deathCounter <= this.deathDelay * 3) {
				context.drawImage(tileSet, 
					84, 113, 48, 57, 
					player.x - 3, player.y - 112, 48 * level.scaledSize, 57 * level.scaledSize);
			} else if (this.deathCounter > this.deathDelay * 3 && this.deathCounter <= this.deathDelay * 4) {
				context.drawImage(tileSet, 
					133, 113, 53, 59, 
					player.x - 10, player.y - 101, 53 * level.scaledSize, 59 * level.scaledSize);
			} else if (this.deathCounter > this.deathDelay * 4 && this.deathCounter <= this.deathDelay * 5) {
				context.drawImage(tileSet, 
					187, 113, 55, 47, 
					player.x - 3, player.y - 87, 55 * level.scaledSize, 47 * level.scaledSize);
			} else if (this.deathCounter > this.deathDelay * 5 && this.deathCounter <= this.deathDelay * 6) {
				context.drawImage(tileSet, 
					243, 113, 57, 39, 
					player.x - 3, player.y - 71, 57 * level.scaledSize, 39 * level.scaledSize);
			} else if (this.deathCounter > this.deathDelay * 6 && this.deathCounter <= this.deathDelay * 7) {
				context.drawImage(tileSet, 
					359, 113, 57, 23, 
					player.x - 3, player.y - 32, 57 * level.scaledSize, 23 * level.scaledSize);
			} else if (this.deathCounter > this.deathDelay * 7 && this.deathCounter <= this.deathDelay * 8) {
				context.drawImage(tileSet, 
					417, 113, 57, 22, 
					player.x - 3, player.y - 29, 57 * level.scaledSize, 22 * level.scaledSize);
			}		
		}

		if (controlls.fire == true && controlls.left == true) {
			context.drawImage(tileSet, 
			325, 0, 42, 55, 
			player.x, player.y - 110, 42 * level.scaledSize, 55 * level.scaledSize + 2);
		}

		if (controlls.left == false && controlls.right == false && controlls.fire == false && this.dead != true || controlls.left == true && controlls.right == true && this.dead != true) {
			context.drawImage(tileSet, 
			325, 0, 42, 55, 
			player.x, player.y - 110, 42 * level.scaledSize, 55 * level.scaledSize + 2);
		}

		if (this.animCounter == this.animDelay * 4) {
			this.animCounter = 0;
		}

		if (this.fireCounter == this.fireDelay * 24) {
			this.fireCounter = 0;
		}

		if (this.fireCounter == this.fireDelay && controlls.posX >= 140 && controlls.posX <= 940 && enemies.elementalDead != true) {
			enemies.elementalHit += this.shotCount;
		}

		if (this.fireCounter == this.fireDelay && controlls.posX >= 1265 && enemies.cyberDemonDead != true) {
			enemies.cyberDemonHit += this.shotCount;
		}
	}
};

const Viewport = function (x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
};

Viewport.prototype = {
	scrollTo: function (x) {
		this.x = x;
	}
};

const Info = function () {
	this.scaled = 1.7;
	this.orbScaled = 1.1;
	this.draw = () => {
		if (enemies.elementalDead == true && controlls.posX < 1264) {

			context.save();
			context.globalAlpha = 0.55;
			context.fillRect(-controlls.posX + 914, 55, 350, 280);
			context.restore();

			context.drawImage(tileSet, 
				246, 331, 12, 14,
				-controlls.posX + 945, 80, 13 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + 968, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + 984, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				104, 303, 9, 7,
				-controlls.posX + 1001, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + 1017, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 1033, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				200, 303, 9, 7,
				-controlls.posX + 1049, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				200, 303, 9, 7,
				-controlls.posX + 1067, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				137, 303, 9, 7,
				-controlls.posX + 1083, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				216, 303, 9, 7,
				-controlls.posX + 1093, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				104, 303, 9, 7,
				-controlls.posX + 1109, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				294, 331, 12, 14,
				-controlls.posX + 1138, 80, 13 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				168, 303, 9, 7,
				-controlls.posX + 1161, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				137, 303, 9, 7,
				-controlls.posX + 1175, 90, 11 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				184, 303, 9, 7,
				-controlls.posX + 1187, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				184, 303, 9, 7,
				-controlls.posX + 1203, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				296, 303, 9, 7,
				-controlls.posX + 1219, 90, 10 * this.scaled, 8 * this.scaled);

			
			// End of first row


			context.drawImage(tileSet, 
				118, 331, 12, 14,
				-controlls.posX + 952, 135, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				310, 331, 12, 14,
				-controlls.posX + 973, 135, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				198, 331, 12, 14,
				-controlls.posX + 994, 135, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				182, 331, 12, 14,
				-controlls.posX + 1015, 135, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				70, 347, 12, 14,
				-controlls.posX + 1038, 135, 12 * this.scaled, 14 * this.scaled);
			

			// End of second row text


			info.animateOrb(-controlls.posX + 1139, 132);
			info.animateOrb(-controlls.posX + 1172, 132);
			

			// End of second row


			context.drawImage(tileSet, 
				38, 331, 12, 14,
				-controlls.posX + 952, 165, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				294, 331, 12, 14,
				-controlls.posX + 973, 165, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				294, 331, 12, 14,
				-controlls.posX + 994, 165, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				38, 347, 12, 14,
				-controlls.posX + 1017, 165, 12 * this.scaled, 14 * this.scaled);
			

			// End of third row text


			info.animateOrb(-controlls.posX + 1139, 163);
			info.animateOrb(-controlls.posX + 1172, 163);
						

			// End of third row


			context.drawImage(tileSet, 
				150, 331, 13, 14,
				-controlls.posX + 952, 195, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 972, 205, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				344, 303, 9, 7,
				-controlls.posX + 988, 205, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 1002, 205, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				294, 331, 12, 14,
				-controlls.posX + 1018, 195, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				40, 303, 9, 7,
				-controlls.posX + 1039, 205, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + 1055, 205, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				138, 303, 9, 7,
				-controlls.posX + 1071, 205, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				248, 303, 9, 7,
				-controlls.posX + 1080, 205, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + 1096, 205, 10 * this.scaled, 8 * this.scaled);
			

			// End of fourth row text


			info.animateOrb(-controlls.posX + 1139, 194);
			
			
			// End of fourth row


			context.drawImage(tileSet, 
				22, 331, 12, 14,
				-controlls.posX + 952, 250, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + 973, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + 989, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + 1005, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				296, 303, 8, 7,
				-controlls.posX + 1021, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + 1037, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + 1053, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 1069, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				248, 303, 9, 7,
				-controlls.posX + 1085, 260, 10 * this.scaled, 8 * this.scaled);
			

			// End of fifth row text


			info.animateOrb(-controlls.posX + 1139, 248);
			

			// End of fifth row

			context.drawImage(tileSet, 
				152, 303, 9, 7,
				-controlls.posX + 952, 289, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				262, 330, 12, 15,
				-controlls.posX + 968, 279, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				328, 303, 9, 7,
				-controlls.posX + 988, 289, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				72, 303, 9, 7,
				-controlls.posX + 1004, 289, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + 1020, 289, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				392, 303, 9, 7,
				-controlls.posX + 1036, 289, 10 * this.scaled, 8 * this.scaled);
			

			// End of sixth row text

			
			info.animateOrb(-controlls.posX + 1139, 279);


			// End of sixth row
		}

		if (enemies.cyberDemonDead == true && controlls.posX > 1264) {
			
			context.save();
			context.globalAlpha = 0.55;
			context.fillStyle = "#000000";
			context.fillRect(-controlls.posX + 2065, 55, 350, 280);
			context.restore();

			context.drawImage(tileSet, 
				6, 331, 12, 14,
				-controlls.posX + 2100, 80, 13 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				56, 303, 9, 7,
				-controlls.posX + 2123, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				56, 303, 9, 7,
				-controlls.posX + 2139, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				138, 303, 9, 7,
				-controlls.posX + 2155, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + 2164, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				138, 303, 9, 7,
				-controlls.posX + 2180, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + 2189, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				216, 303, 9, 7,
				-controlls.posX + 2205, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 2221, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				184, 303, 9, 7,
				-controlls.posX + 2237, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				294, 331, 12, 14,
				-controlls.posX + 2282, 80, 13 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				168, 303, 9, 7,
				-controlls.posX + 2305, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				137, 303, 9, 7,
				-controlls.posX + 2319, 90, 11 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				184, 303, 9, 7,
				-controlls.posX + 2330, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				184, 303, 9, 7,
				-controlls.posX + 2346, 90, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				296, 303, 9, 7,
				-controlls.posX + 2362, 90, 10 * this.scaled, 8 * this.scaled);

			// End of first row (text only)

			context.drawImage(tileSet, 
				246, 331, 12, 14,
				-controlls.posX + 2108, 130, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				120, 303, 9, 7,
				-controlls.posX + 2129, 140, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + 2145, 140, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + 2161, 140, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + 2177, 140, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				296, 303, 9, 7,
				-controlls.posX + 2193, 140, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				120, 303, 9, 7,
				-controlls.posX + 2207, 140, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + 2223, 140, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				248, 303, 9, 7,
				-controlls.posX + 2239, 140, 10 * this.scaled, 8 * this.scaled);

			// End of second row text

			info.animateOrb(-controlls.posX + 2284, 129);
			//info.animateOrb(-controlls.posX + 2315, 134);
			//info.animateOrb(-controlls.posX + 2346, 134);

			// End of second row

			context.drawImage(tileSet, 
				342, 331, 12, 14,
				-controlls.posX + 2108, 160, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				72, 303, 9, 7,
				-controlls.posX + 2129, 170, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				104, 303, 9, 7,
				-controlls.posX + 2145, 170, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 2161, 170, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				296, 303, 9, 7,
				-controlls.posX + 2177, 170, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				246, 331, 12, 14,
				-controlls.posX + 2202, 160, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + 2223, 170, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + 2239, 170, 10 * this.scaled, 8 * this.scaled);

			// End of third row text

			info.animateOrb(-controlls.posX + 2284, 160);
			info.animateOrb(-controlls.posX + 2315, 160);

			// End of third row

			context.drawImage(tileSet, 
				182, 331, 12, 14,
				-controlls.posX + 2165, 205, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 2186, 215, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				216, 303, 9, 7,
				-controlls.posX + 2202, 215, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				104, 303, 9, 7,
				-controlls.posX + 2218, 215, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				328, 303, 9, 7,
				-controlls.posX + 2234, 215, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 2250, 215, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				104, 303, 9, 7,
				-controlls.posX + 2266, 215, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				72, 303, 9, 7,
				-controlls.posX + 2283, 215, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				296, 303, 9, 7,
				-controlls.posX + 2299, 215, 10 * this.scaled, 8 * this.scaled);

			// End of fourth row

			context.drawImage(tileSet, 
				70, 331, 12, 14,
				-controlls.posX + 2108, 250, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				216, 303, 9, 7,
				-controlls.posX + 2129, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				104, 303, 9, 7,
				-controlls.posX + 2145, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				184, 303, 9, 7,
				-controlls.posX + 2161, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				137, 303, 9, 7,
				-controlls.posX + 2175, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				296, 303, 9, 7,
				-controlls.posX + 2185, 260, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				120, 303, 9, 7,
				-controlls.posX + 2199, 260, 10 * this.scaled, 8 * this.scaled);

			// End of fifth row text

			info.animateOrb(-controlls.posX + 2284, 248);
			info.animateOrb(-controlls.posX + 2315, 248);
			info.animateHalfOrb(-controlls.posX + 2333, 248)

			// End of fifth row

			context.drawImage(tileSet, 
				134, 330, 12, 15,
				-controlls.posX + 2108, 279, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + 2129, 289, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 2145, 289, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				184, 303, 9, 7,
				-controlls.posX + 2161, 289, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				137, 303, 9, 7,
				-controlls.posX + 2175, 289, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 2185, 289, 10 * this.scaled, 8 * this.scaled);
			context.drawImage(tileSet, 
				215, 303, 9, 7,
				-controlls.posX + 2199, 289, 10 * this.scaled, 8 * this.scaled);

			// End of sixth row text

			info.animateOrb(-controlls.posX + 2284, 279);
			info.animateOrb(-controlls.posX + 2315, 279);

			// End of sixth row
		}
	}	
};

Info.prototype = {
	counter: 0,
	moveCounter: 0,
	fadeCounter: 0,
	delay: 350,
	movePosX1: -670,
	movePosX2: 800,
	movePosY1: -90,
	movePosY2: 615,
	readyTextX: -590,
	readyTextY1: -190,
	readyTextY2: 200,
	finalInfoPosY: 580,
	speed: 15,
	cvStart: false,
	nameStart: false,
	ptStart: false,
	musicianStart: false,
	readyTextStart: false,
	go: false,
	creditsDone: false,
	killedMessage: false,
	showFinalInfo: false,
	animateOrb: function (x, y) {
		this.counter += 1;
		if (this.counter <= this.delay) {
			context.drawImage(tileSet, 
			380, 0, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay && this.counter <= this.delay * 2) {
			context.drawImage(tileSet, 
			380, 26, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay * 2 && this.counter <= this.delay * 3) {
			context.drawImage(tileSet, 
			380, 52, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay * 3 && this.counter <= this.delay * 4) {
			context.drawImage(tileSet, 
			380, 78, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay * 4 && this.counter <= this.delay * 5) {
			context.drawImage(tileSet, 
			380, 52, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay * 5 && this.counter <= this.delay * 6) {
			context.drawImage(tileSet, 
			380, 26, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		}

		if (this.counter == this.delay * 6) {
			this.counter = 0;
		}
	},
	animateHalfOrb: function (x, y) {
		this.counter += 1;
		if (this.counter <= this.delay) {
			context.drawImage(tileSet, 
			368, 0, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay && this.counter <= this.delay * 2) {
			context.drawImage(tileSet, 
			368, 26, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay * 2 && this.counter <= this.delay * 3) {
			context.drawImage(tileSet, 
			368, 52, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay * 3 && this.counter <= this.delay * 4) {
			context.drawImage(tileSet, 
			368, 78, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay * 4 && this.counter <= this.delay * 5) {
			context.drawImage(tileSet, 
			368, 52, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		} else if (this.counter > this.delay * 5 && this.counter <= this.delay * 6) {
			context.drawImage(tileSet, 
			368, 26, 25, 25,
			x, y, 25 * this.orbScaled, 25 * this.orbScaled);
		}

		if (this.counter == this.delay * 6) {
			this.counter = 0;
		}
	},
	drawCv: function (y, scale) {
		if (this.cvStart == true && this.movePosX1 < 620) {
			if (this.movePosX1 < 20) {
				this.movePosX1 += this.speed;	
			} else {
				this.movePosX1 += 1;
			}

			context.save();
			context.globalAlpha = 0.87;
			context.fillRect(-controlls.posX + this.movePosX1 + 185, y - 25, 470, 90);
			context.restore();

			context.drawImage(tileSet, 
				38, 331, 12, 14,
				-controlls.posX + this.movePosX1 + 217, y , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				328, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 254, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 280, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 306, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				137, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 329, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				40, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 346, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				328, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 372, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				184, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 398, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				328, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 424, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				200, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 450, y + 21, 9 * scale, 7 * scale);

			//

			context.drawImage(tileSet, 
				342, 331, 12, 14,
				-controlls.posX + this.movePosX1 + 495, y, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				137, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 530, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 547, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 573, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				72, 303, 9, 7,
				-controlls.posX + this.movePosX1 + 599, y + 21, 9 * scale, 7 * scale);
		}
	},
	drawName: function (x, scale) {
		if (this.nameStart == true && this.movePosY1 < 580) {			
			if (this.movePosY1 < 150) {
				this.movePosY1 += this.speed - 5;	
			} else {
				this.movePosY1 += 1;
			}

			context.save();
			context.globalAlpha = 0.87;
			context.fillRect(-controlls.posX + 175, this.movePosY1 - 25, 470, 90);
			context.restore();

			context.drawImage(tileSet, 
				166, 331, 12, 14,
				-controlls.posX + 217, this.movePosY1 , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 255, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				200, 303, 9, 7,
				-controlls.posX + 281, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				72, 303, 9, 7,
				-controlls.posX + 310, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				216, 303, 9, 7,
				-controlls.posX + 336, this.movePosY1 + 21, 9 * scale, 7 * scale);

			//

			context.drawImage(tileSet, 
				166, 331, 12, 14,
				-controlls.posX + 380, this.movePosY1, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + 418, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				296, 303, 9, 7,
				-controlls.posX + 444, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				120, 303, 9, 7,
				-controlls.posX + 467, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				40, 303, 9, 7,
				-controlls.posX + 493, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				120, 303, 9, 7,
				-controlls.posX + 518, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				138, 303, 9, 7,
				-controlls.posX + 544, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				72, 303, 9, 7,
				-controlls.posX + 558, this.movePosY1 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				344, 303, 9, 7,
				-controlls.posX + 584, this.movePosY1 + 21, 9 * scale, 7 * scale);
		}
	},
	drawPt: function (y, scale) {
		if (this.ptStart == true && this.movePosX2 > -420) {
			
			if (this.movePosX2 > 15) {
				this.movePosX2 -= this.speed;	
			} else {
				this.movePosX2 -= 1;
			}

			context.save();
			context.globalAlpha = 0.87;
			context.fillRect(-controlls.posX + this.movePosX2 + 185, y - 25, 234, 90);
			context.restore();

			context.drawImage(tileSet, 
				246, 331, 12, 14,
				-controlls.posX + this.movePosX2 + 217, y , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + this.movePosX2 + 254, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + this.movePosX2 + 280, y + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + this.movePosX2 + 306, y + 21, 9 * scale, 7 * scale);
			
			//

			context.drawImage(tileSet, 
				22, 347, 12, 14,
				-controlls.posX + this.movePosX2 + 350, y, 12 * scale, 14 * scale);
		}
	},
	drawMusician: function (x, scale) {
		if (this.musicianStart == true && this.movePosY2 > -700) {			

			this.movePosY2 -= 0.9;
		
			context.save();
			context.globalAlpha = 0.87;
			context.fillRect(-controlls.posX + x + 94, this.movePosY2 - 115, 522, 90);
			context.fillRect(-controlls.posX + x, this.movePosY2 - 25, 710, 90);
			context.restore();

			context.drawImage(tileSet, 
				198, 331, 12, 14,
				-controlls.posX + x + 129, this.movePosY2 -90 , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				327, 303, 9, 7,
				-controlls.posX + x + 164, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				296, 303, 9, 7,
				-controlls.posX + x + 192, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				138, 303, 9, 7,
				-controlls.posX + x + 215, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				40, 303, 9, 7,
				-controlls.posX + x + 229, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				248, 303, 9, 7,
				-controlls.posX + x + 279, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				72, 303, 9, 7,
				-controlls.posX + x + 305, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + x + 330, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				88, 303, 9, 7,
				-controlls.posX + x + 356, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + x + 382, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + x + 407, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				200, 303, 9, 7,
				-controlls.posX + x + 432, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				72, 303, 9, 7,
				-controlls.posX + x + 460, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				56, 303, 9, 7,
				-controlls.posX + x + 486, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				24, 303, 9, 7,
				-controlls.posX + x + 532, this.movePosY2 -69, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				392, 303, 9, 7,
				-controlls.posX + x + 557, this.movePosY2 -69, 9 * scale, 7 * scale);

			////////////////

			context.drawImage(tileSet, 
				278, 331, 12, 14,
				-controlls.posX + x + 35, this.movePosY2 , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				138, 303, 9, 7,
				-controlls.posX + x + 73, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				40, 303, 9, 7,
				-controlls.posX + x + 87, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				120, 303, 9, 7,
				-controlls.posX + x + 113, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + x + 139, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + x + 165, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				56, 303, 9, 7,
				-controlls.posX + x + 191, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				70, 331, 12, 14,
				-controlls.posX + x + 216, this.movePosY2 , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				22, 331, 12, 14,
				-controlls.posX + x + 253, this.movePosY2 , 12 * scale, 14 * scale);

			/////////////////

			context.drawImage(tileSet, 
				257, 311, 9, 7,
				-controlls.posX + x + 303, this.movePosY2 + 21, 9 * scale, 7 * scale);

			/////////////////

			context.drawImage(tileSet, 
				310, 331, 12, 14,
				-controlls.posX + x + 338, this.movePosY2, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				232, 303, 9, 7,
				-controlls.posX + x + 376, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				376, 303, 9, 7,
				-controlls.posX + x + 402, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				138, 303, 9, 7,
				-controlls.posX + x + 431, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				40, 303, 9, 7,
				-controlls.posX + x + 445, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				70, 331, 12, 14,
				-controlls.posX + x + 470, this.movePosY2, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + x + 508, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				72, 303, 9, 7,
				-controlls.posX + x + 534, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				280, 303, 9, 7,
				-controlls.posX + x + 560, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				216, 303, 9, 7,
				-controlls.posX + x + 586, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				138, 303, 9, 7,
				-controlls.posX + x + 612, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + x + 625, this.movePosY2 + 21, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				392, 303, 9, 7,
				-controlls.posX + x + 651, this.movePosY2 + 21, 9 * scale, 7 * scale);
		}
	},
	drawReadyText: function (x, y, scale) {
		if (this.readyTextStart == true) {
			if (this.readyTextX < 0) {
				this.readyTextX += this.speed;
			}

			if (this.readyTextY1 < 0) {
				this.readyTextY1 += this.speed - 10;
			}

			if (this.readyTextY2 > 0) {
				this.readyTextY2 -= this.speed - 10;
			}
			
			context.save();
			context.globalAlpha = 0.87;
			context.fillRect(-controlls.posX + x + 99, this.readyTextY1 + y, 182, -90);
			context.fillRect(-controlls.posX + x + this.readyTextX, y, 380, 90);
			context.fillRect(-controlls.posX + x + 80, this.readyTextY2 + y + 90, 213, 90);
			context.restore();
		

			/////////////// use

			context.drawImage(tileSet, 
					326, 331, 12, 14,
					-controlls.posX + x + 134, this.readyTextY1 + y -67, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					294, 331, 12, 14,
					-controlls.posX + x + 171, this.readyTextY1 + y -67 , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					70, 331, 12, 14,
					-controlls.posX + x + 209, this.readyTextY1 + y -67, 12 * scale, 14 * scale);

			/////////////// the

			context.drawImage(tileSet, 
					310, 331, 12, 14,
					-controlls.posX + x + 35 + this.readyTextX, y + 23, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					118, 331, 12, 14,
					-controlls.posX + x + 73 + this.readyTextX, y + 23 , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					70, 331, 12, 14,
					-controlls.posX + x + 111 + this.readyTextX, y + 23, 12 * scale, 14 * scale);

			/////////////// arrow

			context.drawImage(tileSet, 
					6, 331, 12, 14,
					-controlls.posX + x + 160 + this.readyTextX, y + 23 , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					278, 331, 12, 14,
					-controlls.posX + x + 198 + this.readyTextX, y + 23, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					278, 331, 12, 14,
					-controlls.posX + x + 236 + this.readyTextX, y + 23 , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					230, 331, 12, 14,
					-controlls.posX + x + 274 + this.readyTextX, y + 23, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					358, 331, 12, 14,
					-controlls.posX + x + 309 + this.readyTextX, y + 23 , 12 * scale, 14 * scale);

			/////////////// keys

			context.drawImage(tileSet, 
					166, 331, 12, 14,
					-controlls.posX + x + 115, this.readyTextY2 + y + 113, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					70, 331, 12, 14,
					-controlls.posX + x + 149, this.readyTextY2 + y + 113 , 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					390, 331, 12, 14,
					-controlls.posX + x + 188, this.readyTextY2 + y + 113, 12 * scale, 14 * scale);
			context.drawImage(tileSet, 
					294, 331, 12, 14,
					-controlls.posX + x + 223, this.readyTextY2 + y + 113 , 12 * scale, 14 * scale);
		}
	},
	drawGo: function (x, y, scale) {
		let randomX = Math.round(Math.random() * 12);
		let randomY = Math.round(Math.random() * 12);
		if (this.go == true) {
			context.save();
			context.globalAlpha = 0.8;
			context.fillRect(-controlls.posX + x - 25 + randomX, y - 25 + randomY, 444, 274);
			context.restore();

			context.drawImage(tileSet, 
						406, 0, 47, 56,
						-controlls.posX + x + randomX, y + randomY, 47 * scale, 56 * scale);
			context.drawImage(tileSet, 
						454, 0, 47, 56,
						-controlls.posX + x + 215 + randomX, y + randomY, 47 * scale, 56 * scale);
		}
	},
	drawMail: function (x, scale) {
		if (this.finalInfoPosY > 170 && this.showFinalInfo == true) {			

			this.finalInfoPosY -= this.speed - 10;
		}
			context.save();
			context.globalAlpha = 0.8;
			context.fillRect(-controlls.posX + x + 180, this.finalInfoPosY - 40, 440, 240);
			context.restore();

			///////////////////////////////

			context.drawImage(tileSet, 
				0, 490, 100, 268,
				-controlls.posX + x + 355, this.finalInfoPosY - 33, 86, 230);

			///////////////////////////////

			context.drawImage(tileSet, 
				168, 303, 9, 7,
				-controlls.posX + x + 217, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + x + 244, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + x + 271, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				408, 303, 9, 7,
				-controlls.posX + x + 298, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + x + 322, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				312, 303, 9, 7,
				-controlls.posX + x + 349, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + x + 376, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				177, 311, 9, 9,
				-controlls.posX + x + 407, this.finalInfoPosY + 55 - 3, 9 * scale, 9 * scale);
			context.drawImage(tileSet, 
				8, 303, 9, 7,
				-controlls.posX + x + 441, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				24, 303, 9, 7,
				-controlls.posX + x + 468, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				344, 303, 9, 7,
				-controlls.posX + x + 495, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				249, 349, 5, 15,
				-controlls.posX + x + 519, this.finalInfoPosY + 55 - 8, 3 * scale, 12 * scale);
			context.drawImage(tileSet, 
				24, 303, 9, 7,
				-controlls.posX + x + 531, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
			context.drawImage(tileSet, 
				104, 303, 9, 7,
				-controlls.posX + x + 558, this.finalInfoPosY + 55, 9 * scale, 7 * scale);
	},
	drawPhone: function (x, scale) {

		/*context.save();
		context.globalAlpha = 0.8;
		context.fillRect(-controlls.posX + x + 180, this.finalInfoPosY + 100, 440, 90);
		context.restore();*/

		context.drawImage(tileSet, 
			150, 347, 12, 14,
			-controlls.posX + x + 260, this.finalInfoPosY + 85/*130*/, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			118, 347, 12, 14,
			-controlls.posX + x + 287, this.finalInfoPosY + 85, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			102, 347, 12, 14,
			-controlls.posX + x + 314, this.finalInfoPosY + 85, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			118, 347, 12, 14,
			-controlls.posX + x + 341, this.finalInfoPosY + 85, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			118, 347, 12, 14,
			-controlls.posX + x + 377, this.finalInfoPosY + 85, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			70, 347, 12, 14,
			-controlls.posX + x + 404, this.finalInfoPosY + 85, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			118, 347, 12, 14,
			-controlls.posX + x + 431, this.finalInfoPosY + 85, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			102, 347, 12, 14,
			-controlls.posX + x + 465, this.finalInfoPosY + 85, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			54, 347, 12, 14,
			-controlls.posX + x + 492, this.finalInfoPosY + 85, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			38, 347, 12, 14,
			-controlls.posX + x + 519, this.finalInfoPosY + 85, 12 * scale, 14 * scale);
	},
	drawDeath: function (x, y, scale) {

		context.save();
		context.globalAlpha = this.fadeCounter;
		context.fillRect(-controlls.posX + x - 60, y, 618, 233);
		

		/////////////////////////// you

		context.drawImage(tileSet, 
			390, 331, 12, 14,
			-controlls.posX + x + 35, y + 35, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			230, 331, 12, 14,
			-controlls.posX + x + 71, y + 35, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			326, 331, 12, 14,
			-controlls.posX + x + 106, y + 35, 12 * scale, 14 * scale);

		/////////////////////////// just

		context.drawImage(tileSet, 
			150, 331, 12, 14,
			-controlls.posX + x + 172, y + 35, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			326, 331, 12, 14,
			-controlls.posX + x + 209, y + 35, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			294, 331, 12, 14,
			-controlls.posX + x + 247, y + 35, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			310, 331, 12, 14,
			-controlls.posX + x + 285, y + 35, 12 * scale, 14 * scale);

		//////////////////////////// got

		context.drawImage(tileSet, 
			102, 331, 12, 14,
			-controlls.posX + x + 351, y + 35, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			230, 331, 12, 14,
			-controlls.posX + x + 389, y + 35, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			310, 331, 12, 14,
			-controlls.posX + x + 425, y + 35, 12 * scale, 14 * scale);

		//////////////////////////// killed

		context.drawImage(tileSet, 
			166, 331, 12, 14,
			-controlls.posX + x + 136, y + 95, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			134, 331, 12, 14,
			-controlls.posX + x + 174, y + 95, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			182, 331, 12, 14,
			-controlls.posX + x + 212, y + 95, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			182, 331, 12, 14,
			-controlls.posX + x + 250, y + 95, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			70, 331, 12, 14,
			-controlls.posX + x + 288, y + 95, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			54, 331, 12, 14,
			-controlls.posX + x + 326, y + 95, 12 * scale, 14 * scale);

		/////////////////////////// by

		context.drawImage(tileSet, 
			22, 331, 12, 14,
			-controlls.posX + x - 25, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			390, 331, 12, 14,
			-controlls.posX + x + 13, y + 155, 12 * scale, 14 * scale);

		//////////////////////////// a

		context.drawImage(tileSet, 
			6, 331, 12, 14,
			-controlls.posX + x + 79, y + 155, 12 * scale, 14 * scale);

		//////////////////////////// curriculum

		context.drawImage(tileSet, 
			38, 331, 12, 14,
			-controlls.posX + x + 145, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			326, 331, 12, 14,
			-controlls.posX + x + 183, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			278, 331, 12, 14,
			-controlls.posX + x + 221, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			278, 331, 12, 14,
			-controlls.posX + x + 259, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			134, 331, 12, 14,
			-controlls.posX + x + 297, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			38, 331, 12, 14,
			-controlls.posX + x + 335, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			326, 331, 12, 14,
			-controlls.posX + x + 373, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			182, 331, 12, 14,
			-controlls.posX + x + 411, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			326, 331, 12, 14,
			-controlls.posX + x + 449, y + 155, 12 * scale, 14 * scale);
		context.drawImage(tileSet, 
			198, 331, 12, 14,
			-controlls.posX + x + 487, y + 155, 12 * scale, 14 * scale);

		context.restore();
	},
	fade: function () {
		if (this.fadeCounter >= 5) {
			this.fadeCounter += 0;
		} else {
			this.fadeCounter += 0.02;
		}
	}
};

const introTimer = function (time1, time2, time3, time4, time5, time6, time7) {
	setTimeout(function (time1) {
		info.cvStart = true;
	}, time1);
	setTimeout(function (time2) {
		info.nameStart = true;
	}, time2);
	setTimeout(function (time3) {
		info.ptStart = true;
	}, time3);
	setTimeout(function (time4) {
		info.musicianStart = true;
	}, time4);
	setTimeout(function (time5) {
		info.readyTextStart = true;
	}, time5);
	setTimeout(function (time6) {
		info.readyTextStart = false;
		info.go = true;
	}, time6);
	setTimeout(function (time7) {
		info.cvStart = false;
		info.nameStart = false;
		info.ptStart = false;
		info.musicianStart = false;
		info.go = false;
		info.creditsDone = true;

		if (navigator.platform != "Win32" || navigator.platform != "Linux i686") {

			document.querySelector("#controllsContainer").style.display = "flex";
			document.querySelector("#controllsContainer").style.zIndex = "1";

			for (let x = 0; x < document.querySelectorAll(".controlls").length; x++) {
				document.querySelectorAll(".controlls")[x].addEventListener("touchstart", function () {
					if (document.querySelectorAll(".controlls")[x].className == "controlls arrowL") {
						controlls.left = true;
					}

					if (document.querySelectorAll(".controlls")[x].className == "controlls arrowR") {
						controlls.right = true;
					}

					if (document.querySelectorAll(".controlls")[x].className == "controlls fire") {
						controlls.fire = true;
					}
				});
			}

			for (let x = 0; x < document.querySelectorAll(".controlls").length; x++) {
				document.querySelectorAll(".controlls")[x].addEventListener("touchend", function () {
					if (document.querySelectorAll(".controlls")[x].className == "controlls arrowL") {
						controlls.left = false;
					}

					if (document.querySelectorAll(".controlls")[x].className == "controlls arrowR") {
						controlls.right = false;
					}

					if (document.querySelectorAll(".controlls")[x].className == "controlls fire") {
						controlls.fire = false;
					}
				});
			}
		}
	}, time7);
};

const Text = function () {
	this.delay = 10;
	this.opacity = 0;
	this.scaled = 2;
	this.draw = () => {	
		if (controlls.posX >= 130 && enemies.elementalDead != true && enemies.cyberDemonDead != true && player.dead != true) {
			this.opacity += 0.01;
			if (this.opacity >= 1) {
				this.opacity = 0;
			}

			context.drawImage(tileSet,
				117, 331, 13, 14, 25, 50, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				230, 331, 11, 14, 50, 50, 11 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				182, 331, 12, 14, 73, 50, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				54, 331, 12, 14, 98, 50, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				294, 331, 12, 14, 140, 50, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				246, 331, 12, 14, 165, 50, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				6, 331, 12, 14, 185, 50, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				38, 331, 12, 14, 210, 50, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				70, 331, 12, 14, 235, 50, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				310, 331, 12, 14, 50, 82, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				230, 331, 11, 14, 73, 82, 11 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				294, 331, 12, 14, 113, 82, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				118, 331, 12, 14, 138, 82, 12 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				230, 331, 11, 14, 163, 82, 11 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				230, 331, 11, 14, 186, 82, 11 * this.scaled, 14 * this.scaled);
			context.drawImage(tileSet,
				310, 331, 12, 14, 209, 82, 12 * this.scaled, 14 * this.scaled);
		}

		
	};
};

const level = {
	scaledSize: 2.3,//	Size multiplyer;
	tileSize: 128,
	smoothing: false,
	musicVolume: 0.3,
	effectsVolume: 0.4,
	columns: 23,
	rows: 4,
	map: [
		3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
		3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
		3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
		0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,3,3,3,3
	]
};

const Enemies = function () {
	this.scaledElemental = 3.4;
	this.scaledCyberDemon = 3;
	this.moveCounter = 0; // Add motion to the sprite besides the usual animations.
	this.animCounter = 0;
};

Enemies.prototype = {
	delay: 60,
	hitCounter: 0,
	hitDelay: 40,
	elementalDeathCounter: 0,
	cyberDeathCounter: 0,
	deathDelay: 17,
	cyberKillCounter: 0,
	cyberKillDelay: 23,
	elementalHit: 0,
	cyberDemonHit: 0,
	elementalDead: false,
	cyberDemonDead: false,
	animateElemental: function (x, y) {
		if (controlls.posX > 560) {
			this.animCounter ++;
			if (this.animCounter <= this.delay) {
				this.moveCounter += 0.2;
				y += this.moveCounter;
				context.drawImage(monsters, 
					224, 0, 80, 56, 
					x + 378, y, 80 * this.scaledElemental, 56 * this.scaledElemental);
			} else if (this.animCounter > this.delay && this.animCounter <= this.delay * 2) {
				this.moveCounter += 0.2;
				y += this.moveCounter;
				context.drawImage(monsters, 
					305, 0, 81, 57, 
					x + 370, y, 81 * this.scaledElemental, 57 * this.scaledElemental);
			} else if (this.animCounter > this.delay * 2 && this.animCounter <= this.delay * 3) {
				this.moveCounter -= 0.2;
				y += this.moveCounter;
				context.drawImage(monsters, 
					387, 0, 82, 60, 
					x + 360, y, 82 * this.scaledElemental, 60 * this.scaledElemental);
			} else if (this.animCounter > this.delay * 3 && this.animCounter <= this.delay * 4) {
				this.moveCounter -= 0.2;
				y += this.moveCounter;
				context.drawImage(monsters, 
					305, 0, 81, 57, 
					x + 370, y, 81 * this.scaledElemental, 57 * this.scaledElemental);
			}

			if (this.animCounter == this.delay * 4) {
				this.animCounter = 0;
			}
		} else {	
			this.animCounter ++;
			if (this.animCounter <= this.delay) {
				this.moveCounter += 0.2;
				y += this.moveCounter;
				context.drawImage(monsters, 
					0, 0, 67, 55, 
					x + 384, y, 67 * this.scaledElemental, 55 * this.scaledElemental);
			} else if (this.animCounter > this.delay && this.animCounter <= this.delay * 2) {
				this.moveCounter += 0.2;
				y += this.moveCounter;
				context.drawImage(monsters, 
					68, 0, 76, 55, 
					x + 370, y, 76 * this.scaledElemental, 55 * this.scaledElemental);
			} else if (this.animCounter > this.delay * 2 && this.animCounter <= this.delay * 3) {
				this.moveCounter -= 0.2;
				y += this.moveCounter;
				context.drawImage(monsters, 
					145, 0, 78, 55, 
					x + 367, y, 78 * this.scaledElemental, 55 * this.scaledElemental);
			} else if (this.animCounter > this.delay * 3 && this.animCounter <= this.delay * 4) {
				this.moveCounter -= 0.2;
				y += this.moveCounter;
				context.drawImage(monsters, 
					68, 0, 76, 55, 
					x + 370, y, 76 * this.scaledElemental, 55 * this.scaledElemental);
			}

			if (this.animCounter == this.delay * 4) {
				this.animCounter = 0;
			}
		}
	},
	animateElementalHit(x, y) {
		this.hitCounter += 1;
		if (this.hitCounter <= this.hitDelay) {
			elementalHit.play();
			context.drawImage(monsters,
				470, 0, 69, 55, 
				x + 384, y, 69 * this.scaledElemental, 55 * this.scaledElemental);
		} else {
			this.animateElemental(-controlls.posX + 560, 150);
		}
	},
	animateElementalDeath: function (x, y) {
		this.hitCounter = 0;
		this.elementalDeathCounter ++;
		if (this.elementalDeathCounter <= this.deathDelay) {
			elementalDeath.play();
			context.drawImage(monsters,
				0, 61, 76, 56, 
				x + 384, y, 76 * this.scaledElemental, 56 * this.scaledElemental); 
		} else if (this.elementalDeathCounter > this.deathDelay && this.elementalDeathCounter <= this.deathDelay * 2) {
			context.drawImage(monsters,
				77, 61, 84, 56, 
				x + 370, y, 84 * this.scaledElemental, 56 * this.scaledElemental);
		} else if (this.elementalDeathCounter > this.deathDelay * 2 && this.elementalDeathCounter <= this.deathDelay * 3) {
			context.drawImage(monsters,
				162, 61, 97, 70, 
				x + 367, y - 50, 97 * this.scaledElemental, 70 * this.scaledElemental);
		} else if (this.elementalDeathCounter > this.deathDelay * 3 && this.elementalDeathCounter <= this.deathDelay * 4) {
			context.drawImage(monsters,
				260, 61, 87, 72, 
				x + 370, y - 60, 87 * this.scaledElemental, 72 * this.scaledElemental);
		} else if (this.elementalDeathCounter > this.deathDelay * 4 && this.elementalDeathCounter <= this.deathDelay * 5) {
			context.drawImage(monsters,
				348, 61, 102, 86, 
				x + 370, y - 90, 102 * this.scaledElemental, 86 * this.scaledElemental);
			this.elementalDead = true;
		}

		if (this.elementalDeathCounter == this.deathDelay * 5 + 1) {
			this.elementalDeathCounter += 0;
		}
	},
	animateCyberDemon: function (x, y) {
		if (controlls.posX <= 1530) {
			context.drawImage(monsters, 
				0, 152, 91, 111, 
				x, y, 91 * this.scaledCyberDemon, 111 * this.scaledCyberDemon);
		} else {
			context.drawImage(monsters, 
				92, 152, 83, 110, 
				x + 9, y + 3, 83 * this.scaledCyberDemon, 110 * this.scaledCyberDemon);
		}
	},
	animateCyberDemonHit: function (x, y) {
		this.hitCounter += 1;
		if (controlls.posX >= 1720 ) {
			this.animateCyberDemonKill(-controlls.posX + 2050, 93);
		} else if (this.hitCounter <= this.hitDelay) {
			cyberHit.play();
			context.drawImage(monsters, 
				0, 264, 122, 113, 
				x, y, 122 * this.scaledCyberDemon, 113 * this.scaledCyberDemon);
		} else {
			this.animateCyberDemon(-controlls.posX + 2068, 90);
		}
	},
	animateCyberDemonDeath: function (x, y) {
		this.cyberDeathCounter ++;
		if (this.cyberDeathCounter <= this.deathDelay) {	
			cyberDeath.play();
			context.drawImage(monsters, 
				0, 264, 122, 113, 
				x + 29, y, 122 * this.scaledCyberDemon, 113 * this.scaledCyberDemon);
		} else if (this.cyberDeathCounter > this.deathDelay && this.cyberDeathCounter <= this.deathDelay * 2) {
			context.drawImage(monsters, 
				123, 264, 111, 113, 
				x + 35, y - 6, 111 * this.scaledCyberDemon, 113 * this.scaledCyberDemon);
		}  else if (this.cyberDeathCounter > this.deathDelay * 2 && this.cyberDeathCounter <= this.deathDelay * 3) {
			context.drawImage(monsters, 
				236, 264, 100, 116, 
				x + 32, y - 15, 100 * this.scaledCyberDemon, 116 * this.scaledCyberDemon);
		} else if (this.cyberDeathCounter > this.deathDelay * 3 && this.cyberDeathCounter <= this.deathDelay * 4) {
			context.drawImage(monsters, 
				337, 264, 113, 117, 
				x + 14, y - 18, 113 * this.scaledCyberDemon, 117 * this.scaledCyberDemon);
		} else if (this.cyberDeathCounter > this.deathDelay * 4 && this.cyberDeathCounter <= this.deathDelay * 5) {
			context.drawImage(monsters, 
				451, 264, 125, 124, 
				x + 2, y - 39, 125 * this.scaledCyberDemon, 124 * this.scaledCyberDemon);
		} else if (this.cyberDeathCounter > this.deathDelay * 5 && this.cyberDeathCounter <= this.deathDelay * 6) {
			context.drawImage(monsters, 
				0, 389, 133, 131, 
				x - 10, y - 60, 133 * this.scaledCyberDemon, 131 * this.scaledCyberDemon);
			this.cyberDemonDead = true;
		} else if (this.cyberDeathCounter > this.deathDelay * 6 && this.cyberDeathCounter <= this.deathDelay * 7) {
			context.drawImage(monsters, 
				132, 389, 141, 134, 
				x - 34, y - 69, 141 * this.scaledCyberDemon, 134 * this.scaledCyberDemon);
		} else if (this.cyberDeathCounter > this.deathDelay * 7 && this.cyberDeathCounter <= this.deathDelay * 8) {
			context.drawImage(monsters, 
				276, 389, 141, 134, 
				x - 25, y - 69, 141 * this.scaledCyberDemon, 134 * this.scaledCyberDemon);
		} else if (this.cyberDeathCounter > this.deathDelay * 8) {
			context.drawImage(monsters, 
				416, 389, 120, 30, 
				x + 2, y + 243, 120 * this.scaledCyberDemon, 30 * this.scaledCyberDemon);
		}
	},
	animateCyberDemonKill: function (x, y) {
		this.cyberKillCounter ++;
		if (this.cyberKillCounter <= this.cyberKillDelay / 1.3) {
			context.drawImage(monsters, 
				176, 152, 94, 110, 
				x - 6, y, 94 * this.scaledCyberDemon, 110 * this.scaledCyberDemon);
			player.dead = true;
		} else if (this.cyberKillCounter > this.cyberKillDelay / 1.3 && this.cyberKillCounter <= this.cyberKillDelay * 6) {
			context.drawImage(monsters, 
				92, 152, 83, 110, 
				x + 27, y, 83 * this.scaledCyberDemon, 110 * this.scaledCyberDemon);
		} else if (this.cyberKillCounter > this.cyberKillDelay * 6 && this.cyberKillCounter <= this.cyberKillDelay * 12) {
			context.drawImage(monsters, 
				0, 152, 91, 111, 
				x + 18, y - 3, 91 * this.scaledCyberDemon, 111 * this.scaledCyberDemon);
		} else if (this.cyberKillCounter > this.cyberKillDelay * 12 && this.cyberKillCounter <= this.cyberKillDelay * 13) {
			context.drawImage(monsters, 
				272, 152, 59, 108,
				x - 6, y - 6, 59 * this.scaledCyberDemon, 108 * this.scaledCyberDemon);
		} else if (this.cyberKillCounter > this.cyberKillDelay * 13 && this.cyberKillCounter <= this.cyberKillDelay * 15) {
			e1m1.volume = 0.35;
			context.drawImage(monsters, 
				332, 152, 79, 107,
				x - 114, y, 79 * this.scaledCyberDemon, 107 * this.scaledCyberDemon);
		} else if (this.cyberKillCounter > this.cyberKillDelay * 15 && this.cyberKillCounter <= this.cyberKillDelay * 16) {
			e1m1.volume = 0.3;
			context.drawImage(monsters, 
				412, 152, 59, 108,
				x - 159, y - 3, 59 * this.scaledCyberDemon, 108 * this.scaledCyberDemon);
		} else if (this.cyberKillCounter > this.cyberKillDelay * 16 && this.cyberKillCounter <= this.cyberKillDelay * 18) {
			e1m1.volume = 0.25;
			context.drawImage(monsters, 
				472, 152, 80, 107,
				x - 264, y, 80 * this.scaledCyberDemon, 107 * this.scaledCyberDemon);
		} else if (this.cyberKillCounter > this.cyberKillDelay * 18 && this.cyberKillCounter <= this.cyberKillDelay * 19) {
			e1m1.volume = 0.2;
			context.drawImage(monsters, 
				272, 152, 59, 108,
				x - 312, y - 6, 59 * this.scaledCyberDemon, 108 * this.scaledCyberDemon);
		} else if (this.cyberKillCounter > this.cyberKillDelay * 19 && this.cyberKillCounter <= this.cyberKillDelay * 21) {
			e1m1.volume = 0.15;
			context.drawImage(monsters, 
				332, 152, 79, 107,
				x - 393, y, 79 * this.scaledCyberDemon, 107 * this.scaledCyberDemon);
		} else if (this.cyberKillCounter > this.cyberKillDelay * 21 && this.cyberKillCounter <= this.cyberKillDelay * 22) {
			e1m1.volume = 0.1;
			context.drawImage(monsters, 
				412, 152, 59, 108,
				x - 438, y - 3, 59 * this.scaledCyberDemon, 108 * this.scaledCyberDemon);
		} else if (this.cyberKillCounter > this.cyberKillDelay * 22 && this.cyberKillCounter <= this.cyberKillDelay * 24) {
			e1m1.volume = 0.05;
			context.drawImage(monsters, 
				472, 152, 80, 107,
				x - 543, y, 80 * this.scaledCyberDemon, 107 * this.scaledCyberDemon);
		}

		switch (this.cyberKillCounter) {
			case 1:
			sShoot.play();
			break;
			case this.cyberKillDelay * 6:
			cyberRoar.play();
			break;
			case this.cyberKillDelay * 13:
			cyberWalk.play();
			break;
			case this.cyberKillDelay * 16:
			cyberWalk.play();
			break;
			case this.cyberKillDelay * 19:
			cyberWalk.volume = 0.3;
			cyberWalk.play();
			break;
			case this.cyberKillDelay * 22:
			cyberWalk.volume = 0.2;
			cyberWalk.play();
			break;
			case this.cyberKillDelay * 25:
			cyberWalk.volume = 0.1;
			cyberWalk.play();
			break;
		}

		if (this.cyberKillCounter >= this.cyberKillDelay * 25) {
			info.killedMessage = true;
		}
	}
};

const Decor = function () {
	this.candleCounter = 0;
	this.barrelCounter = 0;
	this.corpseCounter = 0;
	this.corpseDelay = 100;
	this.candelDelay = 50;
	this.barrelDelay = 25;
	this.dropsY1 = 0;
	this.dropsY2 = 0;
	this.drosSpeed = 5;
	this.animateCandle = (x, y, scale) => {
		this.candleCounter ++;
		if (this.candleCounter <= this.candelDelay) {
			context.drawImage(tileSet, 
			274, 63, 16, 12, x, y, 16 * scale, 12 * scale);
		} else if (this.candleCounter > this.candelDelay && this.candleCounter <= this.candelDelay * 2) {
			context.drawImage(tileSet, 
			291, 63, 16, 12, x, y, 16 * scale, 12 * scale);
		} else if (this.candleCounter > this.candelDelay * 2 && this.candleCounter <= this.candelDelay * 3) {
			context.drawImage(tileSet, 
			308, 63, 16, 12, x, y, 16 * scale, 12 * scale);
		}

		if (this.candleCounter == this.candelDelay * 3) {
			this.candleCounter = 0;
		}
	};
	this.animateBarrel = (x, y, scale) => {
		this.barrelCounter ++;
		if (this.barrelCounter <= this.barrelDelay) {
			context.drawImage(tileSet, 
			125, 364, 37, 53, x, y, 37 * scale, 53 * scale);
		} else if (this.barrelCounter > this.barrelDelay && this.barrelCounter <= this.barrelDelay * 2) {
			context.drawImage(tileSet, 
			163, 364, 34, 53, x, y, 34 * scale, 53 * scale);
		} else if (this.barrelCounter > this.barrelDelay * 2 && this.barrelCounter <= this.barrelDelay * 3) {
			context.drawImage(tileSet, 
			198, 364, 36, 53, x, y, 36 * scale, 53 * scale);
		}
		
		if (this.barrelCounter == this.barrelDelay * 3) {
			this.barrelCounter = 0;
		}
	};
	this.drawTree = (x, y, scale) => {
		context.drawImage(tileSet, 
			0, 364, 124, 124, x, y, 124 * scale, 124 * scale);
	};
	this.drawStump = (x, y, scale) => {
		context.drawImage(tileSet, 
			125, 418, 51, 70, x, y, 51 * scale, 70 * scale);
	};
	this.animateHangingCorpse = (x, y, scale) => {
		this.corpseCounter ++;
		if (this.corpseCounter <= this.corpseDelay) {
			context.drawImage(tileSet, 
			220, 418, 30, 68, 
			-controlls.posX + x-1, y, 30 * scale, 68 * scale);
		} else if (this.corpseCounter > this.corpseDelay && this.corpseCounter <= this.corpseDelay * 2) {
			context.drawImage(tileSet, 
			252, 418, 30, 68, 
			-controlls.posX + x - 2, y, 30 * scale, 68 * scale);
		}  else if (this.corpseCounter > this.corpseDelay * 2 && this.corpseCounter <= this.corpseDelay * 3) {
			context.drawImage(tileSet, 
			284, 418, 30, 68, 
			-controlls.posX + x-1, y, 30 * scale, 68 * scale);
		} else if (this.corpseCounter > this.corpseDelay * 3 && this.corpseCounter <= this.corpseDelay * 4) {
			context.drawImage(tileSet, 
			252, 418, 30, 68, 
			-controlls.posX + x - 2, y, 30 * scale, 68 * scale);
		}

		if (this.corpseCounter == this.corpseDelay * 4) {
			this.corpseCounter = 0;
		}
	};
	this.animateDrops = (x, y1, y2, scale) => {
		let random1 = 500 + Math.round(Math.random() * 2000);
		let random2 = 500 + Math.round(Math.random() * 2000);
		let randomX = Math.round(Math.random() * 1);
		y1 += this.dropsY1;
		if (y1 <= random1) {
			this.dropsY1 += this.drosSpeed;
		} else {
			this.dropsY1 = 0;
		}

		context.drawImage(tileSet, 
			114, 118, 1, 1, 
			-controlls.posX + x + randomX, y1 - 10, 1 * scale, 1 * scale);

		y2 += this.dropsY2;
		if (y2 <= random2) {
			if (this.dropsY2 <= this.drosSpeed) {
				this.dropsY2 += 0.2;		
			} else {
				this.dropsY2 += 5;
			}
		} else {
			this.dropsY2 = 0;
		}
		context.drawImage(tileSet, 
			116, 115, 1, 2, 
			-controlls.posX + x + 12 + randomX, y2, 1 * scale, 2 * scale);
	};
	this.animateStakedCorpse = (x, y, scale) => {
		if (this.corpseCounter <= this.corpseDelay * 2) {
			context.drawImage(tileSet, 
			315, 418, 35, 65, 
			-controlls.posX + x, y, 35 * scale, 65 * scale);
		} else if (this.corpseCounter > this.corpseDelay && this.corpseCounter <= this.corpseDelay * 2) {
			context.drawImage(tileSet, 
			352, 418, 38, 65, 
			-controlls.posX + x - 1, y, 35 * scale, 65 * scale);
		}  else if (this.corpseCounter > this.corpseDelay * 2 && this.corpseCounter <= this.corpseDelay * 3) {
			context.drawImage(tileSet, 
			315, 418, 35, 65, 
			-controlls.posX + x, y, 35 * scale, 65 * scale);
		} else if (this.corpseCounter > this.corpseDelay * 3 && this.corpseCounter <= this.corpseDelay * 4) {
			context.drawImage(tileSet, 
			352, 418, 38, 65, 
			-controlls.posX + x - 1, y, 35 * scale, 65 * scale);
		}
	};
	this.drawStakedCorpse = (x, y, scale) => {
		context.drawImage(tileSet, 
			391, 418, 40, 66, 
			-controlls.posX + x, y, 40 * scale, 66 * scale);
	};
	this.drawStakedSkull = (x, y, scale) => {
		context.drawImage(tileSet, 
			177, 418, 41, 56, 
			-controlls.posX + x, y, 41 * scale, 56 * scale);
	};
};

const controlls = {
	left: false,
	right: false,
	fire: false,
	posX: 0,
	speed: 1.6,
	keyCheck: function () {
		if (player.dead != true) {
			if (controlls.fire != true) {	
				if (controlls.left == true) {
					if (this.posX >= 1) {
						player.x -= 0.1;
						this.posX -= this.speed;
					} else {
						player.x -= 0;
						this.posX -= 0;
					}
				} 
			}
			if (controlls.fire != true && controlls.posX <= 2165) {	
				if (controlls.right == true) {
					if (this.posX <= 2140) {
						player.x += 0.1;
						this.posX += this.speed;
					} else {
						player.x -= 0;
						this.posX -= 0;
					}
				}
			}
			if (controlls.fire == true) {
				player.x += 0; 
			}
		}
	}
};

const screen = {
	width: 800,
	height: 480,
};

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = screen.width;
canvas.height = screen.height;

let player = new Player(60, 395);
let viewport = new Viewport(0, 0, screen.width, screen.height);
let text = new Text();
let info = new Info();
let enemies = new Enemies();
let decor = new Decor();

document.querySelector("#start").onclick = () => {
	let cover = document.querySelector("#canvasCover");
	let button = document.querySelector("#start");
	e1m1.play();
	e1m1.volume = level.musicVolume;
	cover.style.opacity = "0";
	button.style.opacity = "0";
	button.style.display = "none";
	introTimer(2200, 6300, 8150, 10000, 15500, 17890, 18900)
};

function drawLoop() {
	

	controlls.keyCheck();
	context.clearRect(0,0,screen.width,screen.height);
	window.requestAnimationFrame(drawLoop);

	if (level.smoothing == true) {
		context.imageSmoothingEnabled = true;
	} else {
		context.imageSmoothingEnabled = false;
	}

	context.fillStyle = "#000000";
	context.fillRect(0, 0, screen.width, screen.height)

	viewport.scrollTo(controlls.posX);
	
	var xMin = Math.floor(viewport.x / level.tileSize);
	var yMin = Math.floor(viewport.y / level.tileSize);
	var xMax = Math.ceil((viewport.x + viewport.w) / level.tileSize);
	var yMax = Math.ceil((viewport.y + viewport.h) / level.tileSize);

	background.animate(-Math.round(player.x / 2) + 440);
	background.iconScroll(-Math.round(player.x / 2) + 30)
	
	for (let x = xMin; x < xMax; x++) {
		for (let y = yMin; y < yMax; y++) {

			let value = level.map[y * level.columns + x];
			let tileX = x * (level.tileSize) - (viewport.x);
			let tileY = y * (level.tileSize) - (viewport.y);

			context.drawImage(tileSet,
				value * level.tileSize + 0.3, 172, level.tileSize - 0.6, level.tileSize,
				 tileX, tileY, level.tileSize, level.tileSize);
		}
	}	
	
	info.drawMail(2300, 3);
	info.drawPhone(2300, 2);
	decor.animateHangingCorpse(2670, -10, 2);
	decor.drawStakedCorpse(2750, 354, 2);
	decor.drawStakedSkull(2500, 382, 2);
	decor.animateStakedCorpse(2600, 354, 2);
	decor.animateDrops(2680, 120, 120, 4);

	context.save();
	context.globalAlpha = text.opacity;
	text.draw();
	context.restore();
	
	info.draw();

	if (controlls.posX >= 140 && controlls.posX <= 1250) {
		if (enemies.elementalHit == 1) {
			enemies.animateElementalHit(-controlls.posX + 560, 150);
		} else if (enemies.elementalHit >= 2) {
			enemies.animateElementalDeath(-controlls.posX + 560, 150); 	
		} else if (enemies.elementalDead != true) {
			enemies.animateElemental(-controlls.posX + 570, 150);
		}
	}

	if (info.killedMessage == true) {
		info.fade();
		info.drawDeath(1871, 90, 3);
	}

	decor.drawStump(-controlls.posX + 675, 262, 1.9);
	decor.animateBarrel(-controlls.posX + 1750, 280, 2.2);
	decor.animateCandle(-controlls.posX + 2371, 367, 2.3);

	player.animate();
	
	decor.drawTree((-controlls.posX * 1.5) + 2150, 270, 1.8);

	if (controlls.posX >= 1260 && controlls.posX <= 2200) {
		if (enemies.cyberDemonHit == 1) {
			enemies.animateCyberDemonHit(-controlls.posX + 2079, 90);
		} else if (enemies.cyberDemonHit >= 2) {
			enemies.animateCyberDemonDeath(-controlls.posX + 2050, 90);
		} else if (controlls.posX >= 1720 && enemies.cyberDemonDead != true) {
			enemies.animateCyberDemonKill(-controlls.posX + 2050, 93);
		} else if (enemies.cyberDemonDead != true) {
			enemies.animateCyberDemon(-controlls.posX + 2068, 90);
		}
	}

	decor.animateCandle(-controlls.posX + 2371, 400, 2.3);

	info.drawCv(50, 3);
	info.drawName(250, 3);
	info.drawPt(280, 3);
	info.drawMusician(45, 3);
	info.drawReadyText(210, 190, 3);
	info.drawGo(178, 131, 4);

	if (controlls.posX >= 2000) {
		info.showFinalInfo = true;
	}
}

const background = {
	counter: 0,
	delay: 20,
	iconScroll: function (x) {
		context.drawImage(icon, 0, 0, 768, 384, x, 0, 900, 387);
	},
	animate: function (x) {
		this.counter ++;
		if (this.counter <= this.delay) {
			context.drawImage(icon, 0, 385, 64, 32, x, 96, 90, 36);
		} else if (this.counter > this.delay && this.counter <= this.delay * 2) {
			context.drawImage(icon, 65, 385, 64, 32, x, 96, 90, 36);
		} else if (this.counter > this.delay * 2 && this.counter <= this.delay * 3) {
			context.drawImage(icon, 130, 385, 64, 32, x, 96, 90, 36);
		} else if (this.counter > this.delay * 3 && this.counter <= this.delay * 4) {
			context.drawImage(icon, 195, 385, 64, 32, x, 96, 90, 36);
		}
		if (this.counter == this.delay * 4) {
			this.counter = 0;
		}
	}
}

//////////////////////////////////////////////////////////////////

let tileSet = new Image();
let icon = new Image();
let monsters = new Image();
tileSet.src = "img/doomset2.png";
icon.src = "img/icon.png";
monsters.src = "img/enemies.png"
tileSet.addEventListener("load", (event) => {
	drawLoop(); 
});

////////////////////////////////////////////////////////////////

let shoot = new Audio();
let sShoot = new Audio();
let elementalHit = new Audio();
let elementalDeath = new Audio();
let cyberHit = new Audio();
let cyberDeath = new Audio();
let cyberRoar = new Audio();
let cyberWalk = new Audio();
let e1m1 = new Audio();
let playerDeath = new Audio();
shoot.src = "audio/shot.wav";
sShoot.src = "audio/sshot.wav";
elementalHit.src = "audio/elementalHit.wav";
elementalDeath.src = "audio/elementalDeath.wav";
cyberHit.src = "audio/cyberHit.wav";
cyberDeath.src = "audio/cyberDeath.wav";
cyberRoar.src = "audio/cyberRoar.wav";
cyberWalk.src = "audio/cyberWalk.wav";
e1m1.src = "audio/e1m1.mp3";
playerDeath.src = "audio/playerDeath.wav";

shoot.volume = level.effectsVolume;
sShoot.volume = level.effectsVolume;
elementalClose = level.effectsVolume;
elementalHit.volume = level.effectsVolume;
elementalDeath.volume = level.effectsVolume;
cyberClose = level.effectsVolume;
cyberHit.volume = level.effectsVolume;
cyberDeath.volume = level.effectsVolume;
cyberRoar.volume = level.effectsVolume;
cyberWalk.volume = level.effectsVolume;
playerDeath.volume = level.effectsVolume;

////////////////////////////////////////////////////////////////

window.addEventListener("keydown", (key) => {
	if (info.creditsDone == true) {
		if (controlls.fire != true) {
			if (key.keyCode == 37) {
				controlls.left = true;
			}
		}

		if (key.keyCode == 39) {
			controlls.right = true;
		}

		if (key.keyCode == 32) {
			controlls.fire = true;	
		}
	}

	if (key.keyCode == 120) {
		if (level.smoothing != true) {
			level.smoothing = true;
		} else {
			level.smoothing = false;
		}
	}
});

window.addEventListener("keyup", (key) => {
	if (key.keyCode == 37) {
		controlls.left = false;
		player.counter = 0;
	}
	
	if (key.keyCode == 39) {
		controlls.right = false;
		player.counter = 0;
	}

	if (key.keyCode == 32) {
		controlls.fire = false;
		player.fireCounter = 0;
	}
});

window.onload = drawLoop();