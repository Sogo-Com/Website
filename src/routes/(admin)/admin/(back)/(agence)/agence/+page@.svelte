<script>
	import Layout from '../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';

	import { goto, } from '$app/navigation';

	export let data;
	let { pageAgence } = data;
	
	
	const submitCreatepageAgence = async ({ form, data, action, cancel }) => {

		const { citation,valeurDescription} = Object.fromEntries(data);

	
        
		if (citation.length < 1) {
			toast.error('Citation vide !');
			cancel();
		}

		if (valeurDescription.length < 1) {
			toast.error('Description des valeurs vide !');
			cancel();
		}


		data.append('id', pageAgence.id)
		data.append('photo', pageAgence.photo ?? '')

		
		return async ({ result, update }) => {
			
			switch (result.type) {
				case 'success':
					toast.success('page Agence enregistré!');
					await applyAction(result)
			
					await update();
			
					pageAgence = result.data.data
					goto(`/admin/agence`,{invalidateAll: true})
		
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
		<h1>Formulaire de la page Agence</h1>

		<form method="POST" action="?/create" class="pageAgence-form"  use:enhance={submitCreatepageAgence}>

	
			
			<div class="form-group">
				<label for="titreRose">Titre rose</label>
				<textarea rows="2" id="titreRose" name="titreRose" bind:value={pageAgence.titreRose} contenteditable="true" type="text"  />
			</div>

			<div class="form-group">
				<label for="photoFile">Photo principale</label>
				<input
				  type="file"
				  id="photoFile"
				  name="photoFile"
				  accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				  
				/>
				{#if pageAgence.photo != null && pageAgence.photo.length != 0}
					<img src={pageAgence.photo} alt={pageAgence.titre} />
				{/if}
			  </div>

			
			<div class="form-group">
				<label for="citation">Citation</label>
				<textarea id="citation" rows="5" cols="45"  name="citation" bind:value={pageAgence.citation} contenteditable="true" type="text"  />
			</div>


			
			<div class="form-group">
				<label for="valeurDescription">Description des valeurs</label>
				<textarea id="valeurDescription" rows="8" cols="45"   name="valeurDescription" bind:value={pageAgence.valeurDescription} contenteditable="true" type="text"  />
			</div>

			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.pageAgence-form {
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
