import React, { Component } from 'react';
import './App.css';
// import routes from './router/Routes';
import { Route , Switch, withRouter} from 'react-router-dom';

// Components
import Nav from './components/Nav'
import Login from './components/Login'
import Register from './components/Register'
import Tweets from './components/Tweets'
import auth from './components/Auth'
import { Protected } from './components/Protected'

class App extends Component {
  state = {
    loading:false,
    user: {
      id: 1,
      name: "Nermin",
      password: "test123"
    }
  }

  login = (name, password)=> {
    const {user} = this.state;
    if(this.state.user.name === name && this.state.user.password === password){
      auth.login(()=>{
        this.props.history.push(`/${user.name}`)
      });
    }else{
      return alert("You have entered invalid credentials");
    }
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Login exact path="/" login={this.login}/>
          <Route exact path="/register" component={Register}/>
          <Protected exact path="/:user" component={Tweets} user={this.state.user}/>
          <Route path="/404" component={()=> "404 Page does not exist"}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
