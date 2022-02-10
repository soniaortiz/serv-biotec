import React from 'react';
import { SocialMedia } from '../socialMedia/SocialMedia';

export function Footer() {
    return (
        <div
            style={{
                backgroundColor: '#E0E0E0',
                height: '300px',
                width: '100%'
            }}

        >
            LOGO
            <div>
                <SocialMedia />
            </div>
        </div>
    )
}