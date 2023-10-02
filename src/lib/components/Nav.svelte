<script>
	import { t, locales, locale } from '$lib/translations';
	import { goto } from '$app/navigation';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let links;
	let logo;
	let menu;
	let mobileBtn;
	let mobile = true;

	onMount((_) => {
		mobile = window.matchMedia('(max-width: 1150px)').matches;
		mobileMenu();
		clickLink();
		checkActive();
	});

	function mobileMenu() {
		if (!mobile) return;

		mobileBtn.addEventListener('click', (_) => {
			menu.classList.toggle('active');
			mobileBtn.classList.toggle('active');
		});
	}

	function clickLink() {
		for (const link of links.children) {
			link.addEventListener('click', checkActive);
		}
	}
	function checkActive(e) {
		if (e?.currentTarget != null) {
			const a = e.currentTarget;

			for (const link of links.children) {
				link.classList.remove('active');
			}
			a.classList.add('active');
		} else {
			let pathname = window.location.pathname;
			for (const link of links.children) {
				const url = new URL(link.href);

				if (url.pathname == pathname) link.classList.add('active');
				else link.classList.remove('active');
			}
		}
	}
</script>

<div id="navContainer">
	<div bind:this={mobileBtn} class="mobile-btn">
		<span class="mob-1" />
		<span class="mob-2" />
		<span class="mob-3" />
	</div>

	<div class="menu-container">
		<a bind:this={logo} class="logo" href="/">
			<img alt="logo menu" src="/images/logo-menu.svg" />
		</a>

		<div bind:this={menu} class="menu">
			<div bind:this={links} class="links">
				<a href="/agence">
					{$t('common.menu-agence')}
				</a>
				<a href="/expertises">
					{$t('common.menu-expertises')}
				</a>
				<a href="/projets">
					{$t('common.menu-projets')}
				</a>
				<a href="/actualites">
					{$t('common.menu-actualites')}
				</a>
				<a href="/contact">
					{$t('common.menu-contact')}
				</a>
			</div>
		</div>
		<div class="presse">
			<div class="btn-container">
				<div class="btn">Espace Presse</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss" global>
	#navContainer {
		position: fixed;
		top: 0;
		background-color: #fff;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-items: center;
		padding: 32px 0;
		z-index: 100;

		.menu-container {
			margin-left: 11%;
			margin-right: 11%;

			width: 100%;
			display: flex;

			div,
			a {
			
				text-align: center;
				text-decoration: none;
				font-family: $font-secondary-light;
				color: $color-gris-dark;
				font-size: 24px;
			}
			.logo {
				display: flex;
				align-items: start;
				flex-basis: 25%;
			}
			.menu {
				flex-basis: 50%;
				display: flex;
				align-items: center;
				@media only screen and (max-width: $tablet) {
					position: absolute;
					top: 100%;
					width: 100%;
					display: none;
					height: fit-content;
					background-color: #fff;

					.links {
						flex-direction: column;
						a {
							padding: 16px 0;
						}
					}
					.presse {
						padding: 16px 0;
						background-color: $color-rose;
					}

					&.active {
						display: block !important;
					}
				}
			}

			.links {
				a {
					transition: 0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);
					padding: 16px;
					font-family: $font-secondary-medium;
				}
				a:hover {
					color: $color-gris-clair;
				}

				flex-grow: 2;

				.active {
					font-family: $font-secondary-semibold;
					text-decoration: underline;
					color: $color-rose;
					text-underline-offset: 20px;
				}
			}

			.presse {
				display: flex;
				justify-content: end;
				align-items: center;
				flex-basis: 25%;
				.btn-container {
					width: fit-content;
					display: inline;
					display: inline-block;
					flex-grow: initial;
					.btn {
						background-color: $color-rose;
						width: fit-content;
						display: inline;
						padding: 10px 32px;
						border-radius: 32px;
						color: $color-blanc;
						font-size: 24px;
					}
				}
			}

			.mobile-btn {
				@media only screen and (min-width: $tablet) {
					display: none;
				}

				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;

				&.active {
					:nth-child(1) {
						transform: rotate(45deg) translate(3px);
					}
					:nth-child(2) {
						opacity: 0;
					}

					:nth-child(3) {
						transform: rotate(-45deg);
					}
				}

				span {
					transform-origin: left;
					transition: 0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);
					display: block;
					height: 3px;
					margin: 8px 16px;
					width: 50px;
					background-color: $color-rose;
				}
			}
		}
	}
</style>
