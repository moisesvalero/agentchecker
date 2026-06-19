<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';

  let { children } = $props();

  onMount(() => {
    const onMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const grain = document.querySelector('.crt-grain') as HTMLElement | null;
    const grainTimer = grain
      ? window.setInterval(() => {
          grain.style.backgroundPosition = `${Math.random() * 100}% ${Math.random() * 100}%`;
        }, 50)
      : null;

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (grainTimer !== null) window.clearInterval(grainTimer);
    };
  });
</script>

<svelte:head>
  <title>agentchecker | Clinical precision for AI agents</title>
  <meta
    name="description"
    content="Fix contradictions between AGENTS.md, CLAUDE.md, Cursor rules and Copilot instructions in 2 seconds."
  />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <meta property="og:title" content="agentchecker" />
  <meta
    property="og:description"
    content="Tired of your agents contradicting each other? Run npx agentchecker."
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="crt-grain" aria-hidden="true"></div>
<div class="crt-vignette" aria-hidden="true"></div>
<div class="crt-curvature" aria-hidden="true"></div>
<div class="mouse-glow" aria-hidden="true"></div>

<div class="page-shell">
  {@render children()}
</div>
