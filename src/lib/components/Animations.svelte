<script>
	import { onMount } from 'svelte';

	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import SplitText from 'gsap/dist/SplitText';


	onMount((_) => {
		gsap.registerPlugin(ScrollTrigger, SplitText);
		methods.load();
		window.refreshAnimations = () => {
		//	methods.refresh();
		};

	});
	const timelines = []

	export const methods = {
		load: () => {

			const noanim = ":not([data-noamin],.noanim)"
		
			//Titres

			const isMedia = window.matchMedia("(max-width:1150px)").matches
			document.querySelectorAll("h1")?.forEach((elem) => {
				const splited = new SplitText(elem, { type: 'words,chars,lines' });

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



			const revealElements = 'h2'+noanim+',h3'+noanim;

			document.querySelectorAll(revealElements)?.forEach((elem) => {
				const splited = new SplitText(elem, { type: 'words,chars,lines' });

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

				timelines.push(tl)
			});

			//Btn
			document.querySelectorAll('.app .btn')?.forEach((button) => {

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: button,
						start: 'top 90%',
						end:   'bottom 90%',
						scrub: false,
						once:true,
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

				timelines.push(tl)
			});


            
			//p
			document.querySelectorAll('.app p')?.forEach((paragraph) => {

				const props = {
					start: isMedia ? 'top 90%' :  'top 80%',
					end: isMedia ? 'bottom 90%' :  'bottom 80%',
					stagger : isMedia ? 0.01 : 0.02
				}
				
                const splited = new SplitText(paragraph, { type: 'lines,words,chars' });

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: paragraph,
						start: props.start,
						end:  props.end,
                        scrub:false,
						//once:true,
					}
				});
				tl.fromTo(
					splited.lines,
					{
						y: 10,
						x:-10,
						autoAlpha: 0
					},
					{
						stagger: props.stagger,
						duration: 0.05,
						y: 0,
						x:0,
						autoAlpha: 1
					}
				);

				timelines.push(tl)
			});
		},
		refresh:() =>{
			
			if(timelines.length > 0){
				timelines.forEach(tl => {
					tl.restart()
				})
			}
		}
	};
</script>

<style lang="scss" global>
	//Anims
	h1:not([data-noamin],.noanim),
	h2:not([data-noamin],.noanim),
	h3:not([data-noamin],.noanim) {
		opacity: 0;
		visibility: hidden;
	}
</style>
