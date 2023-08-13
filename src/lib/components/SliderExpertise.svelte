<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { t } from '$lib/translations';
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
			title: 'Redaction',
			class: 'redaction',
			description: 'Desc ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-yellow.png',
				'/images/expertise-yellow.png',
				'/images/expertise-yellow.png'
			]
		},
		{
			id: 1,
			title: 'Relation de presses',
			class: 'presse',
			description: 'Press ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-yellow.png',
				'/images/expertise-yellow.png',
				'/images/expertise-yellow.png'
			]
		},
		{
			id: 2,
			title: 'Graphisme',
			class: 'graphisme',
			description: 'Graph ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-purple.png',
				'/images/expertise-purple.png',
				'/images/expertise-purple.png'
			]
		},
		{
			id: 3,
			title: 'Réseaux sociaux',
			class: 'reseaux',
			description: 'Reseaux ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-blue.png',
				'/images/expertise-blue.png',
				'/images/expertise-blue.png'
			]
		},
		{
			id: 4,
			title: 'Photos & vidéos',
			class: 'photos',
			description: 'Photos ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-kaki.png',
				'/images/expertise-kaki.png',
				'/images/expertise-kaki.png'
			]
		},
		{
			id: 5,
			title: 'Evenements',
			class: 'evenements',
			description: 'Evenements ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-red.png',
				'/images/expertise-red.png',
				'/images/expertise-red.png'
			]
		}
	];

	let oldExpertise = {
		class: ''
	};

	function changeExpertise(id) {
		Array.from(links.children).map((child) => {
			child.classList.remove('active');
			return child;
		});
		links.children[id].classList.add('active');
		changeContainerClass(expertise[id].class);
		title = expertise[id].title
		description = expertise[id].description
		changeImages(expertise[id].images)
	}

	function changeContainerClass(classToAdd) {
		container.classList.add(classToAdd);
		if (oldExpertise.class.length > 0) container.classList.remove(oldExpertise.class);
		oldExpertise.class = classToAdd;
	}

	function changeImages(imagesArray){
		
		wrapper.children[0].firstElementChild.src = imagesArray[0]
		wrapper.children[1].firstElementChild.src = imagesArray[1]
		wrapper.children[2].firstElementChild.src = imagesArray[2]
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
		
	});
</script>

<div class="expertise" bind:this={container}>
	<h2 bind:innerText={title} contenteditable="false">{$t('home.expertise-title')}</h2>

	<p bind:innerText={description} contenteditable="false">
		{$t('home.expertise-description')}
	</p>

	<div bind:this={links} class="links">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(0);
			}}
		>
			{$t('home.expertise-redaction')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(1);
			}}
		>
			{$t('home.expertise-relationpresse')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(2);
			}}
		>
			{$t('home.expertise-graphisme')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(3);
			}}
		>
			{$t('home.expertise-reseaux')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(4);
			}}
		>
			{$t('home.expertise-photovideo')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeExpertise(5);
			}}
		>
			{$t('home.expertise-evenements')}
		</div>
	</div>
	<div class="swiper-container">
		<div bind:this={wrapper} class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="/images/expertise-yellow.png" alt="expertise-slide" />
				<div class="btn">{$t('common.savoir+')}</div>
			</div>

			<div class="swiper-slide">
				<img src="/images/expertise-yellow.png" alt="expertise-slide" />
				<div class="btn">{$t('common.savoir+')}</div>
			</div>

			<div class="swiper-slide">
				<img src="/images/expertise-yellow.png" alt="expertise-slide" />
				<div class="btn">{$t('common.savoir+')}</div>
			</div>
		</div>
	</div>

	<div class="pagination" />
</div>

<style lang="scss" global>
	.expertise {
		background-color: rgba($color-bleu, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 32px;
		transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);

		h2 {
			text-align: center;
			padding: 64px 0 32px 0;
		}
		p {
			padding: 0 32px 64px 32px;
			text-align: center;
			color: $color-gris-dark;
			font-family: $font-secondary-light;
		}
		img {
			width: 100%;
			height: 80%;
			object-fit: contain;
			background-size: contain;
		}
		.btn{
			transition: all .3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}
		.swiper-container{
			margin-bottom: 16px;
			.swiper-slide {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
		}
		}
		
		.links {
			align-items: center;
			width: 80%;
			height: 64px;
			.link {
				transition: all .3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
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

		

		
		&.redaction {
			background-color: rgba(#e5ae1e, 0.1);

			.active{
				color: #e5ae1e !important;
			}
			.btn{
				background: #e5ae1e !important;
			}
			.swiper-pagination-bullet-active{
				background: #e5ae1e !important;
			}
		}
		&.presse {
			background-color: rgba(#e5ae1e, 0.1);


			.active{
				color: #e5ae1e !important;
			}
			.btn{
				background: #e5ae1e !important;
			}
			.swiper-pagination-bullet-active{
				background: #e5ae1e !important;
			}

		}
		&.graphisme {
			background-color: rgba(#A48BAD, 0.1);

			.active{
				color: #A48BAD !important;
			}
			.btn{
				background: #A48BAD !important;
			}
			.swiper-pagination-bullet-active{
				background: #A48BAD !important;
			}
		}
		&.reseaux{
			background-color: rgba(#2C9A9B, 0.1);
			.active{
				color: #2C9A9B !important;
			}
			.btn{
				background: #2C9A9B !important;
			}
			.swiper-pagination-bullet-active{
				background: #2C9A9B !important;
			}
		}
		&.photos{
			background-color: rgba(#989A6F, 0.1);
			.active{
				color: #989A6F !important;
			}
			.btn{
				background: #989A6F !important;
			}
			.swiper-pagination-bullet-active{
				background: #989A6F !important;
			}
		}
		&.evenements {
			background-color: rgba(#9D524F,.1);
			.active{
				color: #9D524F !important;
			}
			.btn{
				background: #9D524F !important;
			}
			.swiper-pagination-bullet-active{
				background: #9D524F !important;
			}
		}
	}
</style>
