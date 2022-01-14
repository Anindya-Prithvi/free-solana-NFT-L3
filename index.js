const {
	Connection,
	PublicKey,
	clusterApiUrl,
	Keypair,
	LAMPORTS_PER_SOL,
	Transaction,
	Account,
} = require("@solana/web3.js");

//Step1--generating keypairs
const newPair = new Keypair();
console.log(newPair);


