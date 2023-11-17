<script>
	import Layout from '../../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';

	import { goto, } from '$app/navigation';

	export let data;
	let { collaborateur } = data;
	
	
	const submitCreateCollaborateur = async ({ form, data, action, cancel }) => {

		const { prenom,rang, descriptionCourte} = Object.fromEntries(data);

		if (prenom.length < 1) {
			toast.error('Titre vide !');
			cancel();
		}

		if (rang == null || isNaN(rang) ||  parseInt(rang) < 1) {
			toast.error(' Le rang doit être un nombre et supperieur à 0 !');
			cancel();
		}

		if (descriptionCourte.length < 1) {
			toast.error('Description courte vide !');
			cancel();
		}


		data.append('id', collaborateur.id)
		data.append('photoActive', collaborateur.photoActive ?? '')
		data.append('photoInactive', collaborateur.photoInactive ?? '')

		
		return async ({ result, update }) => {
			
			switch (result.type) {
				case 'success':
					toast.success('Collaborateur enregistré!');
					await applyAction(result)
			
					await update();
			
					collaborateur = result.data.data
					goto(`/admin/collaborateur/${collaborateur.id}`,{invalidateAll: true})
					writerMethods.loadContenu(collaborateur.contenu)

					break;
				case 'failure':
					toast.error("Erreur lors de l'enregistrement");
					
					await update();
					break;
				case 'error':
					toast.error("Erreur lors de l'enregistrement");
					
					await update();
					break;
				default:
					break;
			}


		};
	};

	const submitDeleteCollaborateur  = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Collaborateur supprimé!');
					
					break;
				case 'failure':
					toast.error("Erreur lors de la suppression");
					break;
				default:
					break;
			}
			await update();
			goto("/admin/collaborateurs", { invalidateAll: true })
		};
	};

</script>

<Layout>
	<div slot="buttons">
		<button class="back-button" on:click={()=>{goto("/admin/collaborateurs")}}>Retour aux collaborateurs</button>
		{#if collaborateur.id != null && collaborateur.id.length != 0}

			<form action="?/delete" method="POST" use:enhance={submitDeleteCollaborateur}>
				<input type="hidden" name="id" value={collaborateur.id} />
				<button type="submit" class="delete-button">Supprimer</button>
			</form>

		{/if}
	
	</div>

	<div>
		<h1>Formulaire de Collaborateur</h1>

		<form method="POST" action="?/create" class="collaborateur-form"  use:enhance={submitCreateCollaborateur}>
			<div class="form-group">
				<label for="prenom">Titre</label>
				<input id="prenom" name="prenom" bind:value={collaborateur.prenom} contenteditable="true" type="text"  />
			</div>


			<div class="form-group">
				<label for="rang">Rang</label>
				<input id="rang" name="rang" type="number" min="1" max="1000" step="1" bind:value={collaborateur.rang}   />
			</div>
			

			<div class="form-group">
				<label for="photoInactiveFile">Image Inactive</label>
				<input
				  type="file"
				  id="photoInactiveFile"
				  name="photoInactiveFile"
				  accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				  
				/>
				{#if collaborateur.photoInactive != null && collaborateur.photoInactive.length != 0}
					<img src={collaborateur.photoInactive} alt={collaborateur.prenom} />
				{/if}
			  </div>

			  
			<div class="form-group">
				<label for="photoActiveFile">Image Active</label>
				<input
				  type="file"
				  id="photoActiveFile"
				  name="photoActiveFile"
				  accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				  
				/>
				{#if collaborateur.photoActive != null && collaborateur.photoActive.length != 0}
					<img src={collaborateur.photoActive} alt={collaborateur.prenom} />
				{/if}
			  </div>




			<div class="form-group">
				<label for="descriptionCourte">Description courte (200 caracteres max)</label>
				<textarea id="descriptionCourte" rows="3" cols="45"  maxlength="200" name="descriptionCourte" bind:value={collaborateur.descriptionCourte} contenteditable="true" type="text"  />
			</div>


			
			<div class="form-group">
				<label for="description">Description</label>
				<textarea id="description" rows="8" cols="45"   name="description" bind:value={collaborateur.description} contenteditable="true" type="text"  />
			</div>

			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.collaborateur-form {
		margin: 0px 20px;
		padding: 20px;
		background-color: var(--color-blanc);
		border: 1px solid var(--color-gris-clair);

		.form-group {
			margin-bottom: 20px;

			img{
				margin-top: 20px;
				width: 100%;
				height: auto;
				object-fit: contain;
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
