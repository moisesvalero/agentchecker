<script lang="ts">
  const command = 'npx agentchecker';

  async function copyCommand() {
    await navigator.clipboard.writeText(command);
  }
</script>

<main class="container">
  <section class="hero">
    <div class="badge">100% local · zero config</div>
    <h1>One command.<br />All your agents agree.</h1>
    <p class="lead">
      Tired of your agents contradicting each other? Cursor says pnpm. Claude says npm.
      Copilot says eslint. Run one command and fix it in seconds.
    </p>
    <div class="command">
      <span>$ {command}</span>
      <button type="button" onclick={copyCommand}>Copy</button>
    </div>
  </section>

  <section class="grid">
    <article class="card">
      <h2>1. Run the command</h2>
      <p>Execute <code>npx agentchecker</code> in your project root.</p>
    </article>
    <article class="card">
      <h2>2. Auto-detect</h2>
      <p>Scans AGENTS.md, CLAUDE.md, Cursor rules, Copilot instructions and more.</p>
    </article>
    <article class="card">
      <h2>3. Fix contradictions</h2>
      <p>Choose pnpm or npm, oxlint or eslint, and apply safe fixes with preview.</p>
    </article>
  </section>

  <section class="section">
    <h2>Example output</h2>
    <div class="terminal">
$ npx agentchecker

Found:
  ✓ AGENTS.md
  ✓ CLAUDE.md
  ✓ .cursor/rules/global.mdc

⚠ 2 contradictions found

? Fix contradictions? Yes
? Package manager › pnpm (recommended)
? Linter › oxlint

✓ Fixed 2 files. All your agents agree.
    </div>
  </section>

  <section class="section">
    <h2>Options</h2>
    <div class="card">
      <ul>
        <li><code>--dry-run</code> preview without writing</li>
        <li><code>--check-only</code> CI mode, exit 1 on contradictions</li>
        <li><code>-y</code> apply recommended fixes automatically</li>
        <li><code>-a cursor claude</code> limit scanned agents</li>
      </ul>
    </div>
  </section>

  <div class="links">
    <a href="https://github.com/moisesvalero/agentchecker">GitHub</a>
    <a href="https://www.npmjs.com/package/agentchecker">npm</a>
  </div>
</main>

<style>
  button {
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.35rem 0.7rem;
    cursor: pointer;
  }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
</style>
