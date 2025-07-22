
import React from 'react';
import { DropZone } from "@measured/puck";

export default function ContainerBlock() {
    return (
        <div>
            <DropZone
                zone='my-content'
                className='flex flex-col md:flex-row  gap-4 bg-red-900'
                allow={[
                    'TextBlock',
                    'ImageBlock',
                    'HeadingBlock',

                ]}
            />
        </div>
    )
}