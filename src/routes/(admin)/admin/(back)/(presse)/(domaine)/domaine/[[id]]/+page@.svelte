<script>
	import Layout from '../../../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import Writer from '$lib/components/editor/Writer.svelte';

	import { goto, } from '$app/navigation';

	export let data;
	let { domaine } = data;
	
	const submitCreateDomaine = async ({ form, data, action, cancel }) => {

		
		const { nom } = Object.fromEntries(data);

		if (nom.length < 1) {
			toast.error('Nom vide !');
			cancel();
		}

		data.append('id', domaine.id)


		return async ({ result, update }) => {
			
			switch (result.type) {
				case 'success':
					toast.success('Domaine enregistré!');
					await applyAction(result)

					break;
				case 'failure':
					toast.error("Erreur lors de l'enregistrement");
					break;
				default:
					break;
			}
			
			await update();
			
			domaine = result.data.data
			goto(`/admin/domaine/${domaine.id}`,{invalidateAll: true})

		};
	};

	const submitDeleteDomaine  = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Domaine supprimé!');
					
					break;
				case 'failure':
					toast.error("Erreur lors de la suppression");
					break;
				default:
					break;
			}
			await update();
			goto("/admin/domaines", { invalidateAll: true })
		};
	};

</script>

<Layout>
	<div slot="buttons">
		<button class="back-button" on:click={()=>{goto("/admin/domaines")}}>Retour aux domaines</button>
		{#if domaine.id != null && domaine.id.length != 0}

			<form action="?/delete" method="POST" use:enhance={submitDeleteDomaine}>
				<input type="hidden" name="id" value={domaine.id} />
				<button type="submit" class="delete-button">Supprimer</button>
			</form>

		{/if}
	
	</div>

	<div>
		<h1>{ domaine.id != null && domaine.id.length != 0 ? "Création d'un domaine" : "Modification d'un domaine"}</h1>

		<form method="POST" action="?/create" class="domaine-form"  use:enhance={submitCreateDomaine}>
			<div class="form-group">
				<label for="nom">Nom</label>
				<input id="nom" name="nom" bind:value={domaine.nom} contenteditable="true" type="text"  />
			</div>

			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.domaine-form {
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
