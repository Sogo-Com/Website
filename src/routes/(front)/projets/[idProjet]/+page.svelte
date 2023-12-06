<script>
	import Reader from '$lib/components/editor/Reader.svelte';


	export let data;
	const {projet} = data
	
	const contenu = projet.contenu != null ? JSON.parse(projet.contenu) : {}
	const typeProjet = ["redaction", "presse", "graphisme", "reseaux", "photos", "evenements"]
	const type = ['Rédaction', 'Relations Presse', 'Graphisme', 'Réseaux Sociaux', 'Photos et Vidéos', 'Événements']

</script>

<div id="top">
	<img alt="background-sogo" src="{projet.photo ?? "/images/agence-bg.png"}?width=1200&height=1200" />

</div>

<div class="projet">

	<h1 animate>
		{projet.titre ?? "Projet"}
	</h1>

	<div class="actu-bar">
		
		<div class="calendar">
			<img  src="/images/calendar.svg" alt="calendar">
			{ new Intl.DateTimeFormat("en-GB").format(projet.createdAt) }
		</div>

		<div class="commentary">
			<img  src="/images/commentary.svg" alt="commentary">
			{ typeProjet.indexOf(projet.typeProjet) != -1 ? type[typeProjet.indexOf(projet.typeProjet)] : "Projet"  } 
		</div>
	</div>

	<div class="contenu">
		<Reader contenu="{contenu}"/>
	</div>
</div>

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
			align-items: center;
			height: 60vh;
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
	}

	.projet{
		z-index: 15;
		position: relative;
		border-radius: 32px;
		padding: 64px 10%;
		margin: -400px 20% 64px 20%;
		background-color: #fff;

		@media only screen and (max-width: $tablet) {
			margin: -300px 10% 32px 10%;
		}

		@media only screen and (max-width: $phone) {
			margin: 0;
			padding: 64px 12px 32px 12px;
		}
		h1{
			color: $color-gris-dark;
			padding:8px 0;
			font-size: 3rem;
		}
		.actu-bar{
			margin: 32px 0;
			border-top: solid $color-gris-dark 1px;
			border-bottom: solid $color-gris-dark 1px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			div{
				padding: 16px 0;
				display: flex;
				width: fit-content;
				flex-basis: 33.3%;
				align-items: center;
				font-family: $font-secondary-light;
				flex-grow: 1;
				text-align: left;
				img{
					padding: 0 16px;
				}
			}
			
			.calendar{
				justify-content: left;
			}
			.commentary{
				justify-content: right;
			}

		}



	}
</style>
