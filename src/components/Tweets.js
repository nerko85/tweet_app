import React, { Component } from "react";
import Auth from "./Auth";
import Tweet from "./Tweet";
import AddTweet from "./AddTweet";

class Tweets extends Component {
  state = {
    tweets: [
      {
        id: 1,
        author_id: "2",
        author: "Nermin",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      },
      {
        id: 2,
        author_id: "2",
        author: "Nermin",
        body:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      },
      {
        id: 3,
        author_id: "2",
        author: "Nermin",
        body:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        id: 4,
        author_id: "2",
        author: "Nermin",
        body:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    test: [
      {
        key: "Saban Saulic",
        value: "Ruza"
      },
      {
        key: "Sinan Sakic",
        value: "Lijepa"
      },
      {
        key: "Haris Dzinovic",
        value: "Kafana"
      },
      {
        key: "Zajko Seletovic",
        value: "Tanak"
      }
    ]
  };

  //   componentWillMount() {
  //     fetch("http://localhost:4000/tweets")
  //       .then(data => data.json())
  //       .then(res => this.state.tweets.push(res));
  //   }

  addTweet = tweet => {
    this.setState({ tweets: [...this.state.tweets, tweet] });
    setTimeout(() => {
      this.filterTweet(tweet);
    }, 1000);
  };

  filterTweet = tweet => {
    const { test } = this.state;
    // const proba = new RegExp(tweet.body, "gi");
    // const dd = tweet.body.split(" ");
    // const reTweet = test.filter(item => {
    //   return item.value.match(proba);
    // });

    let reTweet = test.filter(item => {
      const regex = new RegExp(item.value, "ig");
      return tweet.body.match(regex);
    });

    if (reTweet.length) {
      const newTweet = {
        id: this.state.tweets.length,
        author_id: "4",
        author: "Boot",
        body: `You should try listening ${reTweet[0].key}`
      };
      this.setState({ tweets: [...this.state.tweets, newTweet] });
    }
  };

  render() {
    console.log(this.props);
    const { tweets } = this.state;
    const showTweets = tweets.length ? (
      tweets.map(tweet => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })
    ) : (
      <div>There are no tweets to display</div>
    );
    return (
      <div className="tweetsBody">
        <h1 className="title">Welcome to our app</h1>
        {showTweets}
        {/* <button
          onClick={() => {
            Auth.logout(() => {
              this.props.history.push("/");
            });
          }}
        >
          Logout
        </button> */}
        <AddTweet addTweet={this.addTweet} count={this.state.tweets.length} />
      </div>
    );
  }
}

export default Tweets;
