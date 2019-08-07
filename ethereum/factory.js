import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC9C4fFFb6396F939fF9f62245171cC70b36a8559'
);

export default instance;
