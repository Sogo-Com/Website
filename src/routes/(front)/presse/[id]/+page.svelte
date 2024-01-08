<script>
	export let data;
	let { client } = data;
</script>

<div class="blanc" id="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h1 animate>{client.nom}</h1>
			<p>
				{@html client.description}
			</p>
		</div>
		<div class="bloc img-droite">
			<div class="conteneur">
				<img src={client.photoLogo} alt={client.nom} />
			</div>
		</div>
	</div>
</div>

<div class="blanc">
	<div class="wrapper">
		<div class="bloc img-droite">
			<div class="conteneur">
				<img src={client.photoAvant1} alt={client.nom} />
			</div>
		</div>
		<div class="bloc desc-gauche files">
			<h2 animate>Communiqué de presse</h2>
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

<div class="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche files">
			<h2 animate>Communiqué de presse</h2>
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

		<div class="bloc img-droite">
			<div class="conteneur">
				<img src={client.photoAvant2} alt={client.nom} />
			</div>
		</div>
	</div>
</div>

<div class="blanc attache">
	<h2 animate>Attaché de presse</h2>
	{#each client.attachePresses as attachePresses}
		<div class="info-wrapper">
			<div class="info">
				<img src="/images/personne.svg" alt="" />
				<p animate>{attachePresses.nom}</p>
			</div>

			<div class="info">
				<img src="/images/tel.svg" alt="" />
				<p animate>{attachePresses.telephone}</p>
			</div>

			<div class="info">
				<img src="/images/mail.svg" alt="" />
				<p animate>{attachePresses.email}</p>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	#blanc {
		padding-top: 15rem;
	}
	.blanc {
		background-color: #fff;
		padding: 32px 11%;
		position: relative;
		overflow: hidden;

		&.attache {
			display: flex;
			flex-direction: column;
			align-items: center;

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
					@media only screen and (max-width: $phone) {
						margin-bottom: 32px;
					}
					
					img {
						width: 60px;
						height: 60px;
						margin-right: 16px;

					}
				}
			}
		}

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
				}
			}
			.img-droite {
				display: flex;
				justify-content: end;
				align-items: start;
				height: 50vh;
				@media only screen and (max-width: $phone) {
					padding: 5rem 0 0 0;
					justify-content: center;
					align-items: center;
				}
				.conteneur {
					position: relative;
					width: 100%;
					height: 100%;
					@media only screen and (max-width: $phone) {
						transform: none;
					}

					img {
						position: relative;
						z-index: 10;
						width: 100%;
						height: 70%;
						border-radius: 32px;
						object-fit: contain;
					}
				}
			}
		}
	}
</style>
