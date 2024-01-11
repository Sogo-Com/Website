<script>
	import { onMount } from 'svelte';
	import { enhance, applyAction } from '$app/forms';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	export let data;
	let { domaines, clients } = data;

	let nameSearch = '';
	let domaineSearch = '';

	const submitSearchClient = async ({ form, data, action, cancel }) => {
		const { nom, domaine } = Object.fromEntries(data);

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					clients = result.data.data.clients;
					nameSearch = result.data.data.nom;
					domaineSearch = result.data.data.domaine;
					
					break;
				case 'failure':
					
					break;
				case 'error':
					
					break;
				default:
					break;
			}

		

			
		
		};
	};
</script>

<div class="blanc" id="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h1 animate>Nos clients</h1>
			<p animate>
				Sogo Com accompagne plusieurs entreprises locales, régionales et nationales dans leurs
				relations presse. Immobilier, gastronomie, art de vivre, technologie, voyage, sport, petite
				enfance, nettoyage et bien d’autres secteurs nous font confiance.
				<br /><br />
				Retrouvez sur cette page nos derniers communiqués et dossiers de presse.
			</p>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<a animate class="btn" href="/agence"> En savoir plus </a>
		</div>
		<div class="bloc img-droite">
			<div class="conteneur">
				<span data-lag=".2" class="bubble top-left" />
				<img src="/images/home-equipe.png" alt="L'equipe" />
				<span data-lag=".2" class="bubble bottom-right" />
			</div>
		</div>
	</div>
</div>

<div id="presslist">
	<div class="filtre">
		<form method="post" action="?/search" use:enhance={submitSearchClient}>
			<p contenteditable="false">Recherchez !</p>

			<label for="nom">Nom</label>
			<input type="text" bind:value={nameSearch} name="nom" id="nom" placeholder="Nom" />

			<label for="domaine">Domaine</label>

			<select id="domaine" bind:value={domaineSearch} name="domaine">
				<option value="" selected >Tous les domaines</option>
				{#each domaines as domaine}
					<option value={domaine.id}>{domaine.nom}</option>
				{/each}
			</select>

			<button type="submit" class="btn" for="rechercher" value="rechercher">Rechercher</button>
		</form>
	</div>
	<div class="clients">
		{#each clients as client}
			<div class="flip-parent">
				<a href="/presse/{client.id}">
					<div class="flip-row">
						<img src={client.photoLogo} alt={client.nom} />
						<div class="h3">
							<h3>{client.nom}</h3>
						</div>
					</div>
				</a>
			</div>
		{/each}
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
		background: #fff;
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
			width: 100%;
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

				a {
					text-decoration: none;
					width: 100%;
				}

				.flip-row {
					border-radius: 32px;
					box-shadow: 0px 4px 18.6px rgba(0, 0, 0, 0.25);
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
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					img {
						width: 100%;
						height: 70%;
						padding: 48px;
						object-fit: contain;
					}
					.h3 {
						width: 100%;
						text-align: center;
						height:30%;
						display: flex;
						justify-content: center;
						align-items: center;
						color: $color-gris-dark;

						h3{
							font-size: 1.5rem;
							margin: 0;
						}
					}
				}
			}
		}
	}
</style>
