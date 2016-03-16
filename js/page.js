//TODO: Using webpack instead of minifying everything
(function() {
$(document).ready(function() {

	initMap();

	$(window).resize(function(event) {
		initMap();
	});
});

var initMap = function() {


		var mq = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/\"/g, "").replace(/'/g, ""); //"

		var mapElement = $('#introduction');
		if(mq === "desktop" && mapElement.data('map') === undefined) 	{
			var map = L.map('introduction', {scrollWheelZoom : false})
						.setView([45.784112807850256,4.8635101318359375],16)
						.on('resize', function(event) {
							var mq = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, ""); // "
							if(mq === 'mobile') {
								map.remove();
								$('#introduction').removeData('map');
							}
						});


			var cartoDBLight = {
				url : "https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
				attribution : 'Map tiles by <a href="https://cartodb.com/">CartoDB</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://opendatacommons.org/licenses/odbl/">ODbL</a>.'
			};
			/** Alternatives tiles URLs
				var osm = {
					url : 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
					attribution : 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
				};
				var mapbox = {
					url : 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
					attribution : 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
					id : 'morebug.b248a7d8',
					accessToken: 'pk.eyJ1IjoibW9yZWJ1ZyIsImEiOiIzZjQ3ZTljMDE1YTcxM2JmZDE4YjQyYzcxYzczNGIwNSJ9.W9T9hE5bpTF7HDcCB_zXoQ'
				}
			*/
			L.tileLayer(cartoDBLight.url, {
				attribution: cartoDBLight.attribution,
				maxZoom: 17,
				zIndex: 0
			}).addTo(map);


			var marker = L.marker([45.7840922326144,4.868751168251038]).addTo(map);
			marker.bindPopup("<strong>CPE Lyon</strong><br>Domaine Scientifique de la Doua<br>Bâtiment Hubert Curien<br>43, boulevard du 11 Novembre 1918<br>BP 82077 - 69616 Villeurbanne Cedex").openPopup();

			mapElement.data('map', 'true');
		}
};
})();
