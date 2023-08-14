<script>
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import Contact from '$lib/components/Contact.svelte';
	import SliderExpertise from '$lib/components/SliderExpertise.svelte';


	onMount((_) => {
		
	});
</script>

<div id="top">
	<img alt="background-sogo" src="/images/bg-home.png" />
	<div class="abso bg-gris" />

	<h1 class="abso">{$t('home.titre')}</h1>
</div>
<div class="blanc" id="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h2>
				<span class="grey">{$t('home.intro-1')}</span><br />
				<span class="pink">{$t('home.intro-2')}</span>
			</h2>
			<p>
				{$t('home.description')}
			</p>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="btn"
				on:click={() => {
					goto('/agence');
				}}
			>
				{$t('common.savoir+')}
			</div>
		</div>
		<div class="bloc img-droite">
			<div class="conteneur">
				<span class="bubble top-left" />
				<img src="/images/home-equipe.png" alt="L'equipe" />
				<span class="bubble bottom-right" />
			</div>
		</div>
	</div>
</div>
<SliderExpertise />

<div class="blanc" id="proj-actu">
<div class="projet">

	<h2>Notre nouveau projet</h2>
	<h3>Distillerie St Esprit</h3>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar 
	</p>
	<div class="btn">
		En savoir +
	</div>
</div>
<div class="actu">
	<h2>Notre dernière actu</h2>
	<div>
		flipcard
	</div>
</div>
</div>

<div class="blanc" id="contact">
	<div class="wrapper">
		<div class="contact-form">
			<h2>Contactez nous</h2>
			<Contact />
		</div>
		<div class="contact-images">
			<img class="contact-image" src="/images/contact-1.png" alt="contact-1" />
			<img class="contact-image" src="/images/contact-2.png" alt="contact-2" />
			<img class="contact-image" src="/images/contact-3.png" alt="contact-3" />
			<span class="contact-image" />
		</div>
	</div>
</div>

<style lang="scss">
	#top {
		height: 100vh;
		width: 100%;
		overflow: hidden;
		position: relative;
		img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			z-index: 10;
			background-size: cover;
			object-fit: cover;
		}
		.abso {
			position: absolute;
			left: 50%;
		}
		h1 {
			bottom: 0;
			transform: translateX(-50%);
		}
		.bg-gris {
			height: 600px;
			width: 700px;
			border-top-left-radius: 400px;
			border-top-right-radius: 400px;
			transform: translateX(-50%) scale(1.5);
			opacity: 0.5;
			bottom: -40%;
			z-index: 20;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			background-color: #575757;
		}
	}

	.blanc {
		padding: 6rem 0;
		position: relative;
		overflow: hidden;

		.wrapper {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			position: relative;

			left: 6%;

			.bloc {
				width: 50%;
				padding: 32px;

				p {
					font-family: $font-secondary-light;
					margin-bottom: 48px;
				}

				.btn {
					background-color: $color-rose;
				}
			}
			.img-droite {
				display: flex;
				justify-content: center;
				align-items: center;

				.conteneur {
					position: relative;
					width: 70%;
					span {
						position: absolute;
						width: 100px;
						height: 100px;
						border-radius: 50px;
						background-color: $color-rose;

						&.top-left {
							transform: translate(-50%, -50%);
							z-index: 5;
						}

						&.bottom-right {
							top: 100%;
							left: 100%;
							transform: translate(-50%, -50%);
							z-index: 15;
						}
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


	#proj-actu{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.projet{

		}

		.actu{

		}
	}

	#contact {
		.wrapper {
			.contact-form {
				width: 35%;
			}
			.contact-images {
				flex-grow: 2;
				width: 65%;
				position: relative;

				.contact-image {
					margin-left: 64px;
					position: absolute;
					width: 40%;
					height: 40%;
					object-fit: cover;
					background-size: cover;
					border-radius: 32px;

					&:nth-child(1) {
						top: 0;
						left: 50%;
						transform: translateX(-50%);
						z-index: 2;
					}

					&:nth-child(2) {
						top: 50%;
						transform: translateY(-50%);
						z-index: 3;
					}

					&:nth-child(3) {
						transform: translateX(-50%);
						bottom: 0;
						left: 50%;
						z-index: 4;
					}

					&:nth-child(4) {
						border-radius: 5000px;
						height: 400px;
						width: 400px;
						top: 50%;
						right: 0;
						background: $color-rose;
						transform: translateY(-50%);
						z-index: 1;
					}
				}
			}
		}
	}
</style>
