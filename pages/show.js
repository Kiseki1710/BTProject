import React,{Component} from 'react';
import Layout from '../components/layout';
import Fir from '../ethereum/fir';
import web3 from '../ethereum/web3';

class ShowFir extends Component{
      static async getInitialProps(props){
      const fir = Fir(props.query.address);
      const summary = await fir.methods.getSummary().call();
      return {address: props.query.address,name: summary[0],details: summary[1]};
  }
  render(){
    return(
      <Layout>
      <h2>Name: {this.props.name}</h2>
      <h2>Details: {this.props.details}</h2>
      </Layout>
    );
  }
}
export default ShowFir;
