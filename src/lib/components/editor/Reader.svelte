<script>
	export let contenu;
	const { blocks = [] } = contenu;

	function nestedList(listData) {
		const { items, style = 'unordered' } = listData;

		let listHtml = '';

		if (items == null || items.length == 0) listHtml = '';

		listHtml += `<ul style="--index:0;"  class='parent child-0'>`;
		items.forEach((element, index) => {
			listHtml += listChild(element, style, ++index);
		});
		listHtml += `</ul>`;
		return listHtml;
	}

	function listChild(parent, style, parentIndex, nestedIndex = 1) {
		let listHtml = '';

		const { content, items } = parent;

		listHtml += `<li>${style == 'ordered' ? `<ol>${parentIndex}</ol> &nbsp;` : '&#8226;&nbsp;'}${content}</li>`;

		if (items != null && items.length > 0) {
			listHtml += `<ul style="--index:${nestedIndex};" class='child-${nestedIndex}'>`;
			items.forEach((element, index) => {
				listHtml += listChild(element, style, `${parentIndex}.${++index}`, nestedIndex++);
			});
			listHtml += '</ul>';
		}

		return listHtml;
	}
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

			{#if block.type == 'nestedList'}
				{@html nestedList(block.data)}
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

<style lang="scss" global>
	#contenu {
		.block-header {
			color: $color-gris-dark;
		}
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

		.block-nestedList {
			ul {
				list-style: none;
				padding-left: calc(var(--index) * 16px);
				li {
					margin-bottom: 8px;
					display: flex;
					&:before {
						content: var(--index);
						margin-right: 8px;
					}
				}
			}
		}
	}
</style>
