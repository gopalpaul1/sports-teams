import React from 'react';

const NoMatch = () => {

    const styleNoMatch = {
        color: "white",
        textAlign:"center"
    }

    const notFound = {
        color: "crimson"
    }

    return (
        <div style={styleNoMatch}>
            <h1>Sorry! Page not found ...<b style={notFound}>404</b>...</h1>
        </div>
    );
};

export default NoMatch;