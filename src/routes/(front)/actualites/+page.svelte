<script>
	import FlipCard from '$lib/components/FlipCard.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';


	export let data;
	const {actualites} = data

	onMount((_) => {




	});
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


			{#each actualites as actualite,index }
		
				<div class="flip-parent">
					<div class="flip-row">
						<FlipCard link="/actualites/{actualite.id}" titre="{actualite.titre ?? "Actualite n°"+ index }" description="{actualite.descriptionCourte}" />
					</div>
				</div>
			{/each}

		
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
		}
		.flip-container {
			display: flex;
			justify-content: end;
			transform: translate(0, -50px);

			@media only screen and (max-width: $phone) {
				justify-content: center;
				padding: 32px;
			}

			@media only screen and (max-width: $tablet) {
				transform: translate(0, -30px);
			}

			.flipcard {
				@media only screen and (max-width: $tablet) {
					margin-right: 10%;
				}

				@media only screen and (max-width: $phone) {
					margin-right: 0;
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

			.flip-parent {
				@media only screen and (max-width: $tablet) {
					flex-basis: 50%;
				}

				@media only screen and (max-width: $phone) {
					flex-basis: 100%;
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
						width: 50vw;
						height: 50vw;
					}

					width: 20vw;
					height: 20vw;
				}
			}
		}
	}
</style>
