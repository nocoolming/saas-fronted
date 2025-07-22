import React from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

interface SlideItem {
    id: string;
    imageUrl: string;
    url: string;
    alt: string;
}

interface SlideItemProps {
    title?: string;
    items: SlideItem[];
}

const SlideBlock: React.FC<SlideItemProps> = ({
    items = [],
    title,
}) => {
    return (
        <div className="flex flex-row gap-3 px-3 py-2 bg-green-900">
            <Slide>
                {items.map(
                    item => (
                        <div key={item.id}>
                            <div style={{
                                ...divStyle,
                                'backgroundImage': `url(${item.imageUrl})`
                            }}>
                                    <span style={spanStyle}>{item.alt}</span>
                            </div>
                        </div>
                    )
                )}
            </Slide>

        </div>
    )
}

export default SlideBlock;