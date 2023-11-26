<script>
	import { onMount } from 'svelte';

	export let data;
	const { actualites } = data;

	const firstActualite = actualites.length > 0 ? actualites[0] : null;

	const classes = ['rose', 'violet', 'bleu', 'rouge', 'kaki', 'jaune'];
	onMount((_) => {});
</script>

<div id="top">
	<img alt="background-sogo" src="/images/actualites-bg.png?width=1200&height=1200" />

	<h1 animate>Nos actualités</h1>
</div>

{#if actualites != null && actualites.length > 0}
	<div class="actu-container">
		<div class="actualites">
			{#each actualites as actualite, index}
				<div class="conteneur-m">
					<div class="conteneur {classes[index % classes.length]}">
						<div class="img-div"><img src={actualite.photo} alt={actualite.titre} /></div>
						<div class="contenu">
							<div class="scroller">
								<h2>{actualite.titre}</h2>
								<p class="">{actualite.descriptionCourte}</p>
							</div>
							<div class="btn-container">
								<a class="btn" href="/actualites/{actualite.id}">En savoir +</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

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
		}

		h1 {
			@media only screen and (max-width: $phone) {
				padding: 64px 8px;
				width: 100%;
				text-align: center;
				font-size: 4rem;
			}

			text-align: left;
			padding: 10rem;
			color: $color-blanc;
		}
	}

	.actu-container {
		padding: 32px 11%;
		@media only screen and (max-width: $tablet) {
			padding: 32px 12px;
		}
	}

	.actualites {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		.conteneur-m {
			flex-basis: 23%;
			width: 23%;
			height: fit-content;
			margin: 1%;
			height: 550px;

			@media only screen and (max-width: $tablet) {
				flex-basis: 31%;
				width: 31%;
				margin: 1%;
			}

			@media only screen and (max-width: $phone) {
				flex-basis: 100%;
				width: 100%;
				margin: 5% 0;
			}
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
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}

				.contenu {
					padding: 24px;
					height: 60%;
					color: #000;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.scroller {
						// max-height: 60%;
						overflow-y: hidden;
						overflow-x: hidden;
						h2 {
							margin: 0;
							color: $color-gris-dark;
							font-size: 1.5rem;
							line-clamp: 2;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
							margin-bottom: 16px;
						}

						p{
							line-height: 1.5rem;
							word-break: break-word;
							line-clamp: 5;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 5;
							overflow: hidden;
						}
					}

					.btn-container {
						padding-bottom: 16px;
					}
				}
			}
		}
	}
</style>
