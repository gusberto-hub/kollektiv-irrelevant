<script>
	import '../lib/scss/global.scss';
	import Footer from './_components/Footer.svelte';
	import Navbar from './_components/Navbar.svelte';
	import P5 from 'p5-svelte';

	let frameCounter = 0;
	let trail = [];

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(p5.windowWidth, p5.windowHeight);
			p5.noStroke();
		};

		p5.draw = () => {
			p5.background('#0e0e1a');

			p5.fill('#fb0089');

			trail.push(p5.createVector(p5.mouseX, p5.mouseY));

			// if (p5.mouseX !== p5.pmouseX || p5.mouseY !== p5.pmouseY) {
			// 	trail.push(p5.createVector(p5.mouseX, p5.mouseY));
			// } else {
			// 	trail.shift();
			// }

			if (trail.length > 80) {
				trail.shift();
			}

			for (let i = 0; i < trail.length; i++) {
				const curr = trail[i];
				// const currD = i < 50 ? p5.map(i, 0, 50, 0, 99) : p5.map(i, 50, 100, 99, 0);
				p5.circle(curr.x, curr.y, 60);
			}

			// frameCounter < 500 ? frameCounter++ : (frameCounter = 0);
		};
	};
</script>

<svelte:head>
	<meta name="description" content={data.projectMetadata.description} />
	<link rel="stylesheet" href="node_modules/lite-youtube-embed/src/lite-yt-embed.css" />
	<script src="node_modules/lite-youtube-embed/src/lite-yt-embed.js"></script>
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
		inset: 0;
		z-index: -1;
		/* filter: blur(20px); */
		/* border: 2px solid red; */
	}
</style>
