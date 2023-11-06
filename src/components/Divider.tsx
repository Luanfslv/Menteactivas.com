import React from 'react';

const Divider = () => {
    return (
        <div style={{
            width: '2%',  // This makes the line short, adjust as needed
            height: '1px',
            backgroundColor: 'gray',
            margin: '20px auto'  // Centers the line and gives space above and below
        } }>
        </div>
    );
}

export default Divider;
