# Security Policy

## Supported versions

| Version | Supported |
| ------- | --------- |
| 0.1.x   | Yes       |

## Reporting a vulnerability

If you discover a security issue, please report it responsibly:

1. **Do not** open a public GitHub issue for security vulnerabilities
2. Email the maintainer via the contact on [npm](https://www.npmjs.com/package/agentchecker) or open a private security advisory on GitHub

Include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Scope

`agentchecker` is a local CLI that reads and optionally writes agent instruction files on disk. It does not:

- Make network requests
- Execute arbitrary code from scanned files
- Require API keys or authentication

Report issues related to unintended file writes, path traversal, or unsafe content handling.

## Response timeline

- Acknowledgment within 72 hours
- Status update within 7 days
- Fix or mitigation plan as soon as practical
