<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Pagination } from 'swiper/modules';
	import 'swiper/css';

	let container;
	let links;
	let title;
	let description;
	let wrapper;

	const expertise = [
		{
			id: 0,
			title: 'Nos expertises',
			class: 'redaction',
			description: `Le plat signature de Sogo Com : l’écriture ! <br><br>

Et pour condimenter le tout et donner la touche qui fera mouche à tous les coups, expertises mixées en ébullition : relations presse, graphisme, vidéo, community management et événements sur le grill, optez pour une communication pleine de saveurs.`,
			images: [
				'/images/SliderRedac/Redac1.png',
				'/images/SliderRedac/Redac2.png',
				'/images/mokup.png'
			],
			bgImages : '/images/exper-jaune.png'
		},
		{
			id: 1,
			title: 'Nos expertises',
			class: 'presse',
			description: `Le plat signature de Sogo Com : l’écriture ! <br><br>

Et pour condimenter le tout et donner la touche qui fera mouche à tous les coups, expertises mixées en ébullition : relations presse, graphisme, vidéo, community management et événements sur le grill, optez pour une communication pleine de saveurs.`,
			images: [
				'/images/SliderRelationsPresse/RelationsPresse1.png',
				'/images/SliderRelationsPresse/RelationsPresse2.png',
				'/images/SliderRelationsPresse/RelationsPresse3.png'
			],
			bgImages : '/images/exper-jaune.png'
		},
		{
			id: 2,
			title: 'Nos expertises',
			class: 'graphisme',
			description: `Le plat signature de Sogo Com : l’écriture ! <br><br>

Et pour condimenter le tout et donner la touche qui fera mouche à tous les coups, expertises mixées en ébullition : relations presse, graphisme, vidéo, community management et événements sur le grill, optez pour une communication pleine de saveurs. `,
			images: [
				'/images/SliderGraphisme/Graphisme1.png',
				'/images/SliderGraphisme/Graphisme2.png',
				'/images/SliderGraphisme/Graphisme3.png'
			],
			bgImages : '/images/exper-rose.png'
		},
		{
			id: 3,
			title: 'Nos expertises',
			class: 'reseaux',
			description: `Le plat signature de Sogo Com : l’écriture ! <br><br>

Et pour condimenter le tout et donner la touche qui fera mouche à tous les coups, expertises mixées en ébullition : relations presse, graphisme, vidéo, community management et événements sur le grill, optez pour une communication pleine de saveurs.`,
			images: [
				'/images/SliderReseauxSociaux/carretta.png',
				'/images/SliderReseauxSociaux/festivalMagie.png',
				'/images/SliderReseauxSociaux/liberart.png',
			],
			bgImages : '/images/exper-bleu.png'
		},
		{
			id: 4,
			title: 'Nos expertises',
			class: 'photos',
			description: `Le plat signature de Sogo Com : l’écriture ! <br><br>

Et pour condimenter le tout et donner la touche qui fera mouche à tous les coups, expertises mixées en ébullition : relations presse, graphisme, vidéo, community management et événements sur le grill, optez pour une communication pleine de saveurs.`,
			images: [
				'/images/SlidePhotoVideo/2.png',
				'/images/mokup.png',
				'/images/mokup.png'
			],
			bgImages : '/images/exper-kaki.png'
		},
		{
			id: 5,
			title: 'Nos expertises',
			class: 'evenements',
			description: `Le plat signature de Sogo Com : l’écriture ! <br><br>
			
Et pour condimenter le tout et donner la touche qui fera mouche à tous les coups, expertises mixées en ébullition : relations presse, graphisme, vidéo, community management et événements sur le grill, optez pour une communication pleine de saveurs.`,
			images: [
				'/images/SliderEvenement/1.png',
				'/images/SliderEvenement/2.png',
				'/images/SliderEvenement/3.png',
			],
			bgImages : '/images/exper-rouge.png'
		}
	];

	let oldExpertise = {
		class: ''
	};


	let bgImageSrc;

	function changeExpertise(id) {
		Array.from(links.children).map((child) => {
			child.classList.remove('active');
			return child;
		});
		links.children[id].classList.add('active');
		changeContainerClass(expertise[id].class);
		title = expertise[id].title;
		description = expertise[id].description;
		bgImageSrc =  expertise[id].bgImages
		changeImages(expertise[id].images);
	}

	function changeContainerClass(classToAdd) {
		container.classList.add(classToAdd);
		if (oldExpertise.class.length > 0) container.classList.remove(oldExpertise.class);
		oldExpertise.class = classToAdd;
	}

	function changeImages(imagesArray) {
		wrapper.children[0].firstElementChild.src = imagesArray[0];
		wrapper.children[1].firstElementChild.src = imagesArray[1];
		wrapper.children[2].firstElementChild.src = imagesArray[2];
		
	}

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

		changeExpertise(0);
	});
</script>

<div class="expertise" bind:this={container}>
	<h2 bind:innerText={title} contenteditable="false">Titre</h2>

	<p bind:innerHTML={description} contenteditable="false">
		Description
	</p>

	<div bind:this={links} class="links">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(0);
			}}
		>
			Rédaction
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(1);
			}}
		>
			Relation de presse
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(2);
			}}
		>
			Graphisme
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(3);
			}}
		>
			Réseaux sociaux
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(4);
			}}
		>
			Photos & vidéos
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(5);
			}}
		>
			Événements
		</div>
	</div>

	<div class="swiper-container">
		<div bind:this={wrapper} class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="/images/mokup.png" alt="expertise-slide" />
			</div>

			<div class="swiper-slide">
				<img src="/images/mokup.png" alt="expertise-slide" />
			</div>

			<div class="swiper-slide">
				<img src="/images/mokup.png" alt="expertise-slide" />
			</div>
		</div>

		<img class="img-bg" src="{bgImageSrc}" alt="expertise-slide" />
	</div>

	<div class="btn">En savoir +</div>
	<div class="pagination" />
</div>

<style lang="scss" global>
	.expertise {
		background-color: rgba($color-bleu, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 64px 11%;
		transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);


		@media only screen and (max-width: $phone) {
				height: fit-content;
				padding: 0 0 64px 0;
			}

		h2 {
			text-align: center;
			padding: 64px 0 32px 0;
			color: $color-gris-dark;
		}
		p {
			padding: 0 32px 64px 32px;
			text-align: center;
			max-width: 60%;
			color: $color-gris-dark;
			font-family: $font-secondary-light;
			@media only screen and (max-width: $phone) {
				max-width: 100%;
				padding: 0 11%;
			}
		}

		.btn {
			margin-bottom: 32px;
			transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
			font-family: $font-secondary-light;
		}
		.swiper-container {
			margin-bottom: 16px;
			position: relative;
			.swiper-slide {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;

				img {
					
					width: auto;
					height: 80%;
					object-fit: contain;
					background-size: contain;

					@media only screen and (max-width: $phone) {
						width: 80%;
					}
					
				}
			}

			.img-bg {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: auto;
   				height: 80%;
			}
		}

		.links {
			align-items: center;
			width: 80%;
			height: 64px;

			@media only screen and (max-width: $phone) {
				height: fit-content;
			}

			.link {
				flex-grow: initial;
				padding: 24px;

				@media only screen and (max-width: $phone) {
					padding: 16px;
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

		&.redaction {
			background-color: rgba(#e5ae1e, 0.1);

			.active {
				color: #e5ae1e !important ;
			}
			.btn {
				background: #e5ae1e;
			}
			.swiper-pagination-bullet-active {
				background: #e5ae1e !important;
			}
		}
		&.presse {
			background-color: rgba(#e5ae1e, 0.1);

			.active {
				color: #e5ae1e !important;
			}
			.btn {
				background: #e5ae1e;
			}
			.swiper-pagination-bullet-active {
				background: #e5ae1e !important;
			}
		}
		&.graphisme {
			background-color: rgba(#a48bad, 0.1);

			.active {
				color: #a48bad;
			}
			.btn {
				background: #a48bad !important;
			}
			.swiper-pagination-bullet-active {
				background: #a48bad !important;
			}
		}
		&.reseaux {
			background-color: rgba(#2c9a9b, 0.1);
			.active {
				color: #2c9a9b !important;
			}
			.btn {
				background: #2c9a9b;
			}
			.swiper-pagination-bullet-active {
				background: #2c9a9b !important;
			}
		}
		&.photos {
			background-color: rgba(#989a6f, 0.1);
			.active {
				color: #989a6f !important;
			}
			.btn {
				background: #989a6f;
			}
			.swiper-pagination-bullet-active {
				background: #989a6f !important;
			}
		}
		&.evenements {
			background-color: rgba(#9d524f, 0.1);
			.active {
				color: #9d524f !important;
			}
			.btn {
				background: #9d524f;
			}
			.swiper-pagination-bullet-active {
				background: #9d524f !important;
			}
		}
	}
</style>
