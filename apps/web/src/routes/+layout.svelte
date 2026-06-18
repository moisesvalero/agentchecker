<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>agentchecker | One command. All your agents agree.</title>
  <meta
    name="description"
    content="Fix contradictions between AGENTS.md, CLAUDE.md, Cursor rules and Copilot instructions in 2 seconds."
  />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta property="og:title" content="agentchecker" />
  <meta
    property="og:description"
    content="Tired of your agents contradicting each other? Run npx agentchecker."
  />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="/og-image.png" />
</svelte:head>

<div class="page">
  {@render children()}
</div>

<style>
  .page {
    min-height: 100vh;
  }
</style>
