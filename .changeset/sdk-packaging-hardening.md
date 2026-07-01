---
"@sfpro/sdk": patch
---

Harden package publishing. Add a `files` allowlist so the tarball ships only `dist` (plus `package.json` and `LICENSE`) and no longer includes `src`, tests, configs, `.turbo`, or `.env.example`; add a `LICENSE` file (MIT); declare `engines.node` `>=18`; and add an `attw` + `publint` validation gate (`check:package`) to CI/release to lock the package's export and type-resolution contract. No API or runtime changes — the package remains ESM-only.
