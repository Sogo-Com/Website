<script>
	
	import { page } from '$app/stores';

	export let description;


	let nom;
	let prenom;
	let telephone;
	let societe;
	let email;
	let message;

	let innerDescriptionText = "Pour un café ou juste pour échanger laissez-nous vos coordonnées :";
	if (typeof description === 'string' && description.length != 0)
		innerDescriptionText = description;

	let status = '';
	let statusClass = ''
	const handleSubmit = async (data) => {
		status = 'Envoie en cours...';
		statusClass = 'pending'
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
	
		console.log(typeof object.nom);
		if (
			object.nom.length == 0 ||
			object.prenom.length == 0 ||
			object.email.length == 0 ||
			object.telephone.length == 0 ||
			object.societe.length == 0
		) {
			status = 'Entrée invalide !';
			statusClass = 'error'
			return;
		}

		const json = JSON.stringify(object);
		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = 'Message envoyé !';
			statusClass = 'success';

			nom.value = '';
			prenom.value = '';
			telephone.value = '';
			societe.value = ''
			email.value = '';
			
		}
	};
</script>

<form method="post" on:submit|preventDefault={handleSubmit}>
	<p contenteditable="false" bind:innerText={innerDescriptionText} />
	<label for="nom">Nom</label>
	<input bind:this={nom} type="text" name="nom" id="nom" placeholder="Votre nom" />
	<label for="prenom">Prenom</label>
	<input bind:this={prenom} type="text" name="prenom" id="prenom" placeholder="Votre prenom" />
	<label for="societe">Société</label>
	<input bind:this={societe} type="text" name="societe" id="societe" placeholder="Votre société" />
	<label for="telephone">Téléphone</label>
	<input bind:this={telephone} type="text" name="telephone" id="telephone" placeholder="Votre téléphone" />
	<label for="email">Email</label>
	<input bind:this={email} type="text" name="email" id="email" placeholder="Votre email" />
	<label for="message">Message</label>
	<textarea bind:this={message} type="text" rows="10" name="message" id="message" placeholder="Votre message" />
	<button animate type="submit" class="btn" for="envoyer" value="envoyer"
		>Envoyer</button
	>
	<div class="status {statusClass}" contenteditable="false" bind:innerText={status}>

	</div>
</form>

<style lang="scss">
	form {
		font-family: $font-secondary-light;
		background: $color-gris-clair;
		border-radius: 32px;
		padding: 32px;
		display: flex;
		overflow: hidden;
		flex-direction: column;

		p {
			color: $color-gris-dark;
			margin-bottom: 32px;
			font-family: $font-secondary-medium;
		}
		label {
			color: $color-gris-dark;
			margin-bottom: 8px;
			font-family: $font-secondary-medium;
			font-size: 1rem;
		}
		input ,textarea{
			background:#fff;
			border-radius: 16px;
			border: none;
			padding: 8px;
			margin-bottom: 16px;
			font-family: $font-secondary-light;
		}

		.btn {
			background-color: #fff;
			font-family: $font-secondary-semibold;
			margin-top: 32px;
			color: $color-rose;
			width: fit-content;
		}
		.status{
			padding-top: 32px;
		}
	}
</style>
