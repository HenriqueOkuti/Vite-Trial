import { useCounter } from '../../hooks/useCounter';
import { CounterMenu } from './CounterStyles';

function Counter() {
  const { counter, setCounter } = useCounter();

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <CounterMenu number={counter} onClick={increment}>
      <h2>
        Counter:
        {counter}
      </h2>
    </CounterMenu>
  );
}

export default Counter;
