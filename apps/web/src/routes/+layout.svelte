<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>agent-check — One command. All your agents agree.</title>
  <meta
    name="description"
    content="Fix contradictions between AGENTS.md, CLAUDE.md, Cursor rules and Copilot instructions in 2 seconds."
  />
  <meta property="og:title" content="agent-check" />
  <meta
    property="og:description"
    content="Tired of your agents contradicting each other? Run npx agent-check."
  />
</svelte:head>

<div class="page">
  {@render children()}
</div>
