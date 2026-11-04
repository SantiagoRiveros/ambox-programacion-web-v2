import { useEffect, useState } from "react";

export default function EjemploMontaje() {
  const [estado, setEstado] = useState("No Cargo");

  useEffect(() => {
    setEstado("Cargo");
  }, []);

  return (
    <div>
      <h2>{estado}</h2>
    </div>
  );
}
