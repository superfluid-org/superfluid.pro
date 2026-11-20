# Superfluid Pro

Monorepo for the Superfluid Pro tools (pnpm workspaces and Turbo).

| Directory | What it is | Live |
| --- | --- | --- |
| `website` | Landing page | https://superfluid.pro |
| `sdk/package` | `@sfpro/sdk`, published to npm | |
| `sdk/docs` | SDK documentation | https://sdk.superfluid.pro |
| `mcp/server` | MCP server | https://mcp.superfluid.pro |
| `mcp/docs` | MCP documentation | |
| `cms` | Payload CMS for Superfluid data, including the Points API | https://cms.superfluid.pro |
| `data` | Data aggregation and processing | |

## Run locally

```sh
pnpm install
pnpm dev
```

`pnpm dev` runs the website, the SDK docs and the MCP docs. Commands for each package are in [AGENTS.md](AGENTS.md).

## Releases

`@sfpro/sdk` is released with changesets by the [release workflow](.github/workflows/sdk-release.yml) on pushes to `main`.
