#!/usr/bin/env python3
"""Genera un GIF de terminal para el README."""

from __future__ import annotations

import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "demo.gif"
FONT_CANDIDATES = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
    "/usr/share/fonts/truetype/ubuntu/UbuntuMono-R.ttf",
]

FRAMES = [
    "$ cd my-project",
    "$ cd my-project\n$ npx agentcheck",
    "$ cd my-project\n$ npx agentcheck\n\nagent-check",
    "$ cd my-project\n$ npx agentcheck\n\nagent-check\n\nFound:\n  ✓ AGENTS.md\n  ✓ CLAUDE.md\n  ✓ .cursor/rules/global.mdc",
    """$ cd my-project
$ npx agentcheck

agent-check

Found:
  ✓ AGENTS.md
  ✓ CLAUDE.md
  ✓ .cursor/rules/global.mdc

⚠ 2 contradictions found

Package manager → pnpm (recommended)
Linter → oxlint (recommended)

Dry run complete. No files were changed.""",
]


def load_font(size: int = 15) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for candidate in FONT_CANDIDATES:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def render_frame(text: str) -> Image.Image:
    image = Image.new("RGB", (920, 520), "#11111b")
    draw = ImageDraw.Draw(image)
    font = load_font()
    draw.multiline_text((24, 24), text, fill="#cdd6f4", font=font, spacing=4)
    return image


def main() -> None:
    images = [render_frame(frame) for frame in FRAMES]
    durations = [700, 500, 400, 900, 2800]
    images[0].save(
        OUT,
        save_all=True,
        append_images=images[1:],
        duration=durations,
        loop=0,
        optimize=True,
    )
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
