<script>
	import { onMount } from 'svelte';
	import Layout from '../+layout.svelte';
	import EditorJS from '@editorjs/editorjs';
	import Header from '@editorjs/header';
	import NestedList from '@editorjs/nested-list';
	import SimpleImage from '@editorjs/simple-image';
	import ButtonTool from '$lib/editor/ButtonTool.js'

	export let data;
	let { actualite } = data;

	let editor;
	onMount(_=>{
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
				nestedList:{
					class: NestedList,
					inlineToolbar: true,
					shortcut: 'CMD+SHIFT+L'
				},
				image: {
					class: SimpleImage
				},
				
			},
		});
		editor.isReady
			.then(() => {
				editor.render(actualite.contenu);
			})
			.catch((reason) => {
				console.log(`Editor.js initialization failed because of ${reason}`);
			});
	
	})

	
	const handleSubmit = async (data) => {
		debugger
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		object.contenu =await editor?.save() ?? ''

		const json = JSON.stringify(object);
		const response = await fetch('/api/actualite', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
		
		}
	};


</script>

<Layout>
	<div slot="buttons">
		<button class="save-button">Sauvegarder</button>
	</div>

	<div>
		<h1>Formulaire d'Actualité</h1>

		<form method="POST" class="actualite-form" on:submit|preventDefault={handleSubmit}>
			<div class="form-group">
				<label for="titre">Titre</label>
				<input id="titre" name="titre" type="text" required />
			</div>
			<div class="form-group">
				<label for="redacteur">Rédacteur</label>
				<input id="redacteur" name="redacteur" type="text" required />
			</div>
			<div class="form-group">
				<label for="tempsLecture">Temps de Lecture (en minutes)</label>
				<input id="tempsLecture" name="tempsLecture" type="number" required />
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
