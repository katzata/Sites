!function(t){var e={};function i(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=6)}([function(t,e){var i=function(){var t=Date.now()-new Date(1985,4,3).getTime(),e=new Date(t);return Math.abs(e.getUTCFullYear()-1970).toString()};t.exports={en:{index:{header:{title:"KAMEN KASHCHIEV"},buttons:{languageButton:"LANGUAGES",navL:"ADDITIONAL",navMiddle:"MAIN",navR:"CERTIFICATES"},subButtons:{}},mainSection:{topArticle:{title:"General Info",name:{title:"Name",content:"Kamen Kamenov Kashchiev"},age:{title:"Age",content:"".concat(i())},location:{title:"Location",content:"Sofia, Bulgaria"},education:{title:"Education",content:"Highschool"}},bottomArticle:{title:"About me",content:"\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci porro debitis earum molestias obcaecati \n\t\t\t\t\teos quos labore at, ducimus. Debitis quis perspiciatis doloremque qui reprehenderit consectetur quae, accusantium laborum illum!\n\t\t\t\t"}}},bg:{index:{header:{title:"КАМЕН КАШЧИЕВ"},buttons:{languageButton:"",navL:"ДОПЪЛНИТЕЛНО",navMiddle:"НАЧАЛО",navR:"СЕРТИФИКАТИ"},subButtons:{}},mainSection:{topArticle:{title:"Генерална Информация",name:{title:"Име",content:"Камен Каменов Кашчиев"},age:{title:"Години",content:"".concat(i())},location:{title:"Местоположение",content:"София, България"},education:{title:"Oбразование",content:"Средно образование"}},bottomArticle:{title:"За мен",content:"\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci porro debitis earum molestias obcaecati \n\t\t\t\t\teos quos labore at, ducimus. Debitis quis perspiciatis doloremque qui reprehenderit consectetur quae, accusantium laborum illum!\n\t\t\t\t"}}},it:{index:{header:{title:"KAMEN KASHCHIEV"},buttons:{languageButton:"",navL:"ADDIZIONALE",navMiddle:"INIZIO",navR:"CERTIFICATI"},subButtons:{}},mainSection:{topArticle:{title:"Informazioni Generali",name:{title:"Nome",content:"Kamen Kamenov Kashchiev"},age:{title:"Età",content:"".concat(i())},location:{title:"Località",content:"Sofia, Bulgaria"},education:{title:"Titolo di studio",content:"Diploma di scuola secondaria superiore"}},bottomArticle:{title:"Su di me",content:"\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci porro debitis earum molestias obcaecati \n\t\t\t\t\teos quos labore at, ducimus. Debitis quis perspiciatis doloremque qui reprehenderit consectetur quae, accusantium laborum illum!\n\t\t\t\t"}}}}},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(1),i(2);function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var o=document.querySelector("canvas"),n=o.getContext("2d"),r=new Image;r.src="../assets/img/roza2.png";var s=document.createElement("audio");s.src="../assets/audio/static.mp3";var h,l,c,u,f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.running=!0,this.mainCounter=0,this.offsetX=0,this.offsetY=0,this.logoX=o.width/2,this.logoY=o.height/2,this.logoCenterX=0,this.logoCenterY=0,this.logoAlpha=0,this.logoAlphaIncrement=.005,this.logoSize=0,this.logoSizeDivider=5,this.fontSizeDivider=19,this.textAlphaIncrement=.01,this.volume=0,this.volumeIncrement=.005,this.distortionStartFrame=[230,290,720],this.shadowBlur=10,this.endingOffset=0,this.endingAlphaAddition=.5,this.lettersStartFrame=360,this.lettersDelay=14,this.letterAlpha=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]}var e,i,h;return e=t,(i=[{key:"handleCanvasAndSizes",value:function(){o.width=window.innerWidth,o.height=window.innerHeight,this.logoSize=o.height/this.logoSizeDivider,this.logoX=o.width/2,this.logoY=o.height/2,this.logoCenterX=-this.logoSize/2,this.logoCenterY=-this.logoSize*r.height/r.width/2}},{key:"handleOffset",value:function(){var t=0,e=0;this.mainCounter%2==0?(t=-Math.random(),e=-Math.random()):(t=Math.random(),e=Math.random()),this.offsetX=t,this.offsetY=e}},{key:"handleLogo",value:function(){if(n.save(),this.logoAlpha<=1&&this.mainCounter<=200?this.logoAlpha+=this.logoAlphaIncrement:this.mainCounter<this.distortionStartFrame[2]&&(this.logoAlpha=Math.random()+.6),this.mainCounter<this.distortionStartFrame[2]&&(n.transform(1,0,[0,.002][Math.floor(3*Math.random())],1,0,0),o.width<o.height?n.translate(0,3*this.offsetY):n.translate(0,1.1*this.offsetY)),this.mainCounter>=this.distortionStartFrame[0]&&this.mainCounter<this.distortionStartFrame[0]+8)switch(this.offsetX=this.offsetX,this.offsetY=10*this.offsetY,s.volume=.5,this.logoAlpha=Math.random(),n.save(),n.scale(1,1),this.mainCounter){case this.distortionStartFrame[0]:n.transform(1,0,-.1,1,40+this.offsetX,-this.logoSize/2+this.offsetY);break;case this.distortionStartFrame[0]+2:n.transform(1,0,-.3,1,119+this.offsetX,-this.logoSize/2+this.offsetY);break;case this.distortionStartFrame[0]+4:n.scale(1.1,1.2),n.transform(1,0,-.5,1,240+this.offsetX,-this.logoSize/2+this.offsetY);break;case this.distortionStartFrame[0]+6:n.transform(1,0,-.5,1,240+this.offsetX,-this.logoSize/2+this.offsetY)}if(this.mainCounter>=this.distortionStartFrame[1]&&this.mainCounter<this.distortionStartFrame[1]+7)switch(this.logoAlpha=Math.random(),s.volume=.5,this.mainCounter){case this.distortionStartFrame[1]:n.rotate(22*Math.PI/180),n.transform(1,0,.5,1.3,5*this.offsetX-200,5*this.offsetY-240);break;case this.distortionStartFrame[1]+1:n.rotate(22*Math.PI/180),n.transform(1,0,.5,1.3,5*this.offsetX-55,5*this.offsetY-240);break;case this.distortionStartFrame[1]+2:n.rotate(22*Math.PI/180),n.transform(1,0,.5,1.3,5*this.offsetX-77,5*this.offsetY-288);break;case this.distortionStartFrame[1]+3:n.rotate(0*Math.PI/180),n.transform(1,0,0,1,0+5*this.offsetX,0+5*this.offsetY);break;case this.distortionStartFrame[1]+4:n.rotate(25*Math.PI/180),n.transform(1.2,-1,.9,2,5*this.offsetX-277,5*this.offsetY-288);break;case this.distortionStartFrame[1]+5:n.rotate(22*Math.PI/180),n.transform(1,0,.5,1.3,5*this.offsetX-77,5*this.offsetY-288);break;case this.distortionStartFrame[1]+6:n.rotate(0*Math.PI/180),n.transform(1,0,0,1,0+5*this.offsetX,0+5*this.offsetY),this.logoAlpha=1}n.globalAlpha=this.logoAlpha,n.imageSmoothingEnabled=!0,n.translate(this.logoCenterX,this.logoCenterY),n.drawImage(r,this.logoX,this.logoY,this.logoSize,this.logoSize*r.height/r.width),n.restore()}},{key:"handleText",value:function(){if(this.mainCounter>=this.lettersStartFrame){n.save(),o.width<o.height&&o.width<=980?this.fontSizeDivider=20:this.fontSizeDivider=19,this.mainCounter>=this.distortionStartFrame[2]+20&&(n.globalAlpha=this.logoAlpha),n.font="".concat(o.height/this.fontSizeDivider,"px SpectralSC-Regular"),n.fillStyle="black",n.textAligh="center",n.textBaseline="center",n.shadowBlur=this.shadowBlur,n.shadowColor="rgba(255, 255, 255, 1)",n.strokeStyle="#ffffff";var t=n.measureText("M").width,e=n.measureText("K").width,i=[t-e,t-n.measureText("A").width,t-n.measureText("E").width,t-n.measureText("N").width,t-n.measureText("S").width,t-n.measureText("H").width,t-n.measureText("C").width,t-n.measureText("I").width,t-n.measureText("V").width],a=t-e;this.mainCounter>this.lettersStartFrame&&(this.letterAlpha[0]<=1&&(n.globalAlpha=this.letterAlpha[0],this.letterAlpha[0]+=this.textAlphaIncrement),n.fillText("K",o.width/2-(7*t-8.1*i[0]),o.height/2+i[7]),n.fillText("K",o.width/2-(7*t-8.1*i[0]),o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+this.lettersDelay&&(this.letterAlpha[1]<=1&&(n.globalAlpha=this.letterAlpha[1],this.letterAlpha[1]+=this.textAlphaIncrement),n.fillText("A",o.width/2-(6*t-7.08*i[1]),o.height/2+i[7]),n.fillText("A",o.width/2-(6*t-7.08*i[1]),o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+2*this.lettersDelay&&(this.letterAlpha[2]<=1&&(n.globalAlpha=this.letterAlpha[2],this.letterAlpha[2]+=this.textAlphaIncrement),n.fillText("M",o.width/2-(5*e-i[6]/1.1),o.height/2+i[7]),n.fillText("M",o.width/2-(5*e-i[6]/1.1),o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+3*this.lettersDelay&&(this.letterAlpha[3]<=1&&(n.globalAlpha=this.letterAlpha[3],this.letterAlpha[3]+=this.textAlphaIncrement),n.fillText("E",o.width/2-(4*t-4.3*i[2])-i[5],o.height/2+i[7]),n.fillText("E",o.width/2-(4*t-4.3*i[2])-i[5],o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+4*this.lettersDelay&&(this.letterAlpha[4]<=1&&(n.globalAlpha=this.letterAlpha[4],this.letterAlpha[4]+=this.textAlphaIncrement),n.fillText("N",o.width/2-(3*t-5.8*i[0])-i[6],o.height/2+i[7]),n.fillText("N",o.width/2-(3*t-5.8*i[0])-i[6],o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+5*this.lettersDelay&&(this.letterAlpha[5]<=1&&(n.globalAlpha=this.letterAlpha[5],this.letterAlpha[5]+=this.textAlphaIncrement),n.fillText("K",o.width/2-(t-a),o.height/2+i[7]),n.fillText("K",o.width/2-(t-a),o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+6*this.lettersDelay&&(this.letterAlpha[6]<=1&&(n.globalAlpha=this.letterAlpha[6],this.letterAlpha[6]+=this.textAlphaIncrement),n.fillText("A",o.width/2-(t-a)/2+i[4],o.height/2+i[7]),n.fillText("A",o.width/2-(t-a)/2+i[4],o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+7*this.lettersDelay&&(this.letterAlpha[7]<=1&&(n.globalAlpha=this.letterAlpha[7],this.letterAlpha[7]+=this.textAlphaIncrement),n.fillText("S",o.width/2+(t-i[6]),o.height/2+i[7]),n.fillText("S",o.width/2+(t-i[6]),o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+8*this.lettersDelay&&(this.letterAlpha[8]<=1&&(n.globalAlpha=this.letterAlpha[8],this.letterAlpha[8]+=this.textAlphaIncrement),n.fillText("H",o.width/2+2*(t-i[2])-1,o.height/2+i[7]),n.fillText("H",o.width/2+2*(t-i[2])-1,o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+9*this.lettersDelay&&(this.letterAlpha[9]<=1&&(n.globalAlpha=this.letterAlpha[9],this.letterAlpha[9]+=this.textAlphaIncrement),n.fillText("C",o.width/2+3.05*(t-i[2]),o.height/2+i[7]),n.fillText("C",o.width/2+3.05*(t-i[2]),o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+10*this.lettersDelay&&(this.letterAlpha[10]<=1&&(n.globalAlpha=this.letterAlpha[10],this.letterAlpha[10]+=this.textAlphaIncrement),n.fillText("H",o.width/2+4*(t-a)-(i[6]+i[1]),o.height/2+i[7]),n.fillText("H",o.width/2+4*(t-a)-(i[6]+i[1]),o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+11*this.lettersDelay&&(this.letterAlpha[11]<=1&&(n.globalAlpha=this.letterAlpha[11],this.letterAlpha[11]+=this.textAlphaIncrement),n.fillText("I",o.width/2+5*(t-a)-(i[6]+i[5]),o.height/2+i[7]),n.fillText("I",o.width/2+5*(t-a)-(i[6]+i[5]),o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+12*this.lettersDelay&&(this.letterAlpha[12]<=1&&(n.globalAlpha=this.letterAlpha[12],this.letterAlpha[12]+=this.textAlphaIncrement),n.fillText("E",o.width/2+6*(t-i[4])+i[6],o.height/2+i[7]),n.fillText("E",o.width/2+6*(t-i[4])+i[6],o.height/2+i[7])),this.mainCounter>=this.lettersStartFrame+13*this.lettersDelay&&(this.letterAlpha[13]<=1&&(n.globalAlpha=this.letterAlpha[13],this.letterAlpha[13]+=this.textAlphaIncrement),n.fillText("V",o.width/2+7*(t-i[6])-i[7],o.height/2+i[7]),n.fillText("V",o.width/2+7*(t-i[6])-i[7],o.height/2+i[7])),n.restore()}}},{key:"handleAudio",value:function(){s.volume=this.volume,this.volume<.22&&(this.volume+=this.volumeIncrement)}},{key:"handleEnding",value:function(){if(this.mainCounter>=this.distortionStartFrame[2]){switch(this.mainCounter>=this.distortionStartFrame[2]&&this.mainCounter<=this.distortionStartFrame[2]+40&&(this.endingAlphaAddition>-.3&&(this.endingAlphaAddition-=.05),this.endingOffset<=8&&(this.endingOffset+=.5,this.volume+=3*this.volumeIncrement)),this.logoAlpha=Math.random()+this.endingAlphaAddition,n.translate(0,this.endingOffset+2*this.offsetY),n.transform(1,0,this.volume/10+[0,.006][Math.floor(2*Math.random())],1,0,0),this.mainCounter){case this.distortionStartFrame[2]+89+1:n.transform(1,0,.3,1.2,-this.logoSize/1.2,1.2*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+2:n.transform(1,0,.4,1.4,-this.logoSize/1.2,1.4*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+3:n.transform(1,0,.3,1.6,-160,-190);break;case this.distortionStartFrame[2]+89+4:n.transform(1,0,.45,1.8,-this.logoSize,1.8*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+5:n.transform(1,0,.32,1.5,-160,-190);break;case this.distortionStartFrame[2]+89+6:n.transform(1,0,.3,1.2,-this.logoSize/1.2,1.2*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+7:n.transform(1,0,0,1,0,0);break;case this.distortionStartFrame[2]+89+8:n.transform(1,0,0,1.3,0,1.3*-this.logoSize-40+this.offsetY);break;case this.distortionStartFrame[2]+89+9:n.transform(1.4,0,0,1.5,-120,1.5*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+10:n.transform(1,0,0,1.2,0,1.3*-this.logoSize-40+this.offsetY);break;case this.distortionStartFrame[2]+89+11:n.transform(1.3,0,-.2,1.5,-60,1.5*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+12:n.transform(1.3,0,-.4,1.8,-0,1.7*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+13:n.transform(1.2,0,-.4,2.2,70,2*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+14:n.rotate(-12*Math.PI/480),n.transform(1.2,0,-.3,2.4,70,2.1*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+15:n.rotate(-16*Math.PI/480),n.transform(1.4,0,-.3,2.6,-70,2.3*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+16:n.transform(1.4,0,-.4,2.9,0,5.8*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+17:n.transform(1.4,0,-.5,3.6,70,6.9*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+18:n.transform(1.4,0,-.6,3,100,6*-this.logoSize+this.offsetY);break;case this.distortionStartFrame[2]+89+19:n.rotate(-50*Math.PI/480),n.transform(1.4,0,-.7,2.8,100,3*-this.logoSize+this.offsetY)}this.mainCounter>this.distortionStartFrame[2]+89+20&&(this.running=!1)}}},{key:"render",value:function(){this.handleCanvasAndSizes(),this.mainCounter++,this.handleOffset(),this.handleEnding(),this.handleAudio(),this.mainCounter<this.distortionStartFrame[2]+89+20&&(this.handleLogo(),this.handleText())}}])&&a(e.prototype,i),h&&a(e,h),t}(),m=(i(3),i(0)),d=i.n(m);i(4);function g(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.prepared=!1,this.content,this.content={mainSection:document.querySelector(".mainSection")}}var e,i,a;return e=t,(i=[{key:"setLanguage",value:function(t){"en"===t&&(this.content=d.a.en),"bg"===t&&(this.content=d.a.bg),"it"===t&&(this.content=d.a.it)}},{key:"prepare",value:function(){h=document.querySelector(".topArticleCanvas"),l=h.getContext("2d"),c=document.querySelector(".bottomArticleCanvas"),u=h.getContext("2d"),document.querySelector(".mainSection").style.opacity="1"}},{key:"toggleOpacity",value:function(){this.content.mainSection.style.backgroundColor="rgba(0, 0, 0, .5)",this.content.mainSection.style.opacity="1",this.content.mainSection.style.overflowY="scroll"}},{key:"handleCanvasSizes",value:function(){h.width=320,h.height=300}},{key:"handleTopCanvas",value:function(){l.clearRect(0,0,h.width,h.height),l.fillStyle="white",l.font="".concat(h.width/9.5,"px SpectralSC-Regular");var t=l.measureText("".concat(this.content.mainSection.topArticle.title)).actualBoundingBoxAscent;l.fillText("".concat(this.content.mainSection.topArticle.title),0,t),l.shadowColor="white",l.shadowBlur=8,l.font="".concat(h.width/10.6,"px SpectralSC-Regular"),l.fillText("".concat(this.content.mainSection.topArticle.name.title),0,t+45),l.fillText("".concat(this.content.mainSection.topArticle.age.title),0,t+105),l.fillText("".concat(this.content.mainSection.topArticle.location.title),0,t+165),l.fillText("".concat(this.content.mainSection.topArticle.education.title),0,t+225),l.font="".concat(h.width/12.6,"px SpectralSC-Regular"),l.fillText("".concat(this.content.mainSection.topArticle.name.content),20,t+65),l.fillText("".concat(this.content.mainSection.topArticle.age.content),20,t+126),l.fillText("".concat(this.content.mainSection.topArticle.location.content),20,t+185),l.fillText("".concat(this.content.mainSection.topArticle.education.content),20,t+245),l.font="".concat(h.width/12.6,"px rune"),l.fillText("".concat(this.content.mainSection.topArticle.name.content),20,t+85)}},{key:"handleBottomCanvas",value:function(){u.clearRect(0,0,c.width,c.height),u.fillStyle="white",u.font="".concat(c.width/9.5,"px SpectralSC-Regular");var t=u.measureText("".concat(this.content.mainSection.bottomArticle.title)).actualBoundingBoxAscent;u.fillText("".concat(this.content.mainSection.bottomArticle.title),0,t),u.shadowColor="white",u.shadowBlur=8,u.font="".concat(c.width/10.6,"px SpectralSC-Regular"),u.fillText("".concat(this.content.mainSection.topArticle.name.title),0,t)}},{key:"render",value:function(t){this.prepared?this.content.mainSection.style.transitionDuration="0":(this.prepare(),this.setLanguage(t)),this.setLanguage("en"),this.handleCanvasSizes(),this.handleTopCanvas(),this.handleBottomCanvas(),console.log(d.a)}}])&&g(e.prototype,i),a&&g(e,a),t}();i(5);function S(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var A,v,w=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i,a;return e=t,(i=[{key:"prepare",value:function(){}},{key:"render",value:function(){console.log("x")}}])&&S(e.prototype,i),a&&S(e,a),t}();function b(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var y=new Image;y.src="../assets/img/crack.png",document.createElement("audio").src="../assets/audio/static.mp3";var x=new p,C=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.mainCounter=0,this.pagePrepared=!1,this.renderSection=!1,this.language={en:!0,bg:!1,it:!1},this.content={pageContainer:document.querySelector(".pageContainer"),header:document.querySelector("header"),logo:document.querySelector(".logo"),title1:document.querySelector(".headerTitle"),title2:document.querySelector(".headerTitle2"),main:document.querySelector("main"),nav:document.querySelector("nav"),hrTop:document.querySelector(".hrTop"),mainSection:document.querySelector(".mainSection"),hrBottom:document.querySelector(".hrBottom"),footer:document.querySelector("footer"),footerText:document.querySelector(".footerText")},this.crack={width:0,height:0,cover:window.innerWidth},this.stages={first:22,second:100,third:154,fourth:200},this.opacity={increment:.015,header:0,main:0,footer:0},this.viewing={mainSection:!0,cv1Section:!1,cv2Section:!1,certificatesSection:!1}}var e,i,a;return e=t,(i=[{key:"prepare",value:function(){A=document.querySelector("canvas"),v=A.getContext("2d"),this.content.footerText.appendChild(document.createTextNode("Copywright © ".concat((new Date).getFullYear())))}},{key:"handlePageWidth",value:function(){document.querySelector(".mainSection").style.width="".concat(window.innerWidth+17,"px")}},{key:"handleCanvas",value:function(){A.width=window.innerWidth,A.height=window.innerHeight,this.crack.width=A.height*y.height/y.width,this.crack.height=A.width*y.height/y.width}},{key:"handleCrack",value:function(){this.crack.cover>0&&(this.crack.cover-=A.width/2),v.save(),v.globalAlpha=.8,v.translate(-A.width/2,-this.crack.height/2),v.drawImage(y,A.width/2,A.height/2,A.width,this.crack.height),v.restore(),v.beginPath(),v.rect(0,0,this.crack.cover,A.height),v.fillRect(0,0,this.crack.cover,A.height),v.stroke()}},{key:"handleEntryStage",value:function(t){this.opacity.header<1&&this.mainCounter>=this.stages.first&&(this.content.pageContainer.style.opacity="1"),2===t&&(this.content.pageContainer.style.height="100vh",this.content.mainSection.style.height="80vh"),3===t&&(this.content.footer.style.boxShadow="0 0 18px 15px black",this.content.footer.style.backgroundColor="rgba(0, 0, 0, .8)",this.content.footerText.style.transform="translateY(0vh)"),4===t&&(this.content.pageContainer.style.transitionDuration="0s",this.pageDone=!0)}},{key:"render",value:function(){var t;this.pagePrepared?this.mainCounter++:(this.prepare(),this.pagePrepared=!0),this.handleCanvas(),this.handleCrack(),this.pageDone?(t=!0===this.language.en?"en":!0===this.language.bg?"bg":"it",!0===this.viewing.mainSection&&x.render(t),!0===this.viewing.cv1Section&&w.render(t),!0===this.viewing.cv2Section&&CvSection2.render(t),!0===this.viewing.certificatesSection&&CertificatesSection.render(t)):(this.opacity.header<1&&this.mainCounter>=this.stages.first&&this.handleEntryStage(1),"100%"!==this.content.pageContainer.style.height&&this.mainCounter>=this.stages.second&&this.handleEntryStage(2),this.mainCounter===this.stages.third&&this.handleEntryStage(3),this.mainCounter===this.stages.fourth&&this.handleEntryStage(4))}}])&&b(e.prototype,i),a&&b(e,a),t}();window.ontouchstart=function(t){};var T=C,k=(new f,new T);!function t(){k.render(),window.requestAnimationFrame(t)}()}]);