import React from 'react';

export function MainBody({displayComponent}) {
    return (
        <div
            style={{
                margin: 'auto',
                width: '80%',
                height: '100vh'
            }}
        >
            {displayComponent}
        </div>
    )
}