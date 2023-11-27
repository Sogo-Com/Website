<script>
	import FlipCard from '$lib/components/FlipCard.svelte';
	import { onMount } from 'svelte';

	onMount((_) => {});
</script>

<div id="valeurs">
	<h2 animate><span class="pink">Nos Valeurs</span></h2>
	<div class="conteneur">
		<div class="contenu left">
			<p animate class="flip">
				Créative et inspirée, l’équipe Sogo Com c’est aussi un lien de proximité assuré. Basée à Poisy, aux
portes d’Annecy, la team expérimentée défend son système de valeurs coûte que coûte. Confiance
et honnêteté pour piliers, plaisir et solidarité pour fondations et rigueur à toute épreuve !
			</p>
		</div>
		<div class="contenu center">
			<div class="flip">
				<FlipCard titre="Proximité" description="La relation de confiance se tisse dans la toile de la proximité. L’écoute et l’attention en sont les fils
				d’Ariane. Vous connaître, c’est respecter votre identité. Echanger à tous les instants de votre projet,
				c’est être au plus proche de vos besoins."/>
			</div>
		</div>

		<div class="contenu right">
			<div class="flip">
				<FlipCard
					titre="Solidarité"
					description="Parce que la valeur des liens humains véritables surpasse tout, notre valeur ajoutée à nous c’est la
					solidarité. Chez Sogo Com, nous sommes engagés et ne perdons pas de vue les causes qui nous
					tiennent à cœur."
				/>
			</div>
		</div>
		<div class="contenu left">
			<div class="flip">
				<FlipCard
					titre="Honnêteté"
					description="Mettre en adéquation nos actions et nos valeurs, injecter de l’humain à tous les temps de la
					collaboration sont des composantes essentielles chez Sogo Com. Jouer la transparence est pour nous
					la meilleure façon d’instaurer un climat de confiance. En toute honnêteté."
				/>
			</div>
		</div>
		<div class="contenu center">
			<div class="flip">
				<FlipCard
					titre="Rigueur"
					description="Des rendus de qualité qui répondent en tous points à la demande, le respect des délais et du cadre
					imposé sont des conditions que nous respectons. Un héritage né de la rigueur rédactionnelle.
					Anticipation, planification, action et réaction au diapason."
				/>
			</div>
		</div>
		<div class="contenu right">
			<div class="flip">
				<FlipCard titre="Plaisir & Bonne humeur" description="Rigueur et exigence ne signifient pas qu’il faille se prendre au sérieux. Chez Sogo Com nous savons
				faire la part des choses, prendre du recul et rester à notre place ! Parce qu’une atmosphère saine en
				dit long, nous aimons prendre du plaisir dans nos missions."/>
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


				&.right{
					justify-content: end;
				}

				&.left{
					justify-content: start;
				}
				@media only screen and (max-width: $tablet) {
					flex-basis: 35%;
					margin: 32px 0;
				}
				@media only screen and (max-width: $phone) {
					flex-basis: 50%;
				}

				p {
					font-size: 1rem;
					width: 100% !important;
					
					@media only screen and (max-width: $phone) {
						width: 100% !important;
						margin-bottom: 12px;
					}
				}
				.flip {
					margin: 15%  0;
					width: 20vw;
					height: 20vw;


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
