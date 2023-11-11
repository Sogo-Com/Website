<script>
	import { onMount } from 'svelte';

	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import SplitText from 'gsap/dist/SplitText';

	onMount((_) => {
		gsap.registerPlugin(ScrollTrigger, SplitText);
		methods.refresh();
	});

	export const methods = {
		refresh: () => {
			//Titres


			document.querySelectorAll("h1")?.forEach((elem) => {
				const splited = new SplitText(elem, { type: 'words,chars' });

				gsap.to(elem, {
					autoAlpha: 1
				});


				gsap.fromTo(
					splited.chars,
					{
						y: 10,
						autoAlpha: 0
					},
					{
                        delay:.5,
						stagger: 0.03,
						duration: 0.05,
						y: 0,
						autoAlpha: 1
					}
				);
			});



			const revealElements = 'h2,h3';

			document.querySelectorAll(revealElements)?.forEach((elem) => {
				const splited = new SplitText(elem, { type: 'words,chars' });

				gsap.to(elem, {
					autoAlpha: 1
				});

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: elem,
						start: 'top 70%',
						end: 'bottom 70%'
					}
				});

				tl.fromTo(
					splited.chars,
					{
						y: 10,
						autoAlpha: 0
					},
					{
						stagger: 0.03,
						duration: 0.05,
						y: 0,
						autoAlpha: 1
					}
				);
			});

			//Btn
			document.querySelectorAll('.app .btn')?.forEach((button) => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: button,
						start: 'top 70%',
						end: 'bottom 70%',
						scrub: true
					}
				});
				tl.fromTo(
					button,
					{
						yPercent: 100,
						autoAlpha: 0
					},
					{
						yPercent: 0,
						autoAlpha: 1
					}
				);
			});


            
			//p
			document.querySelectorAll('.app p')?.forEach((paragraph) => {

                const splited = new SplitText(paragraph, { type: 'words,chars' });

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: paragraph,
						start: 'top 60%',
						end: '+=300px 60%',
                        scrub:true
					}
				});
				tl.fromTo(
					splited.words,
					{
						y: 10,
						autoAlpha: 0
					},
					{
						stagger: 0.02,
						duration: 0.05,
						y: 0,
						autoAlpha: 1
					}
				);
			});
		}
	};
</script>

<style lang="scss" global>
	//Anims
	h1,
	h2,
	h3 {
		opacity: 0;
		visibility: hidden;
	}
</style>
