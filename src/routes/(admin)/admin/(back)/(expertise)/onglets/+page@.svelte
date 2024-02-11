<script>
	
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';

	import Layout from '../../+layout.svelte';
	
	export let data;
	let { expertiseOnglets } = data;

	const submitDeleteNote  = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Onglet supprimé!');
					await update(result);
					break;
				case 'failure':
					toast.error("Erreur lors de la suppression");
					await update();
					break;
				default:
					break;
			}
			
			window.location.reload();
		};
	};

</script>

<Layout>
	<div slot="buttons">
		<a href="/admin/onglet" class="create-button" ><span>Créer un nouvel onglet d'expertise</span></a>
	</div>
	<div class="grid-view">
		<h1>
			{expertiseOnglets.length == 0 ? 'Aucun onglet' : 'Liste des onglets d\'expertise'}
		</h1>

		<table class="expertiseOnglet-table" style={expertiseOnglets.length == 0 ? 'display:none;' : ''}>
			<thead>
				<tr>
					<th>Titre</th>
					<th>Rang</th>
					<th>Supprimer</th>
				</tr>
			</thead>
			<tbody>
				{#each expertiseOnglets as expertiseOnglet, index}
					<tr>
						<td
							><a href="/admin/onglet/{expertiseOnglet.id}">{expertiseOnglet?.titre ?? 'Aucun titre'}</a
							></td
						>
						<td>{expertiseOnglet?.rang ?? 'Aucun rang'}</td>

						<td
							>
							
							
								<form action="?/delete" method="POST" use:enhance={submitDeleteNote}>
									<input type="hidden" name="id" value={expertiseOnglet.id} />
									<button type="submit" class="delete-button">Supprimer</button>
								</form>

							
							</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Layout>

<style lang="scss">



	.expertiseOnglet-table {
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

	.grid-view {
		max-width: var(--tablet);
		margin: 0 auto;
		padding: 20px;
		text-align: center;
		overflow: auto;
		max-height: 90vh;

		h1 {
			font-family: var(--font-primary-bold);
			color: var(--color-rose);
		}

		.grid {
			display: grid;
			grid-template-columns: repeat(
				3,
				1fr
			); /* Trois colonnes par ligne, ajustez selon vos besoins */
			gap: 20px; /* Espacement entre les éléments */
		}

		.grid-item {
			background-color: var(--color-blanc);
			border: 1px solid var(--color-gris-clair);
			padding: 20px;

			/* Styles spécifiques pour le contenu de la demande de expertiseOnglet */

			/* Exemple de style pour le titre de la demande */
			.request-title {
				font-family: var(--font-secondary-medium);
				color: var(--color-bleu);
				font-size: 18px;
				margin-bottom: 10px;
			}

			/* Exemple de style pour les détails de la demande */
			.request-details {
				font-family: var(--font-secondary-regular);
				color: var(--color-gris-dark);
			}
		}
	}
</style>
