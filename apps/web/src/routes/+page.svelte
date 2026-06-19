<script lang="ts">
  import { onMount } from 'svelte';

  const installCommand = 'npx agentchecker';
  let copied = $state(false);
  let lang = $state<'en' | 'es'>('en');

  const translations = {
    en: {
      nav: { docs: 'DOCS', donate: 'DONATE', star: '★ STAR ON GITHUB' },
      langToggle: 'ES',
      status: 'STATUS: PRODUCTION READY',
      heroSubtitle:
        'Fix contradictions between AI agent instruction files. Clinical precision for ensuring your agents act with logical consistency.',
      cta: { github: 'VIEW ON GITHUB', docs: 'DOCUMENTATION' },
      install: 'QUICK INSTALL',
      copyLabel: 'Copy install command',
      features: {
        mod1: {
          title: 'DETECTION',
          desc: 'Static analysis of markdown and text-based instruction files using advanced semantic mapping to find logical overlaps.',
        },
        mod2: {
          title: 'CORRECTION',
          desc: 'Automated conflict resolution suggestions powered by specialized reasoning models. One-click remediation for edge cases.',
        },
        mod3: {
          title: 'INTEGRATION',
          desc: "CLI tool that fits into your CI/CD pipeline. Fail builds if agent instructions don't pass the check.",
        },
      },
      footer: {
        copy: '© 2026 AGENTCHECKER // MADE BY',
        docs: 'DOCS',
        status: 'STATUS',
      },
    },
    es: {
      nav: { docs: 'DOCS', donate: 'DONAR', star: '★ DAR ESTRELLA' },
      langToggle: 'EN',
      status: 'ESTADO: LISTO PARA PRODUCCIÓN',
      heroSubtitle:
        'Detecta y corrige contradicciones entre archivos de instrucciones de agentes IA. Precisión clínica para garantizar que tus agentes actúen con coherencia lógica.',
      cta: { github: 'VER EN GITHUB', docs: 'DOCUMENTACIÓN' },
      install: 'INSTALACIÓN RÁPIDA',
      copyLabel: 'Copiar comando de instalación',
      features: {
        mod1: {
          title: 'DETECCIÓN',
          desc: 'Análisis estático de archivos markdown e instrucciones de texto usando mapeo semántico avanzado para detectar solapamientos lógicos.',
        },
        mod2: {
          title: 'CORRECCIÓN',
          desc: 'Sugerencias automáticas de resolución de conflictos. Corrección con un clic para cualquier caso.',
        },
        mod3: {
          title: 'INTEGRACIÓN',
          desc: 'Herramienta CLI que encaja en tu pipeline CI/CD. Falla el build si las instrucciones de los agentes no pasan la revisión.',
        },
      },
      footer: {
        copy: '© 2026 AGENTCHECKER // HECHO POR',
        docs: 'DOCS',
        status: 'ESTADO',
      },
    },
  } as const;

  let t = $derived(translations[lang]);

  function toggleLang() {
    lang = lang === 'en' ? 'es' : 'en';
  }

  async function copyInstall() {
    await navigator.clipboard.writeText(installCommand);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }

  const TERMINAL_STEP_COUNT = 8;
  let terminalStep = $state(0);
  let terminalDone = $derived(terminalStep >= TERMINAL_STEP_COUNT);

  onMount(() => {
    // Mouse glow usa coordenadas de viewport (capas fixed)
    const updateMouse = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateMouse);

    // Grain animado
    const grain = document.querySelector('.crt-grain') as HTMLElement;
    let grainTimer: ReturnType<typeof setInterval>;
    if (grain) {
      grainTimer = setInterval(() => {
        grain.style.backgroundPosition = `${Math.random() * 100}% ${Math.random() * 100}%`;
      }, 50);
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reducedMotion) {
      terminalStep = TERMINAL_STEP_COUNT;
    } else {
      const delays = [0, 220, 420, 620, 900, 1150, 1500, 1850];
      const timers = delays.map((delay, index) =>
        setTimeout(() => {
          terminalStep = index + 1;
        }, delay),
      );
      return () => {
        window.removeEventListener('mousemove', updateMouse);
        clearInterval(grainTimer);
        timers.forEach(clearTimeout);
      };
    }

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      clearInterval(grainTimer);
    };
  });
</script>

<div class="landing">
  <!-- Capas de efecto de fondo (fixed, fuera del flujo) -->
  <div class="mouse-glow" aria-hidden="true"></div>
  <div class="crt-grain" aria-hidden="true"></div>
  <div class="crt-vignette" aria-hidden="true"></div>
  <div class="crt-overlay" aria-hidden="true"></div>
  <header class="header">
    <a class="logo" href="/">
      <span class="logo-prompt">&gt;_</span>
      <span class="logo-text">agentchecker</span>
      <span class="logo-dot">.</span>
    </a>
    <nav class="nav" aria-label="Primary">
      <a
        class="active"
        href="https://github.com/moisesvalero/agentchecker#readme"
        >{t.nav.docs}</a
      >
      <a
        class="donate-link"
        href="https://www.paypal.com/donate/?business=moi6@outlook.com&no_recurring=0&item_name=Agentchecker&currency_code=USD"
        target="_blank"
        rel="noreferrer">{t.nav.donate}</a
      >
      <a
        class="star-link"
        href="https://github.com/moisesvalero/agentchecker"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <span>{t.nav.star}</span>
      </a>
    </nav>
    <div class="header-spacer">
      <button
        class="lang-toggle"
        onclick={toggleLang}
        aria-label="Switch language">{t.langToggle}</button
      >
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="status-badge">{t.status}</div>
      <h1 class="hero-title">AGENTCHECKER<span>.</span></h1>
      <p class="hero-subtitle">{t.heroSubtitle}</p>

      <div class="terminal" aria-label="Agentchecker CLI preview">
        <div class="terminal-bar">
          <div class="traffic" aria-hidden="true">
            <span class="dot-red"></span>
            <span class="dot-yellow"></span>
            <span class="dot-green"></span>
          </div>
          <span class="terminal-title">agentchecker — ~/my-app</span>
        </div>
        <div class="terminal-body" class:terminal-body--done={terminalDone}>
          {#if terminalStep >= 1}
            <p class="command t-line" style="--d:0">
              <span>$</span> npx agentchecker
            </p>
          {/if}
          {#if terminalStep >= 2}
            <p class="brand t-line" style="--d:1">agentchecker</p>
          {/if}
          {#if terminalStep >= 3}
            <p class="dim t-line" style="--d:2">
              Found: <span class="ok">✓</span> .cursor/rules/global.mdc · AGENTS.md
              · CLAUDE.md
            </p>
          {/if}
          {#if terminalStep >= 4}
            <p class="warn t-line" style="--d:3">⚠ 2 contradictions found:</p>
          {/if}
          {#if terminalStep >= 5}
            <div class="terminal-grid t-line" style="--d:4">
              <div>
                <p class="category">Package manager</p>
                <p class="dim">.cursor/... → <span class="val">npm</span></p>
                <p class="dim">CLAUDE.md → <span class="val">npm</span></p>
                <p class="dim">AGENTS.md → <span class="val">pnpm</span></p>
                <p class="rec">→ pnpm</p>
              </div>
              <div>
                <p class="category">Linter</p>
                <p class="dim">.cursor/... → <span class="val">eslint</span></p>
                <p class="dim">CLAUDE.md → <span class="val">eslint</span></p>
                <p class="dim">AGENTS.md → <span class="val">oxlint</span></p>
                <p class="rec">→ oxlint</p>
              </div>
            </div>
          {/if}
          {#if terminalStep >= 6}
            <p class="prompt t-line" style="--d:5">
              ◇ Fix? <span class="accent">Yes</span> · pnpm · oxlint
            </p>
          {/if}
          {#if terminalStep >= 7}
            <div class="diff-block t-line" style="--d:6">
              <p class="category">CLAUDE.md</p>
              <p class="diff-minus">- Run `npm install` before starting.</p>
              <p class="diff-plus">+ Run `pnpm install` before starting.</p>
            </div>
          {/if}
          {#if terminalStep >= 8}
            <p class="success t-line" style="--d:7">
              ✓ Fixed 2 files. All your agents agree.
              {#if terminalDone}<span class="cursor" aria-hidden="true"
                ></span>{/if}
            </p>
          {/if}
        </div>
      </div>

      <div class="cta-row">
        <a
          class="btn btn-primary"
          href="https://github.com/moisesvalero/agentchecker"
          target="_blank"
          rel="noreferrer"
        >
          {t.cta.github}
        </a>
        <a
          class="btn btn-secondary"
          href="https://github.com/moisesvalero/agentchecker#readme"
          target="_blank"
          rel="noreferrer"
        >
          {t.cta.docs}
        </a>
      </div>

      <div class="install-bar">
        <span class="install-label">{t.install}</span>
        <code><span>$</span> {installCommand}</code>
        <button
          class="copy-btn"
          type="button"
          onclick={copyInstall}
          aria-label={t.copyLabel}
        >
          {#if copied}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          {:else}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="9"
                y="3"
                width="9"
                height="13"
                rx="1"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M6 8H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
          {/if}
        </button>
      </div>
    </section>

    <section class="features" id="features" aria-label="Features">
      <article class="feature-card">
        <span class="feature-mod">MOD_01</span>
        <div class="feature-icon" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <circle
              cx="10.5"
              cy="10.5"
              r="6.5"
              stroke="currentColor"
              stroke-width="1.8"
            />
            <path
              d="M16 16l4 4"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
            <path
              d="M7.5 10.5h6"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h2>{t.features.mod1.title}</h2>
        <div class="feature-line"></div>
        <p>{t.features.mod1.desc}</p>
      </article>

      <article class="feature-card">
        <span class="feature-mod">MOD_02</span>
        <div class="feature-icon" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M14 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3zM7 11l.8 2.2L10 14l-2.2.8L7 17l-.8-2.2L4 14l2.2-.8L7 11z"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linejoin="round"
            />
            <path
              d="M5 20L20 5"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h2>{t.features.mod2.title}</h2>
        <div class="feature-line"></div>
        <p>{t.features.mod2.desc}</p>
      </article>

      <article class="feature-card">
        <span class="feature-mod">MOD_03</span>
        <div class="feature-icon" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <rect
              x="4"
              y="6"
              width="16"
              height="12"
              rx="1"
              stroke="currentColor"
              stroke-width="1.8"
            />
            <path
              d="M8 10l3 2-3 2M13 15h4"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h2>{t.features.mod3.title}</h2>
        <div class="feature-line"></div>
        <p>{t.features.mod3.desc}</p>
      </article>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-left">
      <span class="footer-brand">AGENTCHECKER</span>
      <span class="footer-copy">
        {t.footer.copy}
        <a
          class="portfolio-link"
          href="https://moisesvalero.es"
          target="_blank"
          rel="noreferrer">MOISÉS VALERO</a
        >
      </span>
    </div>
    <nav class="footer-nav" aria-label="Footer">
      <a
        class="footer-github"
        href="https://github.com/moisesvalero/agentchecker"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Repository"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      </a>
      <a href="https://github.com/moisesvalero/agentchecker#readme"
        >{t.footer.docs}</a
      >
      <a href="https://www.npmjs.com/package/agentchecker">{t.footer.status}</a>
    </nav>
  </footer>
</div>

<style>
  .landing {
    position: relative;
    width: min(100%, 1280px);
    min-height: 100vh;
    margin: 0 auto;
    padding: 20px 24px 44px;
    overflow: hidden;
    background-color: #080808;
    background-image:
      linear-gradient(rgba(0, 255, 65, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 65, 0.08) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: screenFlicker 0.15s infinite;
  }

  /* Linterna que sigue al cursor — fixed para que cubra toda la pantalla */
  .mouse-glow {
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: radial-gradient(
      700px circle at var(--mouse-x, 50%) var(--mouse-y, 30%),
      rgba(0, 255, 65, 0.12),
      transparent 80%
    );
  }

  /* Grain animado tipo CRT */
  .crt-grain {
    position: fixed;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    opacity: 0.04;
    background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
  }

  /* Viñeta radial */
  .crt-vignette {
    position: fixed;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    background: radial-gradient(
      circle at center,
      transparent 60%,
      rgba(0, 0, 0, 0.55) 100%
    );
    box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.7);
  }

  /* Scanlines + vignette radial combinados */
  .crt-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    background:
      linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.18) 50%),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.02),
        rgba(0, 255, 0, 0.01),
        rgba(0, 0, 255, 0.02)
      );
    background-size:
      100% 4px,
      3px 100%;
    opacity: 0.45;
  }

  @keyframes screenFlicker {
    0% {
      opacity: 0.992;
    }
    10% {
      opacity: 0.998;
    }
    20% {
      opacity: 0.991;
    }
    35% {
      opacity: 0.999;
    }
    50% {
      opacity: 0.994;
    }
    65% {
      opacity: 0.997;
    }
    80% {
      opacity: 0.991;
    }
    100% {
      opacity: 0.998;
    }
  }

  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: start;
    min-height: 36px;
  }

  .logo,
  .nav a,
  .footer-github,
  .status-badge,
  .terminal,
  .btn,
  .install-bar,
  .feature-mod,
  .footer {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    letter-spacing: -0.01em;
    transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
  }

  .logo:hover {
    transform: translateY(-1px);
  }

  .logo:hover .logo-prompt {
    color: #ffffff;
    text-shadow: var(--glow-strong);
  }

  .logo-prompt {
    color: var(--primary);
    text-shadow: var(--glow);
    font-weight: 800;
  }

  .logo-text {
    text-transform: lowercase;
  }

  .logo-dot {
    color: var(--primary);
    text-shadow: var(--glow-strong);
    font-weight: 900;
  }

  .nav {
    display: flex;
    gap: clamp(28px, 5vw, 64px);
    justify-content: center;
  }

  .nav a,
  .footer-nav a {
    color: var(--text-dim);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    transition: color 0.16s ease;
  }

  .nav a:hover,
  .nav a.active,
  .footer-nav a:hover {
    color: var(--primary);
  }

  .nav a.active {
    color: var(--primary);
  }

  .header-spacer {
    justify-self: end;
    display: flex;
    align-items: center;
  }

  .lang-toggle {
    background: transparent;
    border: 1px solid rgba(0, 255, 65, 0.25);
    color: rgba(0, 255, 65, 0.6);
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    padding: 3px 8px;
    cursor: pointer;
    transition:
      border-color 0.2s ease,
      color 0.2s ease,
      background 0.2s ease;
  }

  .lang-toggle:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: rgba(0, 255, 65, 0.06);
  }

  .footer-github {
    display: inline-flex;
    align-items: center;
    transition:
      transform 0.2s cubic-bezier(0.25, 1, 0.5, 1),
      color 0.2s ease;
  }

  .footer-github:hover {
    transform: translateY(-2px) scale(1.08);
    color: var(--primary);
  }

  .hero {
    padding: 32px 0 0;
    text-align: center;
  }

  .status-badge {
    display: inline-flex;
    padding: 9px 15px;
    margin-bottom: 16px;
    color: var(--primary);
    background: rgba(0, 255, 65, 0.06);
    border: 1px solid rgba(0, 255, 65, 0.34);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    box-shadow: var(--glow);
  }

  .hero-title {
    margin: 0;
    color: #ffffff;
    font-size: clamp(36px, 6vw, 68px);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    text-wrap: balance;
    text-shadow: 0 0 24px rgba(0, 255, 65, 0.2);
  }

  .hero-title span {
    color: var(--primary);
    text-shadow: var(--glow-strong);
  }

  .hero-subtitle {
    max-width: 580px;
    margin: 10px auto 18px;
    color: var(--text-muted);
    font-size: 14px;
    line-height: 1.55;
    text-wrap: pretty;
  }

  .terminal {
    width: min(640px, 100%);
    margin: 0 auto 20px;
    overflow: hidden;
    color: var(--text);
    text-align: left;
    background: #050505;
    border: 1px solid rgba(0, 255, 65, 0.25);
    border-radius: 0;
    box-shadow: 0 0 32px rgba(0, 255, 65, 0.15);
    position: relative;
    animation: crt-flicker 0.15s infinite;
    transition:
      border-color 0.25s ease,
      box-shadow 0.25s ease;
  }

  .terminal:hover {
    border-color: rgba(0, 255, 65, 0.45);
    box-shadow: 0 0 44px rgba(0, 255, 65, 0.24);
  }

  .terminal::after {
    content: ' ';
    display: block;
    position: absolute;
    inset: 0;
    background:
      linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.04),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.04)
      );
    z-index: 10;
    background-size:
      100% 3px,
      6px 100%;
    pointer-events: none;
    opacity: 0.85;
  }

  @keyframes crt-flicker {
    0% {
      opacity: 0.985;
    }
    50% {
      opacity: 0.995;
    }
    100% {
      opacity: 0.985;
    }
  }

  .terminal-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 28px;
    background: linear-gradient(#181818, #121212);
    border-bottom: 1px solid var(--border);
  }

  .traffic {
    position: absolute;
    left: 14px;
    display: flex;
    gap: 6px;
  }

  .traffic span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    opacity: 0.65;
    transition:
      filter 0.16s ease,
      opacity 0.16s ease;
  }

  .terminal:hover .traffic span {
    opacity: 0.9;
    filter: brightness(1.2) drop-shadow(0 0 3px currentColor);
  }

  .dot-red {
    background: #ff6b6b;
  }

  .dot-yellow {
    background: #f5c542;
  }

  .dot-green {
    background: #00ff41;
  }

  .terminal-title {
    color: #323232;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .terminal-body {
    position: relative;
    z-index: 1;
    min-height: 168px;
    max-height: 220px;
    padding: 10px 14px 8px;
    font-size: 10px;
    font-weight: 600;
    line-height: 1.32;
    transition: min-height 0.25s ease;
  }

  .terminal-body--done {
    min-height: 0;
    max-height: none;
  }

  .terminal-body p {
    margin: 0 0 2px;
  }

  .t-line {
    animation: term-in 0.28s ease both;
    animation-delay: calc(var(--d, 0) * 30ms);
  }

  @keyframes term-in {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .t-line {
      animation: none;
    }
  }

  .command {
    margin-bottom: 4px;
    color: var(--text);
  }

  .command span,
  .install-bar code span {
    color: var(--primary);
  }

  .brand {
    margin-bottom: 4px;
    color: #67e8f9;
    font-weight: 700;
  }

  .dim {
    color: #4d504d;
  }

  .dim .ok {
    color: var(--primary);
  }

  .warn {
    margin: 6px 0 4px;
    color: #f5c542;
  }

  .category {
    margin: 0 0 2px;
    color: #ffffff;
    font-weight: 800;
    font-size: 9.5px;
  }

  .val {
    color: #67e8f9;
  }

  .rec {
    margin: 0;
    color: var(--primary);
    font-size: 9.5px;
  }

  .terminal-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 16px;
    margin: 4px 0 6px;
    padding: 6px 0;
    border-top: 1px solid #151515;
    border-bottom: 1px solid #151515;
  }

  .terminal-grid p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .prompt {
    margin: 4px 0;
    color: #ffffff;
  }

  .prompt .accent {
    color: var(--primary);
  }

  .diff-block {
    margin: 4px 0;
  }

  .diff-block .category {
    margin-bottom: 1px;
  }

  .diff-minus {
    color: #ff6b6b;
    font-size: 9.5px;
  }

  .diff-plus {
    color: var(--primary);
    font-size: 9.5px;
  }

  .success {
    margin-top: 6px;
    color: var(--primary);
    text-shadow: var(--glow);
  }

  .cursor {
    display: inline-block;
    width: 7px;
    height: 12px;
    margin-left: 2px;
    background: var(--primary);
    vertical-align: text-bottom;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .cta-row {
    display: flex;
    justify-content: center;
    gap: 22px;
    margin-bottom: 20px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 248px;
    min-height: 46px;
    padding: 14px 24px;
    border-radius: 0;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.1em;
    transition:
      background 0.16s ease,
      border-color 0.16s ease,
      color 0.16s ease;
  }

  .btn-primary {
    color: #000000;
    background: var(--primary);
    border: 1px solid var(--primary);
  }

  .btn-primary:hover {
    background-color: #33ff66;
    box-shadow: var(--glow);
  }

  .btn-secondary {
    color: var(--text);
    background: transparent;
    border: 1px solid transparent;
  }

  .btn-secondary:hover {
    color: var(--primary);
  }

  .install-bar {
    position: relative;
    display: flex;
    align-items: center;
    width: min(720px, 100%);
    min-height: 52px;
    margin: 0 auto 28px;
    padding: 0 18px;
    color: var(--text);
    background: #050505;
    border: 1px solid var(--primary);
  }

  .install-label {
    position: absolute;
    top: -9px;
    left: 20px;
    padding: 0 8px;
    color: #888;
    background: #0a0a0a;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.28em;
  }

  .install-bar code {
    flex: 1;
    overflow-x: auto;
    color: var(--text);
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
  }

  .copy-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    color: var(--primary);
    background: transparent;
    border: 0;
    transition:
      transform 0.16s ease,
      color 0.16s ease;
  }

  .copy-btn:hover {
    color: #ffffff;
    transform: scale(1.1);
  }

  .copy-btn:active {
    transform: scale(0.95);
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin-top: 0;
  }

  .feature-card {
    position: relative;
    min-height: 220px;
    padding: 42px 22px 26px;
    overflow: hidden;
    text-align: left;
    background: linear-gradient(
      180deg,
      rgba(17, 17, 17, 0.94),
      rgba(14, 14, 14, 0.94)
    );
    border: 1px solid var(--border);
    transition:
      transform 0.22s cubic-bezier(0.25, 1, 0.5, 1),
      border-color 0.22s ease,
      box-shadow 0.22s ease;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 255, 65, 0.4);
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.12);
  }

  .feature-card::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 28px;
    height: 28px;
    border-top: 1px solid var(--primary);
    border-left: 1px solid var(--primary);
    transition: border-color 0.22s ease;
  }

  .feature-card:hover::before {
    border-color: #33ff66;
  }

  .feature-mod {
    position: absolute;
    top: 43px;
    right: 22px;
    color: #343434;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.14em;
  }

  .feature-icon {
    margin-bottom: 28px;
    color: var(--primary);
    filter: drop-shadow(0 0 8px rgba(0, 255, 65, 0.35));
    transition:
      transform 0.22s cubic-bezier(0.25, 1, 0.5, 1),
      color 0.22s ease,
      filter 0.22s ease;
  }

  .feature-card:hover .feature-icon {
    color: #ffffff;
    filter: drop-shadow(0 0 12px rgba(0, 255, 65, 0.65));
    transform: scale(1.05);
  }

  .feature-card h2 {
    margin: 0 0 14px;
    font-size: 17px;
    font-weight: 900;
    letter-spacing: -0.02em;
  }

  .feature-line {
    width: 32px;
    height: 1px;
    margin-bottom: 22px;
    background: var(--primary);
    box-shadow: var(--glow);
  }

  .feature-card p {
    margin: 0;
    color: var(--text-muted);
    font-family: 'Geist Sans', Geist, ui-sans-serif, system-ui, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.55;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-top: 126px;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .footer-brand {
    color: var(--primary);
    font-size: 12px;
    font-weight: 800;
  }

  .footer-copy {
    color: #343434;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.18em;
  }

  .portfolio-link {
    color: #444444;
    text-decoration: underline;
    transition: color 0.16s ease;
  }

  .portfolio-link:hover {
    color: var(--primary);
    text-shadow: var(--glow);
  }

  .donate-link,
  .star-link {
    color: var(--text-dim);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    transition: color 0.16s ease;
  }

  .star-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .donate-link:hover,
  .star-link:hover {
    color: var(--primary);
    text-shadow: var(--glow);
  }

  .footer-nav {
    display: flex;
    gap: clamp(20px, 4vw, 44px);
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media (max-width: 900px) {
    .landing {
      padding-inline: 18px;
    }

    .header {
      grid-template-columns: 1fr;
      gap: 18px;
      justify-items: center;
    }

    .hero {
      padding-top: 58px;
    }

    .hero-title {
      font-size: clamp(42px, 13vw, 72px);
      overflow-wrap: anywhere;
    }

    .terminal-body {
      min-height: 0;
      max-height: none;
      padding: 12px 12px 10px;
      font-size: 9.5px;
    }

    .terminal-grid {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .cta-row {
      flex-direction: column;
      align-items: stretch;
      margin-bottom: 64px;
    }

    .btn {
      min-width: 0;
    }

    .features {
      grid-template-columns: 1fr;
    }

    .footer {
      align-items: flex-start;
      flex-direction: column;
      margin-top: 72px;
    }

    .footer-nav {
      justify-content: flex-start;
    }
  }

  @media (max-width: 520px) {
    .nav {
      gap: 18px;
      flex-wrap: wrap;
    }

    .status-badge {
      max-width: 100%;
      line-height: 1.45;
      text-align: center;
    }

    .hero-subtitle {
      font-size: 15px;
    }

    .install-bar {
      align-items: stretch;
      flex-direction: column;
      padding: 20px;
    }

    .copy-btn {
      align-self: flex-end;
    }

    .install-bar code {
      font-size: 12px;
    }
  }
</style>
