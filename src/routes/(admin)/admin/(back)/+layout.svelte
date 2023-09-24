<script>
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	function logout() {
		redirect(300, '/admin/logout');
	}
</script>

<div class="back-office">
	<!-- Sidebar/Menu -->
	<div class="sidebar">
		<div class="logo">
			<img src="/images/sogo-pink.png" alt="Logo de l'entreprise" />
		</div>
		<ul class="menu">
			<li><a href="/admin/contacts">Demandes de contact</a></li>
		</ul>
	</div>

	<!-- Main Content -->
	<div class="main-content">
		<header class="header">
			<div class="header-content">
				<button class="logout-button" on:click={logout}>Déconnexion</button>
				<a href="/" target="_blank" class="view-site-button"><div>Voir le site</div></a>
			</div>
		</header>

		<slot />
		<!-- Ajoutez ici le contenu principal de votre back office -->
	</div>
</div>

<style lang="scss">
	.back-office {
		display: flex;
		height: 100vh;
	}

	/* Sidebar/Menu */
	.sidebar {
		width: 250px;
		background-color: $color-gris-clair;
		padding: 20px;

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

		.header-content {
			display: flex;
			justify-content: space-between;
			align-items: center;

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
</style>
