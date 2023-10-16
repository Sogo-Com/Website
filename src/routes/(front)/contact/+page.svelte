<script>
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(async (_) => {

		if (browser) {
			const module = await import('leaflet');
			const L = module.default;

			let map = L.map('map', {
				center: [45.67594775933373, 6.389657607867016],
				zoom: 15,
				scrollWheelZoom: false
			});

			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			L.marker([45.67594775933373, 6.389657607867016])
				.addTo(map)
				.bindPopup(
					'<strong>Cadocuir Maroquinerie</strong><br>67 rue de la république 73200 Albertville'
				)
				.openPopup();
		}

	});
</script>

<h1>Contactez nous</h1>

<div class="infos">
	<div class="info">
		<a href="https://www.google.fr/maps/place/356+Rue+de+Chavanne,+74330+Poisy">
			<img src="/images/pin.svg" alt="pin" />
			<p>356 Route de Chavane 74330 Poisy</p>
		</a>
	</div>

	<div class="info">
		<a href="tel:+33450456915">
			<img src="/images/tel.svg" alt="tel" />
			<p>04 50 45 69 15 du lundi au vendredi</p>
		</a>
	</div>

	<div class="info">
		<a href="mailto:contact@sogocom.fr">
			<img src="/images/mail.svg" alt="mail" />
			<p>contact@sogocom.fr</p>
		</a>
	</div>
</div>


<div id="map" />