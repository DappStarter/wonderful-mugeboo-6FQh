require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar pumpkin install depth flat tent'; 
let testAccounts = [
"0x81f7f2656dc70d6cf47e23df369f2f1b1219ea573231578f54f0497c90385fa5",
"0x9df6403dd642d3f94a3fa8e3b7e3f298f0494d6ae66a520f30a707a84435e1d7",
"0x05bb571d3dd9509f92736ff82dc323e007c19b519f3eac8c81aa9951b05dc237",
"0xf1088ec4e432b9fc02550ccc0c82bc1fca3016570bcb82a3925535958e59052e",
"0x1bf57c0225f2c70e7fd3788e237ecfde9ea37133ec8609ed38e6af242ba74f36",
"0x6c6df0494483aa2e6fbda864ae5c2f4ae2718e245de13ea401bd68a635902aa0",
"0x797288c1283c44bff49f19868adff645d5a772777a20aea8d06da121c646345e",
"0x7910f732cc94c7ce03b45e2d242d15b27b801dc21afdb57cd1460168af86ad34",
"0xddb537ec26fd6b7653cfa7e8fd4fab6a60518d8e51c1b9634fe1c590f62ada02",
"0x15048f7efc57a2faf29aefcf8fca6c4e8aefc7a2ade4ae25940db0d7d192274b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

