<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { t } from '$lib/translations';
	import Swiper from 'swiper';
	import { Pagination } from 'swiper/modules';
	import 'swiper/css';

    let container;
	let links;
    
	const expertise = [
		{
			id: 0,
			title: 'Graphisme',
            class : "graphisme",
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-slide.png',
				'/images/expertise-slide.png',
				'/images/expertise-slide.png'
			]
		},
		{
			id: 1,
			title: 'Réseaux sociaux',
            class : "reseaux",
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-slide.png',
				'/images/expertise-slide.png',
				'/images/expertise-slide.png'
			]
		},
		{
			id: 2,
			title: 'Evénements',
            class : "evenements",
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-slide.png',
				'/images/expertise-slide.png',
				'/images/expertise-slide.png'
			]
		},
		{
			id: 3,
			title: 'Photo & Vidéo',
            class : "photos",
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-slide.png',
				'/images/expertise-slide.png',
				'/images/expertise-slide.png'
			]
		},
		{
			id: 4,
			title: 'Relation presse',
            class : "presse",
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-slide.png',
				'/images/expertise-slide.png',
				'/images/expertise-slide.png'
			]
		},
		{
			id: 5,
			title: 'Rédaction',
            class : "redaction",
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			images: [
				'/images/expertise-slide.png',
				'/images/expertise-slide.png',
				'/images/expertise-slide.png'
			]
		}
	];

    let oldExpertise = {
        class : ""
    }



	function changeExpertise(id) {
		Array.from(links.children).map((child) => {
			child.classList.remove('active');
			return child;
		});
		links.children[id].classList.add('active');
        changeContainerClass(expertise[id].class)
        
	}

    function changeContainerClass(classToAdd){
            
        container.classList.add(classToAdd)
        if(oldExpertise.class.length > 0)
            container.classList.remove(oldExpertise.class)
        oldExpertise.class = classToAdd
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

<div class="expertise"  bind:this={container}>
	<h2>{$t('home.expertise-title')}</h2>

	<p>
		{$t('home.expertise-description')}
	</p>

	<div bind:this={links} class="links">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link active"
			on:click={() => {
			    changeExpertise(0)
			}}
		>
			{$t('home.expertise-graphisme')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				   changeExpertise(1)
			}}
		>
			{$t('home.expertise-reseaux')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
			   changeExpertise(2)
			}}
		>
			{$t('home.expertise-evenements')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
			   changeExpertise(3)
			}}
		>
			{$t('home.expertise-photovideo')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				   changeExpertise(4)
			}}
		>
			{$t('home.expertise-relationpresse')}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				   changeExpertise(5)
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

		&.graphisme{
            background-color: rgba(#E5AE1E, .1);
   		}


      
	}

 


</style>
