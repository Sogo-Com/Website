<script>
	
	import { onMount } from 'svelte';
	import ProjetRow from '$lib/components/ProjetRow.svelte';

	export let data
	const { projets } = data

	let container;
	let links;

	const projetsData = [
		{
			id: 0,
			class: 'redaction'
		},
		{
			id: 1,
			class: 'presse'
		},
		{
			id: 2,
			class: 'graphisme'
		},
		{
			id: 3,
			class: 'reseaux'
		},
		{
			id: 4,
			class: 'photos'
		},
		{
			id: 5,
			class: 'evenements'
		}
	];

	let oldProjets = {
		class: ''
	};

	function changeProjet(id) {
		Array.from(links.children).map((child) => {
			child.classList.remove('active');
			return child;
		});
		links.children[id].classList.add('active');
		changeContainerClass(projet[id].class);
		title = projet[id].title;
		description = projet[id].description;
		changeImages(projet[id].images);
	}

	function changeContainerClass(classToAdd) {
		container.classList.add(classToAdd);
		if (oldProjet.class.length > 0) container.classList.remove(oldProjet.class);
		oldProjet.class = classToAdd;
	}

	onMount((_) => {});
</script>

<div id="top">
	<h1>Nos projets</h1>
	<img alt="background-sogo" src="/images/projet-bg.png" />
</div>
<div class="gris">
	<div class="question gris-child">
		<h2>
			Que fait-on <br />
			chez Sogo Com ?
		</h2>
	</div>

	<div class="reponse gris-child">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
			luctus.
		</p>
		<br />
		<p>
			Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem
			ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus.
		</p>
		<br />
		<p>
			Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem
			ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus.
		</p>
	</div>
</div>

<div class="projet" bind:this={container}>
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
			Relation de presse
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
			Photos et vidéos
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="link"
			on:click={() => {
				changeProjet(5);
			}}
		>
			Évenements
		</div>
	</div>

	{#each projets as projet, index}
	<ProjetRow
		isLeft="{index % 2 != 0}"
		imgLeft="{index % 2 != 0 ? projet.photoLogo : projet.photo}"
		imgRight="{index % 2 == 0 ? projet.photoLogo : projet.photo}"
		description="{projet.descriptionCourte}"
		title="{projet.titre}"
		,
		link="/projets/{projet.id}"
	/>

{/each}

	<ProjetRow
		isLeft="true"
		imgLeft="/images/tomme-bauges.png"
		imgRight="/images/livre.png"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
		luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar
		condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque
		facilisis orci at luctus."
		title="Tome des Bauges"
		,
		link="/projets/1"
	/>

	<ProjetRow
		isLeft="false"
		imgLeft="/images/bouteille.png"
		imgRight="/images/distillerie.png"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
		luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar
		condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque
		facilisis orci at luctus."
		title="Distillerie St Esprit"
		,
		link="/projets/1"
	/>

	<ProjetRow
		isLeft="true"
		imgLeft="/images/st-marcellin.png"
		imgRight="/images/livre.png"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
		luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar
		condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque
		facilisis orci at luctus."
		title="St Marcellin"
		,
		link="/projets/1"
	/>
</div>

<style lang="scss">
	#top {
		height: 100vh;
		position: relative;
		display: flex;

		@media only screen and (max-width:$phone) {
			height: 50vh;
			align-items: end;
		}
		h1 {
			color: #fff;
			text-align: left;
			padding: 256px 11%;
			z-index: 15;
			position: relative;

			@media only screen and (max-width:$phone) {
				padding: 64px 8px;
				width: 100%;
				text-align: center;
			}
			
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

	.gris {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: $color-gris-clair;
	
		@media only screen and (max-width: $phone) {
			flex-direction: column;
			margin: 0;
			padding:32px 12px ;
		}
		.gris-child {
			flex-basis: 50%;
			@media only screen and (max-width: $phone) {
				flex-basis: 100%;
				width: 100%;
			}	
		}
		.question {
			@media only screen and (max-width: $phone) {
				flex-direction: column;
				padding:0;
				text-align: center	;
			}	

			padding: 128px 64px 128px 11%;

			h2 {
				color: $color-gris-dark;
			}
		}

		.reponse {
			padding: 128px 11% 128px 64px;
			@media only screen and (max-width: $phone) {
				flex-direction: column;
				padding: 0;
			}
		}
	}

	.projet {
		background-color: rgba($color-bleu, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 64px 0;
		transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		background-color: #fff;

		@media only screen and (max-width: $phone) {
			
				padding:32px 0px;
		}	

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
	}
</style>
