<script>
	
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Contact from '$lib/components/Contact.svelte';

	onMount(async (_) => {
		if (browser) {
			const module = await import('leaflet');
			const L = module.default;

			let map = L.map('map', {
				center: [45.93306, 6.073554],
				zoom: 15,
				scrollWheelZoom: false
			});

			const icon = L.icon({
				iconUrl: '/images/marker-icon.png',
				shadowUrl: '/images/marker-shadow.png',
				iconSize: [25, 41], // size of the icon
				shadowSize: [41, 41], // size of the shadow
				iconAnchor: [13, 41], // point of the icon which will correspond to marker's location
				shadowAnchor: [21, 41], // the same for the shadow
				popupAnchor: [-3, -41] // point from which the popup should open relative to the iconAnchor
			});

			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			L.marker([45.93306, 6.073554], { icon })
				.addTo(map)
				.bindPopup('<strong>Sogo Com</strong><br>356 Rue de Chavanne 74330 Poisy')
				.openPopup();
		}
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
</svelte:head>

<div class="title">
	<h2>Contactez nous</h2>
</div>

<div class="infos">
	<div class="info">
		<a href="https://www.google.fr/maps/place/356+Rue+de+Chavanne,+74330+Poisy">
			<img src="/images/pin.svg" alt="pin" />
			<p>356 Route de Chavane<br /> 74330 Poisy</p>
		</a>
	</div>

	<div class="info">
		<a href="tel:+33450456915">
			<img src="/images/tel.svg" alt="tel" />
			<p>04 50 45 69 15<br /> du lundi au vendredi</p>
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

<div class="blanc" id="contact">
	<div class="wrapper">
		<div class="contact-form">
			<h2 class="grey">Laissez-nous un petit mot !</h2>
			<Contact />
		</div>
		<div class="contact-images">
			<img class="contact-image" src="/images/contact-1.png" alt="contact-1" />
			<img class="contact-image" src="/images/contact-2.png" alt="contact-2" />
			<img class="contact-image" src="/images/contact-3.png" alt="contact-3" />
			<span class="contact-image" />
		</div>
	</div>
</div>

<style lang="scss">
	.title {
		padding-top: 20vh;
		display: flex;
		justify-content: center;
		background-color: #fff;
		h2 {
			text-align: center;
			position: relative;
			display: inline-block;
		}

		h2:before {
			background-color: rgba($color-rose, 0.1);
			display: block;
			position: absolute;
			left: -5%;
			z-index: 1;
			bottom: 50%;
			border-radius: 50px;
			content: '';
			width: 70px;
			height: 70px;
		}

		h2:after {
			background-color: rgba($color-rose, 0.1);
			display: block;
			position: absolute;
			border-radius: 50px;
			top: 25%;
			left: 90%;
			content: '';
			z-index: 1;
			width: 70px;
			height: 70px;
		}
	}

	.infos {
		display: flex;
		padding: 5rem 11%;
		justify-content: space-around;
		background-color: #fff;
		@media only screen and (max-width: $phone) {
			flex-direction: column;
		}

		.info a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			text-decoration: none;
			transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
			@media only screen and (max-width: $phone) {
				padding: 2rem 0;
			}

			p {
				margin: 16px;
			}
		}

		.info a:hover {
			filter: grayscale(1);
		}
	}

	#map {
		height: 40vh;
		z-index: 0;
	}

	#contact {
		background-color: #fff;
		padding: 10rem 11%;
		position: relative;
		overflow: hidden;

		@media only screen and (max-width: $tablet) {
			display: flex;
			flex-direction: column;
			left: 0;
			align-items: center;
			justify-content: center;
			padding: 2rem 1rem;
		}

		.wrapper {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			position: relative;

			@media only screen and (max-width: $tablet) {
				flex-direction: column;
				left: 0%;
				align-items: center;
			}

			.contact-form {
				width: 45%;
				@media only screen and (max-width: $tablet) {
					width: 90%;
				}
				@media only screen and (max-width: $phone) {
					width: 100%;
				}
			}
			.contact-images {
				@media only screen and (max-width: $tablet) {
					display: none;
				}

				flex-grow: 2;
				width: 55%;
				position: relative;
				transform: translateX(20%);

				.contact-image {
					margin-left: 64px;
					position: absolute;
					object-fit: cover;
					background-size: cover;
					border-radius: 32px;

					&:nth-child(1) {
						top: 0;
						left: 50%;
						transform: translate(-75%, -15%);
						z-index: 2;
						height: 40%;
						width: 50%;
					}

					&:nth-child(2) {
						top: 50%;
						height: 50%;
						width: 40%;
						transform: translate(-30%, -50%);
						z-index: 3;
					}

					&:nth-child(3) {
						transform: translate(-100%, 20%);
						bottom: 0;
						left: 50%;
						height: 50%;
						width: 30%;
						z-index: 4;
					}

					&:nth-child(4) {
						border-radius: 5000px;
						height: 700px;
						width: 700px;
						top: 50%;
						right: -35%;
						background: #ddb0af;
						transform: translateY(-50%);
						z-index: 1;
					}
				}
			}
		}
	}
</style>
