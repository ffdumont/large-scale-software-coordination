"""Build the bilingual static site consumed by GitHub Pages."""

from __future__ import annotations

import argparse
import html
import os
import shutil
from pathlib import Path

import markdown

from paper_common import ROOT, first_heading, load_manifest, output_slug, read_text, strip_hash

BASE_PATH = os.environ.get("BASE_PATH", "/large-scale-software-coordination").rstrip("/")


def site_url(path: str) -> str:
    return f"{BASE_PATH}{path}"


def url_for(lang: str, relative_path: str) -> str:
    return site_url(f"/{lang}/{output_slug(relative_path)}/")


def page_shell(*, lang: str, title: str, body: str, nav: str, counterpart: str) -> str:
    labels = {
        "fr": {"skip": "Aller au contenu", "switch": "Read in English", "home": "Accueil"},
        "en": {"skip": "Skip to content", "switch": "Lire en français", "home": "Home"},
    }[lang]
    return f"""<!doctype html>
<html lang="{lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <title>{html.escape(title)}</title>
  <link rel="stylesheet" href="{site_url('/assets/style.css')}">
</head>
<body>
  <a class="skip-link" href="#content">{labels['skip']}</a>
  <header class="site-header">
    <a class="brand" href="{site_url(f'/{lang}/')}">LSC</a>
    <div class="header-actions">
      <a href="{site_url(f'/{lang}/')}">{labels['home']}</a>
      <a class="language-switch" href="{counterpart}" hreflang="{'en' if lang == 'fr' else 'fr'}">{labels['switch']}</a>
    </div>
  </header>
  <div class="page-grid">
    <nav class="chapter-nav" aria-label="Chapters"><ol>{nav}</ol></nav>
    <main id="content" class="paper">{body}</main>
  </div>
  <footer>Bilingual edition · <a href="https://github.com/ffdumont/large-scale-software-coordination">GitHub</a></footer>
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
    document.querySelectorAll('pre code.language-mermaid').forEach((code) => {{
      const diagram = document.createElement('div');
      diagram.className = 'mermaid'; diagram.textContent = code.textContent;
      code.parentElement.replaceWith(diagram);
    }});
    mermaid.initialize({{ startOnLoad: true, theme: matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'neutral' }});
  </script>
</body>
</html>
"""


def render_markdown(source: str) -> str:
    return markdown.markdown(
        strip_hash(source),
        extensions=["extra", "fenced_code", "tables", "toc", "sane_lists"],
        extension_configs={"toc": {"permalink": True}},
    )


def build(output: Path) -> None:
    manifest = load_manifest()
    if output.exists():
        shutil.rmtree(output)
    (output / "assets").mkdir(parents=True)
    shutil.copy2(ROOT / "site" / "style.css", output / "assets" / "style.css")
    (output / ".nojekyll").touch()

    titles: dict[tuple[str, str], str] = {}
    for chapter in manifest["chapters"]:
        for lang in ("fr", "en"):
            titles[(lang, chapter["id"])] = first_heading(read_text(chapter[lang]))

    for lang in ("fr", "en"):
        other = "en" if lang == "fr" else "fr"
        nav_items = []
        for chapter in manifest["chapters"]:
            nav_items.append(
                f'<li><a href="{url_for(lang, chapter[lang])}">{html.escape(titles[(lang, chapter["id"])])}</a></li>'
            )
        nav = "".join(nav_items)

        for chapter in manifest["chapters"]:
            page_dir = output / lang / output_slug(chapter[lang])
            page_dir.mkdir(parents=True, exist_ok=True)
            title = titles[(lang, chapter["id"])]
            rendered = render_markdown(read_text(chapter[lang]))
            counterpart = url_for(other, chapter[other])
            (page_dir / "index.html").write_text(
                page_shell(lang=lang, title=title, body=rendered, nav=nav, counterpart=counterpart),
                encoding="utf-8",
                newline="\n",
            )

        intro = f"""
        <section class="hero">
          <p class="eyebrow">Large-Scale Software Coordination</p>
          <h1>{html.escape(manifest['title'][lang])}</h1>
          <p>{html.escape(manifest['subtitle'][lang])}</p>
          <a class="primary" href="{url_for(lang, manifest['chapters'][0][lang])}">{'Commencer la lecture' if lang == 'fr' else 'Start reading'}</a>
        </section>"""
        lang_dir = output / lang
        lang_dir.mkdir(parents=True, exist_ok=True)
        (lang_dir / "index.html").write_text(
            page_shell(lang=lang, title=manifest["title"][lang], body=intro, nav=nav, counterpart=site_url(f"/{other}/")),
            encoding="utf-8",
            newline="\n",
        )

    landing = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(manifest['title']['en'])}</title><link rel="stylesheet" href="{site_url('/assets/style.css')}"></head><body class="landing"><main><p class="eyebrow">Large-Scale Software Coordination</p><h1>{html.escape(manifest['title']['en'])}</h1><p>{html.escape(manifest['subtitle']['en'])}</p><div class="language-cards"><a href="{site_url('/en/')}"><strong>English</strong><span>Read the paper</span></a><a href="{site_url('/fr/')}"><strong>Français</strong><span>Lire le papier</span></a></div></main></body></html>"""
    (output / "index.html").write_text(landing, encoding="utf-8", newline="\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=ROOT / "_site")
    build(parser.parse_args().output.resolve())
