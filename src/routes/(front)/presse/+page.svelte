<script>
	import FlipCard from '$lib/components/FlipCard.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	onMount((_) => {
		const isMedia = window.matchMedia('(max-width:1150px)').matches;

		if (!isMedia) {
			gsap.registerPlugin(ScrollTrigger);
			const filtre = document.querySelector('.filtre');

			let stickTl = gsap.timeline({
				scrollTrigger: {
					trigger: '.filtre',
					start: 'top 120px',
					end: `bottom ${filtre.firstElementChild.clientHeight + 120}px`,
					// markers: true,
					pin: true
				}
			});
		}
	});

	const handleSubmit = async (data) => {
		status = 'Envoie en cours...';
		statusClass = 'pending';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);

		console.log(typeof object.nom);
		if (
			object.nom.length == 0 ||
			object.prenom.length == 0 ||
			object.email.length == 0 ||
			object.telephone.length == 0 ||
			object.societe.length == 0
		) {
			status = 'Entrée invalide !';
			statusClass = 'error';
			return;
		}

		const json = JSON.stringify(object);
		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = 'Message envoyé !';
			statusClass = 'success';

			nom.value = '';
			prenom.value = '';
			telephone.value = '';
			societe.value = '';
			email.value = '';
		}
	};
</script>

<div class="blanc" id="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h1>Nos clients</h1>
			<p>
				Sogo Com accompagne plusieurs entreprises locales, régionales et nationales dans leurs
				relations presse. Immobilier, gastronomie, art de vivre, technologie, voyage, sport, petite
				enfance, nettoyage et bien d’autres secteurs nous font confiance.
				<br /><br />
				Retrouvez sur cette page nos derniers communiqués et dossiers de presse.
			</p>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="btn"
				on:click={() => {
					goto('/agence');
				}}
			>
				En savoir plus
			</div>
		</div>
		<div class="bloc img-droite">
			<div class="conteneur">
				<span class="bubble top-left" />
				<img src="/images/home-equipe.png" alt="L'equipe" />
				<span class="bubble bottom-right" />
			</div>
		</div>
	</div>
</div>

<div id="presslist">
	<div class="filtre">
		<form method="post" on:submit|preventDefault={handleSubmit}>
			<p contenteditable="false">Recherchez !</p>

			<label for="nom">Nom</label>
			<input type="text" name="nom" id="nom" placeholder="Nom" />

			<label for="type">Type</label>

			<select id="type" name="type" required>
				<option value="" selected disabled hidden>Choisissez un type...</option>
				<option value="communiquePresse">Communiqué de presse</option>
			</select>

			<label for="domaine">Domaine</label>

			<select id="domaine" name="domaine" required>
				<option value="" selected disabled hidden>Choisissez un domaine...</option>
				<option value="immobilier">Immobilier</option>
			</select>

			<button type="submit" class="btn" for="rechercher" value="rechercher">Rechercher</button>
		</form>
	</div>
	<div class="clients">
		<div class="flip-parent">
			<div class="flip-row">
				<FlipCard />
			</div>
		</div>
		<div class="flip-parent">
			<div class="flip-row">
				<FlipCard />
			</div>
		</div>
		<div class="flip-parent">
			<div class="flip-row">
				<FlipCard />
			</div>
		</div>
		<div class="flip-parent">
			<div class="flip-row">
				<FlipCard />
			</div>
		</div>
		<div class="flip-parent">
			<div class="flip-row">
				<FlipCard />
			</div>
		</div>
		<div class="flip-parent">
			<div class="flip-row">
				<FlipCard />
			</div>
		</div>
		<div class="flip-parent">
			<div class="flip-row">
				<FlipCard />
			</div>
		</div>
		<div class="flip-parent">
			<div class="flip-row">
				<FlipCard />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.blanc {
		background-color: #fff;
		padding: 15rem 11%;
		position: relative;
		overflow: hidden;

		.wrapper {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			position: relative;

			@media only screen and (max-width: $phone) {
				flex-direction: column;
				left: 0%;
			}

			.bloc {
				width: 50%;

				h1 {
					color: $color-gris-dark;
					padding: 32px 0;
					text-align: left;
				}

				@media only screen and (max-width: $phone) {
					width: 100%;
				}

				p {
					font-family: $font-secondary-light;
					margin-bottom: 64px;
				}

				.btn {
					background-color: $color-rose;
				}
			}
			.img-droite {
				display: flex;
				justify-content: end;
				align-items: start;

				@media only screen and (max-width: $phone) {
					padding: 5rem 0 0 0;
					justify-content: center;
					align-items: center;
				}
				.conteneur {
					position: relative;
					width: 100%;
					transform: translateX(20%);
					height: 100%;
					@media only screen and (max-width: $phone) {
						transform: none;
					}

					span {
						position: absolute;
						width: 200px;
						height: 200px;
						border-radius: 200px;
						background-color: $color-rose;

						@media only screen and (max-width: $phone) {
							display: none;
						}

						&.top-left {
							transform: translate(-50%, -50%);
							z-index: 5;
						}

						&.bottom-right {
							top: 100%;
							left: 100%;
							transform: translate(-50%, -50%);
							z-index: 15;
						}
					}
					img {
						position: relative;
						z-index: 10;
						width: 100%;
						height: 100%;
						border-radius: 32px;
						object-fit: cover;
					}
				}
			}
		}
	}

	#presslist {
		display: flex;


		@media only screen and (max-width: $tablet) {
					flex-direction: column;
					padding: 32px 12px;
				}
		.filtre {
			form {
				font-family: $font-secondary-light;
				background: $color-gris-clair;
				border-radius: 32px;
				padding: 32px;
				display: flex;
				flex-direction: column;

				p {
					color: $color-gris-dark;
					margin-bottom: 32px;
					font-family: $font-secondary-medium;
				}
				label {
					color: $color-gris-dark;
					margin-bottom: 8px;
					font-family: $font-secondary-medium;
					font-size: 1rem;
				}
				input,
				select {
					background: $color-blanc;
					border-radius: 16px;
					border: none;
					padding: 8px;
					margin-bottom: 16px;
					font-family: $font-secondary-light;
				}

				.btn {
					background-color: $color-blanc;
					font-family: $font-secondary-semibold;
					margin-top: 32px;
					color: $color-rose;
					width: fit-content;
				}
				.status {
					padding-top: 32px;
				}
			}
		}

		.clients {
			// padding: 32px 64px;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			@media only screen and (max-width: $phone) {
				padding: 0;
			}

			.flip-parent {
				@media only screen and (max-width: $tablet) {
					flex-basis: 50%;
				}

				@media only screen and (max-width: $phone) {
					flex-basis: 100%;
					padding: 32px 0;
				}

				flex-basis: 25%;
				padding: 2vw 3vw;
				display: flex;
				justify-content: center;
				align-items: center;
				.flip-row {
					@media only screen and (max-width: $tablet) {
						width: 30vw;
						height: 30vw;
					}

					@media only screen and (max-width: $phone) {
						width: 100%;
						height: 100vw;
					}

					width: 20vw;
					height: 20vw;
				}
			}
		}
	}
</style>
