<script>
	import { t, locales, locale } from '$lib/translations';
	import { page } from '$app/stores';

	export let description;
	let innerDescriptionText = $t('common.contact-description');
	if (typeof description === 'string' && description.length != 0)
		innerDescriptionText = description;
</script>

<form method="post">
	<p contenteditable="false" bind:innerText={innerDescriptionText} />
	<label for="nom">{$t('common.contact-nom')}</label>
	<input type="text" name="nom" id="nom" placeholder="Votre nom" />
	<label for="prenom">{$t('common.contact-prenom')}</label>
	<input type="text" name="prenom" id="prenom" placeholder="Votre prenom" />
	<label for="telephone">{$t('common.contact-telephone')}</label>
	<input type="text" name="telephone" id="telephone" placeholder="Votre téléphone" />
	<label for="email">{$t('common.contact-email')}</label>
	<input type="text" name="email" id="email" placeholder="Votre email" />
	<button type="submit" class="btn" for="envoyer" value="envoyer"
		>{$t('common.contact-send')}</button
	>
</form>

<style lang="scss">
	form {
		font-family: $font-secondary-light;
		background: $color-rose;
		border-radius: 32px;
		padding: 32px;
		display: flex;
		flex-direction: column;

		p {
			color: $color-blanc;
			margin-bottom: 32px;
		}
		label {
			color: $color-blanc;
			margin-bottom: 8px;
		}
		input {
			background: $color-blanc;
			border-radius: 16px;
			border: none;
			padding: 8px;
			margin-bottom: 16px;
			font-family: $font-secondary-light;
		}

		.btn {
			background-color: $color-blanc;
			font-family: $font-secondary-bold;
			margin-top: 32px;
			color: $color-rose;
			width: fit-content;
		}
	}
</style>
