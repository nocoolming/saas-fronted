
import { Button } from 'mingUI';


export default function Test() {
    return (
        <div>
            <h1>test</h1>

            <Button
                type='button'
                text='asdf'
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    alert('hello' );
                    console.log(e);
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