import React from 'react';

const DemoOutput = (props) => {
    // render conditionally
    // if props.show is true render this is new otherwise render empty string; <p> is always rendered but the text changes
    return <p>{props.show ? 'This is new!' : ''}</p>
};

export default DemoOutput;