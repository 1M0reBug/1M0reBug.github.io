$(document).ready(function() {
	$(document).resize(initMap());
	// Gérer le changement de taille pour a map !

	//initMap();

	//TODO : internationalization + Angular module
	var skills = [
		{
			skill : "Java",
			size	 : "large",
			caption  : {
				en : {
						language : "en",
						text : "I started Java during my technical degree, and continued. It's kind of THE language to know today. Not a lot of experience with it, but kind of enthusiast to use it."
					}
			}
		},
		{
			skill : "C++",
			size : "large",
			caption : {
				en : {
						language : "en",
						text : "I Learned C++ during my technical degree and continued during my engineer courses."
					}
			}
		},
		{
			skill : "Javascript",
			size : "large",
			caption : {
				en : {
						language : "en",
						text : "Kind of my favourite language. It's fun to use, there's a ton of libs to discover. You can use from server/client side. Well it's a language which evolution was really interesting"
					}
			}
		},
		{
			skill : "Express",
			size : "small",
			caption : {
				en : {
						language : "en",
						text : "I've never used Node on itself always with Frameworks, particularly Express, on small projects like school works or experiments with MongoDB or Redis."
					}
			}
		},
		{
			skill : "Perl",
			size : "large",
			caption :  {
				en : {
						language : "en",
						text : "I worked with that language during a year. As a script language or object oriented."
					}
			}
		},
		{
			skill : "Shell",
			size : "large",
			caption : {
				en : {
					language : "en",
					text : "I use that language every time, as a tool for my computer. It's what give Linux all its charm."
				}
			}
		},
		{
			skill : "Git",
			size : "medium",
			caption : {
				en : {
					language : "en",
					text : "I discovered Git during an internship, it was just like a revelation for me. For me you can't be a developer without knowing this fantastic tool."
				}
			}
		},
		{
			skill : "Agility",
			size : "small",
			caption : {
				en : {
					language : "en",
					text : "I'm one of these young and inexperienced student who thinks agility is still a way of life, maybe because I've never experienced a Real Agile project, I hope to try it one day."
				}
			}
		}
	];


	var container = $('#skill-container');
	var row = create('div.row');
	container.append(row);
	skills.forEach(function(skill, index) {
		var size = "medium";
		var title = skill.skill;

		var lang = $('html').attr('lang') || 'en';
		var content = skill.caption[lang].text;

		/*if (index % 3 == 0) {
			row = create('div.row');
			container.append(row);
		}*/

		var cardContainer = create('div.col.s12.m6.l3');

		// GLOBAL  CARD CONTAINER
		var card = create('div.card.' + size);

		// CARD CONTAINER + IMAGE
		var cardImageContainer = create('div.card-image');
		var pattern = GeoPattern.generate(title);
		var image = create('img.activator', {src : pattern.toDataUri()});
		cardImageContainer.append(image);
		// /CARD CONTAINER + IMAGE

		// CARD CONTENT
		var cardContent = create('div.card-content');
		var spanTitle = create('span.card-title.activator.grey-text.text-darken-4', {textContent : title});
		cardContent.append(spanTitle.append(create('i.mdi-navigation-more-vert.right')));
		cardContent.append(
			create('p').append(
				create('a.activator', {href : '#!', textContent : "Read more"})
			)
		);
		// /CARD CONTENT

		// CARD REVEAL
		var cardReveal = create('div.card-reveal');
		var spanReveal = create('span.card-title.grey-text.text-darken-4', {textContent : title});
		var pReveal = create('p', {textContent : content});
		cardReveal.append(spanReveal.append(create('i.mdi-navigation-close.right')));
		cardReveal.append(pReveal);
		// /CARD REVEAL

		card.append(cardImageContainer);
		card.append(cardContent);
		card.append(cardReveal);

		cardContainer.append(card);
		row.append(cardContainer);
	});
});

var create = function (string, options) {

	var array = string.split('.');

	var toReturn = document.createElement(array[0]);
	var className = '';

	for(var i = 1; i<array.length; i++) {
		className += array[i] + " ";
	}

	className.trim();
	toReturn.className = className;

	if(options) {
		for(var o in options) {
			toReturn[o] = options[o];
		}
	}

	return $(toReturn);
}

var initMap = function() {

		var mq = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");

		if(mq === "desktop") 	{
			var map = L.map('introduction', {scrollWheelZoom : false}).setView([45.784112807850256,4.8635101318359375],16);
			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			    maxZoom: 17,

			    id: 'morebug.b248a7d8',
			    accessToken: 'pk.eyJ1IjoibW9yZWJ1ZyIsImEiOiIzZjQ3ZTljMDE1YTcxM2JmZDE4YjQyYzcxYzczNGIwNSJ9.W9T9hE5bpTF7HDcCB_zXoQ'
			}).addTo(map);

			map.scrollWheelZoom.disable();

			var marker = L.marker([45.7840922326144,4.868751168251038]).addTo(map);
			marker.bindPopup("<strong>CPE Lyon</strong><br>Domaine Scientifique de la Doua<br>Bâtiment Hubert Curien<br>43, boulevard du 11 Novembre 1918<br>BP 82077 - 69616 Villeurbanne Cedex").openPopup();
		}
}
