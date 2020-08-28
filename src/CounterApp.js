import React, { Fragment, useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( {title, value} )  => {

    const [ counter, setCounter ] = useState( 0 );

    const handleAdd = () => {
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 );
    }
    return (
        <Fragment>
            <h1> {title} </h1>
            <h2> {counter} </h2>

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
