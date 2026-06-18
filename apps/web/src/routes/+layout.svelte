<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>agentchecker — One command. All your agents agree.</title>
  <meta
    name="description"
    content="Fix contradictions between AGENTS.md, CLAUDE.md, Cursor rules and Copilot instructions in 2 seconds."
  />
  <meta property="og:title" content="agentchecker" />
  <meta
    property="og:description"
    content="Tired of your agents contradicting each other? Run npx agentchecker."
  />
</svelte:head>

<div class="page">
  {@render children()}
</div>

<style>
  .page {
    min-height: 100vh;
  }
</style>
