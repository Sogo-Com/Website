<script>
	import { t, locales, locale } from '$lib/translations';
	import gsap from 'gsap';
	import { goto } from '$app/navigation';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let links;
	let logo;
	let menu;
	let mobileBtn;
	let mobile = true;
	let mobileTl;

	onMount((_) => {
		mobile = window.matchMedia('(max-width: 1150px)').matches;
		mobileTl = gsap.timeline();

		mobileMenu();
		clickLink();
		checkActive();
	});

	function mobileMenu() {
		if (!mobile) return;

		mobileBtn.addEventListener('click', (_) => {
			if (menu.classList.contains('active')) {
				mobileClose();
			} else mobileOpen();
		});
	}

	function mobileOpen() {

		if(!mobile)
			return

		menu.classList.add('active');
		mobileBtn.classList.add('active');

		mobileTl.to(menu, {
			height: 'auto'
		});
	}

	function mobileClose() {

		if(!mobile)
			return
		
		menu.classList.remove('active');
		mobileBtn.classList.remove('active');

		mobileTl.to(menu, {
			height: '0'
		});
	}

	function clickLink() {
		for (const link of links.children) {
			link.addEventListener('click', checkActive);
		}
	}
	function checkActive(e) {
		mobileClose()

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
	<div class="menu-container">
		<div bind:this={mobileBtn} class="mobile-btn">
			<span class="mob-1" />
			<span class="mob-2" />
			<span class="mob-3" />
		</div>

		<a data-sveltekit-reload bind:this={logo} class="logo" href="/">
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
				<a data-sveltekit-reload href="/projets">
					{$t('common.menu-projets')}
				</a>
				<a href="/actualites">
					{$t('common.menu-actualites')}
				</a>
				<a href="/contact">
					{$t('common.menu-contact')}
				</a>

				<a class="mobile presse" href="/"> Espace Presse </a>
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

			@media only screen and (max-width: $tablet) {
				justify-content: space-between;
			}

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
					display: block;
					overflow: hidden;
					height: 0;
					// height: fit-content;
					background-color: #fff;
					left: 0;

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
					color: $color-rose;
				}

				.mobile {
					color: #fff !important;
					width: -webkit-fill-available;
					justify-content: center;
					display: none;

					@media only screen and (max-width: $tablet) {
						display: flex;
					}
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

				@media only screen and (max-width: $tablet) {
					display: none;
				}
				.btn-container {
					width: fit-content;
					display: inline;
					display: inline-block;
					flex-grow: initial;
					.btn {
						background-color: $color-rose;
						width: fit-content;
						display: block;
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
				transition: cubic-bezier(0.39, 0.575, 0.565, 1) all 0.3s;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
				cursor: pointer;

				:nth-child(1) {
					bottom: 0px;
				}

				:nth-child(3) {
					top: 0px;
				}

				&.active {
					:nth-child(1) {
						transform: rotate(45deg) translate(3px);
						bottom: 0px !important;
					}

					:nth-child(2) {
						opacity: 0;
					}

					:nth-child(3) {
						transform: rotate(-45deg);
						top: 0px !important;
					}
				}

				span {
					transform-origin: left;
					transition: 0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);
					display: block;
					height: 3px;
					margin: 8px 16px;
					width: 50px;
					position: relative;
					background-color: $color-rose;
				}
			}
			.mobile-btn:hover {
				:nth-child(1) {
					bottom: -5px;
				}

				:nth-child(3) {
					top: -5px;
				}
			}
		}
	}
</style>
