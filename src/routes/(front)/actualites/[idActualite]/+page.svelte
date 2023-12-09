<script>
	import Reader from '$lib/components/editor/Reader.svelte';


	export let data;
	const {actualite} = data
	
	const contenu = actualite.contenu != null ? JSON.parse(actualite.contenu) : {}
		

</script>

<div id="top">
	<img alt="background-sogo" src="{actualite.photo ?? "/images/agence-bg.png"}?width=1800&height=1800" />

</div>

<div class="actualite">

	<h1 animate>
		{actualite.titre ?? "Actualite"}
	</h1>

	<div class="actu-bar">
		<div class="author">
			<img src="/images/author.svg" alt="author">
			{actualite.redacteur ?? "Aucun auteur"}
		</div>

		<div class="calendar">
			<img  src="/images/calendar.svg" alt="calendar">
			{ new Intl.DateTimeFormat("en-GB").format(actualite.createdAt) }
		</div>

		<div class="commentary">
			<img  src="/images/commentary.svg" alt="commentary">
			{ actualite.tempsLecture ?? "0" } min
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

	.actualite{
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
			.author{
				justify-content: left;
			}
			.calendar{
				justify-content: center;
			}
			.commentary{
				justify-content: right;
			}

		}



	}
</style>
