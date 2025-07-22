import type { Config } from "@measured/puck";
import {
    TextBlock,
    ImageBlock,
    ContainerBlock,
    ListBlock, 
    SlideBlock
} from "siteEdit";

type Props = {
    HeadingBlock: { title: string };
    TextBlock: { text: string };
    ImageBlock: { url: string, alt: string, width?: string, height?: string };
    ContainerBlock: {};
    ListBlock: {
        items: Array<{ id: string; title: string; description?: string }>;
        listType?: 'ordered' | 'unordered';
        title?: string;
    };
};

export const config: Config<Props> = {
    components: {
        HeadingBlock: {
            fields: {
                title: { type: "text" },
            },
            defaultProps: {
                title: "Heading",
            },
            render: ({ title }) => (
                <div style={{ padding: 64 }}>
                    <h1>{title}</h1>
                </div>
            ),
        },
        TextBlock: {
            fields: {
                text: { type: 'text' },
            },
            defaultProps: {
                text: 'test',
            },
            render: ({ text }) => (<TextBlock text={text} />),
        },
        ImageBlock: {
            fields: {
                url: { type: 'text' },
                alt: { type: 'text' },
                width: { type: 'text' },
                height: { type: 'text' },
            },
            defaultProps: {
                url: '',
                alt: 'text',
                width: 'full',
                height: 'full',
            },
            render: ({ url, alt, width, height }) => (
                <ImageBlock
                    url={url}
                    alt={alt}
                    width={width}
                    height={height}
                />
            )
        },
        ContainerBlock: {
            render: () => <ContainerBlock />,
        },
        ListBlock: {
            fields: {
                title: { type: 'text' },
                listType: {
                    type: 'select',
                    options: [
                        { label: '无序列表', value: 'unordered' },
                        { label: '有序列表', value: 'ordered' }
                    ]
                },
                items: {
                    type: 'array',
                    arrayFields: {
                        id: { type: 'text' },
                        title: { type: 'text' },
                        description: { type: 'textarea' }
                    },
                    getItemSummary: (item) => item.title || '新项目'
                }
            },
            defaultProps: {
                title: '列表标题',
                listType: 'unordered' as const,
                items: [
                    { id: '1', title: '第一项', description: '这是第一项的描述' },
                    { id: '2', title: '第二项', description: '这是第二项的描述' }
                ]
            },
            render: ({ items, listType, title }) => (
                <ListBlock
                    items={items}
                    listType={listType}
                    title={title}
                />
            )
        },
        SlideBlock: {
            fields: {
                items: {
                    type: 'array',
                    arrayFields: {
                        id: { type: 'text' },
                        url: { type: 'text' },
                        imageUrl: { type: 'text' },
                        alt: { type: 'text' },
                    },
                }
            },
            defaultProps: {
                items: [
                    {
                        id: '1',
                        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jKRbG9OXqLhVlecld0xNrZJwHeiSwwc1Cg&s',
                        url: 'x.com',
                        alt: 'Tiger',
                    }
                ]
            },
            render: ({ items }) => (
                <SlideBlock items={items} />
            )

        }
    },

};

export default config;
