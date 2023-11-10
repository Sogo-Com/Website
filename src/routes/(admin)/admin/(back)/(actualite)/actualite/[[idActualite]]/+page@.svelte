<script>
	import Layout from '../../../+layout.svelte';
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';

	import Writer from '$lib/components/editor/Writer.svelte';

	import { goto, invalidateAll } from '$app/navigation';
	import ActualiteCRUD from '$lib/client/crud/actualite'
	import { FileToBase64, Base64toWebp } from '$lib/utils/convert'
	import { IsPhoto } from '$lib/utils/type'

	export let data;
	let { actualite } = data;
	

	let writerMethods;
	
	const handleSubmit = async (form) => {
		
		
		const formData = new FormData(form.currentTarget);
		formData.append('contenu', await writerMethods.saveContenu() ?? '')
		formData.append('id', actualite.id)
		formData.append('photo', actualite.photo)

	    const result = await ActualiteCRUD.upsert(formData).catch(reason => { alert("Error "+reason) })
		
		if(result != null){
			alert(result.message)
			goto(`/admin/actualite/${result.data.id}`,{}).then(_=>{	actualite = result.data })
			writerMethods.loadContenu(result.data.contenu)
		}

	};

	async function handleDelete() {

			const result = await ActualiteCRUD.delete(actualite?.id).catch(reason => {alert("Error "+reason) })

			if(result != null)
			{
				alert(result.message);
				
				goto("/admin/actualites")
			}

	}


</script>

<Layout>
	<div slot="buttons">
		<button class="back-button" on:click={()=>{goto("/admin/actualites")}}>Retour aux actualites</button>
		{#if actualite.id != null && actualite.id.length != 0}
			<button class="delete-button"  on:click={()=>{handleDelete()}}>Supprimer</button>
		{/if}
	
	</div>

	<div>
		<h1>Formulaire d'Actualité</h1>

		<form method="POST" class="actualite-form" on:submit|preventDefault={handleSubmit}>
			<div class="form-group">
				<label for="titre">Titre</label>
				<input id="titre" name="titre" bind:value={actualite.titre} contenteditable="true" type="text" required />
			</div>

			<div class="form-group">
				<label for="file">Image</label>
				<input
				  type="file"
				  id="file"
				  name="photoFile"
				  accept={['.jpg', '.jpeg', '.png', '.webp'].join(',')}
				  
				/>
				{#if actualite.photo != null && actualite.photo.length != 0}
					<img src={actualite.photo} alt={actualite.titre} />
				{/if}
			  </div>


			<div class="form-group">
				<label for="redacteur">Rédacteur</label>
				<input id="redacteur" name="redacteur" bind:value={actualite.redacteur} contenteditable="true" type="text" required />
			</div>
			<div class="form-group">
				<label for="tempsLecture">Temps de Lecture (en minutes)</label>
				<input id="tempsLecture" name="tempsLecture" bind:value={actualite.tempsLecture} contenteditable="true" type="number" required />
			</div>

			<div class="form-group">
				<label for="descriptionCourte">Description courte (200 caracteres max)</label>
				<textarea id="descriptionCourte" rows="3" cols="45"  maxlength="200" name="descriptionCourte" bind:value={actualite.descriptionCourte} contenteditable="true" type="text" required />
			</div>

			<div class="form-group">
				<label for="contenu">Contenu</label>
				
				<div id="contenu" class="contenu" name="contenu" required >
					<Writer bind:methods={writerMethods} contenu="{actualite.contenu}"/>
				</div>
			</div>
			
			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.actualite-form {
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
