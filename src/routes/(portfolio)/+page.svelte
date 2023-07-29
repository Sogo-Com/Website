
<script>

    import { setting_ldm_store } from '$lib/settings/detailMode.js'
    import H1 from "$lib/components/H1.svelte";
    import { t } from '$lib/translations';


</script>

<H1 innerText="{$t('home.titre')}" />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>{$t('home.intro')}</p>


