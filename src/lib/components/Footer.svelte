<script>
	import { t, locales, locale } from '$lib/translations';
	import { page } from '$app/stores';
	
</script>

<footer>
	<div class="black">
		<a class="logo" href="/">
			<img alt="logo menu" src="/images/logo-menu-black.svg" />
		</a>
		<div class="links">
			<a href="/agence"> Agence </a>
			<a href="/actualites"> Actualités </a>
			<a href="/competences"> Compétences </a>
			<a href="/contact"> Contact </a>
			<a href="/projets"> Projets </a>

			<a href="/presse"> Espace presse </a>
		</div>
	</div>
	<div class="white">
		<a href="/mentions"> Mentions légales </a>
		-
		<a href="/donnees-personelles"> Données personnelles </a>
		-
		<a> Préférence cookies </a>
	</div>
</footer>

<style lang="scss">
	footer {
		.black {
			background-color: $color-gris-dark;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 32px;
			@media only screen and (max-width: $phone) {
				flex-direction: column-reverse;
			}
			.logo {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-basis: 33.3%;
				img {
					width: 80%;
					height: 50%;
				}

				@media only screen and (max-width: $phone) {
					margin-bottom: 32px;
				}
			}
			.links {
				flex-basis: 33.3%;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				@media only screen and (max-width: $phone) {
					margin-bottom: 32px;
				}

				a {
					flex-basis: 50%;
					@media only screen and (max-width: $phone) {
						flex-basis: 50%;
						text-align: center;
					}
					font-family: $font-secondary-light;
					font-size: 1rem;
					color: $color-blanc;
					text-decoration: none;
					padding: 16px 0;
				}
			}
		}
		.white {
			background-color: $color-blanc;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: $font-secondary-light;
			font-size: 1rem;
			color: $color-gris-dark;
			@media only screen and (max-width: $phone) {
				justify-content: space-between;
				margin: 0 16px;
			}

			a {
				@media only screen and (max-width: $phone) {
					padding: 8px 0;
				}
				padding: 8px 16px;
				color: $color-gris-dark;
				text-decoration: none;
			}
		}
	}
</style>
