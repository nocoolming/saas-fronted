
import React from 'react';
import {  Render } from '@measured/puck';
import config from './puck.config';

export function PuckPreview({
    data
}: {
    data: any;
}) {
    return (
        <Render 
            config={config as any} 
            data={data} 
        />
    );
}