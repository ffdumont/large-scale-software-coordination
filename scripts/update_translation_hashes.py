"""Refresh translation hashes after a human has reviewed synchronized edits."""

from __future__ import annotations

import argparse

from paper_common import ROOT, load_manifest, read_text, with_hash


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("ids", nargs="*", help="chapter ids to refresh; defaults to all")
    args = parser.parse_args()
    selected = set(args.ids)

    for chapter in load_manifest()["chapters"]:
        if selected and chapter["id"] not in selected:
            continue
        fr = read_text(chapter["fr"])
        en = read_text(chapter["en"])
        (ROOT / chapter["en"]).write_text(with_hash(fr, en), encoding="utf-8", newline="\n")
        print(f"refreshed {chapter['en']}")


if __name__ == "__main__":
    main()
