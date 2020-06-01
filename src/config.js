/*
config.js - Configuration for Bitcoinlove
*/

module.exports = {
    mainnet: {
        messagePrefix: 'Bitcoinlove mainnet',
        bip32: {
            public: '0488b21e',
            private: '0488ade4'
        },
        pubKeyHash: '05a2',
        scriptHash: '05a6',
        zcPaymentAddressHash: '169a',
        zcSpendingKeyHash: 'ab36',
        wif: '80'
    },
    testnet: {
        messagePrefix: 'Bitcoinlove testnet',
        bip32: {
            public: '043587cf',
            private: '04358394'
        },
        pubKeyHash: '1325',
        scriptHash: '1327',
        zcPaymentAddressHash: '16b6',
        zcSpendingKeyHash: 'ac08',
        wif: 'ef'
    }
};