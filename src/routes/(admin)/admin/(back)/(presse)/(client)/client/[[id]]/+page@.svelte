<script>
	import Layout from '../../../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import Writer from '$lib/components/editor/Writer.svelte';

	import { goto } from '$app/navigation';

	export let data;
	let { client, domaines, attachePresses } = data;

	let attachePresseValue = '';
	let clientDomaineValue = '';

	const submitCreateClient = async ({ form, data, action, cancel }) => {
		const { nom } = Object.fromEntries(data);

		if (nom.length < 1) {
			toast.error('Nom vide !');
			cancel();
		}

		data.append('photoLogo', client?.photoLogo ?? '');
		data.append('photoAvant1', client?.photoAvant1 ?? '');
		data.append('photoAvant2', client?.photoAvant2 ?? '');

		data.append('id', client.id);

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Client enregistré!');
					await applyAction(result);

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

			await update();

			client = result.data.data;
			console.log(client);
			goto(`/admin/client/${client.id}`, { invalidateAll: true });
		};
	};

	const submitDeleteClient = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Client supprimé!');

					break;
				case 'failure':
					toast.error('Erreur lors de la suppression');
					break;
				default:
					break;
			}
			await update();
			goto('/admin/clients', { invalidateAll: true });
		};
	};

	const submitCreateAttache = async ({ form, data, action, cancel }) => {
		if (attachePresseValue.length < 1) {
			toast.error('Aucun attaché de presse sélectionné !');
			cancel();
			return;
		}

		data.append('idClient', client.id);

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Attaché de presse ajouté !');
					await applyAction(result);
					await update();
					client = result.data.data.client;
					attachePresses = result.data.data.attachePresses;

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

			// goto(`/admin/client/${client.id}`, { invalidateAll: true });
		};
	};

	const submitDeleteAttachePresse = ({ form, data, action, cancel }) => {
		data.append('idClient', client.id);

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Attaché de presse supprimé!');
					await update();
					client = result.data.data.client;
					attachePresses = result.data.data.attachePresses;
					break;
				case 'failure':
					toast.error('Erreur lors de la suppression');
					break;
				default:
					break;
			}

			// goto('/admin/clients', { invalidateAll: true });
		};
	};
</script>

<Layout>
	<div slot="buttons">
		<button
			class="back-button"
			on:click={() => {
				goto('/admin/clients');
			}}>Retour aux clients</button
		>
		{#if client.id != null && client.id.length != 0}
			<form action="?/delete" method="POST" use:enhance={submitDeleteClient}>
				<input type="hidden" name="id" value={client.id} />
				<button type="submit" class="delete-button">Supprimer</button>
			</form>
		{/if}
	</div>

	<div>
		<h1>
			{client.id != null && client.id.length != 0
				? "Création d'un client"
				: "Modification d'un client"}
		</h1>

		<form method="POST" action="?/create" class="client-form" use:enhance={submitCreateClient}>
			<div class="form-group">
				<label for="nom">Nom</label>
				<input id="nom" name="nom" bind:value={client.nom} contenteditable="true" type="text" />
			</div>

			<div class="form-group">
				<label for="domaineId">Domaine</label>
				<select id="domaineId" name="domaineId" bind:value={client.domaineId}>
					{#each domaines as domaine}
						<option value={domaine.id}>{domaine.nom}</option>
					{/each}
				</select>
			</div>

			<div class="form-group">
				<label for="photoLogo">Image Logo</label>
				<input
					type="file"
					id="photoLogo"
					name="photoLogoFile"
					accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				/>
				{#if client.photoLogo != null && client.photoLogo.length != 0}
					<img src={client.photoLogo} alt={client.nom} />
				{/if}
			</div>

			<div class="form-group">
				<label for="photoAvant1">Image en avant (1ère)</label>
				<input
					type="file"
					id="photoAvant1"
					name="photoAvant1File"
					accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				/>
				{#if client.photoAvant1 != null && client.photoAvant1.length != 0}
					<img src={client.photoAvant1} alt={client.nom} />
				{/if}
			</div>

			<div class="form-group">
				<label for="photoAvant2">Image en avant (2eme)</label>
				<input
					type="file"
					id="photoAvant2"
					name="photoAvant2File"
					accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				/>
				{#if client.photoAvant2 != null && client.photoAvant2.length != 0}
					<img src={client.photoAvant2} alt={client.nom} />
				{/if}
			</div>

			<button type="submit" for="envoyer" value="envoyer" class="submit-button">Enregistrer</button>
		</form>
		{#if client != null && client.attachePresses != null}
			<br /><br />

			<div class="client-form">
				<h3>Attachés de presse</h3>

				<form
					class="attache-form"
					method="POST"
					action="?/createAttache"
					use:enhance={submitCreateAttache}
				>
					<div class="form-group">
						<label for="idAttache">Ajouter un attaché de presse </label>
						<select id="idAttache" name="idAttache" bind:value={attachePresseValue}>
							<option value="">Aucun</option>
							{#each attachePresses as attachePresse}
								<option value={attachePresse.id}>{attachePresse.nom}</option>
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
							<th>Email</th>
							<th>Telephone</th>
							<th>Supprimer</th>
						</tr>
					</thead>
					<tbody>
						{#each client.attachePresses as attachePresse, index}
							<tr>
								<td>{attachePresse?.nom ?? 'Aucun nom'}</td>
								<td>{attachePresse?.telephone ?? 'Aucun nom'}</td>
								<td>{attachePresse?.email ?? 'Aucun nom'}</td>

								<td>
									<form
										action="?/deleteAttache"
										method="POST"
										use:enhance={submitDeleteAttachePresse}
									>
										<input type="hidden" name="idAttache" value={attachePresse.id} />
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

	.client-form {
		margin: 0px 20px;
		padding: 20px;
		background-color: var(--color-blanc);
		border: 1px solid var(--color-gris-clair);

		.attache-form {
			display: flex;
			width: 100%;
			justify-content: space-between;

			.form-group {
				width: 100%;
				padding: 0 10px;
			}

			button {
				margin: 20px;
			}
		}

		.form-group {
			margin-bottom: 20px;

			img {
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
			select,
			.contenu {
				width: 100%;
				padding: 10px;
				border: 1px solid var(--color-gris-clair);
				font-family: var(--font-secondary-regular);
				background: white;
			}
		}

		.submit-button {
			background-color: var(--color-jaune);
			color: var(--color-blanc);
			padding: 10px 20px;
			font-family: var(--font-secondary-bold);
			border: none;
			cursor: pointer;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: var(--color-bordeaux);
			}
		}
	}
</style>
