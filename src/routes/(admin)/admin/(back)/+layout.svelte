<script>
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
	import { redirect } from '@sveltejs/kit';

	function logout() {
		goto( '/admin/logout');
	}
</script>

<Toaster />

<div class="back-office">
	<!-- Sidebar/Menu -->
	<div class="sidebar-container">
		<div class="sidebar">
			<div class="logo">
				<img src="/images/sogo-pink.png" alt="Logo de l'entreprise" />
			</div>
			<ul class="menu">
				<li><a href="/admin/contacts">Demandes de contact</a></li>
				<li><a href="/admin/actualites">Actualites</a></li>
				<li><a href="/admin/projets">Projets</a></li>
				<li><a href="/admin/collaborateurs">Collaborateurs</a></li>
			</ul>
		</div>
	</div>
	

	<!-- Main Content -->
	<div class="main-content">
		<header class="header">
			<div class="header-content">
				<button class="logout-button" on:click={()=> {logout()}}>Déconnexion</button>
				<slot class="btn-container" name="buttons" />

				<a href="/" target="_blank" class="view-site-button"><div>Voir le site</div></a>
			</div>
		</header>

		<slot />
		<!-- Ajoutez ici le contenu principal de votre back office -->
	</div>
</div>

<style lang="scss" global>
	.back-office {
		display: flex;
		min-height: 100vh;
		height: 100%;

		h1{
	font-family: var(--font-primary-bold);
    color: var(--color-rose);
}

		.sidebar-container{
			width: 250px;
			background-color: $color-gris-clair;
			padding: 20px;
		}
		/* Sidebar/Menu */
		.sidebar {
		
			position: sticky;
			top: 0;

			.logo {
				margin-bottom: 20px;

				img {
					max-width: 100%;
				}
			}

			.menu {
				list-style: none;
				padding: 0;

				li {
					margin-bottom: 10px;

					a {
						text-decoration: none;
						color: var(--color-gris-dark);
						font-family: var(--font-secondary-regular);
						font-size: 16px;
						transition: color 0.3s ease;

						&:hover {
							color: var(--color-gris);
						}
					}
				}
			}
		}

		/* Main Content */
		.main-content {
			flex: 1;
		}

		/* Header */
		.header {
			background-color: $color-gris-clair;
			position: sticky;
			top: 0;
			z-index: 10;

			.header-content {
				display: flex;
				justify-content: space-between;
				align-items: center;

				[slot='buttons'] {
					width: 100%;
					height: 50px;
					display: flex;
					justify-content: start;
					align-items: center;
				}

				.logout-button {
					height: 50px;
					background-color: var(--color-bordeaux);
					color: var(--color-blanc);
					padding: 0 20px;
					font-family: var(--font-secondary-bold);
					border: none;
					cursor: pointer;
					transition: background-color 0.3s ease;

					&:hover {
						background-color: var(--color-rose);
					}
				}

				.create-button {
					height: 50px;
					background-color: var(--color-jaune);
					color: var(--color-blanc);
					padding: 0 20px;
					font-family: var(--font-secondary-bold);
					border: none;
					cursor: pointer;
					transition: background-color 0.3s ease;

					display: flex;
					align-items: center;
					text-decoration: none;

					&:hover {
						background-color: var(--color-kaki);
					}
				}


				.save-button {
					height: 50px;
					background-color: var(--color-bleu);
					color: var(--color-blanc);
					padding: 0 20px;
					font-family: var(--font-secondary-bold);
					border: none;
					cursor: pointer;
					transition: background-color 0.3s ease;

					display: flex;
					align-items: center;
					text-decoration: none;

					&:hover {
						background-color: var(--color-gris);
					}
				}


				.back-button {
					height: 50px;
					background-color: var(--color-jaune);
					color: var(--color-blanc);
					padding: 0 20px;
					font-family: var(--font-secondary-bold);
					border: none;
					cursor: pointer;
					transition: background-color 0.3s ease;

					&:hover {
						background-color: var(--color-gris);
					}
				}

				.delete-button {
					height: 50px;
					background-color: var(--color-bordeaux);
					color: var(--color-blanc);
					padding: 0 20px;
					font-family: var(--font-secondary-bold);
					border: none;
					cursor: pointer;
					transition: background-color 0.3s ease;

					&:hover {
						background-color: var(--color-rose);
					}
				}

				.create-button {
					height: 50px;
					background-color: var(--color-jaune);
					color: var(--color-blanc);
					padding: 0 20px;
					font-family: var(--font-secondary-bold);
					border: none;
					cursor: pointer;
					transition: background-color 0.3s ease;

					&:hover {
						background-color: var(--color-kaki);
					}
				}

				.view-site-button {
					height: 50px;
					background-color: var(--color-bleu);
					color: var(--color-blanc);
					padding: 0 20px;
					font-family: var(--font-secondary-bold);
					text-decoration: none;
					border: none;
					cursor: pointer;
					transition: background-color 0.3s ease;
					display: flex;
					align-items: center;

					&:hover {
						background-color: var(--color-kaki);
					}
				}
			}
		}
	}
</style>
