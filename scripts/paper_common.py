"""Shared helpers for the bilingual paper toolchain."""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "paper.json"
HASH_RE = re.compile(r"^<!-- source-hash: sha256:([0-9a-f]{64}) -->\s*", re.MULTILINE)


def load_manifest() -> dict:
    return json.loads(MANIFEST.read_text(encoding="utf-8"))


def read_text(relative_path: str) -> str:
    return (ROOT / relative_path).read_text(encoding="utf-8").replace("\r\n", "\n")


def source_hash(text: str) -> str:
    normalized = text.replace("\r\n", "\n").rstrip() + "\n"
    return hashlib.sha256(normalized.encode("utf-8")).hexdigest()


def strip_hash(text: str) -> str:
    return HASH_RE.sub("", text, count=1)


def with_hash(source: str, translated: str) -> str:
    body = strip_hash(translated).lstrip("\n")
    return f"<!-- source-hash: sha256:{source_hash(source)} -->\n\n{body.rstrip()}\n"


def first_heading(text: str) -> str:
    match = re.search(r"^#\s+(.+?)\s*$", strip_hash(text), re.MULTILINE)
    if not match:
        raise ValueError("document has no level-one heading")
    return match.group(1)


def output_slug(relative_path: str) -> str:
    return Path(relative_path).stem
