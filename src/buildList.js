const { version } = require("../package.json");
const megaeth = require("./tokens/megaeth.json");
const megaethTestnet = require("./tokens/megaeth-testnet.json");

module.exports = async function buildList() {
  const parsed = version.split(".");
  
  // EVM chains only for bridgeUtils.chainify (which validates Ethereum addresses)
  const evmTokens = [
    ...megaeth,
    ...megaethTestnet,
  ]
    // sort them by symbol for easy readability
    .sort((t1, t2) => {
      if (t1.chainId === t2.chainId) {
        return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
      }
      return t1.chainId < t2.chainId ? -1 : 1;
    });
  
  const l1List = {
    name: "Kumbaya Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://raw.githubusercontent.com/Kumbaya-xyz/default-token-list/refs/heads/main/src/icon/kumbaya-256.png",
    keywords: ["kumbaya", "default"],
    tokens: evmTokens,
  };
  
  // Re-sort all tokens by chainId first, then symbol
  l1List.tokens.sort((t1, t2) => {
    if (t1.chainId === t2.chainId) {
      return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
    }
    return t1.chainId < t2.chainId ? -1 : 1;
  });
  
  return l1List;
};
