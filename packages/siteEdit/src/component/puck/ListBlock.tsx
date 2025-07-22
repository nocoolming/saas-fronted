import React from 'react';

interface ListItem {
    id: string;
    title: string;
    description?: string;
}

interface ListBlockProps {
    items: ListItem[];
    listType?: 'ordered' | 'unordered';
    title?: string;
}

const ListBlock: React.FC<ListBlockProps> = ({
    items = [],
    listType = 'unordered',
    title
}) => {
    const ListTag = listType === 'ordered' ? 'ol' : 'ul';

    return (
        <div style={{ padding: '20px',  }}>
            {title && <h3 style={{ marginBottom: '15px' }}>{title}</h3>}
            <ListTag style={{
                paddingLeft: '20px',
                lineHeight: '1.6'
            }}>
                {items.map((item) => (
                    <li key={item.id} style={{ marginBottom: '8px' }}>
                        <strong>{item.title}</strong>
                        {item.description && (
                            <p style={{
                                margin: '4px 0 0 0',
                                color: '#666',
                                fontSize: '0.9em'
                            }}>
                                {item.description}
                            </p>
                        )}
                    </li>
                ))}
            </ListTag>
            {items.length === 0 && (
                <p style={{ color: '#999', fontStyle: 'italic' }}>
                    暂无列表项
                </p>
            )}
        </div>
    );
};

export  {
    ListBlock,
    ListBlockProps,
    ListItem,
};