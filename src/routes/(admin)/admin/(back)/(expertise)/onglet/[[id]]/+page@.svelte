<script>
	import Layout from '../../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import Writer from '$lib/components/editor/Writer.svelte';

	import { goto } from '$app/navigation';

	export let data;
	let writerMethods;
	let { expertiseOnglet,expertiseIcons } = data;
	let expertiseIconValue;
	const submitCreateNote = async ({ form, data, action, cancel }) => {
		const { titre, rang} = Object.fromEntries(data);
		
		if (titre.length < 1) {
			toast.error('Titre vide !');
			cancel();
		}


		if (rang == null || isNaN(rang) || parseInt(rang) < 0) {
			toast.error('Le rang ne doit pas être vide');
			cancel();
		}
		
		data.append('id', expertiseOnglet.id ?? '');
		data.append('photoPrincipale', expertiseOnglet.photoPrincipale ?? '');
		data.append('description', await writerMethods.saveContenu() ?? '')


		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Onglet enregistré!');
					await applyAction(result);
					writerMethods.loadContenu(expertiseOnglet.description)

					break;
				case 'failure':
					toast.error("Erreur lors de l'enregistrement");
					break;
				default:
					break;
			}

			await update();

			expertiseOnglet = result.data.data;
			
			goto(`/admin/onglet/${expertiseOnglet.id}`, { invalidateAll: true });
		};
	};

	const submitDeleteNote = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Onglet supprimé!');

					break;
				case 'failure':
					toast.error('Erreur lors de la suppression');
					break;
				default:
					break;
			}
			await update();
			goto('/admin/onglets', { invalidateAll: true });
		};
	};


	const submitCreateIcon = async ({ form, data, action, cancel }) => {
		if (expertiseIconValue.length < 1) {
			toast.error('Aucun icon sélectionné !');
			cancel();
			return;
		}

		data.append('idOnglet', expertiseOnglet.id);

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Icon ajouté !');
					await applyAction(result);
					await update();
					expertiseOnglet = result.data.data.expertiseOnglet;
					expertiseIcons = result.data.data.expertiseIcons;
					expertiseIconValue = '';
					break;
				case 'failure':
					toast.error("Erreur lors de l'enregistrement");
					break;
				case 'error':
					toast.error("Erreur lors de l'enregistrement");
					break;
				default:
					break;
			}
		};
	};

	const submitDeleteIcon = ({ form, data, action, cancel }) => {
		
		data.append('idOnglet', expertiseOnglet.id);

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Icon supprimé!');
					await update();
					expertiseOnglet = result.data.data.expertiseOnglet;
					expertiseIcons = result.data.data.expertiseIcons;
					break;
				case 'failure':
					toast.error('Erreur lors de la suppression');
					break;
				default:
					break;
			}
		};
	};
</script>

<Layout>
	<div slot="buttons">
		<button
			class="back-button"
			on:click={() => {
				goto('/admin/onglets');
			}}>Retour aux onglets</button
		>
		{#if expertiseOnglet.id != null && expertiseOnglet.id.length != 0}
			<form action="?/delete" method="POST" use:enhance={submitDeleteNote}>
				<input type="hidden" name="id" value={expertiseOnglet.id} />
				<button type="submit" class="delete-button">Supprimer</button>
			</form>
		{/if}
	</div>

	<div>
		<h1>Formulaire d'Onglet</h1>

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
				<label for="cssClass">Couleur</label>
				<select id="cssClass" name="cssClass" bind:value={expertiseOnglet.cssClass}>
					<option value="yellow">Jaune</option>
					<option value="pink">Rose</option>
					<option value="blue">Bleu</option>
					<option value="kaki">Kaki</option>
					<option value="red">Rouge</option>
				</select>
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
				<label for="file">Image de l'Onglet</label>
				<input
					type="file"
					name="photoPrincipaleFile"
					accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				/>
				{#if expertiseOnglet.photoPrincipale != null && expertiseOnglet.photoPrincipale.length != 0}
					<img src={expertiseOnglet.photoPrincipale} alt={expertiseOnglet.titre} />
				{/if}
			</div>


			
			<div class="form-group">
				<label for="description">Description</label>
				
				<div id="contenu" class="contenu" name="description" required >
					<Writer bind:methods={writerMethods} contenu="{expertiseOnglet.description}"/>
				</div>
			</div>
			

			<button type="submit" for="envoyer" value="envoyer" class="submit-button">Enregistrer</button>
		</form>


		{#if expertiseOnglet != null && expertiseOnglet.expertiseIcons != null}
		<br /><br />

		<div class="client-form">
			<h3>Icons</h3>

			<form
				class="attache-form"
				method="POST"
				action="?/createIcon"
				use:enhance={submitCreateIcon}
			>
				<div class="form-group">
					<label for="idIcon">Ajouter un Icon</label>
					<select id="idIcon" name="idIcon" bind:value={expertiseIconValue}>
						<option value="">Aucun</option>
						{#each expertiseIcons as expertiseIcon}
							<option value={expertiseIcon.id}>{expertiseIcon.titre}</option>
						{/each}
					</select>
				</div>
				<button type="submit" for="envoyer" value="envoyer" class="submit-button">Ajouter</button>
			</form>
			<br /><br />

			<table class="presse-table">
				<thead>
					<tr>
						<th>Nom</th>
						<th>Rang</th>
						<th>Supprimer</th>
					</tr>
				</thead>
				<tbody>
					{#each expertiseOnglet.expertiseIcons as expertiseIcon, index}
						<tr>
							<td><a target="_blank" href="/admin/icon/{expertiseIcon.id}" >{expertiseIcon?.titre ?? 'Aucun nom'}</a> </td>
			
							<td>{expertiseIcon?.rang ?? 'Aucun rang'}</td>

							<td>
								<form
									action="?/deleteIcon"
									method="POST"
									use:enhance={submitDeleteIcon}
								>
									<input type="hidden" name="idIcon" value={expertiseIcon.id} />
									<button type="submit" class="delete-button">Supprimer</button>
								</form>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			<br /><br />
		</div>
	{/if}
	</div>
</Layout>

<style lang="scss">
.presse-table {
		width: 100%;
		border-collapse: collapse;

		th,
		td {
			border: 1px solid var(--color-gris-clair);
			padding: 10px;
			text-align: left;
			a {
				color: #000;
				&:hover {
					color: var(--color-rose);
				}
			}
		}

		th {
			background-color: var(--color-jaune);
			color: var(--color-blanc);
			font-family: var(--font-secondary-bold);
		}

		td {
			font-family: var(--font-secondary-regular);
		}

		.delete-button {
			background-color: var(--color-rose); /* Couleur de fond */
			color: var(--color-blanc); /* Couleur du texte */
			padding: 10px 20px; /* Espacement interne */
			font-family: var(--font-secondary-bold); /* Police */
			border: none; /* Supprime la bordure */
			cursor: pointer; /* Curseur au survol */
			width: 100%;
			transition: background-color 0.3s ease; /* Transition au survol */
			&:hover {
				background-color: var(--color-bordeaux); /* Couleur de fond au survol */
			}
		}

		tbody tr:nth-child(even) {
			background-color: var(--color-gris-clair);
		}
	}


	.expertiseOnglet-form ,.client-form{
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
			select,
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
