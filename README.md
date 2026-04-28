![Kumbaya Logo](https://github.com/Kumbaya-xyz/brand-assets/blob/main/logos/red/full-200.png?raw=true)

# @kumbaya_xyz/default-token-list

This NPM module and GitHub repo contains the default token list used in the Kumbaya interface.

## Adding a token

The preferred way to request a token listing is to **open a pull request** against this repository. The Kumbaya team will review and verify the submission before merging.

If you can't open a PR, you can [file an issue](https://github.com/Kumbaya-xyz/default-token-list/issues/new?assignees=&labels=token+request&template=token-request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D) instead — but issues take longer to triage and the same validation criteria apply.

### What to include in your PR

**1. Logo image** — add a PNG to `src/assets/<chainId>/`

- Filename must be the **checksummed contract address** (e.g. `0x021ee124cF23D302A7f725AE7a01B77A8ce9782B.png`)
- Resolution: **500x500 pixels**
- Format: **PNG** with transparent background preferred
- Reasonable file size (ideally under 100KB)

**2. Token entry** — add an object to the relevant chain file in `src/tokens/`

- MegaETH Mainnet (chainId `4326`): `src/tokens/megaeth.json`
- MegaETH Testnet (chainId `6343`): `src/tokens/megaeth-testnet.json`

Use this template:

```json
{
  "chainId": 4326,
  "address": "0x...",
  "name": "",
  "symbol": "",
  "decimals": 18,
  "logoURI": "https://raw.githubusercontent.com/Kumbaya-xyz/default-token-list/refs/heads/main/src/assets/4326/0x....png"
}
```

The `address` and the filename in `logoURI` must both use the **checksummed** form of the contract address.

### Validation criteria

The full review criteria are not published, but at a minimum a token is expected to:

- Be deployed and verified on the target chain (source code visible on the block explorer)
- Have a unique, non-misleading `name` and `symbol` (no impersonation of existing tokens or projects)
- Have non-trivial on-chain liquidity and a reasonable trading history
- Use a standard ERC-20 implementation without unusual transfer hooks, blacklists, mint authorities, or other behaviour that could harm users (any non-standard behaviour must be clearly disclosed in the PR description)
- Have a public-facing presence: working website, active social channels, or other verifiable project information
- Provide a logo that the project owner has the rights to distribute

PRs that do not meet these expectations may be closed without merging. Submitting a PR does not guarantee inclusion, and inclusion in this list is not an endorsement — users should always do their own research.

