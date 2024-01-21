<script>
	import Layout from '../../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';

	import { goto } from '$app/navigation';

	export let data;
	
	let { expertiseOnglet } = data;
	let video = expertiseOnglet.isVideo != null ?  expertiseOnglet.isVideo : false;

	let illustrationValue = expertiseOnglet.photoIllustration;
	const submitCreateNote = async ({ form, data, action, cancel }) => {
		const { titre, description, isVideo, rang } = Object.fromEntries(data);

		if (titre.length < 1) {
			toast.error('Titre vide !');
			cancel();
		}

		if (description.length < 1) {
			toast.error('Description vide !');
			cancel();
		}

		if (rang == null || isNaN(rang) || parseInt(rang) < 0) {
			toast.error('Le rang ne doit pas être vide');
			cancel();
		}
		
		data.append('id', expertiseOnglet.id ?? '');
		data.append('photoIconActive', expertiseOnglet.photoIconActive ?? '');
		data.append('photoIconInactive', expertiseOnglet.photoIconInactive ?? '');
		data.append('photoIllustration', expertiseOnglet.photoIllustration ?? '');
		data.append('isVideoChecked', isVideo == "on");

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Icon enregistré!');
					await applyAction(result);

					break;
				case 'failure':
					toast.error("Erreur lors de l'enregistrement");
					break;
				default:
					break;
			}

			await update();

			expertiseOnglet = result.data.data;
			video = expertiseOnglet.isVideo != null ?  expertiseOnglet.isVideo : false;
			
			goto(`/admin/icon/${expertiseOnglet.id}`, { invalidateAll: true });
		};
	};

	const submitDeleteNote = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Icon supprimé!');

					break;
				case 'failure':
					toast.error('Erreur lors de la suppression');
					break;
				default:
					break;
			}
			await update();
			goto('/admin/icons', { invalidateAll: true });
		};
	};
</script>

<Layout>
	<div slot="buttons">
		<button
			class="back-button"
			on:click={() => {
				goto('/admin/icons');
			}}>Retour aux icons</button
		>
		{#if expertiseOnglet.id != null && expertiseOnglet.id.length != 0}
			<form action="?/delete" method="POST" use:enhance={submitDeleteNote}>
				<input type="hidden" name="id" value={expertiseOnglet.id} />
				<button type="submit" class="delete-button">Supprimer</button>
			</form>
		{/if}
	</div>

	<div>
		<h1>Formulaire d'Icon</h1>

		<form method="POST" action="?/create" class="expertiseOnglet-form" use:enhance={submitCreateNote}>
			<div class="form-group">
				<label for="titre">Titre</label>
				<input
					id="titre"
					name="titre"
					bind:value={expertiseOnglet.titre}
					contenteditable="true"
					type="text"
				/>
			</div>

			<div class="form-group">
				<label for="rang">Rang</label>
				<input
					id="rang"
					name="rang"
					bind:value={expertiseOnglet.rang}
					contenteditable="true"
					type="number"
					min="1"
					step="1"
				/>
			</div>

			<div class="form-group">
				<label for="description">Description</label>
				<textarea
					id="description"
					rows="3"
					cols="45"
					name="description"
					bind:value={expertiseOnglet.description}
					contenteditable="true"
					type="text"
				/>
			</div>

			<div class="form-group">
				<label for="file">Image Icon Actif</label>
				<input
					type="file"
					name="photoIconActiveFile"
					accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				/>
				{#if expertiseOnglet.photoIconActive != null && expertiseOnglet.photoIconActive.length != 0}
					<img src={expertiseOnglet.photoIconActive} alt={expertiseOnglet.titre} />
				{/if}
			</div>

			<div class="form-group">
				<label for="file">Image Icon Inactif</label>
				<input
					type="file"
					name="photoIconInactiveFile"
					accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				/>
				{#if expertiseOnglet.photoIconInactive != null && expertiseOnglet.photoIconInactive.length != 0}
					<img src={expertiseOnglet.photoIconInactive} alt={expertiseOnglet.titre} />
				{/if}
			</div>

			<div class="form-group">
				<label for="isVideo">L'illustration est une vidéo</label>
				<input id="isVideo" name="isVideo" type="checkbox" bind:checked="{expertiseOnglet.isVideo}" />
			</div>

			<div class="form-group">
				<label for="file">Image / Video Illustrative</label>
				<input
					type="file"
					name="photoIllustrationFile"
					accept={['.jpg', '.jpeg', '.png', '.webp',".mp4"].join(',')}
				/>

				{#if  expertiseOnglet.photoIllustration != null && expertiseOnglet.photoIllustration.length != 0}
					{#if video}
						<video controls>
							<source src={illustrationValue} type="video/mp4" />
							<track kind="captions" />
						</video>
					{:else}
						<img src={illustrationValue} alt={expertiseOnglet.titre} />
					{/if}
					
				{/if}
			</div>

			<button type="submit" for="envoyer" value="envoyer" class="submit-button">Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.expertiseOnglet-form {
		margin: 0px 20px;
		padding: 20px;
		background-color: var(--color-blanc);
		border: 1px solid var(--color-gris-clair);

		.form-group {
			margin-bottom: 20px;

			img,video {
				margin-top: 20px;
				width: 100%;
				height: auto;
				object-fit: cover;
				max-height: 300px;
			}

			label {
				font-family: var(--font-secondary-medium);
				color: var(--color-gris-dark);
				margin-bottom: 5px;
				display: block;
			}

			input[type='text'],
			input[type='number'],
			textarea,
			.contenu {
				width: 100%;
				padding: 10px;
				border: 1px solid var(--color-gris-clair);
				font-family: var(--font-secondary-regular);
				background: white;
			}

			input[type='checkbox'] {
				width: 20px;
				height: 20px;
				margin-left: 10px;
				-webkit-appearance: auto;
			}
		}

		.submit-button {
			background-color: var(--color-save);
			color: var(--color-blanc);
			padding: 10px 20px;
			font-family: var(--font-secondary-bold);
			border: none;
			cursor: pointer;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: var(--color-bleu);
			}
		}
	}
</style>
