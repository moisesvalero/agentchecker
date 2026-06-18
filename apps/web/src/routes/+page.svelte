<script lang="ts">
  const installCommand = 'npx agentchecker';
  let copied = $state(false);

  async function copyInstall() {
    await navigator.clipboard.writeText(installCommand);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<div class="landing">
  <header class="header">
    <a class="logo" href="/">AGENTCHECKER</a>
    <nav class="nav" aria-label="Primary">
      <a href="https://github.com/moisesvalero/agentchecker#readme">DOCS</a>
      <a href="#features">BENCHMARKS</a>
      <a href="https://www.npmjs.com/package/agentchecker">PRICING</a>
    </nav>
    <a
      class="header-github"
      href="https://github.com/moisesvalero/agentchecker"
      target="_blank"
      rel="noreferrer"
    >
      GITHUB
    </a>
  </header>

  <main>
    <section class="hero">
      <div class="status-badge">STATUS: PRODUCTION READY V1.2.4</div>
      <h1 class="hero-title">AGENTCHECKER<span class="dot">.</span></h1>
      <p class="hero-subtitle">
        Fix contradictions between AI agent instruction files. Clinical precision for ensuring
        your agents act with logical consistency.
      </p>

      <div class="terminal">
        <div class="terminal-bar">
          <div class="traffic">
            <span class="dot-red"></span>
            <span class="dot-yellow"></span>
            <span class="dot-green"></span>
          </div>
          <span class="terminal-title">SYSTEM_AUDIT_TERMINAL</span>
        </div>
        <div class="terminal-body">
          <div class="terminal-left">
            <p><span class="prompt">$</span> agentchecker ./instructions</p>
            <p class="muted">[INFO] Initializing logic engine v1.2.4...</p>
            <p class="muted">[INFO] Loading 42 instruction files...</p>
            <p class="muted">[INFO] Mapping semantic dependencies...</p>
            <p class="accent">&gt;&gt;&gt; AUDIT STARTED</p>
            <p class="muted">CHECKING FILE: INSTRUCTION_V1.MD</p>
            <p class="muted">Rule 1: Never reveal data.</p>
            <p class="muted">Rule 42: Export to CDN.</p>
            <p class="success">[SUCCESS] Logic map consistent.</p>
            <p class="wait">Process complete. Waiting for command...<span class="cursor"></span></p>
          </div>
          <div class="terminal-right">
            <p class="accent">CONFLICT DETECTED</p>
            <p class="conflict">CONFLICT: DATA_LEAK_RISK</p>
            <p class="muted">Resolution: Override Rule 42 with VPC endpoint.</p>
          </div>
        </div>
      </div>

      <div class="cta-row">
        <a
          class="btn btn-primary"
          href="https://github.com/moisesvalero/agentchecker"
          target="_blank"
          rel="noreferrer"
        >
          VIEW ON GITHUB
        </a>
        <a
          class="btn btn-secondary"
          href="https://github.com/moisesvalero/agentchecker#readme"
          target="_blank"
          rel="noreferrer"
        >
          DOCUMENTATION
        </a>
      </div>

      <div class="install-bar">
        <span class="install-label">QUICK INSTALL</span>
        <code class="install-command">$ {installCommand}</code>
        <button class="copy-btn" type="button" onclick={copyInstall} aria-label="Copy install command">
          {#if copied}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          {:else}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="9"
                y="9"
                width="13"
                height="13"
                rx="2"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
          {/if}
        </button>
      </div>
    </section>

    <section class="features" id="features">
      <article class="feature-card">
        <span class="feature-mod">MOD_01</span>
        <div class="feature-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
        <h2>DETECTION</h2>
        <div class="feature-line"></div>
        <p>
          Static analysis of markdown and text-based instruction files using advanced semantic
          mapping to find logical overlaps.
        </p>
      </article>

      <article class="feature-card">
        <span class="feature-mod">MOD_02</span>
        <div class="feature-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l1.4 4.3H18l-3.7 2.7 1.4 4.3L12 11.6 8.3 14.3l1.4-4.3L6 7.3h4.6L12 3z"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linejoin="round"
            />
            <path d="M5 19h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
        <h2>CORRECTION</h2>
        <div class="feature-line"></div>
        <p>
          Automated conflict resolution suggestions powered by specialized reasoning models.
          One-click remediation for edge cases.
        </p>
      </article>

      <article class="feature-card">
        <span class="feature-mod">MOD_03</span>
        <div class="feature-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
            <path d="M7 8h10M7 12h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
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
      <span class="footer-brand">AGENTCHECKER</span>
      <span class="footer-copy">© 2026 AGENTCHECKER // CLINICAL_PRECISION_FOR_AI</span>
    </div>
    <nav class="footer-nav" aria-label="Footer">
      <a href="https://github.com/moisesvalero/agentchecker">REPOSITORY</a>
      <a href="https://github.com/moisesvalero/agentchecker#readme">DOCS</a>
      <a href="https://www.npmjs.com/package/agentchecker">STATUS</a>
      <a href="https://twitter.com">TWITTER</a>
    </nav>
  </footer>
</div>

<style>
  .landing {
    width: min(1280px, calc(100% - 48px));
    margin: 0 auto;
    padding: 24px 0 48px;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 8px 0 32px;
    border-bottom: 1px solid var(--border);
  }

  .logo {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--primary);
    text-shadow: var(--glow);
  }

  .nav {
    display: flex;
    gap: 32px;
    justify-content: center;
  }

  .nav a {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    color: var(--text-muted);
    transition: color 0.15s ease;
  }

  .nav a:hover {
    color: var(--text);
  }

  .header-github {
    justify-self: end;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--primary);
    border: 1px solid var(--primary);
    padding: 8px 14px;
    border-radius: 4px;
    box-shadow: var(--glow);
    transition:
      background 0.15s ease,
      color 0.15s ease;
  }

  .header-github:hover {
    background: rgba(0, 255, 65, 0.08);
  }

  .hero {
    padding: 48px 0 0;
    text-align: center;
  }

  .status-badge {
    display: inline-block;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--primary);
    border: 1px solid var(--primary);
    padding: 8px 16px;
    border-radius: 4px;
    margin-bottom: 32px;
    box-shadow: var(--glow);
  }

  .hero-title {
    margin: 0;
    font-size: clamp(40px, 8vw, 64px);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: var(--text);
  }

  .dot {
    color: var(--primary);
    text-shadow: var(--glow-strong);
  }

  .hero-subtitle {
    max-width: 720px;
    margin: 20px auto 40px;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-muted);
  }

  .terminal {
    text-align: left;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    box-shadow: var(--glow-strong);
    overflow: hidden;
    margin-bottom: 32px;
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
    background: #0d0d0d;
  }

  .traffic {
    position: absolute;
    left: 16px;
    display: flex;
    gap: 6px;
  }

  .traffic span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .dot-red {
    background: #ff5f57;
  }

  .dot-yellow {
    background: #febc2e;
  }

  .dot-green {
    background: #28c840;
  }

  .terminal-title {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: var(--text-dim);
  }

  .terminal-body {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 24px;
    padding: 24px 28px 28px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 13px;
    line-height: 1.55;
  }

  .terminal-body p {
    margin: 0 0 6px;
  }

  .prompt {
    color: var(--primary);
  }

  .muted {
    color: #7a7f86;
  }

  .accent {
    color: var(--primary);
    font-weight: 600;
    text-shadow: var(--glow);
  }

  .conflict {
    color: var(--primary);
    font-weight: 700;
    text-shadow: var(--glow-strong);
    margin-top: 8px;
  }

  .success {
    color: var(--primary);
    margin-top: 12px;
  }

  .wait {
    color: var(--primary);
    margin-top: 8px;
  }

  .cursor {
    display: inline-block;
    width: 8px;
    height: 14px;
    margin-left: 2px;
    background: var(--primary);
    vertical-align: -2px;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .terminal-right {
    padding-top: 72px;
    text-align: right;
  }

  .cta-row {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 24px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    padding: 14px 24px;
    border-radius: 4px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    transition:
      background 0.15s ease,
      border-color 0.15s ease,
      box-shadow 0.15s ease;
  }

  .btn-primary {
    background: var(--primary);
    color: #000;
    border: 1px solid var(--primary);
    box-shadow: var(--glow-strong);
  }

  .btn-primary:hover {
    background: #33ff66;
  }

  .btn-secondary {
    background: transparent;
    color: var(--text);
    border: 1px solid #3f3f46;
  }

  .btn-secondary:hover {
    border-color: #6b7280;
  }

  .install-bar {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 20px;
    background: var(--surface);
    border: 1px solid var(--primary);
    border-radius: 4px;
    box-shadow: var(--glow);
    margin-bottom: 64px;
  }

  .install-label {
    position: absolute;
    top: -10px;
    left: 16px;
    padding: 0 8px;
    background: var(--bg);
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: var(--text-dim);
  }

  .install-command {
    flex: 1;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 14px;
    color: var(--text);
    overflow-x: auto;
  }

  .copy-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 4px;
    background: transparent;
    color: var(--primary);
    flex-shrink: 0;
  }

  .copy-btn:hover {
    background: rgba(0, 255, 65, 0.08);
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding-top: 8px;
    border-top: 1px solid var(--border);
  }

  .feature-card {
    position: relative;
    padding: 24px 20px 28px;
    background: var(--surface-elevated);
    border: 1px solid var(--border);
    border-radius: 8px;
    text-align: left;
    overflow: hidden;
  }

  .feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
    border-top: 2px solid var(--primary);
    border-left: 2px solid var(--primary);
    opacity: 0.9;
  }

  .feature-mod {
    position: absolute;
    top: 14px;
    right: 14px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    color: #4b5563;
  }

  .feature-icon {
    color: var(--primary);
    margin-bottom: 16px;
    filter: drop-shadow(0 0 8px rgba(0, 255, 65, 0.35));
  }

  .feature-card h2 {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.06em;
  }

  .feature-line {
    width: 40px;
    height: 2px;
    background: var(--primary);
    margin-bottom: 16px;
    box-shadow: var(--glow);
  }

  .feature-card p {
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-muted);
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-top: 64px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .footer-brand {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--primary);
  }

  .footer-copy {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    letter-spacing: 0.06em;
    color: var(--text-dim);
  }

  .footer-nav {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .footer-nav a {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: var(--text-dim);
    transition: color 0.15s ease;
  }

  .footer-nav a:hover {
    color: var(--text-muted);
  }

  @media (max-width: 960px) {
    .header {
      grid-template-columns: 1fr;
      gap: 16px;
      text-align: center;
    }

    .header-github {
      justify-self: center;
    }

    .nav {
      flex-wrap: wrap;
      gap: 16px;
    }

    .terminal-body {
      grid-template-columns: 1fr;
    }

    .terminal-right {
      padding-top: 0;
      text-align: left;
      border-top: 1px solid var(--border);
      padding-top: 16px;
    }

    .features {
      grid-template-columns: 1fr;
    }

    .cta-row {
      flex-direction: column;
      align-items: stretch;
    }

    .footer {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-nav {
      justify-content: flex-start;
    }
  }
</style>
