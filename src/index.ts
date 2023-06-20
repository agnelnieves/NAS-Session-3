import { initializeKeypair } from "./initializeKeypair"
import * as web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

// ------------------ CONFIG --------------------------------------

const IS_DEVNET = true; // Set to false if you use `amman start`
const RPC_URL = IS_DEVNET ? web3.clusterApiUrl('devnet') : 'http://127.0.0.1:8899';


// ------------------ HELPERS --------------------------------------

type LINK_TYPE = 'tx' | 'address';
function printLink(type: LINK_TYPE, data: string | web3.PublicKey){
    return `https://amman-explorer.metaplex.com/#/${type}/${data.toString()}${IS_DEVNET ? '?cluster=devnet' : ''}`;
}

async function keypress(){
    console.log('\nPress a key to continue...')
    process.stdin.setRawMode(true)
    return new Promise<void>(resolve => process.stdin.once('data', () => {
      process.stdin.setRawMode(false)
      resolve()
    }))
  }

// ------------------ SOLANA FUNCTIONS --------------------------------------


// ------------------ MAIN --------------------------------------

async function main() {
    // Talk about RPC Url and Commitment
    const connection = new web3.Connection(RPC_URL);
    const user = await initializeKeypair(connection);


    // 1. Create New Mint Account

    // 1a. Fetch the Mint Info

    // 2. Create Token Account ( For User )

    // 3. Mint Tokens

    // 4. Create Delegate

    // 4. Create Delegate Token Account

    // 5. Delegate Transfers Tokens to Self

    // 6. Revoke Delegation

    // 7. 🔥🔥🔥 BURN 🔥🔥🔥

}

main()
    .then(() => {
        console.log("Finished successfully")
        process.exit(0)
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
