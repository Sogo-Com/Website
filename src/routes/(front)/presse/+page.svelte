<script>
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	onMount((_) => {

	});

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

<div class="blanc" id="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h1>
				Nos clients
			</h1>
			<p>
				Sogo Com accompagne plusieurs entreprises locales, régionales et nationales dans leurs relations presse. Immobilier, gastronomie, art de vivre, technologie, voyage, sport, petite enfance, nettoyage et bien d’autres secteurs nous font confiance.
				<br><br>
				Retrouvez sur cette page nos derniers communiqués et dossiers de presse.
				
			</p>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="btn"
				on:click={() => {
					goto('/agence');
				}}
			>
				{$t('common.savoir+')}
			</div>
		</div>
		<div class="bloc img-droite">
			<div class="conteneur">
				<span class="bubble top-left" />
				<img src="/images/home-equipe.png" alt="L'equipe" />
				<span class="bubble bottom-right" />
			</div>
		</div>
	</div>
</div>


<div id="presslist">

	<div class="filtre">
		<form method="post" on:submit|preventDefault={handleSubmit}>
			<p contenteditable="false">Recherchez !</p>
	<!-- 
			<label for="nom">Nom</label>
			<input bind:this={nom} type="text" name="nom" id="nom" placeholder="Votre nom" />

		
			<input bind:this={nom} type="text" name="nom" id="nom" placeholder="Votre nom" />
			<label for="prenom">{$t('common.contact-prenom')}</label>
			<input bind:this={type} type="text" name="type" id="type" placeholder="Séléctionnez un type" />
			<label for="societe">Société</label>
			<input bind:this={societe} type="text" name="societe" id="societe" placeholder="Votre société" />
			<label for="telephone">{$t('common.contact-telephone')}</label>
			<input bind:this={telephone} type="text" name="telephone" id="telephone" placeholder="Votre téléphone" />
			<label for="email">{$t('common.contact-email')}</label>
			<input bind:this={email} type="text" name="email" id="email" placeholder="Votre email" />
			<button type="submit" class="btn" for="envoyer" value="envoyer"	>{$t('common.contact-send')}</button>
			<div class="status {statusClass}" contenteditable="false" bind:innerText={status}>
			</div>
			 -->
		</form>
	</div>
	<div class="clients">

	</div>

</div>


<style lang="scss">
		.blanc {
		background-color: #fff;
		padding: 15rem 11%;
		position: relative;
		overflow: hidden;
	

		.wrapper {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			position: relative;

			@media only screen and (max-width: $phone) {
				flex-direction: column;
				left: 0%;
			}

			.bloc {
				width: 50%;

				h1{

					color:$color-gris-dark;
					padding: 32px 0;
					text-align: left;

				}

				@media only screen and (max-width: $phone) {
					width: 100%;
				}

				p {
					font-family: $font-secondary-light;
					margin-bottom: 64px;
				}

				.btn {
					background-color: $color-rose;
				}
			}
			.img-droite {
				display: flex;
				justify-content: end;
				align-items: start;

				@media only screen and (max-width: $phone) {
					padding: 5rem 0 0 0;
					justify-content: center;
					align-items: center;
				}
				.conteneur {
					position: relative;
					width: 100%;
					transform: translateX(20%);
					height: 100%;
					@media only screen and (max-width: $phone) {
						transform: none;
					}

					span {
						position: absolute;
						width: 200px;
						height: 200px;
						border-radius: 200px;
						background-color: $color-rose;

						@media only screen and (max-width: $phone) {
							display: none;
						}

						&.top-left {
							transform: translate(-50%, -50%);
							z-index: 5;
						}

						&.bottom-right {
							top: 100%;
							left: 100%;
							transform: translate(-50%, -50%);
							z-index: 15;
						}
					}
					img {
						position: relative;
						z-index: 10;
						width: 100%;
						height: 100%;
						border-radius: 32px;
						object-fit: cover;
					}
				}
			}
		}
	}

	#presslist{

		.filtre{


			
		}

		.clients{

		}


	}



</style>