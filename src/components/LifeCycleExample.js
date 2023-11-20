import { useEffect } from 'react';
import { useState } from 'react';



const LifeCycleExample = () => {
    const [count, setCount] = useState(0);
    const [buttonClickCount, setButtonClickCount] = useState(0);

    useEffect(() => {
        console.log('Component Did Mount');
        const timerId = setInterval(() => { 
            setCount((previousValue) => {
                console.log(previousValue);
                return previousValue + 1;
            });
        }, 5000);

        return () => {
          console.log('Component Will UnMount');
          clearInterval(timerId);
        }
      }, []);

      useEffect(() => {
        console.log('Component Did Update');
      });

      useEffect(() => {
        console.log('Component Button Did Update');
      }, [buttonClickCount]);


    return (
        <div>
            <h1>React Life Cycle</h1>
            <h2>Count: {count}</h2>
            <div>
                <button onClick={() => setButtonClickCount(buttonClickCount + 1)}>Add</button>
                {buttonClickCount}
            </div>
        </div>
    )
}

export default LifeCycleExample;

