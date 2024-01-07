<script>
	import Layout from '../../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import Writer from '$lib/components/editor/Writer.svelte';

	import { goto, } from '$app/navigation';

	export let data;
	let { projet } = data;
	
	let writerMethods;
	
	const submitCreateProjet = async ({ form, data, action, cancel }) => {

		const { titre, descriptionCourte} = Object.fromEntries(data);

		if (titre.length < 1) {
			toast.error('Titre vide !');
			cancel();
		}

		if (descriptionCourte.length < 1) {
			toast.error('Description courte vide !');
			cancel();
		}


		data.append('contenu', await writerMethods.saveContenu() ?? '')
		data.append('id', projet.id)
		data.append('photo', projet.photo ?? '')
		data.append('photoLogo', projet.photoLogo ?? '')


		return async ({ result, update }) => {
			
			switch (result.type) {
				case 'success':
					toast.success('Projet enregistré!');
					await applyAction(result)
			
					await update();
			
					projet = result.data.data
					goto(`/admin/projet/${projet.id}`,{invalidateAll: true})
					writerMethods.loadContenu(projet.contenu)

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

	const submitDeleteProjet  = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Projet supprimé!');
					
					break;
				case 'failure':
					toast.error("Erreur lors de la suppression");
					break;
				default:
					break;
			}
			await update();
			goto("/admin/projets", { invalidateAll: true })
		};
	};

</script>

<Layout>
	<div slot="buttons">
		<button class="back-button" on:click={()=>{goto("/admin/projets")}}>Retour aux projets</button>
		{#if projet.id != null && projet.id.length != 0}

			<form action="?/delete" method="POST" use:enhance={submitDeleteProjet}>
				<input type="hidden" name="id" value={projet.id} />
				<button type="submit" class="delete-button">Supprimer</button>
			</form>

		{/if}
	
	</div>

	<div>
		<h1>Formulaire de Projet</h1>

		<form method="POST" action="?/create" class="projet-form"  use:enhance={submitCreateProjet}>
			<div class="form-group">
				<label for="titre">Titre</label>
				<input id="titre" name="titre" bind:value={projet.titre} contenteditable="true" type="text"  />
			</div>

			<div class="form-group">
				<label for="typeProjet">Type de projet</label>

				<select id="typeProjet" value={projet.typeProjet ?? ""} name="typeProjet" required>
					<option value="" selected disabled hidden>Choisissez un type...</option>
					<option value="redaction">Rédaction</option>
					<option value="presse">Relations Presse</option>
					<option value="graphisme">Graphisme</option>
					<option value="reseaux">Réseaux Sociaux</option>
					<option value="photos">Photos et Vidéos</option>
					<option value="evenements">Événements</option>
				</select>	
			</div>

			

			<div class="form-group">
				<label for="file">Image</label>
				<input
				  type="file"
				  id="file"
				  name="photoFile"
				  accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				  
				/>
				{#if projet.photo != null && projet.photo.length != 0}
					<img src={projet.photo} alt={projet.titre} />
				{/if}
			  </div>


			  <div class="form-group">
				<label for="fileLogo">Image Logo</label>
				<input
				  type="file"
				  id="fileLogo"
				  name="photoLogoFile"
				  accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				  
				/>
				{#if projet.photoLogo != null && projet.photoLogo.length != 0}
					<img src={projet.photoLogo} alt={projet.titre} />
				{/if}
			  </div>



			<div class="form-group">
				<label for="descriptionCourte">Description courte (200 caracteres max)</label>
				<textarea id="descriptionCourte" rows="3" cols="45"  maxlength="200" name="descriptionCourte" bind:value={projet.descriptionCourte} contenteditable="true" type="text"  />
			</div>

			<div class="form-group">
				<label for="contenu">Contenu</label>
				
				<div id="contenu" class="contenu" name="contenu" required >
					<Writer bind:methods={writerMethods} contenu="{projet.contenu}"/>
				</div>
			</div>
			
			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.projet-form {
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
