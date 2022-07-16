import React from 'react';

export function MainBody({displayComponent}) {
    return (
        <div
            style={{
                // backgroundColor: '#E0E0E0',
                margin: 'auto',
                width: '80%',
                height: '100vh'
            }}
        >
            {displayComponent}
        </div>
    )
}