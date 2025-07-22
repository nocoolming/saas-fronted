import React from 'react';

export default function ImageBlock({url, alt, width, height}) {
    return (
        <img className={`py-3 w-${width} h-${height}`} src={url} alt={alt}></img>
    )
}