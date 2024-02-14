<script>
	
	import { onMount } from 'svelte';
	import Valeurs from '$lib/components/Valeurs.svelte';
	import FriseHistoire from '$lib/components/FriseHistoire.svelte';
	import SliderGomettes from '$lib/components/SliderGomettes.svelte';

	export let data;
	let { collaborateurs, pointsHistoriques = [],pageAgence ,valeurs} = data;
	if (valeurs != null && valeurs.length != 0) valeurs = valeurs?.sort((a, b) => a.rang - b.rang);
	onMount((_) => {});
</script>

<svelte:head>

	<title>Sogo Com, votre agence de communication</title>
	<meta name="description" content="Sogo Com, votre agence de communication à Annecy et dans les Alpes. Découvrez nos services et nos réalisations." />
	<link rel="canonical" href="http://sogocom.fr/agence" />

</svelte:head>


<div id="top">
	<img alt="background-sogo" src="{pageAgence.photoPrincipale ?? "/images/Agence_SogoCom_nb.jpg"}?width=1800&height=1800" />

	<h1 class="pink" animate>{@html pageAgence.titreRose?.replaceAll("\n","<br>")}</h1>
</div>

<div id="guillemets">
	<div class="bloc-container">
		<div class="bloc-seul">
			<div class="left">
				<img src="/images/guillemet-gauche.PNG" alt="guillemet gauche" />
			</div>
			<div class="center">
				<p animate>
					{@html pageAgence.citation?.replaceAll("\n","<br>") ?? "Aucune citation"}
					
				</p>
				
			</div>
			<div class="right">
				<img src="/images/guillemet-droit.PNG" alt="guillemet droit" />
			</div>
		</div>
	</div>
</div>

<Valeurs {valeurs} description={pageAgence.valeurDescription} />
<FriseHistoire {pointsHistoriques} />
<SliderGomettes {collaborateurs} />

<style lang="scss">
	#top {
		height: 100vh;
		width: 100%;
		overflow: hidden;
		position: relative;
		display: flex;
		justify-content: start;
		align-items: end;

		@media only screen and (max-width: $phone) {
			align-items: end;
			margin-top: 80px;
			height: 50vh;
		}

		img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			z-index: 10;
			background-size: cover;
			object-fit: cover;
			margin-top: 120px;

			@media only screen and (max-width: $phone) {
				margin-top: 0px;
			}

		}

		h1 {
			@media only screen and (max-width: $phone) {
				padding: 32px 0;
				width: 100%;
				text-align: center;
			}

			text-align: left;
			padding: 10rem;

			&.pink {
				color: $color-rose;
			}
		}
	}

	#guillemets {
		background-color: #fff;
		
		@media only screen and (max-width: $phone) {
			margin: 0;
			padding:0 12px ;
		}
		.bloc-container {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			@media only screen and (max-width: $phone) {
					width: 100%;
				}

			.bloc-seul {
				width: 75%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				flex-wrap: nowrap;
				position: relative;
				text-align: center;
				padding: 64px;

				@media only screen and (max-width: $phone) {
					width: 100%;
					padding: 16px 0;
				}

				div {
					margin: 16px 0;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;

					@media only screen and (max-width: $phone) {
						margin: 0;
					}
					img {
						width: 100px;
						height: 100px;
						object-fit: contain;
						@media only screen and (max-width: $phone) {
							width:80px;
							height: 80px;
						}
					}
				}
				.left {
					justify-content: start;
				}
				.center {
					flex-direction: column;
					align-items: center;
					justify-content: center;

					p {
						font-size: 1.5rem;
					
					}
				}
				.right {
					justify-content: right;
				}
			}
		}
	}
</style>
