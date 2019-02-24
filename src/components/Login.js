import React, { Component } from "react";

export default class componentName extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }
  
  login = e => {
    e.preventDefault();
    const { name, password } = this.state;
    this.props.login(name,password);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="" onSubmit={this.login}>
          <label htmlFor="username">Your username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={e =>
              this.setState({ password: e.target.value })
            }
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
