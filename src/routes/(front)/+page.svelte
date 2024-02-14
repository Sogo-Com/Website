<script>
	import { onMount } from 'svelte';

	import Contact from '$lib/components/Contact.svelte';
	import SliderExpertise from '$lib/components/SliderExpertise.svelte';

	export let data;
	let { actualite, projet } = data;

	onMount(() => {
		const player = document.getElementById('player');
		player.play();
	});
</script>

<svelte:head>

	<title>Sogo Com, votre agence de communication</title>
	<meta name="description" content="Sogo Com, votre agence de communication à Annecy et dans les Alpes. Découvrez nos services et nos réalisations." />
	<meta property="og:title" content="Sogo Com, votre agence de communication" />
	<meta property="og:description" content="Sogo Com, votre agence de communication à Annecy et dans les Alpes. Découvrez nos services et nos réalisations." />
	<meta property="og:image" content="/images/agence-bg.png" />
	<meta property="og:url" content="https://sogocom.fr/" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Sogo Com" />
	<meta property="og:locale" content="fr_FR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sogo Com, votre agence de communication" />
	<meta name="twitter:description" content="Sogo Com, votre agence de communication à Annecy et dans les Alpes. Découvrez nos services et nos réalisations." />
	<meta name="twitter:image" content="/images/agence-bg.png" />
	<meta name="twitter:site" content="@sogocom" />
	<meta name="twitter:creator" content="@sogocom" />
	<meta name="twitter:domain" content="sogocom.fr" />

	<link rel="canonical" href="http://sogocom.fr/" />

</svelte:head>

<div id="top">
	<video id="player" loop playsinline muted data-poster="/images/agence-bg.png">
		<source src="/images/videhome.mp4" type="video/mp4" />
		<source src="/images/videhome.webm" type="video/webm" />
	</video>

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

			<a href="/agence" animate class="btn"> En savoir + </a>
		</div>
		<div class="bloc img-droite">
			<div class="conteneur">
				<span data-lag=".2" class="bubble top-left" />
				<img  loading="lazy" src="/images/everybody.png?width=1500&height=1500" alt="L'equipe" />
				<span data-lag=".2" class="bubble bottom-right" />
			</div>
		</div>
	</div>
</div>
<SliderExpertise />

<div class="blanc" id="proj-actu">
	{#if projet != null}
		<div class="projet {projet.typeProjet}">
			<h2 animate class="grey">Notre dernier projet</h2>
			<h3 animate class="grey">{projet.titre}</h3>
			<p animate>
				{projet.descriptionCourte}
			</p>
			<a href="/projets/{projet.id}" animate class="btn">En savoir +</a>
			<img alt="projet" src={projet.photo+"?width=1500&height=1500"} />
		</div>
	{/if}

	{#if actualite != null}
		<div class="actu">
			<h2 animate class="grey">Notre dernière actu</h2>
			<div class="actu-content">
				<img  loading="lazy" src="/images/fleche-actu-home.svg?width=500&height=500" alt="chemin" />
				<div class="actualites">
					<div class="conteneur bleu">
						<div  loading="lazy" class="img-div"><img src={actualite.photo+"?width=1000&height=1000"} alt={actualite.titre} /></div>
						<div class="contenu">
							<h2>{actualite.titre}</h2>
							<p class="line-clamp-5">{actualite.descriptionCourte}</p>
							<div class="btn-container">
								<a class="btn" href="/actualites/{actualite.id}">En savoir +</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<div class="blanc" id="contact">
	<div class="wrapper">
		<div class="contact-form">
			<h2 animate class="grey">Contactez-nous !</h2>
			<Contact />
		</div>
		<div class="contact-images">
			<img  loading="lazy" class="contact-image"  data-lag="0.03" src="/images/contact-1.png?width=1000&height=1000" alt="contact-1" />
			<img  loading="lazy" class="contact-image" data-lag="0.05"  src="/images/contact-2.png?width=1000&height=1000" alt="contact-2" />
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

		img,video {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			z-index: 10;
			background-size: cover;
			object-fit: cover;
			padding-top: 120px;

			@media only screen and (max-width: $phone) {
				padding-top: 84px;

			}
		}
		.abso {
			position: absolute;
			left: 50%;
		
		}
		h1 {
			width: 100%;
			bottom: 15%;

			transform: translate(-50%, 50%);
			word-break: break-word;
			@media only screen and (max-width: $phone) {
				word-break: initial;
				padding: 16px;
			}
			@media only screen and (max-width: $fold) {
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
			// display: flex;
			display: none;
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
					margin-bottom: 32px;
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
				padding: 32px 16px;
			}
			.btn {
				background-color: $color-bordeaux;
				@media only screen and (max-width: $phone) {
					margin: 16px 0;
				}
			}

			img {
				position: absolute;
				right: 5%;
				bottom: 15%;
				width: 45%;
				height: 60%;
				object-fit: contain;
				background-size: contain;

				@media only screen and (max-width: $phone) {
					display: none;
				}
			}

			p {
				@media only screen and (max-width: $phone) {
					width: 100%;
				}
			}

			&.presse {
				background-color: rgba(229, 173, 31, 0.1);

				.btn {
					background: #e5ae1e;
				}
			}

			&.graphisme {
				background-color: rgba(163, 139, 172, 0.1);

				.btn {
					background: #a48bad;
				}
			}
			&.reseaux {
				background-color: rgba(44, 154, 155, 0.1);

				.btn {
					background: #2c9a9b;
				}
			}
			&.photos {
				background-color: rgba(128, 129, 109, 0.1);

				.btn {
					background: #80816d;
				}
			}
			&.evenements {
				background-color: rgba(156, 81, 79, 0.1);

				.btn {
					background: #9d524f;
				}
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
				flex-direction: row-reverse;
				justify-content: center;
				align-items: center;

				.actualites {
					@media only screen and (max-width: $tablet) {
						width: 50vw;
					}

					@media only screen and (max-width: $phone) {
						width: 70vw;
					}

					width: 100%;
					max-width: 300px;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;

					.conteneur {
						height: 100%;
						border-radius: 20px;
						display: flex;
						flex-direction: column;
						overflow: hidden;
						.img-div {
							overflow: hidden;
							height: 40%;

							img {
								transform: none !important;
								width: 100%;
								height: 100%;
								object-fit: cover;
								display: block;
							}
						}

						.contenu {
							padding: 24px;
							height: 60%;
							color: #000;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: start;
							h2 {
								margin: 0;
								font-size: 2rem;
								text-align: start;
							}

							p {
								width: 100%;
							}

							.btn-container {
								padding: 32px 0;
							}
						}
					}
				}

				img {
					width: 40%;
					height: 40%;
					object-fit: contain;
					background-size: contain;
					transform: translateY(-20px) scaleX(-1);

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
				
					position: absolute;
					object-fit: cover;
					background-size: cover;
					border-radius: 32px;

					&:nth-child(1) {
						top: 72px;
						right: 20%;
						z-index: 2;
						height: 50%;
						width: 90%;
					}

					&:nth-child(2) {
						bottom: 0%;
						height: 40%;
						width: 60%;
						z-index: 3;
						right:0;
					}

					

					&:nth-child(3) {
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
