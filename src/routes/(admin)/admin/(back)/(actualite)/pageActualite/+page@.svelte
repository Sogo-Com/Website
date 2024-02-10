<script>
	import Layout from '../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';

	import { goto, } from '$app/navigation';

	export let data;
	let { pageActualite } = data;
	
	
	const submitCreatepageActualite = async ({ form, data, action, cancel }) => {

		const { titre,} = Object.fromEntries(data);

	
        
		if (titre.length < 1) {
			toast.error('Citation vide !');
			cancel();
		}

		data.append('id', pageActualite.id)
		data.append('photoPrincipale', pageActualite.photoPrincipale ?? '')

		
		
		return async ({ result, update }) => {
			
			switch (result.type) {
				case 'success':
					toast.success('page Actualité enregistré!');
					await applyAction(result)
			
					await update();
			
					pageActualite = result.data.data
					goto(`/admin/pageActualite`,{invalidateAll: true})
		
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
		<h1>Formulaire de la page Actualite</h1>

		<form method="POST" action="?/create" class="pageActualite-form"  use:enhance={submitCreatepageActualite}>

			<div class="form-group">
				<label for="titre">Titre</label>
				<textarea rows="3" id="titre" name="titre" bind:value={pageActualite.titre} contenteditable="true" type="text"  />
			</div>

			<div class="form-group">
				<label for="photoPrincipaleFile">Photo principale</label>
				<input
				  type="file"
				  id="photoPrincipaleFile"
				  name="photoPrincipaleFile"
				  accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				  
				/>
				{#if pageActualite.photoPrincipale != null && pageActualite.photoPrincipale.length != 0}
					<img src={pageActualite.photoPrincipale} alt={pageActualite.titre} />
				{/if}
			  </div>

		

			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.pageActualite-form {
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
