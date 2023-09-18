<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Pagination } from 'swiper/modules';
	let links;
	let wrapper;
	onMount((_) => {
		const swiper= new Swiper('.swiper-container', {
			modules: [Pagination],
			// loop: true,
			
			// If we need pagination
			pagination: {
				clickable: true,
				el: '.pagination'
			}
		});
	});

	function changeProjet(){

	}
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
<div class="pink">
	<div bind:this={links} class="links">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeProjet(0);
			}}
		>
			Rédaction
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeProjet(1);
			}}
		>
			Relations presses
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeProjet(2);
			}}
		>
			Graphisme
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeProjet(3);
			}}
		>
			Réseaux sociaux
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeProjet(4);
			}}
		>
			Photos & Vidéos
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeProjet(5);
			}}
		>
			Evenements
		</div>
	</div>

	<div class="contenu">
		<div class="image">
			<img src="/images/sogo-pink.png" alt="sogo" />
		</div>
		<div class="texte">
			<h3>Lorem Ipsum</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
				luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar
				condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque
				facilisis orci at luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla
				pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				scelerisque facilisis orci at luctus. Donec in euismod nibh. Ut mollis enim neque, et
				tincidunt nulla pulvinar condimentum.
			</p>
		</div>
	</div>
</div>
<div class="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h2>
				<span class="grey">Nos expertises</span>
			</h2>
		</div>
	</div>
	<div class="infoSlide">
		<div class="infos">
			<div class="medias">
				<img src="/images/real-1.svg" alt="Real" />
				<img src="/images/real-2.svg" alt="Real" />
				<img src="/images/real-3.svg" alt="Real" />
				<img src="/images/real-4.svg" alt="Real" />
				<img src="/images/real-5.svg" alt="Real" />
				<img src="/images/real-6.svg" alt="Real" />
			</div>
			<div class="texte">
				<h3>Lorem Ipsum</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
					luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar
					condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque
					facilisis orci at luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla
					pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					scelerisque facilisis orci at luctus. Donec in euismod nibh. Ut mollis enim neque, et
					tincidunt nulla pulvinar condimentum.
				</p>
				<div class="btn">En savoir +</div>
			</div>
		</div>
		<div class="slider">
			<div class="swiper-container">
				<div bind:this={wrapper} class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="/images/expertise-yellow.png" alt="expertise-slide" />
					</div>
	
					<div class="swiper-slide">
						<img src="/images/expertise-yellow.png" alt="expertise-slide" />
					</div>
	
					<div class="swiper-slide">
						<img src="/images/expertise-yellow.png" alt="expertise-slide" />
					</div>
				</div>
			</div>
	
			<div class="pagination" />
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
				background-color: rgba($color-bleu, 0.1);
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
				background-color: rgba($color-bleu, 0.1);
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

	.pink {
		background-color: rgba($color-rose, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 64px 0;
		transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);

		.links {
			align-items: center;
			width: 80%;
			height: 64px;

			@media only screen and (max-width: $phone) {
				height: fit-content;
			}

			.link {
				padding: 16px;
				@media only screen and (max-width: $phone) {
					border: none;
				}

				transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
				display: flex;
				align-items: center;
				justify-content: center;
				border-left: $color-gris-dark solid 1px;
				height: 100%;

				&:nth-child(6) {
					@media only screen and (min-width: $phone) {
						border-right: $color-gris-dark solid 1px;
					}
				}
			}
		}

		.contenu {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.image {
				flex-basis: 20%;
				padding: 32px;
				img {
					width: 100%;
					height: 100%;
				}
			}

			.texte {
				flex-basis: 60%;
			}
		}
	}

	.infoSlide{

	display: flex;

	.infos{
		display: flex;
		flex-basis: 60%;
		justify-content: center;
		align-items: start;
		.medias{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 30%;
			img{
				margin: 8px;
				width: 64px;
				height: 64px;
			}
		}

		.texte{
			width: 70%;
			p{
				margin-bottom: 64px;
				width: 80%;
			}
			.btn{
				
			}
		}
	}
	.slider{
		flex-basis: 40%;
		max-width: 40%;
		padding: 0 32px;

		.swiper-wrapper{
			width: max-content;
			height: 100%;
    		display: flex;
		}
		div
		{
			width: 100%;
		}

		img{
			width: 100%;
			height: 100%;
			object-fit: contain;
			background-size: contain;
		}
	}
}
</style>
