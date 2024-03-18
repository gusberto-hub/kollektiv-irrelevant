<script>
	import '../lib/scss/global.scss';
	import Footer from './_components/Footer.svelte';
	import Navbar from './_components/Navbar.svelte';
	import P5 from 'p5-svelte';

	export let data;

	const elements = [];
	const trailLength = 30;

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(p5.windowWidth, p5.windowHeight);
			p5.noStroke();
		};

		p5.draw = () => {
			p5.background(p5.color(0, 0, 20));

			const mouseIsMoving = p5.pmouseX !== p5.mouseX || p5.pmouseY !== p5.mouseY;

			(elements.length > trailLength || !mouseIsMoving) && elements.shift();

			for (let i = 0; i < elements.length; i++) {
				const el = elements[i];
				const r = p5.map(i, trailLength / 3, trailLength, 0, 255);
				const g = p5.map(i, (trailLength / 3) * 2, trailLength, 0, 223);
				const b = p5.map(i, 0, (trailLength / 3) * 2, 255, 100);
				p5.fill(p5.color(r, g, b));
				p5.ellipse(el.x, el.y, 50, i + 50);
			}

			if (mouseIsMoving) {
				elements.push({ x: p5.mouseX, y: p5.mouseY });
			}
		};
	};
</script>

<svelte:head>
	<meta name="description" content={data.projectMetadata.description} />
	<title>{data.projectMetadata.name}</title>
</svelte:head>

<div class="main-container">
	<div class="canvas">
		<P5 {sketch} />
	</div>
	<Navbar />
	<main class="">
		<slot />
	</main>
	<div class="main-footer">
		<Footer
			youtube={data.projectMetadata.youtubeProfileUrl}
			instagram={data.projectMetadata.instagramProfileUrl}
			tiktok={data.projectMetadata.tiktokProfileUrl}
		/>
	</div>
</div>

<style>
	.canvas {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		z-index: 10;
		mix-blend-mode: lighten;
		pointer-events: none;
		filter: blur(20px);
		transform: translateZ(0);
	}
</style>
