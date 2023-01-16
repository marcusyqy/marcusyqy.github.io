import { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const clickHandler = () => {
        setCounter((count: number) => { return count + 1; });
    };

    return (<>
        <br />
        <button
            className='border-white border-2 rounded w-1/6'
            onClick={clickHandler}>
            Click me!
        </button>
        <p>You clicked {counter} times! </p>
    </>);
}
