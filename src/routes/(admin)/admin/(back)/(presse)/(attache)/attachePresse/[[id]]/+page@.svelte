<script>
	import Layout from '../../../../+layout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import Writer from '$lib/components/editor/Writer.svelte';

	import { goto, } from '$app/navigation';

	export let data;
	let { attachePresse } = data;
	
	const submitCreateAttachePresse = async ({ form, data, action, cancel }) => {

		
		const { nom, telephone, email } = Object.fromEntries(data);

		if (nom.length < 1) {
			toast.error('Nom vide !');
			cancel();
		}

		if (telephone.length < 1) {
			toast.error('Telephone vide !');
			cancel();
		}

		if (email.length < 1) {
			toast.error('Email vide !');
			cancel();
		}

		data.append('id', attachePresse.id)


		return async ({ result, update }) => {
			
			switch (result.type) {
				case 'success':
					toast.success('Attaché de presse enregistré!');
					await applyAction(result)

					break;
				case 'failure':
					toast.error("Erreur lors de l'enregistrement");
					break;
				default:
					break;
			}
			
			await update();
			
			attachePresse = result.data.data
			goto(`/admin/attachePresse/${attachePresse.id}`,{invalidateAll: true})

		};
	};

	const submitDeleteAttachePresse  = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Attaché de presse supprimé!');
					
					break;
				case 'failure':
					toast.error("Erreur lors de la suppression");
					break;
				default:
					break;
			}
			await update();
			goto("/admin/attachePresses", { invalidateAll: true })
		};
	};

</script>

<Layout>
	<div slot="buttons">
		<button class="back-button" on:click={()=>{goto("/admin/attachePresses")}}>Retour aux attachés de presse</button>
		{#if attachePresse != null &&  attachePresse.id != null && attachePresse.id.length != 0}

			<form action="?/delete" method="POST" use:enhance={submitDeleteAttachePresse}>
				<input type="hidden" name="id" value={attachePresse.id} />
				<button type="submit" class="delete-button">Supprimer</button>
			</form>

		{/if}
	
	</div>

	<div>
		<h1>{attachePresse != null && attachePresse.id != null && attachePresse.id.length != 0 ? "Création d'un attaché de presse" : "Modification d'un attaché de presse"}</h1>

		<form method="POST" action="?/create" class="attachePresse-form"  use:enhance={submitCreateAttachePresse}>
			<div class="form-group">
				<label for="nom">Nom</label>
				<input id="nom" name="nom" bind:value={attachePresse.nom} contenteditable="true" type="text"  />
			</div>

			<div class="form-group">
				<label for="telephone">Telephone</label>
				<input id="telephone" name="telephone" bind:value={attachePresse.telephone} contenteditable="true" type="text"  />
			</div>

			<div class="form-group">
				<label for="email">Email</label>
				<input id="email" name="email" bind:value={attachePresse.email} contenteditable="true" type="text"  />
			</div>

			<button type="submit" for="envoyer" value="envoyer" class="submit-button" >Enregistrer</button>
		</form>
	</div>
</Layout>

<style lang="scss">
	.attachePresse-form {
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
