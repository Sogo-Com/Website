<script>
	import { onMount } from 'svelte';

	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import SplitText from 'gsap/dist/SplitText';

	let isTablet = false;

	onMount((_) => {
		gsap.registerPlugin(ScrollTrigger, SplitText);
		isTablet = window.matchMedia('(max-width:1150px)').matches;

		methods.load();
		window.refreshAnimations = () => {
			setTimeout((_) => {
				methods.refresh();
			}, 500);
		};
	});

	const timelines = {};

	const localMethods = {
		h1: () => {
			const selector = 'h1';

			const Elems = document.querySelectorAll(`${selector}[animate]`);

			if (timelines[selector] == null) timelines[selector] = [];

			Elems?.forEach((Elem) => {
				const splited = new SplitText(Elem, { type: 'words,chars,lines' });

				let timeline = gsap.timeline({
					onComplete: () => {
						splited.revert();
					}
				});

				timeline.to(Elem, {
					autoAlpha: 1,
					duration: 0
				});

				timeline.fromTo(
					splited.chars,
					{
						y: 10,
						autoAlpha: 0
					},
					{
						delay: 0.5,
						stagger: 0.03,
						duration: 0.05,
						y: 0,
						autoAlpha: 1
					}
				);

				timelines[selector].push(timeline);
			});
		},

		h2: () => {
			const selector = 'h2';

			const Elems = document.querySelectorAll(`${selector}[animate]`);

			if (timelines[selector] == null) timelines[selector] = [];

			Elems?.forEach((Elem) => {
				const props = {
					start: isTablet ? 'top 80%' : 'top 70%',
					end: isTablet ? 'bottom 80%' : 'bottom 70%'
				};

				const splited = new SplitText(Elem, { type: 'words,chars,lines' });

				let timeline = gsap.timeline({
					scrollTrigger: {
						trigger: Elem,
						start: props.start,
						end: props.end
					},
					onComplete: () => {
						splited.revert();
					}
				});

				timeline.to(Elem, {
					autoAlpha: 1,
					duration: 0
				});

				timeline.fromTo(
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

				timelines[selector].push(timeline);
			});
		},

		h3: () => {
			const selector = 'h3';

			const Elems = document.querySelectorAll(`${selector}[animate]`);

			if (timelines[selector] == null) timelines[selector] = [];

			Elems?.forEach((Elem) => {
				const props = {
					start: isTablet ? 'top 80%' : 'top 70%',
					end: isTablet ? 'bottom 80%' : 'bottom 70%'
				};

				const splited = new SplitText(Elem, { type: 'words,chars,lines' });

				let timeline = gsap.timeline({
					scrollTrigger: {
						trigger: Elem,
						start: props.start,
						end: props.end
					},
					onComplete: () => {
						splited.revert();
					}
				});

				timeline.to(Elem, {
					autoAlpha: 1,
					duration: 0
				});

				timeline.fromTo(
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

				timelines[selector].push(timeline);
			});
		},

		p: () => {
			const selector = 'p';

			const Elems = document.querySelectorAll(`${selector}[animate]`);

			if (timelines[selector] == null) timelines[selector] = [];

			Elems?.forEach((Elem) => {
				const props = {
					start: isTablet ? 'top 80%' : 'top 70%',
					end: isTablet ? 'bottom 80%' : 'bottom 70%'
				};

				const splited = new SplitText(Elem, { type: 'words,chars,lines' });

				let timeline = gsap.timeline({
					scrollTrigger: {
						trigger: Elem,
						start: props.start,
						end: props.end,
						scrub: true
					},
					onComplete: () => {
						splited.revert();
					}
				});

				timeline.fromTo(
					splited.lines,
					{
						y: 10,
						opacity: 0
					},
					{
						stagger: 0.03,
						duration: 0.05,
						y: 0,
						opacity: 1
					}
				);

				timelines[selector].push(timeline);
			});
		},

		btn: () => {
			const selector = '.btn';

			const Elems = document.querySelectorAll(`${selector}[animate]`);

			if (timelines[selector] == null) timelines[selector] = [];

			Elems?.forEach((Elem) => {
				const props = {
					start: isTablet ? 'top 85%' : 'top 80%',
					end: isTablet ? 'bottom 85%' : 'bottom 80%'
				};

				let timeline = gsap.timeline({
					scrollTrigger: {
						trigger: Elem,
						start: props.start,
						end: props.end
					}
				});

				timeline.fromTo(
					Elem,
					{
						y: 10,
						opacity: 0,
						delay: 0,
						duration: 0.3
					},
					{
						y: 0,
						opacity: 1
					}
				);

				timelines[selector].push(timeline);
			});
		},

		friseHistoire: () => {
			const selector = '.frise';

			const Elems = document.querySelectorAll(`${selector}[animate]`);

			if (timelines[selector] == null) timelines[selector] = [];

			const isMobile = window.matchMedia('(max-width:960px)').matches;

			Elems?.forEach((Elem) => {
				const pointsElems = document.querySelectorAll('.point');

				let timeline = gsap.timeline({
					scrollTrigger: {
						trigger: Elem,
						start: 'center center',
						end: '+=1300px',
						pin: true,
						pinSpacing: true,
						scrub: true,
					}
				});

				const props = {
					x: isMobile ? 0 : -50,
					y: isMobile ? -50 : 0
				};

				pointsElems?.forEach((pointElem) => {
					timeline.fromTo(
						pointElem,
						{
							opacity: 0,
							x: props.x,
							y: props.y
						},
						{
							opacity: 1,
							x: 0,
							y: 0
						}
					);
				});


				timelines[selector].push(timeline);
			});
		}
	};

	export const methods = {
		load: () => {
			localMethods.h1();
			localMethods.h2();
			localMethods.h3();
			localMethods.p();
			localMethods.btn();
			localMethods.friseHistoire()
		},
		refresh: () => {
			Object.keys(timelines).forEach((tlKey) => {
				timelines[tlKey]?.forEach((timeline) => {
					setTimeout((_) => {
						tl.refresh();
					});
				});
			});
		}
	};
</script>

<style lang="scss" global>
	//Anims
	h1[animate],
	h2[animate] {
		opacity: 0;
		visibility: hidden;
	}
</style>
