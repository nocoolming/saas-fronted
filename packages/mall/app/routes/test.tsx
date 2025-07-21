
import { Button} from 'share-lib';


export default function Test() {
    return (
        <div>
            <h1>test</h1>

            <Button 
            type='button'
            text='asdf'
            onClick={() => {
                alert('hello')
            }}
            />
            {/* <Button
                type='button'
                text='test buton title'
                onClick={(e) => console.log(JSON.stringify(e))}
            /> */}

        </div>
    )
}