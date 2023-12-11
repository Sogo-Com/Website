<script>
	import Layout from '../../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';

	import { goto, } from '$app/navigation';

	export let data;
	let { pointHistoire } = data;
	
	
	const submitCreatePointHistoire = async ({ form, data, action, cancel }) => {

		const { titre,date, description} = Object.fromEntries(data);

		if (titre.length < 1) {
			toast.error('Titre vide !');
			cancel();
		}


		if (date.length < 1) {
			toast.error('Date vide !');
			cancel();
		}

		if (description.length < 1) {
			toast.error('Description vide !');
			cancel();
		}


		data.append('id', pointHistoire.id)

		
		return async ({ result, update }) => {
			
			switch (result.type) {
				case 'success':
					toast.success('point historique enregistré!');
					await applyAction(result)
			
					await update();
			
					pointHistoire = result.data.data
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
		<button class="back-button" on:click={()=>{goto("/admin/points-histoire")}}>Retour aux points historiques</button>

	</div>

	<div>
		<h1>Formulaire de PointHistoire</h1>


		<form method="POST" action="?/create" class="pointHistoire-form"  use:enhance={submitCreatePointHistoire}>
			
			
			<div class="form-group">
				<label for="date">Date</label>
				<textarea id="date"    name="date" bind:value={pointHistoire.date} contenteditable="true" type="text"  />
			</div>
			<div class="form-group">
				<label for="titre">Titre</label>
				<input id="titre" name="titre" bind:value={pointHistoire.titre} contenteditable="true" type="text"  />
			</div>


			<div class="form-group">
				<label for="description">Description (100 caracteres max)</label>
				<textarea id="description" rows="3" cols="45"  maxlength="100" name="description" bind:value={pointHistoire.description} contenteditable="true" type="text"  />
			</div>



			

			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.pointHistoire-form {
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
