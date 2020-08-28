import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// const FirstApp = ({ hello = "Hello by DEFAULT"}) => {
const FirstApp = ({ hello, subtitle}) => {

    // const hello = 'Hello World'

    return (
        <Fragment>
            <h1> { hello } </h1>
            <p> { subtitle }</p>
        </Fragment>
    );  
}

FirstApp.propTypes = {
    hello: PropTypes.string.isRequired
}

FirstApp.defaultProps ={
    subtitle: 'The hipster developer!'
}

export default FirstApp;
