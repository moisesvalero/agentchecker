<script lang="ts">
  import '../app.css';

  let { children } = $props();

  const SITE_URL = 'https://agentcheck-rho.vercel.app';
  const OG_IMAGE = `${SITE_URL}/og-image.png`;
</script>

<svelte:head>
  <!-- ═══════════════════════════════════════════
       CORE SEO
  ═══════════════════════════════════════════ -->
  <title>agentchecker — Fix AI Agent Instruction Conflicts in 2 Seconds</title>
  <meta
    name="description"
    content="agentchecker is a zero-install CLI that detects and fixes contradictions between AGENTS.md, CLAUDE.md, Cursor rules, Copilot instructions and other AI agent config files. Run npx agentchecker."
  />
  <meta name="keywords" content="agentchecker, AI agent instructions, AGENTS.md, CLAUDE.md, cursor rules, copilot instructions, AI conflict resolver, CLI tool, npx agentchecker" />
  <meta name="author" content="Moisés Valero" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href={SITE_URL} />

  <!-- ═══════════════════════════════════════════
       HREFLANG (multilingual SEO)
  ═══════════════════════════════════════════ -->
  <link rel="alternate" hreflang="en" href={SITE_URL} />
  <link rel="alternate" hreflang="es" href={SITE_URL} />
  <link rel="alternate" hreflang="x-default" href={SITE_URL} />

  <!-- ═══════════════════════════════════════════
       OPEN GRAPH (redes sociales + GEO)
  ═══════════════════════════════════════════ -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={SITE_URL} />
  <meta property="og:site_name" content="agentchecker" />
  <meta property="og:title" content="agentchecker — Fix AI Agent Instruction Conflicts in 2 Seconds" />
  <meta
    property="og:description"
    content="Zero-install CLI that detects and fixes contradictions between AGENTS.md, CLAUDE.md, Cursor rules and Copilot instructions. Run npx agentchecker in any project."
  />
  <meta property="og:image" content={OG_IMAGE} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="agentchecker terminal showing contradiction detection between AI agent files" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:locale:alternate" content="es_ES" />

  <!-- ═══════════════════════════════════════════
       TWITTER / X CARD
  ═══════════════════════════════════════════ -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="agentchecker — Fix AI Agent Instruction Conflicts" />
  <meta
    name="twitter:description"
    content="Zero-install CLI to fix contradictions between AGENTS.md, CLAUDE.md, Cursor rules and Copilot instructions. npx agentchecker"
  />
  <meta name="twitter:image" content={OG_IMAGE} />
  <meta name="twitter:image:alt" content="agentchecker CLI tool" />

  <!-- ═══════════════════════════════════════════
       FAVICON
  ═══════════════════════════════════════════ -->
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/favicon.png" />

  <!-- ═══════════════════════════════════════════
       JSON-LD STRUCTURED DATA
       SEO + GEO (Perplexity, ChatGPT, Gemini)
       AEO (Answer Engine / Featured Snippets)
  ═══════════════════════════════════════════ -->

  <!-- 1. SoftwareApplication — le dice a Google/Bing exactamente qué es la herramienta -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "agentchecker",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Linux, macOS, Windows",
    "description": "A zero-install CLI tool that scans and fixes contradictions between AI agent instruction files such as AGENTS.md, CLAUDE.md, Cursor rules, GitHub Copilot instructions, and other AI coding assistant configurations.",
    "url": "https://agentcheck-rho.vercel.app",
    "downloadUrl": "https://www.npmjs.com/package/agentchecker",
    "softwareVersion": "0.1.6",
    "releaseNotes": "Added global config scanning (~/.claude, ~/.cursor/rules, ~/.codex) and shell environment contradiction detection.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Moisés Valero",
      "url": "https://moisesvalero.es"
    },
    "isAccessibleForFree": true,
    "license": "https://github.com/moisesvalero/agentchecker/blob/main/LICENSE",
    "codeRepository": "https://github.com/moisesvalero/agentchecker",
    "keywords": ["AI agents", "AGENTS.md", "CLAUDE.md", "Cursor rules", "Copilot instructions", "CLI", "developer tools", "AI coding tools"]
  }
  <\/script>`}

  <!-- 2. FAQPage — AEO: featured snippets y respuestas directas en Google y AI engines -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is agentchecker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "agentchecker is a zero-install command-line tool that detects and fixes contradictions between AI agent instruction files in a project. It scans files like AGENTS.md, CLAUDE.md, Cursor rules (.cursor/rules/), GitHub Copilot instructions (.github/copilot-instructions.md), Codex, OpenCode, Windsurf, and Aider configurations, then asks you which setting is correct and updates all files to agree."
        }
      },
      {
        "@type": "Question",
        "name": "How do I run agentchecker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Run agentchecker without installation using npx: open a terminal in your project root and run 'npx agentchecker'. No configuration files or global installation required."
        }
      },
      {
        "@type": "Question",
        "name": "What AI agent files does agentchecker support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "agentchecker supports AGENTS.md (shared), CLAUDE.md (Claude Code), .cursor/rules/ (Cursor), .github/copilot-instructions.md (GitHub Copilot), .codex/config.toml (Codex App), .gemini/gemini.md (Antigravity), .opencode.json (OpenCode), .windsurfrules (Windsurf), .clinerules (Cline/Roo), and .aider.conf.yml (Aider). It also scans global config files in ~/.claude/, ~/.cursor/rules/, ~/.codex/, and ~/.config/opencode/."
        }
      },
      {
        "@type": "Question",
        "name": "What contradictions does agentchecker detect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "agentchecker detects contradictions in six categories: package manager (pnpm vs npm vs yarn vs bun), linter (oxlint vs eslint vs biome), formatter (prettier vs biome vs dprint), test runner (vitest vs jest), shell environment (WSL2 vs Windows vs macOS), and package runner (npx vs pnpm dlx vs bunx)."
        }
      },
      {
        "@type": "Question",
        "name": "Does agentchecker modify global AI tool configuration files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. agentchecker reads global configuration files (like ~/.claude/CLAUDE.md or ~/.cursor/rules/) to detect contradictions, but it never modifies them. Only local project files are updated. If no local config exists, agentchecker offers to create an AGENTS.md file with your chosen settings."
        }
      },
      {
        "@type": "Question",
        "name": "Is agentchecker free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, agentchecker is completely free and open source. Run it instantly with npx agentchecker — no installation, no account, no configuration required."
        }
      }
    ]
  }
  <\/script>`}

  <!-- 3. HowTo — AEO: instrucciones paso a paso para featured snippets -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to fix contradictions between AI agent instruction files",
    "description": "Use agentchecker to detect and fix conflicting settings between AGENTS.md, CLAUDE.md, Cursor rules, and other AI coding tool configuration files.",
    "totalTime": "PT2M",
    "tool": {
      "@type": "HowToTool",
      "name": "agentchecker CLI"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Open a terminal in your project root",
        "text": "Navigate to the root directory of your project where your AI agent instruction files are located."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Run agentchecker",
        "text": "Execute 'npx agentchecker' — no installation needed. agentchecker will scan all AI agent config files in your project and in your global tool configurations."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Review detected contradictions",
        "text": "agentchecker displays a report of all contradictions found, grouped by category: package manager, linter, formatter, test runner, shell environment, and package runner."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Choose the correct value",
        "text": "For each contradiction, select which value is correct for your project. agentchecker recommends the most common value found across your files."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Apply fixes automatically",
        "text": "agentchecker updates all local project files with your chosen values. Global configuration files (like ~/.claude/CLAUDE.md) are never modified."
      }
    ]
  }
  <\/script>`}

  <!-- 4. WebSite con SearchAction — mejora presencia en SERP -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "agentchecker",
    "url": "https://agentcheck-rho.vercel.app",
    "description": "CLI tool to fix contradictions between AI agent instruction files",
    "inLanguage": ["en", "es"],
    "author": {
      "@type": "Person",
      "name": "Moisés Valero",
      "url": "https://moisesvalero.es"
    }
  }
  <\/script>`}
</svelte:head>

<div class="page">
  {@render children()}
</div>

<style>
  .page {
    min-height: 100vh;
  }
</style>
