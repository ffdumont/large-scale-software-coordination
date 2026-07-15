# Large-Scale Software Coordination

Strategic paper on designing a simplified software-development organization for several hundred developers, using first-principles reasoning rather than selecting a branded scaling framework.

The paper is published in two synchronized editions:

- [English edition](https://ffdumont.github.io/large-scale-software-coordination/en/)
- [Édition française](https://ffdumont.github.io/large-scale-software-coordination/fr/)

## Editorial architecture

French is the canonical editorial source. The original chapter files remain at the repository root and in `annexes/`; the corresponding English files use the same names under `en/`. `paper.json` is the single manifest that defines document pairs and reading order.

Each English file starts with the SHA-256 fingerprint of its French source. CI checks this fingerprint as well as heading, table, and Mermaid-diagram structure. A French edit therefore makes the translation check fail until the corresponding English document has been reviewed and marked synchronized.

```text
.
├── 00-executive-summary.md       # canonical French source
├── 01-fundamental-problems.md
├── …
├── annexes/
├── en/                           # English mirror
│   ├── 00-executive-summary.md
│   ├── …
│   └── annexes/
├── paper.json                    # pairs and reading order
├── scripts/
│   ├── check_translations.py
│   ├── update_translation_hashes.py
│   └── build_site.py
└── .github/workflows/pages.yml
```

## Synchronizing a change

1. Edit the French chapter.
2. Apply the same semantic change to its English counterpart.
3. After reviewing both versions, refresh that chapter’s source fingerprint:

   ```shell
   python scripts/update_translation_hashes.py fundamental-problems
   ```

4. Verify the complete corpus:

   ```shell
   python scripts/check_translations.py
   ```

The accepted chapter identifiers are listed in `paper.json`. Passing no identifier refreshes every fingerprint and should be reserved for a deliberate full-corpus review.

## Site and GitHub Pages

The Pages workflow validates both editions, builds a static site from the Markdown sources, and deploys only from `main`. Pull requests run the same build without deploying. This means there is no third, generated content tree to keep synchronized in Git.

To build locally:

```shell
python -m pip install -r requirements-site.txt
python scripts/check_translations.py
python scripts/build_site.py
```

The generated `_site/` directory is ignored by Git.

## Research question

> What coordination mechanisms are objectively necessary for a software organization of several hundred developers, and what is the simplest viable organizational architecture that preserves alignment, autonomy, quality, visibility, and adaptability?
