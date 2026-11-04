import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  // const [estado, setEstado] = useState(valorInicial)
  return (
    <>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      {/* condicion ? queHaceSiCumple : queHaceSiNoCumple */}
      {contador > -10 && contador < 10 ? (
        <h1>Contador: {contador}</h1>
      ) : (
        <h1>Fuera del rango</h1>
      )}
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </>
  );
}

export default App;
