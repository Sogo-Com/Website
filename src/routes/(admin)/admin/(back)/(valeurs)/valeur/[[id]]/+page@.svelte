<script>
	import Layout from '../../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';

	import { goto, } from '$app/navigation';

	export let data;
	let { valeur } = data;
	
	
	const submitCreatevaleur = async ({ form, data, action, cancel }) => {

		const { titre, description,rang} = Object.fromEntries(data);

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
		

		data.append('id', valeur.id)
		data.append('photo', valeur.photo ?? '')
		
		return async ({ result, update }) => {
			
			switch (result.type) {
				case 'success':
					toast.success('valeur historique enregistré!');
					await applyAction(result)
			
					await update();
					valeur = result.data.data
					goto(`/admin/valeur/${valeur.id}`,{invalidateAll: true})
					valeur = result.data.data
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

	const submitDelete  = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Valeur supprimé!');
					
					break;
				case 'failure':
					toast.error("Erreur lors de la suppression");
					break;
				default:
					break;
			}
			await update();
			goto("/admin/valeurs", { invalidateAll: true })
		};
	};
</script>

<Layout>
	<div slot="buttons">
		<button class="back-button" on:click={()=>{goto("/admin/valeurs")}}>Retour aux valeurs</button>
		{#if valeur.id != null && valeur.id.length != 0}

		<form action="?/delete" method="POST" use:enhance={submitDelete}>
			<input type="hidden" name="id" value={valeur.id} />
			<button type="submit" class="delete-button">Supprimer</button>
		</form>

	{/if}

	</div>

	<div>
		<h1>Formulaire de valeur</h1>


		<form method="POST" action="?/create" class="valeur-form"  use:enhance={submitCreatevaleur}>
			
		

			
			<div class="form-group">
				<label for="photoFile">Photo</label>
				<input
				  type="file"
				  id="photoFile"
				  name="photoFile"
				  accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				  
				/>
				{#if valeur.photo != null && valeur.photo.length != 0}
					<img src={valeur.photo} alt={valeur.titre} />
				{/if}
			  </div>


			<div class="form-group">
				<label for="titre">Titre</label>
				<input id="titre" name="titre" bind:value={valeur.titre} contenteditable="true" type="text"  />
			</div>


			<div class="form-group">
				<label for="description">Description </label>
				<textarea id="description" rows="3" cols="45" name="description" bind:value={valeur.description} contenteditable="true" type="text"  />
			</div>


			<div class="form-group">
				<label for="rang">Rang</label>
				<input
					id="rang"
					name="rang"
					bind:value={valeur.rang}
					contenteditable="true"
					type="number"
					min="1"
					step="1"
				/>
			</div>

			

			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.valeur-form {
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
