import React, { Component } from "react";

class AddTweet extends Component {
  state = {
    id: "",
    body: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTweet(this.state);
    e.target.reset();
  };

  render() {
    const { count } = this.props;
    return (
      <div className="addTweet">
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="body">Enter your comment:</label>
          <input
            type="text"
            name="body"
            id="body"
            onChange={e => {
              this.setState({
                id: count,
                body: e.target.value
              });
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTweet;
