import React, { Fragment, useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( {title, value} )  => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 );
    }
    const handleDefault  = () => {
        setCounter (value);
    }
    const handleSustract = () => {
        // setCounter( counter - 1);
        setCounter( (c) => c - 1 );
    }
    return (
        <Fragment>
            <h1> {title} </h1>
            <h2> {counter} </h2>

            <button onClick={ handleSustract }> - 1 </button>
            <button onClick={ handleDefault }> Reset </button>
            <button onClick={ handleAdd }> + 1 </button>

        </Fragment>
    );  
    
}
CounterApp.defaultProps ={
    title: 'LkY Counter'
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
