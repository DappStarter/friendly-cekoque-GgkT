require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain hole hidden knee front slight'; 
let testAccounts = [
"0xf916be3a906ecd6cabab6460105f56d68b24222749f41aef535f0a955e2b25d6",
"0x4ca96f42a651b492f20d7634db1908fdb1a0bee2f1e9bd32fd4888a8069b8dc6",
"0x8e656d0bee28fca11616eb2abdfd04652308d0896e2d837fc6368a8873c9698d",
"0xf6e27dac67c42a8e79c49ab09174cb70a29bc6ad6ec7996402e7f3524ca3376f",
"0xa69533c2e7ab42cd9f7f4dd676b745d447372b71940ccd4e937412a2d5faea47",
"0x8b1aef7640ef13f396dcce5a522e2f96fee4b6c5181035b9d2ee41d4960548a3",
"0x373c6a532d0ca1170014f1a1f53d481a4cace38ae9596d269c0188c058901364",
"0x8808cb90b0ef78b0eb1bf39c5a7d1530b1d5c395bb15d49a60c8e393255aa71f",
"0x5d377163aa9258d2afba8fa0d40fb8b6fe8fca76b2a69ad139157a5ad0ad483b",
"0xfe90f28be6f6bf5dfb8e9d1a2f05f34814a6a8aac6c174cf75334bb58b759b8f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


