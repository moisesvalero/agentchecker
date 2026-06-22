<script lang="ts">
  import '../app.css';
  import {
    canonicalUrl,
    faqSchema,
    faqsEn,
    faqsEs,
    howToSchema,
    ogImageUrl,
    seoEn,
    siteName,
    softwareApplicationSchema,
    webPageSchema,
    webSiteSchema,
  } from '$lib/site';

  let { children } = $props();

  const jsonLd = [
    softwareApplicationSchema(),
    webSiteSchema(),
    webPageSchema(),
    faqSchema([...faqsEn, ...faqsEs]),
    howToSchema(),
  ];
</script>

<svelte:head>
  <title>{seoEn.title}</title>
  <meta name="description" content={seoEn.description} />
  <meta name="keywords" content={seoEn.keywords} />
  <meta name="author" content="Moisés Valero" />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <meta name="theme-color" content="#0a0a0a" />
  <link rel="canonical" href={canonicalUrl} />

  <link rel="alternate" hreflang="en" href={canonicalUrl} />
  <link rel="alternate" hreflang="es" href={canonicalUrl} />
  <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:title" content={seoEn.ogTitle} />
  <meta property="og:description" content={seoEn.ogDescription} />
  <meta property="og:image" content={ogImageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={seoEn.ogImageAlt} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:locale:alternate" content="es_ES" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seoEn.twitterTitle} />
  <meta name="twitter:description" content={seoEn.twitterDescription} />
  <meta name="twitter:image" content={ogImageUrl} />
  <meta name="twitter:image:alt" content={seoEn.ogImageAlt} />

  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/favicon.png" />

  {#each jsonLd as schema, index (index)}
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
  {/each}
</svelte:head>

<div class="page">
  {@render children()}
</div>

<style>
  .page {
    min-height: 100vh;
  }
</style>
