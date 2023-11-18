<script>
	import FlipCard from '$lib/components/FlipCard.svelte';
	import { onMount } from 'svelte';

	onMount((_) => {});
</script>

<div id="valeurs">
	<h2><span class="pink">Nos Valeurs</span></h2>
	<div class="conteneur">
		<div class="contenu left">
			<p class="flip">
				Créative et inspirée, l’équipe Sogo Com c’est aussi un lien de proximité assuré.
				<br /><br />
				Basée à Poisy, aux portes d’Annecy, la team expérimentée défend son système de valeurs coûte
				que coûte.
				<br /><br />
				L’éthique et l’écoute pour la finesse de l’intention, la confiance et le conseil pour la justesse
				de la relation.
			</p>
		</div>
		<div class="contenu center">
			<div class="flip">
				<FlipCard titre="Bienveillance" />
			</div>
		</div>

		<div class="contenu right">
			<div class="flip">
				<FlipCard
					titre="Éthique"
					description="« L’éthique c’est l’esthétique de dedans », Pierre Reverdy. 

				Mettre en adéquation nos actions et nos valeurs, injecter de l’humain à tous les temps de la collaboration est une composante essentielle chez Sogo Com. "
				/>
			</div>
		</div>
		<div class="contenu left">
			<div class="flip">
				<FlipCard
					titre="Confiance"
					description="« Le meilleur moyen de savoir si vous pouvez faire confiance à quelqu’un c’est de lui faire confiance », Ernest Hemingway. 

				Incontournable à toute relation saine et sereine, Sogo Com place la confiance mutuelle comme trait d’union. Elle tisse le lien entre vous et nous. "
				/>
			</div>
		</div>
		<div class="contenu center">
			<div class="flip">
				<FlipCard
					titre="Conseil"
					description="« Un bon conseil doit pouvoir être conjugué à la personnalité de l’individu qui le reçoit », Laurent Martinez

				Parce que tout process de projet comprend un principe fondateur et clé de réalité, l’équipe Sogo Com vous éclaire, vous aiguille et vous conseille en toute transparence pour une communication qui vous ressemble. "
				/>
			</div>
		</div>
		<div class="contenu right">
			<div class="flip">
				<FlipCard titre="Bienveillance" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#valeurs {
		background-color: #fcf7f7;
		padding-bottom: 64px;

		@media only screen and (max-width: $phone) {
			margin: 0;
			padding: 0 12px;
		}

		h2 {
			@media only screen and (max-width: $phone) {
				margin: 0;
				padding: 0;
				padding-top: 32px;
				width: 100%;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			padding: 64px 11% 0 11%;
		}
		.conteneur {
			padding: 0 11%;

			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;

			@media only screen and (max-width: $phone) {
				padding: 0;
				padding-bottom: 32px;
				:first-child {
					p {
						height: auto !important;
					}
				}
			}

			.contenu {
				flex-basis: 26%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-grow: 1;

				@media only screen and (max-width: $tablet) {
					flex-basis: 35%;
					margin: 32px 0;
				}
				@media only screen and (max-width: $phone) {
					flex-basis: 50%;
				}

				p {
					font-size: 1rem;
					line-height: 1rem;

					
					@media only screen and (max-width: $phone) {
						width: 100% !important;
						margin-bottom: 12px;
					}
				}
				.flip {
					margin: 15% 5% 15% 0;
					width: 20vw;
					height: 20vw;

					& p{
						width: 100%;
					}

					@media only screen and (max-width: $tablet) {
						width: 30vw;
						height: 30vw;
						margin: auto;
					}

					@media only screen and (max-width: $phone) {
						width: 70vw;
						height: 70vw;
						margin: 12px auto;
					}
				}
			}
		}
	}
</style>
