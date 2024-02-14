<script>
	export let data;
	let { client } = data;
</script>


<svelte:head>
	<title>Sogo Com avec {client.nom} !</title>
	<meta name="description" content="Sogo Com, votre agence de communication à Annecy et dans les Alpes. Découvrez nos services et nos réalisations." />
	<link rel="canonical" href="http://sogocom.fr/presse/{client.id}" />

</svelte:head>

<div class="blanc" id="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h1 animate>{client.nom}</h1>
			<p>
				{@html client.description}
			</p>
		</div>
		<div class="bloc img-droite">
			<div class="cont">
				<img src={client.photoLogo} alt={client.nom} />
			</div>
		</div>
	</div>
</div>
{#if client.communiquePresses != null &&  client.communiquePresses.length > 0}
<div class="blanc">
	<div class="wrapper">
		{#if client.photoAvant1 != null && client.photoAvant1 != ''}
		<div class="bloc avant img-droite">
			<div class="cont">
				<img src={client.photoAvant1} alt={client.nom} />
			</div>
		</div>
		{/if}
		<div class="bloc desc-gauche files">
			<h2 animate>Communiqués de presse</h2>
			<div class="innerFile">
				{#each client.communiquePresses as communiquePresse}
					<a href={communiquePresse.fichier} target="_blank" class="file" animate>
						<p>
							{communiquePresse.titre}
						</p>
						<span class="btn"> Télécharger </span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
{/if}

{#if client.dossierPresses != null && client.dossierPresses.length > 0}
	<div class="blanc">
		<div class="wrapper">
			<div class="bloc desc-gauche files">
				<h2 animate>Dossiers de presse</h2>
				<div class="innerFile">
					{#each client.dossierPresses as dossierPresse}
						<a href={dossierPresse.fichier} target="_blank" class="file" animate>
							<p>
								{dossierPresse.titre}
							</p>
							<span class="btn"> Télécharger </span>
						</a>
					{/each}
				</div>
			</div>
			{#if client.photoAvant2 != null && client.photoAvant2 != ''}
				<div class="bloc avant img-droite">
					<div class="cont">
						<img src={client.photoAvant2} alt={client.nom} />
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
{#if client.attachePresses != null && client.attachePresses.length > 0}
	<div class="blanc attache">
		<h2 animate>Attachée{client.attachePresses.length > 1 ?"s":""} de presse</h2>
		{#each client.attachePresses as attachePresses}
			<div class="info-wrapper">
				<div class="info">
					<img src="/images/personne.svg" alt="" />
					<p>{attachePresses.nom}</p>
				</div>

				<a href="tel:{attachePresses.telephone}" class="info">
					<img src="/images/tel.svg" alt="" />
					<p>{attachePresses.telephone}</p>
				</a>

				<a href="mailto:{attachePresses.email}" class="info">
					<img src="/images/mail.svg" alt="" />
					<p>{attachePresses.email}</p>
				</a>
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	#blanc {
		padding-top: 15rem;
	}
	.blanc {
		background-color: #fff;
		padding: 0 11%;
		position: relative;
		overflow: hidden;

		&.attache {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-bottom: 64px;
			h2 {
				text-align: center;
				color: $color-gris-dark;
			}
			.info-wrapper {
				display: flex;
				width: 70%;
				justify-content: space-between;
				align-items: center;
				margin-top: 32px;
				@media only screen and (max-width: $phone) {
					flex-direction: column;
					align-items: flex-start;
				}
				.info {
					display: flex;
					align-items: center;
					flex-direction: column;
					flex-basis: 33%;
					text-decoration: none;
					color: $color-gris-dark;
					@media only screen and (max-width: $phone) {
						margin-bottom: 32px;
						flex-basis: 100%;
						width: 100%;
					}
					img {
						width: 60px;
						height: 60px;
						object-fit: contain;
					}
				}
			}
		}

		.wrapper {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			position: relative;
			justify-content: space-evenly;
			
			padding-bottom: 64px;
			@media only screen and (max-width: $phone) {
				flex-direction: column;
				left: 0%;
			}

			.desc-gauche{
				padding-top: 64px;

				@media only screen and (max-width: $phone) {
					padding-top: 0;
				}
			}
			.bloc {
				width: 50%;

				h1 {
					color: $color-gris-dark;
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
			}
			.files {
				h2 {
					color: $color-gris-dark;
				}

				a {
					text-decoration: none;
					display: flex;
					justify-content: space-between;
					margin-bottom: 24px;
				}

				p {
					width: auto;
					margin: 0;
					padding-right: 16px;
				}
				.btn{
					place-self: center;
				}
			}
			.img-droite {
				display: flex;
				justify-content: end;
				align-items: start;
				height: 50vh;

				&.avant {
					@media only screen and (max-width: $phone) {
						display: none;
					}
				}

				@media only screen and (max-width: $phone) {
					justify-content: center;
					align-items: center;
				}
				.cont {
					position: relative;
					width: 100%;
					height: 100%;
					padding: 32px;
					@media only screen and (max-width: $phone) {
						transform: none;
					}

					img {
						position: relative;
						z-index: 10;
						width: 100%;
						height: 100%;
						
						object-fit: contain;
					}
				}
			}
		}
	}
</style>
