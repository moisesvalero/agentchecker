<script lang="ts">
  import { canonicalUrl, siteName, seoEn } from '$lib/site';
</script>

<svelte:head>
  <title>Privacy Policy — {siteName}</title>
  <meta
    name="description"
    content="Privacy and cookie policy for agentchecker.com"
  />
  <link rel="canonical" href="{canonicalUrl}privacy/" />
</svelte:head>

<div class="privacy-page">
  <a href="/" class="back-link">&larr; Back to {siteName}</a>

  <h1>Privacy & Cookie Policy</h1>
  <p class="updated"><em>Last updated: June 28, 2026</em></p>

  <section>
    <h2>1. Data Controller</h2>
    <p>
      Moisés Valero<br />
      Contact: <a href="mailto:info@moisesvalero.es">info@moisesvalero.es</a>
    </p>
  </section>

  <section>
    <h2>2. What data we collect</h2>
    <p>
      This website is a static landing page. <strong
        >We do not set any first-party cookies or trackers.</strong
      >
    </p>
    <p>
      Vercel Inc., our hosting provider, may set technical cookies required for
      CDN functionality and may collect standard server logs (IP address,
      User-Agent, request timestamp) for security and performance monitoring.
      Vercel's privacy policy applies to that processing.
    </p>
  </section>

  <section>
    <h2>3. Third-party services</h2>
    <ul>
      <li>
        <strong>Vercel</strong> — CDN and hosting.
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noreferrer">Privacy Policy</a
        >
      </li>
      <li>
        <strong>GitHub</strong> — repository hosting (outbound links).
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          target="_blank"
          rel="noreferrer">Privacy Statement</a
        >
      </li>
      <li>
        <strong>npm</strong> — package registry (outbound links).
        <a
          href="https://docs.npmjs.com/policies/privacy"
          target="_blank"
          rel="noreferrer">Privacy Policy</a
        >
      </li>
      <li>
        <strong>Google Fonts</strong> — typography. Font files are loaded from
        Google servers. See
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer">Google Privacy Policy</a
        >.
      </li>
    </ul>
  </section>

  <section>
    <h2>4. Your rights (GDPR)</h2>
    <p>
      If you are in the EEA, you have the right to access, rectify, erase,
      restrict processing, and data portability regarding your personal data. To
      exercise these rights, contact us at
      <a href="mailto:info@moisesvalero.es">info@moisesvalero.es</a>.
    </p>
  </section>

  <section>
    <h2>5. Changes</h2>
    <p>
      We may update this policy. Changes will be posted on this URL with an
      updated "Last updated" date.
    </p>
  </section>
</div>

<style>
  .privacy-page {
    width: min(720px, 100%);
    margin: 40px auto;
    padding: 0 24px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    color: var(--text);
  }

  .back-link {
    display: inline-block;
    margin-bottom: 32px;
    color: var(--primary);
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.16s ease;
  }

  .back-link:hover {
    color: #ffffff;
  }

  h1 {
    margin: 0 0 4px;
    font-size: 22px;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -0.02em;
  }

  .updated {
    margin: 0 0 32px;
    font-size: 11px;
    color: var(--text-muted);
  }

  section {
    margin-bottom: 28px;
  }

  h2 {
    margin: 0 0 8px;
    font-size: 13px;
    font-weight: 800;
    color: var(--primary);
    letter-spacing: 0.02em;
  }

  p {
    margin: 0 0 8px;
    font-size: 12px;
    line-height: 1.6;
    color: var(--text-muted);
  }

  ul {
    margin: 0;
    padding: 0 0 0 16px;
  }

  li {
    margin-bottom: 6px;
    font-size: 12px;
    line-height: 1.55;
    color: var(--text-muted);
  }

  a {
    color: var(--primary);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.16s ease;
  }

  a:hover {
    color: #ffffff;
  }
</style>
