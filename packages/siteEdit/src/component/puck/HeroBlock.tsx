
interface HeroProps {
    bgImageUrl: string;
    url: string;

}

const HeroBlock: React.FC<HeroProps> = ({
    bgImageUrl = '',
    url = ''
}) => {
    const copy = 'https://reed-mariculture.myshopify.com/cdn/shop/files/WAVES_BLUR_iStock-1253853268.jpg?v=1617930695';



    return (
        <div style={{
            backgroundImage: `url(${bgImageUrl})`
        }}>
            <a href={url}></a>
        </div>
    )
}

export { HeroBlock, HeroBlock }