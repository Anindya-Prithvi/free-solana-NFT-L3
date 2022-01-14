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

//Step2-- store public private
const publicKey = new PublicKey(newPair._keypair.publicKey).toString();
const secretKey = newPair._keypair.secretKey;



