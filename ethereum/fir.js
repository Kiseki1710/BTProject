import web3 from './web3';
import Fir from './build/Fir.json';
export default (address) => {
  return new web3.eth.Contract(JSON.parse(Fir.interface), address);
}
