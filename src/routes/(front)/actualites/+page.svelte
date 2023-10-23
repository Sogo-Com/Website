<script>
	import FlipCard from '$lib/components/FlipCard.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	onMount((_) => {});
</script>

<div id="top">
	<h1>Nos actualités</h1>
	<h2>Retrouvez notre dernier article</h2>
	<div class="flip-container">
		<div class="flipcard">
			<img src="/images/actualites-path.svg" alt="chemin" />
			<FlipCard titre="Stratégie de communication" imageSrc="/images/ppl.png" link="/actualites/1" description="Une stratégie de communication, c’est la mise en œuvre d’une vision, le déploiement d’une identité de marque. " />
		</div>
	</div>
	<div>
		<h2>Tous nos contenus</h2>
		<div class="actualites">
			<div class="flip-parent">
				<div class="flip-row">
					<FlipCard link="/actualites/1" titre="Actu 1" description="Description de l'actu n°1" />
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
					<FlipCard link="/actualites/5" />
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
</div>

<style lang="scss">
	#top {
		margin-top: 10%;

		@media only screen and (max-width: $phone) {
			margin-top: 15vh;
		}
		h1 {
			color: $color-gris-dark;
			text-align: left;
			padding: 32px 11%;
		}

		h2 {
			padding: 0px 11%;
			font-size: 2rem;
			color: $color-gris-dark;
			text-align: left;

			@media only screen and (max-width: $phone) {
				line-height: normal;
			}
		}
		.flip-container {
			display: flex;
			justify-content: end;
			transform: translate(0, -50px);

			@media only screen and (max-width: $tablet) {
				transform: translate(0, -30px);
			}

			
			@media only screen and (max-width: $phone) {
				justify-content: center;
				padding: 32px;
				transform: none;
			}

			.flipcard {
				@media only screen and (max-width: $tablet) {
					margin-right: 10%;
				}

				@media only screen and (max-width: $phone) {
					margin-right: 0;
					transform: none;
					width: 80vw;
					height: 80vw;
				}
				margin-right: 25%;
				position: relative;
				width: 20vw;
				height: 20vw;
				transform: translateX(50%);
				
				img {
					@media only screen and (max-width: $phone) {
						display: none;
					}

					position: absolute;
					right: 100%;
					bottom: -40%;
					width:200%;
					height: 200%;
				}
			}
		}

		.actualites {
			padding: 32px 64px;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;


			@media only screen and (max-width: $phone) {
				padding: 11% 64px;
			}

			.flip-parent {
				@media only screen and (max-width: $tablet) {
					flex-basis: 50%;
				}

				@media only screen and (max-width: $phone) {
					flex-basis: 100%;
					padding: 0;
					margin: 15% auto ;
				}

				flex-basis: 33.3%;
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
						width: 80vw;
						height: 80vw;
					}

					width: 20vw;
					height: 20vw;
				}
			}
		}
	}
</style>
