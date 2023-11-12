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

			const isMedia = window.matchMedia("(max-width:1150px)").matches
			console.log(isMedia);
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

				const props = {
					start: isMedia ? 'top 80%' :  'top 70%',
					end: isMedia ? 'bottom 80%' :  'bottom 70%',
				}

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: elem,
						start: props.start,
						end:  props.end
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

				const props = {
					start: isMedia ? 'top 80%' :  'top 70%',
					end: isMedia ? 'bottom 80%' :  'bottom 70%',
				}

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: button,
						start: props.start,
						end:  props.end,
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

				const props = {
					start: isMedia ? 'top 90%' :  'top 80%',
					end: isMedia ? 'bottom 90%' :  'bottom 80%',
					scrub: !isMedia,
					stagger : isMedia ? 0.05 : 0.02
				}
				
                const splited = new SplitText(paragraph, { type: 'line,words,chars' });

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: paragraph,
						start: props.start,
						end:  props.end,
                        scrub:props.scrub
					}
				});
				tl.fromTo(
					splited.words,
					{
						y: 10,
						autoAlpha: 0
					},
					{
						stagger: props.stagger,
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
