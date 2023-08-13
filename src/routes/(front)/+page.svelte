<script>
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
    import Contact from '$lib/components/Contact.svelte';
	import { Pagination } from 'swiper/modules';
	import 'swiper/css';
	let links;

	onMount((_) => {
		window.swiper = new Swiper('.swiper-container', {
			modules: [Pagination],
			// loop: true,

			// If we need pagination
			pagination: {
				clickable: true,
				el: '.pagination'
			}
		});

		window.swiper.on('activeIndexChange', function () {
			Array.from(links.children).map((child) => {
				child.classList.remove('active');
				return child;
			});
			links.children[window.swiper.activeIndex].classList.add('active');
		});
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
			<div class="btn">
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
<div id="expertise">
	<h2>{$t('home.expertise-title')}</h2>

	<div bind:this={links} class="links">
		<div
			class="link active"
			on:click={() => {
				window.swiper.slideTo(0);
			}}
		>
			{$t('home.expertise-graphisme')}
		</div>

		<div
			class="link"
			on:click={() => {
				window.swiper.slideTo(1);
			}}
		>
			{$t('home.expertise-reseaux')}
		</div>

		<div
			class="link"
			on:click={() => {
				window.swiper.slideTo(2);
			}}
		>
			{$t('home.expertise-evenements')}
		</div>

		<div
			class="link"
			on:click={() => {
				window.swiper.slideTo(3);
			}}
		>
			{$t('home.expertise-photovideo')}
		</div>

		<div
			class="link"
			on:click={() => {
				window.swiper.slideTo(4);
			}}
		>
			{$t('home.expertise-relationpresse')}
		</div>

		<div
			class="link"
			on:click={() => {
				window.swiper.slideTo(5);
			}}
		>
			{$t('home.expertise-redaction')}
		</div>
	</div>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="/images/expertise-slide.png" alt="expertise-slide" />
				<div class="btn blue">{$t('common.savoir+')}</div>
			</div>

			<div class="swiper-slide">
				<img src="/images/expertise-slide.png" alt="expertise-slide" />
				<div class="btn">{$t('common.savoir+')}</div>
			</div>

			<div class="swiper-slide">
				<img src="/images/expertise-slide.png" alt="expertise-slide" />
				<div class="btn">{$t('common.savoir+')}</div>
			</div>

			<div class="swiper-slide">
				<img src="/images/expertise-slide.png" alt="expertise-slide" />
				<div class="btn">{$t('common.savoir+')}</div>
			</div>

			<div class="swiper-slide">
				<img src="/images/expertise-slide.png" alt="expertise-slide" />
				<div class="btn">{$t('common.savoir+')}</div>
			</div>

			<div class="swiper-slide">
				<img src="/images/expertise-slide.png" alt="expertise-slide" />
				<div class="btn">{$t('common.savoir+')}</div>
			</div>
		</div>
	</div>

	<div class="pagination" />
</div>

<div class="blanc" id="contact">
	<div class="wrapper">
		<div class="contact-form">
			<h2>Contactez nous</h2>
			<Contact  />
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

			left: 9%;

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
					}
				}
			}
		}
	}

	#expertise {
		background-color: rgba($color-bleu, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 32px;
		h2 {
			text-align: center;
			padding: 64px 0 32px 0;
		}
		img {
			width: 100%;
			height: 80%;
			object-fit: contain;
			background-size: contain;
		}
		.swiper-slide {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
		}
		.links {
			align-items: center;
			width: 80%;
			height: 64px;
			.link {
				display: flex;
				align-items: center;
				justify-content: center;
				border-left: $color-gris-dark solid 1px;
				height: 100%;

				&:nth-child(6) {
					border-right: $color-gris-dark solid 1px;
				}
			}
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
