import React,{Component} from 'react';
import {Input,Menu,Form,Message} from 'semantic-ui-react';
import {Router} from '../routes';
import master from '../ethereum/master';
import web3 from '../ethereum/web3';
class Header extends Component{
  state = {password: '',errorMessage: '',loading: false};
  onSubmit = async event =>{
    event.preventDefault();
        this.setState({errorMessage: '', loading: true});
    try{
      const adr = await master.methods.getFir(this.state.password).call();
      if(adr === '0x0000000000000000000000000000000000000000'){
        console.log(adr);
        this.setState({errorMessage: 'Not Found!'});
        return;
      }
      Router.pushRoute(`/show/${adr}`);
    }catch(err){
      this.setState({errorMessage: err.message});
    }
    this.setState({loading: false});
  };

  render(){
  return(
    <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
    <Menu>
    <Menu.Item style = {{marginLeft: '365px'}}>
    <Input className = 'icon' icon = 'search' placeholder = 'Search with password...'
      action = {{type: 'submit', content: 'Search'}}
      loading = {this.state.loading}
      value = {this.state.password}
      onChange = {event => this.setState({password: event.target.value})}
    />
     </Menu.Item>
    </Menu>
    <Message error header='Oops!' content={this.state.errorMessage} />
    </Form>
  );
}
}
export default Header;
