(function () {
	$(document).ready(function() {

		function MQ() {
			return window.getComputedStyle(
					document.querySelector('body'), '::before')
							.getPropertyValue('content')
							.replace(/\"/g, "")
							.replace(/'/g, ""); //"
		}

		function initMap() {
				var mq = MQ();

				var mapElement = $('#introduction');
				if(mapElement.data('map') === undefined) 	{

					var coordinates = [45.784112807850256, 4.8635101318359375];
					var mobileCoordinates = [45.781675, 4.869206];

					var currentCoordinates = (mq === 'desktop') ? coordinates : mobileCoordinates;
					var lastMq = mq;

					var map = L.map('introduction', { scrollWheelZoom : false, dragging: false })
								.setView(currentCoordinates,16)
								.on('resize', function(event) {
									var mq = MQ();
									if(mq === 'mobile' && lastMq === 'desktop') {
										map.setView(mobileCoordinates, 16);
									} else if (mq === 'desktop' && lastMq === 'mobile') {
										map.setView(coordinates, 16);
									}
									lastMq = mq;
								});


					var cartoDBLight = {
						url : "https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
						attribution : 'Map tiles by <a href="https://cartodb.com/">CartoDB</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://opendatacommons.org/licenses/odbl/">ODbL</a>.'
					};

					L.tileLayer(cartoDBLight.url, {
						attribution: cartoDBLight.attribution,
						maxZoom: 17,
						zIndex: 0
					}).addTo(map);

					var marker = L.marker([45.7840922326144,4.868751168251038]).addTo(map);
					marker.bindPopup("<strong>CPE Lyon</strong><br>Domaine Scientifique de la Doua<br>Bâtiment Hubert Curien<br>43, boulevard du 11 Novembre 1918<br>BP 82077 - 69616 Villeurbanne Cedex").openPopup();

					mapElement.data('map', 'true');
				}
		}


		var scrollFileOptions = [
			{ selector: '#skills', offset: 50, callback: function(el) {
				$('#internship-modal').openModal();
			}}
		];

		Materialize.scrollFire(scrollFileOptions);

		initMap();

		$(window).resize(function(event) {
			initMap();
		});
	});
})();
