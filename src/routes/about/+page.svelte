<script>
	export let data;
</script>

<div class="grid gap-4 pt-40">
	<div class="shared-grid gap-4">
		<h1 class="font-extrabold uppercase text-2xl md:text-4xl hyphens-auto col-start-4 col-end-13">
			das Kollektiv
		</h1>
		<p class="col-start-4 col-end-13">
			{data.page.pageDescription}
		</p>
		<img
			src="https://uploads-ssl.webflow.com/63419ff88f1eec1858f57229/63595827b22cf279b2eda3d9_Gr%C3%BCnder.jpg"
			alt="the kollektivs founders"
			class="col-start-4 col-end-13"
		/>
		<div class="col-start-4 col-end-13">
			<h1 class="font-extrabold uppercase text-2xl md:text-4xl">die Irrelevanten</h1>
			<div class="sm:grid grid-cols-2 gap-4">
				{#each data.teamMembersConnection.edges as member}
					<div class="grid grid-cols-2 border-t-4 border-white gap-4">
						<div class="aspect-square">
							<img
								class="w-full h-full object-cover"
								src={member.node.picture.url}
								alt={member.node.name + ' ' + member.node.role}
							/>
						</div>
						<div class="py-4">
							<p class="font-bold text-2xl text-primary">{member.node.name}</p>
							<p>{member.node.role}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
