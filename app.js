// Config FCL
fcl.config({
  "accessNode.api": "https://rest-mainnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/authn",
  "app.detail.title": "GitHub Flow Test",
  "app.detail.icon": "https://yourusername.github.io/icon.png"
})

async function connectWallet() {
  try {
    const user = await fcl.authenticate()
    console.log("Connected:", user.addr)
  } catch (err) {
    console.log("User rejected", err)
  }
}

async function sendTx() {
  try {
    const txId = await fcl.mutate({
      cadence: `
        transaction {
          prepare(acct: AuthAccount) {
            log("Hello from GitHub DApp")
          }
        }
      `,
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50
    })

    console.log("Transaction ID:", txId)

  } catch (err) {
    console.log("Tx failed:", err)
  }
}
