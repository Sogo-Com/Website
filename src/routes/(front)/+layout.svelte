<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';

	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import ScrollSmoother from 'gsap/dist/ScrollSmoother';

    import Animations from '$lib/components/Animations.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';


    let animations;
    let smoothScroll;
	onMount((_) => {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
		loadSmoothScroll()
	});

	function loadSmoothScroll(){
		smoothScroll?.scrollTop(0)
		smoothScroll?.kill()
		smoothScroll = ScrollSmoother.create({
			autoResize: true, // automatically call update() when window is resized
			smooth: 1,
			effects: true, // looks for data-speed and data-lag attributes on elements
			// smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
		});
	}

	


	onNavigate((navigation) => {
        
		if (!document.startViewTransition) return;

       
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
                
				resolve();
				await navigation.complete;
				
                animations.load();
				loadSmoothScroll()
			});

		});
	});
</script>

<svelte:head>
	<link rel="icon" href={$page.data.icon || '/favicon.png'} />
	<title>{$page.data.title || 'Selte Begins'}</title>
</svelte:head>

<Header />

<div class="app" id="smooth-wrapper">
	<div id="smooth-content">
		<main>
			<slot />
		</main>

		<Footer />
	</div>
</div>


<Animations bind:methods={animations} />

<style lang="scss">
	main{
		min-height: 100vh;
	}
</style>