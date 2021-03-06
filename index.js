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

//Step3 --Get wallet balance
const getWalletBalance = async () => {
	try {
		const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
		const myWallet = await Keypair.fromSecretKey(secretKey);
		const walletBalance = await connection.getBalance(new PublicKey(myWallet.publicKey));
		console.log(`=> For wallet address ${publicKey}`);
		console.log(`  Wallet balance: ${parseInt(walletBalance) / LAMPORTS_PER_SOL} SOL`);
	} catch (err) {
		console.log(err);
	}
};

//Step4 --Getting SOL
const airDropSol = async () => {
	try {
		const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
		const walletKeyPair = await Keypair.fromSecretKey(secretKey);
		console.log('Airdropping 2 sol');
		const fromAirDropSignature = await connection.requestAirdrop(
			new PublicKey(walletKeyPair.publicKey),
			2 * LAMPORTS_PER_SOL
		);
		await connection.confirmTransaction(fromAirDropSignature);
	} catch (err) {
		console.log(err);
	}
};

//Step5 run everything
const driverFunction = async () => {
	await getWalletBalance();
	await airDropSol();
	await getWalletBalance();
}
driverFunction();

