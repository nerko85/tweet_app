import React, { Fragment } from 'react';

const Tweet = (props) => {
    const { id, body, author} = props.tweet;
    const content = author==="Boot" ? (<div className="tweet boot"><h1>Tweet</h1>
    <p>{body}</p></div>) :
    (<div className="tweet">
        <h1>Tweet</h1>
        <p>{body}</p>
    </div>);
    return (
        <Fragment>{content}</Fragment>
    );
};

export default Tweet;