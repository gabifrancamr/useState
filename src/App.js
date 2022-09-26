import { useState } from "react";

function App() {
  //count (eu criei esse nome e é o primeiro valor da array), o segundo elemento é SetCount (de novo: criei o nome count, poderia ser outro) é o próximo valor e ele altera esse estado
  const [count, setCount] = useState(0); //useState retorna um array com 2 elementos E PRECISA ESTAR NO INICIO DO COMPONENTE
  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Contador: {count}</h1>

      <button className="minus" onClick={handleMinusClick}>
        -
      </button>
      <button className="plus" onClick={handlePlusClick}>
        +
      </button>
    </>
  );
}

export default App;
