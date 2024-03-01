<script>
	export let data;
</script>

<section id="about-page">
	<div class="about-hero-container">
		<h1 class="title">das Kollektiv</h1>
		<p class="paragraph">
			{data.page.pageDescription}
		</p>
		<img
			src="https://uploads-ssl.webflow.com/63419ff88f1eec1858f57229/63595827b22cf279b2eda3d9_Gr%C3%BCnder.jpg"
			alt="the kollektivs founders"
			class="image"
		/>
	</div>
	<div class="member-container">
		<h1 class="member-title">die Irrelevanten</h1>
		<div class="member-wrapper">
			{#each data.teamMembersConnection.edges as member}
				<div class="member-card">
					<div class="member-card__image-container">
						<img
							class=""
							src={member.node.picture.url}
							alt={member.node.name + ' ' + member.node.role}
						/>
					</div>
					<div class="member-card__details">
						<p class="name">{member.node.name}</p>
						<p class="role">{member.node.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
