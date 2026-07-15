"""Fail when a translation is missing, stale, or structurally incomplete."""

from __future__ import annotations

import re
import sys

from paper_common import HASH_RE, ROOT, load_manifest, read_text, source_hash, strip_hash


def heading_shape(text: str) -> list[int]:
    return [len(m.group(1)) for m in re.finditer(r"^(#{1,6})\s+", strip_hash(text), re.MULTILINE)]


def count_fences(text: str, language: str) -> int:
    return len(re.findall(rf"^```{re.escape(language)}\s*$", text, re.MULTILINE | re.IGNORECASE))


def table_rows(text: str) -> int:
    return len(re.findall(r"^\s*\|", text, re.MULTILINE))


def main() -> int:
    problems: list[str] = []
    manifest = load_manifest()

    for chapter in manifest["chapters"]:
        fr_path, en_path = chapter["fr"], chapter["en"]
        if not (ROOT / fr_path).is_file():
            problems.append(f"missing French source: {fr_path}")
            continue
        if not (ROOT / en_path).is_file():
            problems.append(f"missing English translation: {en_path}")
            continue

        fr, en = read_text(fr_path), read_text(en_path)
        match = HASH_RE.match(en)
        expected = source_hash(fr)
        if not match:
            problems.append(f"missing source hash: {en_path}")
        elif match.group(1) != expected:
            problems.append(f"stale translation: {en_path} (source {fr_path} changed)")

        if heading_shape(fr) != heading_shape(en):
            problems.append(f"heading structure differs: {fr_path} / {en_path}")
        if count_fences(fr, "mermaid") != count_fences(en, "mermaid"):
            problems.append(f"Mermaid diagram count differs: {fr_path} / {en_path}")
        if fr.count("|") != en.count("|"):
            problems.append(f"table structure differs: {fr_path} / {en_path}")
        if table_rows(fr) != table_rows(en):
            problems.append(f"table row count differs: {fr_path} / {en_path}")

    if problems:
        print("Bilingual paper consistency check failed:", file=sys.stderr)
        for problem in problems:
            print(f"- {problem}", file=sys.stderr)
        print("\nUpdate both languages, then refresh the source hash.", file=sys.stderr)
        return 1

    print(f"Bilingual paper is synchronized ({len(manifest['chapters'])} document pairs).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
