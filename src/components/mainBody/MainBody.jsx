import React from 'react';
import { Welcome } from '../welcome/Welcome';

export function MainBody() {
    return (
        <div
            style={{
                // backgroundColor: '#E0E0E0',
                margin: 'auto',
                width: '80%'
            }}
        >
            <Welcome  />
        </div>
    )
}