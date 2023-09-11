<script>
	import { onMount } from 'svelte';

	onMount((_) => {});
</script>

<div id="top">
	<img alt="background-sogo" src="/images/expertise-bg.png" />

	<h1><span class="gris">Nos expertises</span><br />pour vous aider</h1>
</div>

<div class="blanc" id="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h2>
				<span class="grey">Nos expertises</span>
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
				luctus.
				<br /><br />
				Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum
				dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus.
				<br /><br />
				Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum
				dolor sit amet, consectetur adipiscing elit. Donec scelerisque
			</p>
		</div>
		<div class="bloc img-droite">
			<div class="conteneur">
				<img src="/images/home-equipe.png" alt="L'equipe" />
			</div>
		</div>
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
			font-size: 5rem;
			padding: 7rem;

			.gris {
				color: $color-gris;
			}
		}
	}

	.blanc {
		background-color: #fff;
		padding: 6rem 0;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: $phone) {
			padding: 1rem 0;
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

			left: 6%;

			h2 {
					position: relative;
					z-index: 1;
					width: fit-content;
				}
			

				h2:before {
					background-color: rgba($color-bleu,.1);
					display: block;
					position: absolute;
					left: -5%;
					z-index: -1;
    				bottom: 50%;
					border-radius: 50px;
					content: '';
					width: 50px;
					height: 50px;
				}

				h2:after {
					background-color: rgba($color-bleu,.1);
					display: block;
					position: absolute;
					border-radius: 50px;
					top: 25%;
					left: 90%;
					content: '';
					z-index: -1;
					width: 50px;
					height: 50px;
				}
			.bloc {
				width: 50%;
				padding: 32px;

				@media only screen and (max-width: $phone) {
					width: 100%;
				}

				p {
					font-family: $font-secondary-light;
					margin-bottom: 48px;
				}
			}
			.img-droite {
				display: flex;
				justify-content: left;
				align-items: center;

				@media only screen and (max-width: $phone) {
					padding: 1rem 0 0 0;
				}
				.conteneur {
					position: relative;
					width: 80%;

					@media only screen and (max-width: $phone) {
						width: 100%;
						padding: 8px;
					}

					img {
						position: relative;
						z-index: 10;
						width: 100%;
						height: 100%;
						border-radius: 32px;
					}
				}
			}
		}
	}
</style>
