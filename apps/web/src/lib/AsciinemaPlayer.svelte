<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    castId?: string;
  }

  const { castId = 'RjSsDnzYvvVyoYC4' }: Props = $props();

  let container: HTMLDivElement | undefined = $state();

  onMount(() => {
    if (!container) return;

    const script = document.createElement('script');
    script.src = `https://asciinema.org/a/${castId}.js`;
    script.id = `asciicast-${castId}`;
    script.async = true;
    container.appendChild(script);

    return () => {
      script.remove();
      container!.replaceChildren();
    };
  });
</script>

<div class="asciinema-player" bind:this={container}></div>

<style>
  .asciinema-player {
    width: min(100%, 920px);
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(0, 255, 65, 0.15),
      0 12px 40px rgba(0, 0, 0, 0.45);
  }

  .asciinema-player :global(.asciinema-player-wrapper) {
    border-radius: 8px;
  }
</style>
