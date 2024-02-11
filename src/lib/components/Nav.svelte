<script>

	import gsap from 'gsap';
	import { goto } from '$app/navigation';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount, beforeUpdate,afterUpdate } from 'svelte';
	import { onNavigate } from '$app/navigation';

	

	let links;
	let logo;
	let menu;
	let mobileBtn;
	let mobile = true;
	let mobileTl;

	onMount((_) => {
		mobile = window.matchMedia('(max-width: 1150px)').matches;
		mobileTl = gsap.timeline();

		clickLink();
		mobileMenu();
		checkLinks(window.location)
	});

	

	onNavigate(( {to}) => {
		
		const {url} = to;
		checkLinks(url)

	});

	afterUpdate((_) => {
		const link = $page.data?.backlink;
		if(link != null)
			checkLinks(new URL(window.location.origin + link) )
	});
	

	function checkLinks(url){
		
		const linkChilds = Array.from(links.children);
		if(linkChilds.length != 0 && url != null)
		{
			linkChilds.forEach((link) => {
				link.classList.remove('active');
				const linkUrl = new URL(link.href);
				if (url.pathname?.replaceAll("/","") == linkUrl.pathname?.replaceAll("/","")) link.classList.add('active');
			});
		}

	}


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

	function clickLink() {
		for (const link of links.children) {
			link.addEventListener("click",_=>{
				mobileClose()
			})
			
		}
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



</script>

<div id="navContainer">
	<div class="menu-container">
	

		<a  bind:this={logo} class="logo-menu" href="/">
			<img alt="logo menu" src="/images/logo-menu.svg" />
		</a>

		<div bind:this={menu} class="menu">
			<div bind:this={links} class="links">
				<a href="/agence">
					Agence
				</a>
				<a href="/expertises">
					Expertises
				</a>
				<a  href="/projets">
					Projets
				</a>
				<a href="/actualites">
					Actualités
				</a>
				<a href="/contact">
					Contact
				</a>

			<div class="mobile reseaux-s">
				<a href="https://www.facebook.com/Sogocom?locale=fr_FR" target="_blank">
					<img src="/images/FB_1.svg" alt="facebook" />

				</a>

				<a href="https://www.instagram.com/sogocom/?hl=fr" target="_blank">
					<img src="/images/insta.svg" alt="instagram" />

				</a>

				<a href="https://www.linkedin.com/company/sogo-com/" target="_blank">
					<img src="/images/linkedin.svg" alt="linkedin" />

				</a>

				<a href="https://www.youtube.com/@sogocom477" target="_blank">
					<img src="/images/YT.svg" alt="youtube" />

				</a>
			</div>
				<!-- <a class="mobile presse" href="/presse"> Espace Presse </a> -->
			</div>
		</div>
		<!-- <div class="presse">
			<a href="/presse">
			<div class="btn-container">
				<div class="btn">Espace Presse</div>
			</div>
		</a>
		</div> -->


		
		<div class="reseaux-s not-mob">
			<a href="https://www.facebook.com/Sogocom?locale=fr_FR" target="_blank">
				<img src="/images/FB_1.svg" alt="facebook" />

			</a>

			<a href="https://www.instagram.com/sogocom/?hl=fr" target="_blank">
				<img src="/images/insta.svg" alt="instagram" />

			</a>

			<a href="https://www.linkedin.com/company/sogo-com/" target="_blank">
				<img src="/images/linkedin.svg" alt="linkedin" />

			</a>

			<a href="https://www.youtube.com/@sogocom477" target="_blank">
				<img src="/images/YT.svg" alt="youtube" />

			</a>
		</div>

		<div bind:this={mobileBtn} class="mobile-btn">
			<span class="mob-1" />
			<span class="mob-2" />
			<span class="mob-3" />
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

		@media only screen and (max-width: $phone) {
			padding: 16px 0;
		}
		.menu-container {
			margin-left: 11%;
			margin-right: 11%;
			width: 100%;
			display: flex;
			align-items: center;

			@media only screen and (max-width: $tablet) {
				justify-content: space-between;
			}

			@media only screen and (max-width: $phone) {
				margin-left: 5%;
				margin-right: 5%;
			}

			div,
			a {
				text-align: center;
				text-decoration: none;
				font-family: $font-secondary-light;
				color: $color-gris-dark;
				font-size: 24px;

				@media only screen and (max-width: $smallpc) {
					font-size: 1rem;
				}
				
			}
			.logo-menu {
				display: flex;
				align-items: start;
				flex-basis: 25%;

				
				@media only screen and (max-width: $phone) {
					align-items: center;
					flex-basis: 100%;
					img{
						height: 70%;
					}
				}

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

			.reseaux-s{

				&.not-mob{
					display: flex;

					
					@media only screen and (max-width: $tablet) {
						display: none;
					}
				}
				&.mobile{
					display: none;
					
					@media only screen and (max-width: $tablet) {
						display: flex;
					}
				}
				a{
					margin: 16px 8px;
					width: 24px;
					height: 24px;

					padding: 0 !important;


					img{
						width: 100%;
						height: 100%;
					}
					
					@media only screen and (max-width: $smallpc) {
						font-size: 1rem;
					}
				}
				flex-basis: 25%;
				display: flex;
				justify-content: center;
				align-items: center;

			
			}
			.presse, {
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
				height: fit-content;
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

						@media only screen and (max-width: $phone) {
							transform: rotate(45deg) translate(-3px);
						}
					
					}

					:nth-child(2) {
						opacity: 0;
					}

					:nth-child(3) {
						transform: rotate(-45deg);
						top: 0px !important;

						@media only screen and (max-width: $phone) {
							transform: rotate(-45deg) translate(-3px);
						}
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

					@media only screen and (max-width: $phone) {
						width: 40px;
						margin: 4px 0px;
					}

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
