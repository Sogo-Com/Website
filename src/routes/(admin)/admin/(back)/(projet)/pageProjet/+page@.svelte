<script>
	import Layout from '../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';

	import { goto, } from '$app/navigation';

	export let data;
	let { pageProjet } = data;
	
	const submitCreatepageProjet = async ({ form, data, action, cancel }) => {

		const { titre,h2,description,} = Object.fromEntries(data);

	
        
		if (titre.length < 1) {
			toast.error('Citation vide !');
			cancel();
		}


		if (h2.length < 1) {
			toast.error('Sous-titre vide !');
			cancel();
		}

		if (description.length < 1) {
			toast.error('Description vide !');
			cancel();
		}

		data.append('id', pageProjet.id)
		data.append('photoPrincipale', pageProjet.photoPrincipale ?? '')

		
		
		return async ({ result, update }) => {
			
			switch (result.type) {
				case 'success':
					toast.success('page Projet enregistré!');
					await applyAction(result)
			
					await update();
			
					pageProjet = result.data.data
					goto(`/admin/pageProjet`,{invalidateAll: true})
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

</script>

<Layout>
	<div slot="buttons">
	

	
	</div>

	<div>
		<h1>Formulaire de la page Projet</h1>

		<form method="POST" action="?/create" class="pageProjet-form"  use:enhance={submitCreatepageProjet}>

			<div class="form-group">
				<label for="titre">Titre</label>
				<textarea id="titre" name="titre" bind:value={pageProjet.titre} rows="3" contenteditable="true" type="text"  />
			</div>

			<div class="form-group">
				<label for="photoPrincipaleFile">Photo principale</label>
				<input
				  type="file"
				  id="photoPrincipaleFile"
				  name="photoPrincipaleFile"
				  accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				  
				/>
				{#if pageProjet.photoPrincipale != null && pageProjet.photoPrincipale.length != 0}
					<img src={pageProjet.photoPrincipale} alt={pageProjet.titre} />
				{/if}
			  </div>

			
			<div class="form-group">
				<label for="h2">Sous-titre</label>
				<textarea rows="3" id="h2" name="h2" bind:value={pageProjet.h2} contenteditable="true" type="text"  />
			</div>

			
			
			<div class="form-group">
				<label for="description">Description</label>
				<textarea id="description" rows="8" cols="45" name="description" bind:value={pageProjet.description} contenteditable="true" type="text"  />
			</div>

		


			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.pageProjet-form {
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
