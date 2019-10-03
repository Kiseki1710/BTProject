import master from '../ethereum/master';
import React, {Component } from 'react';
import Layout from '../components/layout';
import {Form,Header,Message} from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class HomePage extends Component{
  static async getInitialProps(){
    return{};
  }
  state = {name: '', password: '', details: '', loading: false, errorMessage: '',successMessage: ''};
  onSubmit = async event=>{
    event.preventDefault();
    this.setState({loading: true, errorMessage: '',successMessage: ''});
    try{
      const accounts = await web3.eth.getAccounts();
      await master.methods.createFir(this.state.name, this.state.details, this.state.password)
      .send({
        from: accounts[0]
      });
      this.setState({successMessage: 'You have deployed a new Fir Contract!'})
    } catch(err){
      this.setState({errorMessage: err.message});
    }
    this.setState({loading: false});
  };
  render(){
    return(
      <Layout>
      <div>
      <Header as='h1' textAlign = 'center' style = {{marginTop: '20px'}}>Create Fir</Header>
      <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage} success = {!!this.state.successMessage}>
      <Form.Input label = 'Full name'
      value = {this.state.name}
      onChange = {event => this.setState({name: event.target.value})}
       />
      <Form.Input label = 'Password' type = 'password'
      value = {this.state.password}
      onChange = {event=> this.setState({password: event.target.value})}
       />
      <Form.TextArea label = 'Details'
      value = {this.state.details}
      onChange = {event=> this.setState({details: event.target.value})}
       />
       <Message error header='Oops!' content={this.state.errorMessage} />
       <Message success header='Success!' content={this.state.successMessage} />
      <Form.Button primary loading= {this.state.loading}>Submit</Form.Button>
      </Form>
      </div>
      </Layout>
    );
  }
}
export default HomePage;
