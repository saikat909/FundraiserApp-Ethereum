const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'train boring company flag conduct expose deal rug minor vapor wish chicken', // account mnemonic
  'https://rinkeby.infura.io/v3/666d798c5f5b4fedb503f34421839623'  // Test Ethereum Network (Rinkeby)
);

const web3 = new Web3(provider);

const deploy = async () => {        // helper to use async-await syntax for deploy
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0])  //Attempting to deploy from account  0x428b56a5E230ef605ed35c46859F60176dFf7532

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contact deployed to ', result.options.address)  //Contact deployed to  0xC9C4fFFb6396F939fF9f62245171cC70b36a8559
}
deploy()
