import React from 'react';

const DemoOutput = (props) => {
    // render conditionally
    // if props.show is true render this is new otherwise render empty string; <p> is always rendered but the text changes
    return <p>{props.show ? 'This is new!' : ''}</p>
};

// memo tells react that whenever the app component changes it should go  to above component and compare new prop val to old prop val
// react needs to store old prop val and compare to new prop val
export default React.memo(DemoOutput);



