<script>
	
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';

	import Layout from '../../+layout.svelte';
	import { goto, invalidateAll } from '$app/navigation';
	
	export let data;
	let { pointHistoires } = data;
	if(pointHistoires != null && pointHistoires.length != 0)
		pointHistoires = pointHistoires?.sort((a,b)=> a.rang - b.rang);


	const submitDeletePointHistoire  = () => {
		
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('PointHistoire supprimé!');
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
		<a href="/admin/pointHistoire" class="create-button" ><span>Créer un pointHistoire</span></a>
	</div>
	<div class="grid-view">
		<h1>
			{pointHistoires.length == 0 ? 'Aucun pointHistoire' : 'Liste des pointHistoires'}
		</h1>

		<table class="pointHistoire-table" style={pointHistoires.length == 0 ? 'display:none;' : ''}>
			<thead>
				<tr>
					<th>Prenom</th>
					<th>Rang</th>
					<th>Date de création</th>
					<th>Supprimer</th>
				</tr>
			</thead>
			<tbody>
				{#each pointHistoires as pointHistoire, index}
					<tr>
						<td
							><a href="/admin/pointHistoire/{pointHistoire.id}">{pointHistoire?.prenom ?? 'Aucun prénom'}</a
							></td
						>
						<td>{pointHistoire?.rang ?? 'Aucun rang'}</td>

						<td
							>{new Intl.DateTimeFormat('fr-FR', {
								dateStyle: 'full',
								timeStyle: 'short'
							}).format(pointHistoire?.createdAt)}</td
						>
						<td
							>
							
							
								<form action="?/delete" method="POST" use:enhance={submitDeletePointHistoire}>
									<input type="hidden" name="id" value={pointHistoire.id} />
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



	.pointHistoire-table {
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

			/* Styles spécifiques pour le contenu de la demande de pointHistoire */

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
