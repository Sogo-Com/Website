<script>

	import EditorJS from '@editorjs/editorjs';
	import Header from '@editorjs/header';
	import NestedList from '@editorjs/nested-list';
	import ImageTool from '@editorjs/image';
	import { IsJsonString } from '$lib/utils/type';
	import ButtonTool from '$lib/editor/button/ButtonTool.js';
	import ParagraphTool from '$lib/editor/paragraph/ParagraphTool.js';
	import { onMount } from 'svelte';

	export let contenu;

	let editor;
	onMount((_) => {
		contenu = typeof contenu == 'string' ? JSON.parse(contenu) : contenu;

		editor = new EditorJS({
			holder: 'writer',
			tools: {
				header: {
					class: Header,
					config: {
						placeholder: 'Titre',
						levels: [2, 3, 4],
						defaultLevel: 2
					},
					shortcut: 'CMD+SHIFT+H'
				},
				button: {
					class: ButtonTool
				},
				paragraph: ParagraphTool,
				nestedList: {
					class: NestedList,
					inlineToolbar: true,
					shortcut: 'CMD+SHIFT+L'
				},
				image: {
					class: ImageTool,
					config: {
						endpoints: {
							byFile: '/api/editorjs', 
							byUrl: '/api/editorjs',
						}
					}
				}
			},
			data: contenu,
			defaultBlock: 'paragraph'
		});
	});

	export const methods = {
		loadContenu: (contenu = null) => {
			if (editor != null && contenu != null) {

				
				if (IsJsonString(contenu)) {
					contenu = JSON.parse(contenu);
				}

				if(contenu.blocks == null || contenu.blocks.length == 0)
					return
				
				editor.isReady.then(() => {
					editor.render(contenu);
				});
			}
		},

		saveContenu: async () => {
			let contenuSaved = {};

			if (editor != null) {
				contenuSaved = await editor.save().catch((error) => {
					console.log('Saving failed: ', error);
				});
			}

			return  JSON.stringify(contenuSaved);
		}
	};
</script>

<div id="writer" />
