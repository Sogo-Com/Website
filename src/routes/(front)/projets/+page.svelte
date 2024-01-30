<script>
	import { onMount } from 'svelte';
	import ProjetRow from '$lib/components/ProjetRow.svelte';
	import { enhance, applyAction } from '$app/forms';
	import { invalidate, invalidateAll } from '$app/navigation';

	export let data;
	let { projets } = data;

	let container;
	let links;

	const typesProjets = ['redaction', 'presse', 'graphisme', 'reseaux', 'photos', 'evenements'];

	let oldProjet = {
		class: ''
	};

	function changeProjet(id) {
		Array.from(links.children).map((child) => {
			child.querySelector('.link').classList.remove('active');
			return child;
		});
		links.querySelectorAll(`.link`).item(id).classList.add('active');
		changeContainerClass(typesProjets[id]);
	}

	function changeContainerClass(classToAdd) {
		container.classList.add(classToAdd);
		if (oldProjet.class.length > 0 && classToAdd != oldProjet.class) container.classList.remove(oldProjet.class);
		oldProjet.class = classToAdd;
	}

	const submitFindProjets = () => {
		return async ({ result, update, data, cancel }) => {
			const form = Object.fromEntries(data);
			const { typeProjet = null } = form;

			switch (result.type) {
				case 'success':
					projets = result.data.data;
					await update();
					window?.refreshAnimations();
					changeProjet(typesProjets.indexOf(typeProjet));

					break;
				case 'failure':
					await update();
					break;
				default:
					break;
			}
		};
	};

	onMount((_) => {

		changeProjet(0)

	});
</script>

<div id="top">
	<h1 animate>Des projets <br>qui fusent</h1>
	<img alt="background-sogo" src="/images/NosProjets_Header_SogoCom.jpg?width=1800&height=1800" />
</div>
<div class="gris">
	<div class="question gris-child">
		<h2 animate>
			L'écoute et l'attention <br />
			pour missions.
		</h2>
	</div>

	<div class="reponse gris-child">
		<p animate>
			Chez Sogo Com les projets se suivent mais ne se ressemblent jamais !
			<br><br>
			A chacun son identité, nous respectons votre ADN pour élaborer ensemble des projets sur-mesure qui collent parfaitement à l’image que vous en attendiez ou encore imaginer les supports dont vous n’osiez pas rêver. 
			
		</p>

		
	</div>
</div>
{#if projets != null && projets.length > 0}
<div class="projet" bind:this={container}>
	<div bind:this={links} class="links">
		<form action="?/find" method="POST" use:enhance={submitFindProjets}>
			<input type="hidden" name="typeProjet" value="redaction" />
			<button type="submit" class="link">Rédaction</button>
		</form>
		<form action="?/find" method="POST" use:enhance={submitFindProjets}>
			<input type="hidden" name="typeProjet" value="presse" />
			<button type="submit" class="link">Relations presse</button>
		</form>

		<form action="?/find" method="POST" use:enhance={submitFindProjets}>
			<input type="hidden" name="typeProjet" value="graphisme" />
			<button type="submit" class="link">Graphisme</button>
		</form>

		<form action="?/find" method="POST" use:enhance={submitFindProjets}>
			<input type="hidden" name="typeProjet" value="reseaux" />
			<button type="submit" class="link">
				Réseaux sociaux</button>
		</form>
		<form action="?/find" method="POST" use:enhance={submitFindProjets}>
			<input type="hidden" name="typeProjet" value="photos" />
			<button type="submit" class="link">Photos & vidéos</button>
		</form>

		<form action="?/find" method="POST" use:enhance={submitFindProjets}>
			<input type="hidden" name="typeProjet" value="evenements" />
			<button type="submit" class="link">
				Événements</button>
		</form>
	</div>

	{#each projets as projet, index}
		<ProjetRow
			isLeft={index % 2 == 0}
			imgLeft={index % 2 == 0 ? projet.photoLogo : projet.photo}
			imgRight={index % 2 != 0 ? projet.photoLogo : projet.photo}
			description={projet.descriptionCourte}
			title={projet.titre}
			,
			customClass={projet.typeProjet}
			link="/projets/{projet.id}"
		/>
	{/each}
</div>

{/if}

<style lang="scss">
	#top {
		height: 80vh;
		position: relative;
		display: flex;
		align-items: end;

		@media only screen and (max-width: $phone) {
			height: 50vh;
			align-items: end;
		}
		h1 {
			color: #fff;
			text-align: left;
			padding: 64px 11%;
			z-index: 15;
			position: relative;
			height: fit-content;

			@media only screen and (max-width: $phone) {
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
			padding: 32px 12px;
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
				padding: 0;
				text-align: center;
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
		padding-top: 64px;
		transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		background-color: #fff;

		@media only screen and (max-width: $phone) {
			padding: 32px 12px;
		}


		.links {
			align-items: center;
			width: 80%;
			height: 64px;

			@media only screen and (max-width: $phone) {
				height: fit-content;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
				margin-top: 32px;
				width: 100%;

			}

			form {
				padding: 16px;
				
				@media only screen and (max-width: $phone) {
					padding: 16px 8px;
					border: none;
					flex-basis:50%;
					justify-content: start  !important;
					align-items: start !important;
					text-align: left;
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
