<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import Contact from '$lib/components/Contact.svelte';
	import SliderExpertise from '$lib/components/SliderExpertise.svelte';
	import FlipCard from '$lib/components/FlipCard.svelte';

	export let data;
	let { actualite, projet } = data;
</script>

<div id="top">
	<img alt="background-sogo" src="/images/bg-home.png" />
	<div class="abso bg-gris" />

	<h1 animate class="abso">Sogo Com, votre agence<br /> de communication</h1>
</div>
<div class="blanc" id="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h2 animate>
				<span class="grey">Une équipe au cœur </span><br />
				<span class="pink">pulsant</span>
			</h2>
			<p animate>
				Idées en fusion, inspiration pleine impulsion, ça bouillonne dans la marmite des Gommettes.
				De l’écorce jusqu’à la pulpe, on décortique jusqu’à extraire l’essentiel, la note juste et
				le ton qui détonne. Cible en plein cœur de votre identité !
				<br /><br />
				Depuis 14 ans, Sogo Com a fait d’Annecy et des Alpes son territoire d’infusion. La communication
				grand angle en perfusion, la créativité sans limites pour détonation.
			</p>
		
			<a href="/agence" animate class="btn">
				En savoir +
			</a>
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
<SliderExpertise />

<div class="blanc" id="proj-actu">
	{#if projet != null}
		<div class="projet">
			<h2 animate class="grey">Notre nouveau projet</h2>
			<h3 animate class="grey">{projet.titre}</h3>
			<p animate>
				{projet.descriptionCourte}
			</p>
			<a href="/projets/{projet.id}" animate class="btn">En savoir +</a>
			<img alt="projet" src={projet.photo} />
		</div>
	{/if}

	{#if actualite != null}
		<div class="actu">
			<h2 animate class="grey">Notre dernière actu</h2>
			<div class="actu-content">
				<img src="/images/fleche-actu-home.svg" alt="chemin" />
				<div class="flip-container">
					<FlipCard
						titre={actualite.titre}
						link="/actualites/{actualite.id}"
						imageSrc={actualite.photo}
						description={actualite.descriptionCourte}
					/>
				</div>
			</div>
		</div>
	{/if}
</div>

<div class="blanc" id="contact">
	<div class="wrapper">
		<div class="contact-form">
			<h2 animate class="grey">Contactez nous !</h2>
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
	#top {
		height: 100vh;
		width: 100%;
		overflow: hidden;
		position: relative;

		img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			z-index: 10;
			background-size: cover;
			object-fit: cover;
		}
		.abso {
			position: absolute;
			left: 50%;
		}
		h1 {
			width: 100%;
			bottom: 20%;

			transform: translate(-50%, 50%);
			word-break: break-word;
			@media only screen and (max-width: $phone) {
				word-break: initial;
				padding: 16px;
				font-size: 3rem;
			}
		}
		.bg-gris {
			height: 100vh;
			width: 100vh;
			border-radius: 50vh;
			transform: translate(-50%, -30%) scale(1.2);
			opacity: 0.5;
			top: 100%;
			z-index: 20;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			background-color: #575757;
		}
	}

	.blanc {
		background-color: #fff;
		padding: 10rem 11%;
		position: relative;
		overflow: hidden;

		@media only screen and (max-width: $phone) {
			margin: 0;
			padding: 64px 12px 32px 12px;
		}

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

				&.desc-gauche {
					@media only screen and (max-width: $phone) {
						margin-bottom: 32px;
					}
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

	#proj-actu {
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		text-align: center;

		@media only screen and (max-width: $tablet) {
			flex-direction: column;
		}
		.projet {
			@media only screen and (max-width: $tablet) {
				width: 100%;
			}

			h2 {
				text-align: left;
			}
			flex-basis: 50%;
			flex-grow: 1;
			position: relative;
			height: auto;
			width: 100%;
			background-color: rgba($color-bordeaux, 0.1);
			display: flex;
			flex-direction: column;
			padding: 64px 11%;
			@media only screen and (max-width: $phone) {
				padding: 16px;
			}
			.btn {
				background-color: $color-bordeaux;
			}

			img {
				position: absolute;
				right: 5%;
				bottom: 5%;
				width: 40%;
				height: 60%;
				object-fit: contain;
				background-size: contain;
			}
		}

		.actu {
			height: auto;
			background-color: rgba($color-gris-clair, 1);
			padding: 64px;
			flex-grow: 1;
			width: 100%;
			flex-basis: 50%;
			@media only screen and (max-width: $tablet) {
				width: 100%;
				padding: 32px 12px;
			}

			.actu-content {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				.flip-container {
					height: 20vw;
					width: 20vw;

					@media only screen and (max-width: $tablet) {
						height: 30vw;
						width: 30vw;
					}

					@media only screen and (max-width: $phone) {
						height: 70vw;
						width: 70vw;
					}
				}

				img {
					width: 40%;
					height: 40%;
					object-fit: contain;
					background-size: contain;
					transform: translateY(-20px);

					@media only screen and (max-width: $phone) {
						display: none;
					}
				}
			}
		}

		h3 {
			margin-top: 32px;
			text-align: left;
		}
		p {
			text-align: left;
			width: 60%;
		}
		.btn {
			margin: 64px 0;
		}
	}

	#contact {
		.wrapper {
			@media only screen and (max-width: $tablet) {
				display: flex;
				flex-direction: column;
				left: 0;
				align-items: center;
				justify-content: center;
			}

			h2 {
				font-size: 2.5rem;
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
