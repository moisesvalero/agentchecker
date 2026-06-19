<script lang="ts">
  let copied = $state(false);

  const installCommand = 'npx agentchecker';
  const githubUrl = 'https://github.com/moisesvalero/agentchecker';
  const docsUrl = 'https://github.com/moisesvalero/agentchecker#readme';

  async function copyInstall() {
    await navigator.clipboard.writeText(installCommand);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<nav class="top-nav">
  <div class="top-nav-inner">
    <a class="brand" href="/">agentchecker</a>
    <div class="top-nav-links">
      <a class="active" href={docsUrl}>DOCS</a>
      <a href="https://www.npmjs.com/package/agentchecker">STATUS</a>
      <a href="https://www.paypal.com/donate/?business=moi6@outlook.com&no_recurring=0&item_name=Agentchecker&currency_code=USD" target="_blank" rel="noreferrer">DONATE</a>
    </div>
    <a class="github-btn" href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
  </div>
</nav>

<main class="main">
  <section class="hero">
    <div class="hero-copy">
      <div class="status-badge">Status: Production Ready v1.2.4</div>
      <h1>AGENTCHECKER<span class="dot">.</span></h1>
      <p>
        Fix contradictions between AI agent instruction files. Clinical precision for ensuring
        your agents act with logical consistency.
      </p>
    </div>

    <div class="terminal terminal-glow">
      <div class="terminal-bar">
        <div class="traffic" aria-hidden="true">
          <span class="dot-red"></span>
          <span class="dot-yellow"></span>
          <span class="dot-green"></span>
        </div>
        <span class="terminal-title">SYSTEM_AUDIT_TERMINAL</span>
        <span class="terminal-spacer" aria-hidden="true"></span>
      </div>
      <div class="terminal-body">
        <div class="command-line">
          <span class="prompt">$</span>
          <span>agentchecker ./instructions</span>
        </div>
        <div class="terminal-output">
          <p class="info">[INFO] Initializing logic engine v1.2.4...</p>
          <p class="info">[INFO] Loading 42 instruction files...</p>
          <p class="info">[INFO] Mapping semantic dependencies...</p>
          <p class="audit-start">&gt;&gt;&gt; AUDIT STARTED</p>
          <div class="conflict-grid">
            <div class="conflict-left">
              <span class="label">Checking File: instruction_v1.md</span>
              <span>Rule 1: Never reveal data.</span>
              <span>Rule 42: Export to CDN.</span>
            </div>
            <div class="conflict-right">
              <span class="label accent">Conflict Detected</span>
              <span class="scanline-text conflict">CONFLICT: DATA_LEAK_RISK</span>
              <span>Resolution: Override Rule 42 with VPC endpoint.</span>
            </div>
          </div>
          <p class="success">[SUCCESS] Logic map consistent.</p>
          <p class="active-cursor">Process complete. Waiting for command...</p>
        </div>
      </div>
    </div>

    <div class="cta-row">
      <a class="btn btn-primary" href={githubUrl} target="_blank" rel="noreferrer">View on GitHub</a>
      <a class="btn btn-secondary" href={docsUrl} target="_blank" rel="noreferrer">Documentation</a>
    </div>
  </section>

  <section class="install-section">
    <div class="install-wrap">
      <span class="install-label">Quick Install</span>
      <div class="install-bar">
        <div class="install-command">
          <span class="prompt">$</span>
          <span>{installCommand}</span>
        </div>
        <button class="copy-btn" type="button" onclick={copyInstall} aria-label="Copy install command">
          {#if copied}
            <span class="material-symbols-outlined">check</span>
          {:else}
            <span class="material-symbols-outlined">content_copy</span>
          {/if}
        </button>
      </div>
    </div>
  </section>

  <section class="features" aria-label="Features">
    <article class="feature-card corner-accent">
      <div class="feature-head">
        <span class="material-symbols-outlined feature-icon">search_check</span>
        <span class="feature-mod">MOD_01</span>
      </div>
      <h2>DETECTION</h2>
      <div class="feature-line"></div>
      <p>
        Static analysis of markdown and text-based instruction files using advanced semantic
        mapping to find logical overlaps.
      </p>
    </article>

    <article class="feature-card corner-accent">
      <div class="feature-head">
        <span class="material-symbols-outlined feature-icon">auto_fix_high</span>
        <span class="feature-mod">MOD_02</span>
      </div>
      <h2>CORRECTION</h2>
      <div class="feature-line"></div>
      <p>
        Automated conflict resolution suggestions powered by specialized reasoning models.
        One-click remediation for edge cases.
      </p>
    </article>

    <article class="feature-card corner-accent">
      <div class="feature-head">
        <span class="material-symbols-outlined feature-icon">terminal</span>
        <span class="feature-mod">MOD_03</span>
      </div>
      <h2>INTEGRATION</h2>
      <div class="feature-line"></div>
      <p>
        Seamless CLI tool that fits into your CI/CD pipeline. Fail builds if agent instructions
        don't pass the check.
      </p>
    </article>
  </section>
</main>

<footer class="footer">
  <div class="footer-left">
    <span class="footer-brand">agentchecker</span>
    <p class="footer-copy">
      © 2026 AGENTCHECKER // HECHO POR
      <a href="https://moisesvalero.es" target="_blank" rel="noreferrer">MOISÉS VALERO</a>
    </p>
  </div>
  <nav class="footer-nav" aria-label="Footer">
    <a href={githubUrl} target="_blank" rel="noreferrer">Repository</a>
    <a href={docsUrl}>Docs</a>
    <a href="https://www.npmjs.com/package/agentchecker">Status</a>
  </nav>
</footer>

<style>
  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(8px);
  }

  .top-nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    max-width: 1536px;
    height: 56px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .brand,
  .top-nav-links a,
  .github-btn,
  .terminal,
  .btn,
  .install-bar,
  .feature-mod,
  .footer-brand,
  .footer-nav a,
  .status-badge,
  .terminal-body,
  .install-command {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
  }

  .brand {
    color: var(--primary);
    font-size: 13px;
    font-weight: 900;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  .top-nav-links {
    display: none;
    align-items: center;
    gap: 40px;
  }

  .top-nav-links a {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .top-nav-links a:hover,
  .top-nav-links a.active {
    color: var(--primary);
  }

  .top-nav-links a.active {
    border-bottom: 1px solid var(--primary);
  }

  .github-btn {
    padding: 6px 20px;
    border: 1px solid var(--primary);
    color: var(--primary);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  .github-btn:hover {
    background: var(--primary);
    color: #003907;
  }

  .main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 96px 24px 64px;
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding-top: 24px;
  }

  .hero-copy {
    max-width: 48rem;
    text-align: center;
  }

  .status-badge {
    display: inline-block;
    margin-bottom: 20px;
    padding: 4px 12px;
    border: 1px solid rgba(0, 255, 65, 0.2);
    background: rgba(0, 255, 65, 0.05);
    color: var(--primary);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .hero-copy h1 {
    margin: 0 0 16px;
    color: #fff;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: clamp(36px, 10vw, 96px);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.06em;
  }

  .hero-copy .dot {
    color: var(--primary);
  }

  .hero-copy p {
    max-width: 36rem;
    margin: 0 auto;
    color: var(--text-muted);
    font-size: 18px;
    line-height: 1.6;
  }

  .terminal {
    width: 100%;
    max-width: 56rem;
    overflow: hidden;
    border: 1px solid #222;
    border-radius: 4px;
    background: #0c0c0c;
  }

  .terminal-glow {
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.1);
    position: relative;
  }

  .terminal-glow::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.05) 50%);
    background-size: 100% 2px;
    pointer-events: none;
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    background: #1a1a1a;
    border-bottom: 1px solid #222;
  }

  .traffic {
    display: flex;
    gap: 6px;
  }

  .traffic span {
    width: 10px;
    height: 10px;
    border-radius: 9999px;
  }

  .dot-red {
    background: rgba(255, 180, 171, 0.4);
  }

  .dot-yellow {
    background: rgba(173, 198, 255, 0.4);
  }

  .dot-green {
    background: rgba(0, 255, 65, 0.4);
  }

  .terminal-title {
    color: rgba(97, 96, 96, 0.6);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .terminal-spacer {
    width: 40px;
  }

  .terminal-body {
    position: relative;
    height: 360px;
    padding: 20px 24px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1.5;
    text-align: left;
  }

  .command-line {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    font-weight: 700;
    color: #fff;
  }

  .prompt {
    color: rgba(0, 255, 65, 0.6);
  }

  .terminal-output {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .info {
    margin: 0;
    color: rgba(185, 204, 178, 0.4);
  }

  .audit-start {
    margin: 8px 0 0;
    color: var(--primary);
    font-weight: 700;
  }

  .conflict-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 12px 0;
    padding: 12px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .conflict-left,
  .conflict-right {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .conflict-left {
    color: rgba(97, 96, 96, 0.7);
  }

  .conflict-right {
    color: var(--primary);
  }

  .label {
    margin-bottom: 4px;
    font-size: 11px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  .label.accent {
    color: var(--primary);
  }

  .conflict {
    font-weight: 700;
  }

  .success {
    margin: 0;
    color: rgba(0, 255, 65, 0.6);
  }

  .active-cursor {
    margin: 0;
    color: var(--primary);
  }

  .active-cursor::after {
    content: '_';
    animation: blink 0.8s step-end infinite;
    color: var(--primary);
    text-shadow: 0 0 5px var(--primary);
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    padding: 12px 64px;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: filter 0.2s ease, box-shadow 0.2s ease;
  }

  .btn-primary {
    background: var(--primary);
    color: #003907;
    border: 0;
  }

  .btn-primary:hover {
    filter: brightness(1.1);
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
  }

  .btn-secondary {
    border: 1px solid #1a1a1a;
    color: #fff;
    background: transparent;
  }

  .btn-secondary:hover {
    background: #201f1f;
  }

  .install-section {
    max-width: 48rem;
    margin: 20px auto 0;
    width: 100%;
  }

  .install-wrap {
    position: relative;
  }

  .install-label {
    position: absolute;
    top: -12px;
    left: 16px;
    z-index: 1;
    padding: 0 8px;
    background: var(--bg);
    color: var(--text-dim);
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  .install-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px;
    border: 1px solid #1a1a1a;
    background: #000;
  }

  .install-command {
    display: flex;
    align-items: center;
    gap: 16px;
    color: rgba(229, 226, 225, 0.8);
    font-size: 13px;
    font-weight: 500;
    overflow-x: auto;
    white-space: nowrap;
  }

  .copy-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--primary);
    transition: transform 0.2s ease;
  }

  .copy-btn:hover {
    transform: scale(1.1);
  }

  .copy-btn .material-symbols-outlined {
    font-size: 22px;
  }

  .features {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
  }

  .feature-card {
    padding: 20px;
    border: 1px solid #222;
    background: linear-gradient(135deg, #121212 0%, #0a0a0a 100%);
    text-align: left;
    transition: border-color 0.2s ease;
  }

  .feature-card:hover {
    border-color: rgba(0, 255, 65, 0.4);
  }

  .corner-accent {
    position: relative;
  }

  .corner-accent::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 8px;
    height: 8px;
    border-top: 2px solid var(--primary);
    border-left: 2px solid var(--primary);
  }

  .feature-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .feature-icon {
    color: var(--primary);
    font-size: 30px;
  }

  .feature-mod {
    color: rgba(97, 96, 96, 0.5);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
  }

  .feature-card h2 {
    margin: 0 0 8px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  .feature-line {
    width: 32px;
    height: 2px;
    margin-bottom: 12px;
    background: var(--primary);
  }

  .feature-card p {
    margin: 0;
    color: var(--text-muted);
    font-size: 14px;
    line-height: 1.6;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1536px;
    margin: 64px auto 0;
    padding: 64px 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(0, 0, 0, 0.4);
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
  }

  .footer-brand {
    color: var(--primary);
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.04em;
  }

  .footer-copy {
    margin: 0;
    color: rgba(97, 96, 96, 0.6);
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .footer-copy a {
    color: inherit;
    text-decoration: underline;
    transition: color 0.2s ease;
  }

  .footer-copy a:hover {
    color: var(--primary);
  }

  .footer-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .footer-nav a {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
    transition: color 0.2s ease;
  }

  .footer-nav a:hover {
    color: var(--primary);
  }

  @media (min-width: 768px) {
    .top-nav-links {
      display: flex;
    }

    .features {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .footer-left {
      align-items: flex-start;
      text-align: left;
    }
  }

  @media (max-width: 767px) {
    .conflict-grid {
      grid-template-columns: 1fr;
    }

    .btn {
      width: 100%;
      min-width: 0;
    }
  }
</style>
