<script>
	export let contenu;
	const { blocks = [] } = contenu;
	
</script>

<div id="contenu">
	{#each blocks as block, index}
		<div class="block block-{block.type}">
			{#if block.type == 'paragraph'}
				<p bind:innerHTML={block.data.text} contenteditable="false" />
			{/if}
			{#if block.type == 'header' && block.data.level == 2}
				<h2>{block.data.text}</h2>
			{/if}
			{#if block.type == 'header' && block.data.level == 3}
				<h3>{block.data.text}</h3>
			{/if}
			{#if block.type == 'header' && block.data.level == 4}
				<h4>{block.data.text}</h4>
			{/if}
		
			{#if block.type == 'list'}
				<ul>
					{#each block.data.items as item}
						<li>{item}</li>
					{/each}
				</ul>
			{/if}
			{#if block.type == 'quote'}
				<blockquote>{block.data.text}</blockquote>
			{/if}
			{#if block.type == 'image'}
				<img src={block.data.file.url} alt={block.data.caption} />
				<blockquote>{block.data.caption}</blockquote>
			{/if}
			{#if block.type == 'code'}
				<pre><code>{block.data.code}</code></pre>
			{/if}
			{#if block.type == 'delimiter'}
				<hr />
			{/if}
			{#if block.type == 'raw'}
				<div>{block.data.html}</div>
			{/if}
			{#if block.type == 'button'}
				<a class="btn" href={block.data.link}>{block.data.text}</a>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.block {
		margin-bottom: 32px;
	}

	.block-button {
		margin-bottom: 64px;
	}

	.block-image {
		width: 100%;
		max-height: 400px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	
</style>
