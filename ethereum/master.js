import web3 from './web3';
import Master from './build/Master.json';
const instance = new web3.eth.Contract(JSON.parse(Master.interface), '0xfdb2cc235fa532efacdab99976501c861f1a64b3');
export default instance;
