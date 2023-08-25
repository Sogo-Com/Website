<script>
	import { t, locales, locale } from '$lib/translations';
	import { goto } from '$app/navigation';
	import { invalidate } from '$app/navigation';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let links;
	let logo;
	onMount((_) => {
		clickLink();
		checkActive();
	});

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
	<a bind:this={logo} class="logo" href="/">
		<img alt="logo menu" src="/images/logo-menu.svg" />
	</a>
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
	<div class="presse">
		<div class="btn">
			{$t('common.menu-coin-presse')}
		</div>
	</div>
</div>

<style lang="scss" global>
	#navContainer {
		position: absolute;
		top: 0;
		background-color: #fff;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-items: center;
		padding: 16px;
		z-index: 100;

		div,
		a {
			flex-grow: 1;
			text-align: center;
			text-decoration: none;
			font-family: $font-secondary-light;
			color: $color-gris;
		}

		.links {
			flex-grow: 2;

			.active {
				font-family: $font-secondary-semibold;
				text-decoration: underline;
				color: $color-rose;
				text-underline-offset: 10px;
			}
		}

		.presse {
			.btn {
				background-color: $color-rose;
				width: fit-content;
				display: inline;
				padding: 10px 32px;
				border-radius: 32px;
				color: $color-blanc;
			}
		}
	}
</style>
