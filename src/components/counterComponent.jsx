import React, {useState} from 'react';

const CounterComponent = () => {
    const [count,   setCount] = useState(0);
    const [value, setValue] = useState('Ghanshyam');
    return (
        <div>
            <p> Tasks- {count} <Component></Component></p>
            <h6>Value is {value}</h6>
            <button onClick={() => setValue("Coder")}>
                Change Value
            </button>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
        </div>
    );
};

export default CounterComponent;