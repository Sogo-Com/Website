<script>
	import Layout from '../../../+layout.svelte';
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';
	import EditorJS from '@editorjs/editorjs';
	import Header from '@editorjs/header';
	import NestedList from '@editorjs/nested-list';
	import SimpleImage from '@editorjs/simple-image';
	import ButtonTool from '$lib/editor/ButtonTool.js'
	import ParagraphTool from '$lib/editor/paragraph/ParagraphTool.js'
	import { goto, invalidateAll } from '$app/navigation';
	import ActualiteCRUD from '$lib/client/crud/actualite'
	import { FileToBase64, Base64toWebp } from '$lib/utils/convert'
	export let data;
	let { actualite } = data;
	

	let editor;
	onMount(_=>{

		const contenuBlock = actualite.contenu != null ? JSON.parse(actualite.contenu) : {}

		editor = new EditorJS({
			holder: 'contenu',
			tools: {
				header: {
					class: Header,
					config: {
						placeholder: 'Titre',
						levels: [2, 3, 4],
						defaultLevel: 2
					},
					shortcut: 'CMD+SHIFT+H'
				},
				button: {
					class: ButtonTool,
				}, 
				paragraph:ParagraphTool,
				nestedList:{
					class: NestedList,
					inlineToolbar: true,
					shortcut: 'CMD+SHIFT+L'
				},
				image: {
					class: SimpleImage
				},
				
			},
			data : contenuBlock,
			defaultBlock: 'paragraph'
		});
	
	})

	const editorLoadContenu = (contenu = null) => {
		
		if(editor != null && contenu != null)
		{
			editor.isReady.then(() => {
				editor.render(contenu);
			});
		}
	}
	
	const handleSubmit = async (form) => {
		


		const formData = new FormData(form.currentTarget);
		const object = Object.fromEntries(formData)
	 	object.photo64 =await FileToBase64(object.photoFile)
		object.contenu = await editor?.save() ?? ''
		object.id = actualite.id
		object.photo = actualite.photo

	    const result = await ActualiteCRUD.upsert(object).catch(reason => { alert("Error "+reason) })
		
		if(result != null){
			alert(result.message)
			goto(`/admin/actualite/${result.data.id}`,{}).then(_=>{	actualite = result.data })
			editorLoadContenu(result.data.contenu)
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
				<div id="contenu" class="contenu" name="contenu" required />
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
