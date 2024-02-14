<script>
	import { onMount } from 'svelte';
	//DOMElements
	let linksEls;

	let containerEl;
	let imgPrincipaleEl;
	let titreEl;
	let descriptionPrincipaleEl;


	let realSecondaireEl;
	let titreSecondaireEl;
	let descriptionSecondaireEl;
	let imageSecondaireEl;
	let iconsEls = [];
	let isVideo = false;

	//Data part
	export let data;
	const { expertiseOnglets = [],pageExpertise } = data;

	let iconsData = [];

	onMount((_) => {

		if (expertiseOnglets.length <= 0) return;


		changeExpertise();

		Array.from(linksEls.children).forEach((link, index) => {
			link.addEventListener('click', () => {
				changeExpertise(index);
			});
		});
	});

	function changeExpertise(index = 0) {
	
		Array.from(linksEls.children).forEach((link) => {
			link.classList.remove('active');
		});
		linksEls.children[index].classList.add('active');

		const data = expertiseOnglets[index];

		containerEl.className = '';
		containerEl.classList.add(data.cssClass);

		titreEl = data.titre;
		imgPrincipaleEl = data.photoPrincipale;
		descriptionPrincipaleEl = data.description;
		iconsData = data.expertiseIcons;

		if (iconsData.length <= 0) {
			realSecondaireEl.style.display = 'none';
			return;
		}

		const iconData = iconsData[0];

		titreSecondaireEl.innerText = iconData.titre;
		descriptionSecondaireEl = iconData.description;
		imageSecondaireEl = iconData.photoIllustration;
		isVideo = iconData.isVideo;
	}

	function changeIcon(index = 0) {
		if (iconsData.length <= 0) {
			realSecondaireEl.style.display = 'none';
			return;
		}

		Array.from(iconsEls.children).forEach((icon, localIndex) => {
			const localIconData = iconsData[localIndex];
			icon.src = localIconData.photoIconInactive;
		});

		const actualIcon = iconsData[index];

		titreSecondaireEl.innerText = actualIcon.titre;
		descriptionSecondaireEl = actualIcon.description;
		imageSecondaireEl = actualIcon.photoIllustration;
		isVideo = actualIcon.isVideo;

		const iconEl = iconsEls.children.item(index);
		if (iconEl != null) iconEl.src = actualIcon.photoIconActive;
	}
</script>

<svelte:head>
	<title>Sogo Com, nos expertises professionelles !</title>
	<meta name="description" content="Sogo Com, votre agence de communication à Annecy et dans les Alpes. Découvrez nos services et nos réalisations." />
	<link rel="canonical" href="http://sogocom.fr/experises" />

</svelte:head>


<div id="total-expertise" bind:this={containerEl}>
	<div id="top">
		<img alt="Page Expertise" src="{pageExpertise.photoPrincipale ?? "/images/expertis.jpg" }?width=1800&height=1800" />

		<h1 animate>{@html pageExpertise.titre?.replaceAll("\n","<br>") ?? "Nos expertises<br />à vos côtés"} </h1>
	</div>

	<div class="blanc" id="blanc">
		<div class="wrapper">
			<div class="bloc desc-gauche">
				<h2 animate>
					<span class="grey">{@html pageExpertise.h2?.replaceAll("\n","<br>") ?? "Nos expertises"}</span>
				</h2>
				<p animate>

					{@html pageExpertise.description?.replaceAll("\n","<br>") ?? "Aucune description"}
					
				</p>
			</div>
			<div class="bloc img-droite">
				<div class="conteneur">
					<img  src="{pageExpertise.photoSecondaire ?? "/images/Expertise2_Equipe_nb.webp" }?width=1800&height=1800" alt="L'equipe" />
				</div>
			</div>
		</div>
	</div>

	{#if expertiseOnglets.length > 0}
		<div class="exper-choice">
			<div bind:this={linksEls} class="links">
				{#each expertiseOnglets as expertiseOnglet, index}
					<div class="link">
						{expertiseOnglet.titre}
					</div>
				{/each}
			</div>

			<div class="contenu">
				<div class="image">
					<img src={imgPrincipaleEl} alt="sogo" />
				</div>
				<div class="texte">
					<h3 class="grey">{titreEl}</h3>
					<p>
						{@html descriptionPrincipaleEl?.replaceAll("\n","<br>") ?? "Aucune description"}
					</p>
					<!-- <p bind:innerHTML={descriptionPrincipaleEl} contenteditable="false" /> -->
				</div>
			</div>
		</div>
		<div id="realSecondaire" bind:this={realSecondaireEl} class="blanc">
			<div class="wrapper">
				<div class="bloc desc-gauche">
					<h2 animate class="h2-gauche">
						<span class="grey">Nos réalisations</span>
					</h2>
				</div>
			</div>
			<div class="infoSlide">
				<div class="infos">
					<div class="medias" bind:this={iconsEls}>
						{#each iconsData as icon, index}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<img
								on:click={() => {
									changeIcon(index);
								}}
								src={index == 0 ? icon.photoIconActive : icon.photoIconInactive}
								alt="Real {index}"
							/>
						{/each}
					</div>
					<div class="texte">
						<h3 bind:this={titreSecondaireEl} class="grey" />
						<p bind:innerHTML={descriptionSecondaireEl} contenteditable="false" />
						<a href="/contact" class="btn">Contactez-nous</a>
					</div>
				</div>
				<div class="slider">
					{#if isVideo == true}
						<video muted width="320" height="240" controls>
							<source src={imageSecondaireEl} type="video/mp4" />
							<track kind="captions" />
						</video>
					{:else}
						<img src={imageSecondaireEl} alt="expertise-icon" />
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="scss" global>
	#total-expertise {
		#top {
			height: 100vh;
			width: 100%;
			overflow: hidden;
			position: relative;
			display: flex;
			justify-content: start;
			align-items: end;

			@media only screen and (max-width: $phone) {
				align-items: end;
				height: 50vh;
			}

			img {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				z-index: 10;
				background-size: cover;
				object-fit: cover;
			}

			h1 {
				@media only screen and (max-width: $phone) {
					padding: 64px 8px;
					width: 100%;
					text-align: center;
					font-size: 4rem;
				}

				text-align: left;
				padding: 10rem;

				.gris {
					color: $color-gris;
				}
			}
		}

		.blanc {
			background-color: #fff;
			padding: 6rem 11%;
			position: relative;
			overflow: hidden;

			@media only screen and (max-width: $phone) {
				padding: 32px 12px;
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

				h2 {
					position: relative;
					z-index: 1;
					width: fit-content;
					margin-bottom: 64px;
					@media only screen and (max-width: $phone) {
						margin-bottom: 16px;
						text-align: center;
						width: 100%;
					}
				}

				.h2-gauche {
					@media only screen and (max-width: $phone) {
						text-align: left;
					}
				}

				h2:before {
					background-color: rgba($color-bleu, 0.1);
					display: block;
					position: absolute;
					left: -5%;
					z-index: -1;
					bottom: 50%;
					border-radius: 50px;
					content: '';
					width: 70px;
					height: 70px;
					@media only screen and (max-width: $phone) {
						display: none;
					}
				}

				h2:after {
					background-color: rgba($color-bleu, 0.1);
					display: block;
					position: absolute;
					border-radius: 50px;
					top: 25%;
					left: 90%;
					content: '';
					z-index: -1;
					width: 70px;
					height: 70px;
					@media only screen and (max-width: $phone) {
						display: none;
					}
				}
				.bloc {
					width: 50%;

					@media only screen and (max-width: $phone) {
						width: 100%;
					}

					p {
						font-family: $font-secondary-light;
						margin-bottom: 48px;
						@media only screen and (max-width: $phone) {
							margin-bottom: 0;
						}
					}
				}
				.img-droite {
					display: flex;
					justify-content: left;
					align-items: start;
					padding: 0 16px;

					@media only screen and (max-width: $phone) {
						display: none;
					}
					.conteneur {
						position: relative;
						width: 100%;

						@media only screen and (max-width: $phone) {
							width: 100%;
							padding: 8px;
						}

						img {
							position: relative;
							z-index: 10;
							width: 100%;
							height: 100%;
							border-radius: 32px;
						}
					}
				}
			}
		}

		.exper-choice {
			//background-color: rgba($color-violet, 0.1);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 64px 0;
			transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);

			@media only screen and (max-width: $phone) {
				padding: 32px 12px;
			}
			h3 {
			}
			.links {
				align-items: center;
				width: 80%;
				height: 64px;

				@media only screen and (max-width: $phone) {
					height: fit-content;
				}

				.link {
					padding: 16px;
					@media only screen and (max-width: $phone) {
						border: none;
					}

					transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
					display: flex;
					align-items: center;
					justify-content: center;
					border-left: $color-gris-dark solid 1px;
					height: 100%;

					&:nth-child(6) {
						@media only screen and (min-width: $phone) {
							border-right: $color-gris-dark solid 1px;
						}
					}
				}
			}

			.contenu {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: start;

				@media only screen and (max-width: $phone) {
					flex-direction: column;
				}
				.image {
					flex-basis: 20%;
					padding: 64px;
					img {
						width: 100%;
						height: 100%;
					}
					@media only screen and (max-width: $phone) {
						display: none;
					}
				}

				.texte {
					flex-basis: 60%;
					padding: 64px;
					@media only screen and (max-width: $phone) {
						padding: 32px 0;
					}
				}
			}
		}

		.infoSlide {
			display: flex;
			@media only screen and (max-width: $phone) {
				flex-direction: column;
			}
			.infos {
				display: flex;
				flex-basis: 60%;
				justify-content: start;
				align-items: start;
				@media only screen and (max-width: $phone) {
					justify-content: center;
					align-items: start;
					padding: 32px 0;
				}
				.medias {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					cursor: pointer;

					@media only screen and (max-width: $phone) {
						flex-direction: row;
						padding: 0;
						flex-wrap: wrap;
					}

					@media only screen and (max-width: $fold) {
						width: min-content;
					}

					img {
						margin: 8px;
						width: 64px;
						height: 64px;
						border-radius: 64px;
						transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
					}
				}

				.texte {
					width: 70%;
					margin-left: 10%;

					@media only screen and (max-width: $phone) {
						width: 100%;
						margin-left: 0%;
						text-align: left;
					}
					p {
						margin-bottom: 64px;
						width: 80%;
						@media only screen and (max-width: $phone) {
							width: 100%;
						}
					}
					.btn {
					}
				}
			}
			.slider {
				flex-basis: 40%;
				max-width: 40%;
				padding: 0 32px;

				@media only screen and (max-width: $phone) {
					flex-basis: 100%;
					max-width: 100%;
					padding: 64px 0px 0 0px;
				}

				.swiper-wrapper {
					width: max-content;
					height: 100%;
					display: flex;
				}
				div {
					width: 100%;
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
					background-size: contain;
				}

				video {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 32px;
				}
			}
		}

		&.yellow {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-jaune, 0.1);
				}

				h2::after {
					background-color: rgba($color-jaune, 0.1);
				}
			}
			.medias {
				img:hover {
					background-color: rgba($color-jaune, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-jaune, 0.1);
			}

			.active {
				color: $color-jaune !important;
			}

			.btn {
				background-color: $color-jaune;
			}
		}

		&.pink {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-violet, 0.1);
				}

				h2::after {
					background-color: rgba($color-violet, 0.1);
				}
			}
			.medias {
				img:hover {
					background-color: rgba($color-violet, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-violet, 0.1);
			}

			.active {
				color: $color-violet !important;
			}

			.btn {
				background-color: $color-violet;
			}
		}

		&.blue {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-bleu, 0.1);
				}

				h2::after {
					background-color: rgba($color-bleu, 0.1);
				}
			}

			.medias {
				img:hover {
					background-color: rgba($color-bleu, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-bleu, 0.1);
			}

			.active {
				color: $color-bleu !important;
			}

			.btn {
				background-color: $color-bleu;
			}
		}

		&.kaki {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-kaki, 0.1);
				}

				h2::after {
					background-color: rgba($color-kaki, 0.1);
				}
			}

			.medias {
				img:hover {
					background-color: rgba($color-kaki, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-kaki, 0.1);
			}

			.active {
				color: $color-kaki !important;
			}

			.btn {
				background-color: $color-kaki;
			}
		}

		&.red {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-bordeaux, 0.1);
				}

				h2::after {
					background-color: rgba($color-bordeaux, 0.1);
				}
			}

			.medias {
				img:hover {
					background-color: rgba($color-bordeaux, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-bordeaux, 0.1);
			}

			.active {
				color: $color-bordeaux !important;
			}

			.btn {
				background-color: $color-bordeaux;
			}
		}
	}
</style>
